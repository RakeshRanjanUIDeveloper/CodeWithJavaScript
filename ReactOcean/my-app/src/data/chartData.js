// 1. RICEFW Category Count
export const ricefwData = [
  { category: "Report", count: 586 },
  { category: "Interface", count: 372 },
  { category: "Conversion", count: 397 },
  { category: "Enhancement", count: 342 },
  { category: "Forms", count: 242 },
  { category: "Workflow", count: 22 }
];

// 2. Report Subcategory (Vertical Bar + Stats)
export const reportSubcategoryData = [
  { type: "Transactional", count: 284 },
  { type: "Analytical", count: 266 },
  { type: "ABAP", count: 19 },
  { type: "Module Pool", count: 17 }
];
export const reportStatsPrimary = [
  { value: 586, label: 'Total Reports' },
  { value: 12, label: 'Provision to Star' },
  { value: 152, label: 'Redesign' },
  { value: 156, label: 'Intact' },
  { value: 65, label: 'Mitigate' },
  { value: 201, label: 'Eliminate' },
];

export const reportStatsSecondary = [
  { value: 37, label: 'No-Code Objects' },
  { value: 97, label: 'Inactive/Syntax Error Objects' },
  { value: 16, label: 'Cloned Objects' },
  { value: 202, label: 'Unused Objects (4 Months)' },
];

export const reportStats = {
  totalReports: 586,
  redesign: 152,
  mitigate: 96,
  eliminate: 101,
  noCodeObjects: 37,
  inactiveErrorObjects: 202,
  clonedObjects: 16
};

// 5. Cleanliness Quotient (Gauge) – just a percent value
export const cleanlinessScore = 0.52;

// 3. Prime Recommendations (Grouped Bar)
export const recommendationData = [
  { name: "Provision to Standard", DDIC: 182, RICEFW: 182 },
  { name: "Redesign", DDIC: 481, RICEFW: 621 },
  { name: "Intact", DDIC: 352, RICEFW: 416 },
  { name: "Mitigate", DDIC: 135, RICEFW: 135 },
  { name: "Eliminate", DDIC: 0, RICEFW: 389 }
];

// 4. Extensibility Recommendations (Horizontal Bar)
export const extensibilityData = [
  { type: "Key User Extensibility", value: 529 },
  { type: "Developer/Key-User", value: 335 },
  { type: "Development Extensibility", value: 256 },
  { type: "Classical Extensibility", value: 199 },
  { type: "Developer/Side-By-Side", value: 143 },
  { type: "Side-By-Side Extensibility", value: 41 }
];

