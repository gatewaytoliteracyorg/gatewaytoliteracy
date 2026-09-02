import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import {
  schools,
  totalSchools,
  highNeedSchools,
  activePartnerships,
  type OutreachStatus,
  type ServiceType,
} from "@/data/schools";

const statusStyles: Record<OutreachStatus, string> = {
  "Not Contacted": "bg-muted text-muted-foreground",
  "Partially Served": "bg-success-soft text-success",
  "Fully Served": "bg-success text-on-accent",
  Declined: "bg-secondary text-foreground/60 line-through decoration-foreground/30",
};

const serviceStyles: Record<ServiceType, string> = {
  BBB: "bg-bbb text-on-accent",
  "Health Literacy": "bg-health text-on-accent",
  "Financial Literacy": "bg-finance text-ink",
};

const statuses: (OutreachStatus | "All")[] = ["All", "Partially Served", "Not Contacted", "Declined"];
const services: (ServiceType | "All")[] = ["All", "BBB", "Health Literacy", "Financial Literacy"];

function Chip({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition ${
        active ? "border-ink bg-ink text-background" : "border-border bg-card text-foreground/70 hover:border-ink/40"
      }`}
    >
      {children}
    </button>
  );
}

export function SchoolDashboard() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<OutreachStatus | "All">("All");
  const [service, setService] = useState<ServiceType | "All">("All");

  const rows = useMemo(
    () =>
      schools.filter((s) => {
        const matchesQuery = s.name.toLowerCase().includes(query.trim().toLowerCase());
        const matchesStatus = status === "All" || s.status === status;
        const matchesService = service === "All" || s.serviceType === service;
        return matchesQuery && matchesStatus && matchesService;
      }),
    [query, status, service],
  );

  const stats = [
    { label: "Total Schools Targeted", value: totalSchools, accent: "bg-bbb" },
    { label: "High-Need Schools (>70% Econ. Disadvantaged)", value: highNeedSchools, accent: "bg-health" },
    { label: "Active Partnerships", value: activePartnerships, accent: "bg-finance" },
  ];

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft">
            <span className={`absolute left-0 top-0 h-full w-1.5 ${s.accent}`} />
            <p className="font-display text-4xl font-bold">{s.value}</p>
            <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-border bg-card shadow-soft">
        <div className="flex flex-col gap-4 border-b border-border p-5">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search schools…"
              aria-label="Search schools"
              className="w-full rounded-xl border border-input bg-background py-2.5 pl-9 pr-3 text-sm outline-none focus:border-ring"
            />
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="eyebrow text-muted-foreground">Status</span>
              {statuses.map((s) => (
                <Chip key={s} active={status === s} onClick={() => setStatus(s)}>
                  {s}
                </Chip>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="eyebrow text-muted-foreground">Service</span>
              {services.map((s) => (
                <Chip key={s} active={service === s} onClick={() => setService(s)}>
                  {s}
                </Chip>
              ))}
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[860px] text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-secondary/60 text-xs uppercase tracking-wider text-muted-foreground">
                <th className="px-5 py-3 font-semibold">School</th>
                <th className="px-5 py-3 font-semibold">Econ. Disadvantaged</th>
                <th className="px-5 py-3 font-semibold">Math</th>
                <th className="px-5 py-3 font-semibold">Reading</th>
                <th className="px-5 py-3 font-semibold">Status</th>
                <th className="px-5 py-3 font-semibold">Date of Service</th>
                <th className="px-5 py-3 font-semibold">Service Type</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((s) => (
                <tr key={s.name} className="border-b border-border/60 last:border-0 hover:bg-secondary/40">
                  <td className="px-5 py-3 font-medium">{s.name}</td>
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-2">
                      <span className="tabular-nums">{s.econDisadvantaged}%</span>
                      <span className="h-1.5 w-16 overflow-hidden rounded-full bg-muted">
                        <span
                          className={`block h-full rounded-full ${s.econDisadvantaged > 70 ? "bg-health" : "bg-bbb"}`}
                          style={{ width: `${s.econDisadvantaged}%` }}
                        />
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-3 tabular-nums">{s.math}%</td>
                  <td className="px-5 py-3 tabular-nums">{s.reading}%</td>
                  <td className="px-5 py-3">
                    <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyles[s.status]}`}>
                      {s.status}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-muted-foreground">{s.dateOfService ?? "—"}</td>
                  <td className="px-5 py-3">
                    {s.serviceType ? (
                      <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${serviceStyles[s.serviceType]}`}>
                        {s.serviceType}
                      </span>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </td>
                </tr>
              ))}
              {rows.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-5 py-10 text-center text-muted-foreground">
                    No schools match these filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="border-t border-border px-5 py-3 text-xs text-muted-foreground">
          Showing {rows.length} of {totalSchools} schools
        </div>
      </div>
    </div>
  );
}
