// Generates one real static HTML file per industry, plus the hub.
// Pages are pre-rendered: if JavaScript fails, the content is still there.
const fs = require("fs");
const path = require("path");

const OUT = "docs";
const shell = fs.readFileSync("index.html", "utf8");

// The render functions live inside index.html so the source stays one file.
const m = shell.match(/<script src="data\.js"><\/script>\s*<script>([\s\S]*?)<\/script>/);
if (!m) throw new Error("could not find the app script in index.html");

// Run the page's own code in a sandbox with a DOM stub, so the browser-only
// lines are harmless and the render functions come back to us unchanged.
const vm = require("vm");
const sandbox = {
  console,
  document: {
    getElementById: () => ({ innerHTML: "", outerHTML: "" }),
    addEventListener: () => {},
    querySelector: () => null,
    body: { style: {} },
  },
};
vm.createContext(sandbox);
const { INDUSTRIES, SLUG, industry, hub, esc } = vm.runInContext(
  fs.readFileSync("data.js", "utf8") + "\n" + m[1] +
    "\n;({ INDUSTRIES, SLUG, industry, hub, esc })",
  sandbox,
  { filename: "corgi-pages" }
);

const DESC = {
  hub: "Commercial insurance for small businesses across seven industries, written and quoted by Corgi.",
};
INDUSTRIES.forEach(i => (DESC[i.id] = i.lede));

function render(id) {
  const i = INDUSTRIES.find(x => x.id === id);
  const title = i ? `${i.h1} | Corgi` : "Small Business Insurance | Corgi";
  const body = i ? industry(i) : hub();

  let out = shell;
  // These pages are shared by link only and must never be indexed.
  out = out.replace(
    "<title>Corgi Small Business Pages</title>",
    `<title>${title}</title>\n<meta name="robots" content="noindex,nofollow,noarchive,nosnippet">\n` +
      `<meta name="description" content="${esc(DESC[id])}">`
  );
  out = out.replace('<main id="main"></main>', `<main id="main">${body}</main>`);
  const call = `<script>initPage(${i ? JSON.stringify(id) : "null"})</script>`;
  const before = out;
  out = out.replace(/<\/body>/, call + "\n</body>");
  if (out === before) throw new Error("no </body> to inject into: " + id);
  if (!out.includes(call)) throw new Error("initPage call was not injected for " + id);
  return out;
}

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });
fs.copyFileSync("data.js", path.join(OUT, "data.js"));
fs.writeFileSync(path.join(OUT, "robots.txt"), "User-agent: *\nDisallow: /\n");
fs.writeFileSync(path.join(OUT, ".nojekyll"), "");

const pages = [["hub", "index.html"], ...INDUSTRIES.map(i => [i.id, SLUG[i.id]])];
for (const [id, file] of pages) {
  fs.writeFileSync(path.join(OUT, file), render(id));
  console.log("  " + file.padEnd(38) + (fs.statSync(path.join(OUT, file)).size / 1024).toFixed(1) + " KB");
}
console.log(pages.length + " pages written to " + OUT + "/");
