// Content is lifted from the 15 Beagle sell sheets. Nothing is invented.
// Fields marked NEEDS_INPUT have no source in the sheets and must be filled by the product team.
const NEEDS = "NEEDS_INPUT";

const INDUSTRIES = [
{ id:"restaurant", nav:"Restaurants & Bars", emoji:"\u{1F37D}\u{FE0F}",
  h1:"Restaurant Insurance",
  lede:"Coverage for eligible restaurants, bars and food service operators. Built around the dining room, the kitchen, the bar and the business behind them.",
  quote:"Protect everything behind tonight\u2019s service so you can keep serving tomorrow. A restaurant carries property, customer, alcohol and digital exposure at the same time, and each one is a different policy.",
  coversTitle:"What the Policy Covers",
  covers:[
    ["Small Business (BOP)","Combines common small-business property and liability protections into a single insurance package."],
    ["Commercial General Liability","Protects your restaurant against certain claims if a customer is injured or their property is damaged because of your operations. Typical limits $1M per occurrence and $2M aggregate."],
    ["Commercial Property","Protects your restaurant\u2019s building, equipment, inventory, furniture, and other covered property from covered losses."],
    ["Liquor Liability","Protects restaurants that sell or serve alcohol against certain claims arising from intoxicated customers who cause injury or property damage."],
    ["Cyber Liability","Helps protect your restaurant against certain costs and liabilities resulting from cyberattacks, data breaches, and compromised information."],
    ["Umbrella Liability","Provides additional liability limits above qualifying underlying policies when a covered claim exceeds those limits."]
  ],
  forTitle:"Who This Coverage Is For",
  forIntro:"Eligibility depends on your operations, location, and loss history. Listing a business type here is not a guarantee of acceptance.",
  forList:["Restaurants with table service","Bars and taverns serving alcohol","Cafes and quick service operators","Food service businesses with a licensed on-premises bar"],
  conditions:[
    "Typical general liability limits are subject to underwriting; higher limits may be available.",
    "Property limits depend on insured values and the quote.",
    "Liquor liability requires the applicable licenses to be in effect. Off-premises events, catering and mobile bartending require a written endorsement.",
    "Cannabis and THC products are excluded."
  ],
  prepare:["Your operations, menu and service hours","Whether you sell or serve alcohol, and your license details","Building, equipment and inventory values","Any off-premises catering or events","Requested liability limits and deductible"],
  ctaTitle:"Keep serving tomorrow." },

{ id:"retail", nav:"Retail", emoji:"\u{1F6CD}\u{FE0F}",
  h1:"Retail Insurance",
  lede:"Coverage for eligible shops, boutiques and specialty retailers. Built around the store, the stock and the days you cannot afford to be closed.",
  quote:"A customer fall, damaged stock or a covered loss that closes the store can reach beyond the shop floor. The business depends on opening every day.",
  coversTitle:"What the Policy Covers",
  covers:[
    ["General Liability","Helps protect against third-party injury and property damage claims involving your store, for example a customer who slips or falls. Typical limits $1M per occurrence and $2M aggregate."],
    ["Business Owner\u2019s Policy (BOP) or Commercial Property","Protects covered store property, inventory, equipment, furniture and other business property."],
    ["Business Income","Helps replace lost business income when a covered loss temporarily prevents your store from operating."],
    ["Cyber","Helps cover certain costs and liabilities from data breaches, cyberattacks and compromised customer information."]
  ],
  forTitle:"Who This Coverage Is For",
  forIntro:"The right mix depends on what you sell and how you sell it. Eligibility depends on your operations, location, and loss history.",
  forList:["Independent shops and boutiques","Specialty retailers","Multi-location retail operations","Retailers holding customer payment or account information"],
  conditions:[
    "Typical general liability limits are subject to underwriting; higher limits may be available.",
    "Property limits depend on insured values and the quote.",
    "Other coverage limits, deductibles and terms vary by policy.",
    "All coverage is subject to the issued policy, limits, deductibles and exclusions."
  ],
  prepare:["Your locations and square footage","Inventory and equipment values","Annual sales","Whether you hold customer information","Requested liability limits and deductible"],
  ctaTitle:"Protect what keeps you open." },

{ id:"automotive", nav:"Automotive", emoji:"\u{1F697}",
  h1:"Automotive Insurance",
  lede:"Coverage for eligible repair shops, service centres and automotive businesses. Built around the shop, the customer vehicles in your care and the vehicles you own.",
  quote:"A customer injury, a damaged vehicle or a loss at your shop can put the business on the line. A busy shop has more than repair bills.",
  coversTitle:"What the Policy Covers",
  covers:[
    ["General Liability","Helps protect your business against third-party injury or property damage claims arising from your operations. Typical limits $1M per occurrence and $2M aggregate."],
    ["Garagekeepers & Garage Liability","Garagekeepers can cover certain losses to vehicles in your care. Garage liability addresses the exposures of your automotive operations."],
    ["Business Owner\u2019s Policy (BOP) or Commercial Property","Protects covered buildings, shop equipment, inventory and other business property."],
    ["Commercial Auto","Provides covered auto liability and, when purchased, physical damage protection for business vehicles."]
  ],
  forTitle:"Who This Coverage Is For",
  forIntro:"Coverage is built around your operation. Eligibility depends on the services you perform, location, and loss history.",
  forList:["Repair shops and service centres","Body shops","Tyre and parts businesses","Automotive businesses that keep customer vehicles on site"],
  conditions:[
    "Typical general liability limits are subject to underwriting; higher limits may be available.",
    "Property limits depend on insured values and the quote.",
    "Other coverage limits, deductibles and terms vary by policy.",
    "All coverage is subject to the issued policy, limits, deductibles and exclusions."
  ],
  prepare:["The vehicles you service","Customer vehicles in your care and the maximum value on site","Shop equipment and building values","Any vehicles the business owns or uses","Requested liability limits and deductible"],
  ctaTitle:"Keep your shop moving." },

{ id:"construction", nav:"Construction", emoji:"\u{1F3D7}\u{FE0F}",
  h1:"Construction Insurance",
  lede:"Coverage for eligible construction firms and general contractors. Built around the project, the crew and the equipment that gets the work done.",
  quote:"Damage on site, missing equipment or a vehicle accident can disrupt the work. Every project brings a new set of risks.",
  coversTitle:"What the Policy Covers",
  covers:[
    ["General Liability","Helps protect against third-party bodily injury and property damage claims caused by your work or operations. Typical limits $1M per occurrence and $2M aggregate."],
    ["Inland Marine","Protects covered tools and equipment at the shop, on a jobsite or in transit."],
    ["Commercial Auto","Provides covered auto liability and, when purchased, physical damage protection for company vehicles."],
    ["Builders Risk","Protects covered property and materials during construction, subject to the coverage selected."]
  ],
  forTitle:"Who This Coverage Is For",
  forIntro:"Coverage starts with the project. Eligibility depends on the work you take on, location, and loss history.",
  forList:["General contractors","Construction firms running multiple sites","Builders working to a fixed project timeline","Firms with owned tools, equipment and vehicles"],
  conditions:[
    "Typical general liability limits are subject to underwriting; higher limits may be available.",
    "Property limits depend on insured values and the quote.",
    "Other coverage limits, deductibles and terms vary by policy.",
    "All coverage is subject to the issued policy, limits, deductibles and exclusions."
  ],
  prepare:["Project scope and timeline","Site locations","Equipment and tool values","Vehicle details","Requested liability limits and deductible"],
  ctaTitle:"Plan for the next project." },

{ id:"contractor", nav:"Contractors & Trades", emoji:"\u{1F527}",
  h1:"Contractor & Trade Insurance",
  lede:"Coverage for eligible trade businesses. Built around your trade, your truck and your tools.",
  quote:"An accident, damaged tools or a claim against your work can put the next job at risk. The next job depends on what you bring.",
  coversTitle:"What the Policy Covers",
  covers:[
    ["General Liability","Helps protect against third-party bodily injury and property damage claims caused by your work. Typical limits $1M per occurrence and $2M aggregate."],
    ["Commercial Auto","Provides covered auto liability and, when purchased, physical damage protection for company vehicles."],
    ["Inland Marine","Protects covered tools and mobile equipment at jobsites and while in transit."],
    ["Business Owner\u2019s Policy (BOP) or Commercial Property","Protects covered offices, warehouses, equipment, supplies and other business property."]
  ],
  forTitle:"Who This Coverage Is For",
  forIntro:"Coverage varies by trade and operations. These businesses have different needs, and eligibility depends on the work you perform.",
  forList:["HVAC and plumbing","Electrical","Landscaping","Roofing and painting","Handyman services","Flooring"],
  conditions:[
    "Typical general liability limits are subject to underwriting; higher limits may be available.",
    "Property limits depend on insured values and the quote.",
    "Other coverage limits, deductibles and terms vary by policy.",
    "All coverage is subject to the issued policy, limits, deductibles and exclusions."
  ],
  prepare:["Your trade and the work you perform","Vehicle details","Tool and equipment values","Business property and premises","Requested liability limits and deductible"],
  ctaTitle:"Get ready for the next job." },

{ id:"professional", nav:"Professional Services", emoji:"\u{1F4BC}",
  h1:"Professional Services Insurance",
  lede:"Coverage for eligible professional firms. Built around the advice you give, the data you hold and the office you work from.",
  quote:"A disputed piece of advice, compromised client data or an office loss can affect the firm you have built. A client claim can put more than a fee at risk.",
  coversTitle:"What the Policy Covers",
  covers:[
    ["Professional Liability / Errors & Omissions (E&O)","Helps protect against certain claims that your professional services, advice or mistakes caused a client financial harm."],
    ["Cyber","Helps cover certain costs from cyberattacks, data breaches, ransomware and compromised client information."],
    ["General Liability","Helps protect against common third-party bodily injury and property damage claims, for example a visitor injured at your office. Typical limits $1M per occurrence and $2M aggregate."],
    ["Business Owner\u2019s Policy (BOP) or Commercial Property","Protects covered office equipment, furniture, computers and other business property."]
  ],
  forTitle:"Who This Coverage Is For",
  forIntro:"Different professions carry different exposures. The coverage mix depends on the services you provide.",
  forList:["Accountants","Consultants","Agencies","Engineers","Architects","Certain technology firms"],
  conditions:[
    "Typical general liability limits are subject to underwriting; higher limits may be available.",
    "Property limits depend on insured values and the quote.",
    "Other coverage limits, deductibles and terms vary by policy.",
    "All coverage is subject to the issued policy, limits, deductibles and exclusions."
  ],
  prepare:["The services you provide","Client contracts and any required limits","Client information you hold","Office equipment and premises","Requested liability limits and deductible"],
  ctaTitle:"Put your expertise on firmer ground." },

{ id:"property-services", nav:"Property Services", emoji:"\u{1F9F9}",
  h1:"Property Services Insurance",
  lede:"Coverage for eligible property service businesses. Built around the business that moves from property to property.",
  quote:"An accidental spill, damaged equipment or a vehicle accident can turn a routine visit into a costly one. Every customer location brings new exposure.",
  coversTitle:"What the Policy Covers",
  covers:[
    ["General Liability","Helps protect against claims if your operations injure someone or accidentally damage a customer\u2019s property. Typical limits $1M per occurrence and $2M aggregate."],
    ["Commercial Auto","Provides covered auto liability and, when purchased, physical damage protection for service vehicles."],
    ["Inland Marine","Protects covered tools and equipment while traveling or being used at customer locations."],
    ["Business Owner\u2019s Policy (BOP) or Commercial Property","Protects covered office property, equipment, supplies and other business property."]
  ],
  forTitle:"Who This Coverage Is For",
  forIntro:"Coverage varies with the services you perform. Eligibility depends on your operations, location, and loss history.",
  forList:["Cleaning and janitorial","Pest control","Pool service","Maintenance","Restoration","Inspection businesses"],
  conditions:[
    "Typical general liability limits are subject to underwriting; higher limits may be available.",
    "Property limits depend on insured values and the quote.",
    "Other coverage limits, deductibles and terms vary by policy.",
    "All coverage is subject to the issued policy, limits, deductibles and exclusions."
  ],
  prepare:["The services you perform","Customer locations and access","Service vehicle details","Mobile tool and equipment values","Requested liability limits and deductible"],
  ctaTitle:"Be ready for the next property." }
];

