export type OutreachStatus = "Not Contacted" | "Partially Served" | "Fully Served" | "Declined";
export type ServiceType = "BBB" | "Health Literacy" | "Financial Literacy";

export interface School {
  name: string;
  econDisadvantaged: number;
  math: number;
  reading: number;
  status: OutreachStatus;
  dateOfService: string | null;
  serviceType: ServiceType | null;
}

export const schools: School[] = [
  { name: "Rogers Lane Elementary", econDisadvantaged: 100, math: 23, reading: 28, status: "Not Contacted", dateOfService: null, serviceType: null },
  { name: "Wilburn Elementary", econDisadvantaged: 100, math: 37, reading: 30, status: "Not Contacted", dateOfService: null, serviceType: null },
  { name: "Barwell Road Elementary", econDisadvantaged: 100, math: 42, reading: 33, status: "Declined", dateOfService: null, serviceType: null },
  { name: "Southeast Raleigh Elementary", econDisadvantaged: 99, math: 17, reading: 22, status: "Not Contacted", dateOfService: null, serviceType: null },
  { name: "Bugg Elementary", econDisadvantaged: 99, math: 37, reading: 27, status: "Partially Served", dateOfService: "03/04/2026", serviceType: "BBB" },
  { name: "Walnut Creek Elementary", econDisadvantaged: 99, math: 38, reading: 29, status: "Not Contacted", dateOfService: null, serviceType: null },
  { name: "East Garner Elementary", econDisadvantaged: 99, math: 40, reading: 33, status: "Partially Served", dateOfService: "03/02/2026", serviceType: "BBB" },
  { name: "Creech Road Elementary", econDisadvantaged: 99, math: 54, reading: 39, status: "Not Contacted", dateOfService: null, serviceType: null },
  { name: "Wildwood Forest Elementary", econDisadvantaged: 80, math: 33, reading: 38, status: "Not Contacted", dateOfService: null, serviceType: null },
  { name: "Beaverdam Elementary", econDisadvantaged: 78, math: 31, reading: 37, status: "Not Contacted", dateOfService: null, serviceType: null },
  { name: "Zebulon Elementary", econDisadvantaged: 76, math: 29, reading: 29, status: "Not Contacted", dateOfService: null, serviceType: null },
  { name: "Millbrook Elementary", econDisadvantaged: 75, math: 32, reading: 35, status: "Not Contacted", dateOfService: null, serviceType: null },
  { name: "Forestville Road Elementary", econDisadvantaged: 75, math: 46, reading: 44, status: "Not Contacted", dateOfService: null, serviceType: null },
  { name: "Wakelon Elementary", econDisadvantaged: 74, math: 42, reading: 39, status: "Not Contacted", dateOfService: null, serviceType: null },
  { name: "Knightdale Elementary", econDisadvantaged: 73, math: 44, reading: 40, status: "Not Contacted", dateOfService: null, serviceType: null },
  { name: "Carver Elementary", econDisadvantaged: 72, math: 37, reading: 32, status: "Not Contacted", dateOfService: null, serviceType: null },
  { name: "Lockhart Elementary", econDisadvantaged: 72, math: 33, reading: 33, status: "Not Contacted", dateOfService: null, serviceType: null },
  { name: "Aversboro Elementary", econDisadvantaged: 72, math: 32, reading: 37, status: "Not Contacted", dateOfService: null, serviceType: null },
  { name: "Vandora Springs Elementary", econDisadvantaged: 71, math: 46, reading: 38, status: "Not Contacted", dateOfService: null, serviceType: null },
  { name: "Brentwood Elementary", econDisadvantaged: 71, math: 42, reading: 47, status: "Not Contacted", dateOfService: null, serviceType: null },
  { name: "Fox Road Elementary", econDisadvantaged: 70, math: 43, reading: 37, status: "Not Contacted", dateOfService: null, serviceType: null },
  { name: "Hodge Road Elementary", econDisadvantaged: 69, math: 38, reading: 33, status: "Not Contacted", dateOfService: null, serviceType: null },
  { name: "Green Elementary", econDisadvantaged: 69, math: 32, reading: 40, status: "Not Contacted", dateOfService: null, serviceType: null },
  { name: "Smith Elementary", econDisadvantaged: 69, math: 48, reading: 44, status: "Not Contacted", dateOfService: null, serviceType: null },
  { name: "River Bend Elementary", econDisadvantaged: 68, math: 43, reading: 43, status: "Not Contacted", dateOfService: null, serviceType: null },
  { name: "Timber Drive Elementary", econDisadvantaged: 66, math: 62, reading: 52, status: "Not Contacted", dateOfService: null, serviceType: null },
  { name: "Wendell Elementary", econDisadvantaged: 63, math: 35, reading: 35, status: "Not Contacted", dateOfService: null, serviceType: null },
  { name: "Reedy Creek Elementary", econDisadvantaged: 62, math: 45, reading: 47, status: "Not Contacted", dateOfService: null, serviceType: null },
  { name: "Durant Road Elementary", econDisadvantaged: 62, math: 44, reading: 50, status: "Not Contacted", dateOfService: null, serviceType: null },
  { name: "Forest Pines Drive Elementary", econDisadvantaged: 60, math: 48, reading: 46, status: "Not Contacted", dateOfService: null, serviceType: null },
  { name: "Brier Creek Elementary", econDisadvantaged: 58, math: 37, reading: 41, status: "Not Contacted", dateOfService: null, serviceType: null },
  { name: "Yates Mill Elementary", econDisadvantaged: 58, math: 56, reading: 50, status: "Not Contacted", dateOfService: null, serviceType: null },
  { name: "Wakefield Elementary", econDisadvantaged: 57, math: 50, reading: 45, status: "Not Contacted", dateOfService: null, serviceType: null },
  { name: "Dillard Drive Elementary", econDisadvantaged: 54, math: 34, reading: 38, status: "Not Contacted", dateOfService: null, serviceType: null },
  { name: "Lake Myra Elementary", econDisadvantaged: 54, math: 41, reading: 40, status: "Not Contacted", dateOfService: null, serviceType: null },
  { name: "Lynn Road Elementary", econDisadvantaged: 53, math: 46, reading: 45, status: "Not Contacted", dateOfService: null, serviceType: null },
  { name: "Harris Creek Elementary", econDisadvantaged: 53, math: 51, reading: 52, status: "Not Contacted", dateOfService: null, serviceType: null },
  { name: "Powell Elementary", econDisadvantaged: 53, math: 47, reading: 52, status: "Not Contacted", dateOfService: null, serviceType: null },
  { name: "Wake Forest Elementary", econDisadvantaged: 50, math: 52, reading: 47, status: "Not Contacted", dateOfService: null, serviceType: null },
  { name: "Rand Road Elementary", econDisadvantaged: 48, math: 46, reading: 45, status: "Not Contacted", dateOfService: null, serviceType: null },
  { name: "Lead Mine Elementary", econDisadvantaged: 48, math: 52, reading: 47, status: "Not Contacted", dateOfService: null, serviceType: null },
  { name: "Poe Elementary", econDisadvantaged: 48, math: 47, reading: 52, status: "Not Contacted", dateOfService: null, serviceType: null },
  { name: "Pleasant Grove Elementary", econDisadvantaged: 46, math: 57, reading: 53, status: "Not Contacted", dateOfService: null, serviceType: null },
];

export const totalSchools = schools.length;
export const highNeedSchools = schools.filter((s) => s.econDisadvantaged > 70).length;
export const activePartnerships = schools.filter(
  (s) => s.status === "Partially Served" || s.status === "Fully Served",
).length;