const FAQ = [
  ["What liability limits are available?","Typical general liability limits are $1 million per occurrence and $2 million aggregate. Limits are subject to underwriting and higher limits may be available."],
  ["Does receiving a quote mean coverage has started?","No. A coverage discussion does not bind insurance. Coverage begins only when a policy is issued, subject to its terms, limits, deductibles and exclusions."],
  ["How are property limits set?","Property limits depend on insured values and the quote. Other coverage limits, deductibles and terms vary by policy."],
  ["Can I combine coverages?","Yes. A Business Owner\u2019s Policy combines common small-business property and liability protections into a single package. Additional coverages can be added depending on your operations."],
  ["What determines eligibility?","Eligibility depends on your operations, location, condition and loss history. Being listed on this page is not a guarantee of acceptance."]
];

const PRESS = [
  ["Insurance Business","As covered in Insurance Business, Jan 2026."],
  ["The Wall Street Journal","As covered in The Wall Street Journal, Sep 2025."],
  ["Inc.","As covered in Inc., Sep 2025."],
  ["Forbes","As covered in Forbes, May 2025."],
  ["The Economic Times","As covered in The Economic Times, Jul 2025."]
];

const LEGAL = [
  "Coverage may be underwritten through affiliated or partner carriers, including Corgi Insurance Company, Inc., an admitted property and casualty insurance carrier (NAIC #17989).",
  "Certain coverages may also be underwritten by Technology Risk Retention Group, Inc. (TRRG), a risk retention group organized and operating pursuant to the Liability Risk Retention Act (15 U.S.C. \u00a7 3901 et seq.). TRRG is not subject to all of the insurance laws and regulations of your state. State insurance insolvency guaranty funds are not available for policies issued by a risk retention group.",
  "Corgi Insurance Services, Inc. is a licensed insurance producer (CA License #6012791) and acts as the program administrator, not the insurer."
];
