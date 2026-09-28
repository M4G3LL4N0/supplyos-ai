import Link from "next/link";
import { ProductHonestyNote } from "@/components/ProductHonestyNote";
import { ProcessFlowSection } from "@/components/ProcessFlowSection";
import { HeroProductPanel } from "@/components/HeroProductPanel";
import { ProblemContrastSection } from "@/components/ProblemContrastSection";
import { OmniWorkflowSection } from "@/components/OmniWorkflowSection";

const constraints = [
  { label: "Suppliers", value: "4–10" },
  { label: "Region", value: "East Asia" },
  { label: "Inventory", value: "2–4 weeks" },
  { label: "Volatility", value: "Moderate" },
  { label: "Shipping", value: "Mixed" },
];

const alerts = [
  { title: "Single-region concentration", detail: "Most inbound volume sits in one corridor." },
  { title: "Thin safety stock", detail: "Two-to-four weeks leaves little shock absorption." },
  { title: "Mixed-mode delay risk", detail: "Air and ocean split makes ETA exceptions harder to score." },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs text-amber-200">
            AI-native supply chain control tower
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Autonomous planning, alerts, and risk monitoring for modern supply chains.
          </h1>
          <p className="mt-4 max-w-xl text-slate-400">
            SupplyOS scores supplier risk, recommends inventory actions, and drafts an executive summary from the constraints you actually run—suppliers, region, stock, volatility, and shipping mode.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/planner" className="rounded-full bg-amber-400 px-5 py-2.5 text-sm font-semibold text-slate-950">
              Open control tower
            </Link>
            <Link href="/dashboard" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm text-slate-200">
              Risk dashboard
            </Link>
          </div>
        </div>
        <HeroProductPanel />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-amber-200/80">Planner preview</p>
            <h2 className="mt-3 text-2xl font-semibold">Same inputs the control tower uses.</h2>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              This is a sample constraint set, not a live customer run. Open the planner to generate a scored dashboard from your own profile.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {constraints.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-950/70 px-3 py-2">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-slate-500">{item.label}</p>
                  <p className="text-sm font-medium text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            {alerts.map((alert) => (
              <article key={alert.title} className="rounded-2xl border border-amber-400/15 bg-amber-400/5 p-4">
                <h3 className="text-sm font-semibold text-amber-100">{alert.title}</h3>
                <p className="mt-1 text-sm text-slate-400">{alert.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ProblemContrastSection />
      <OmniWorkflowSection />
      <ProcessFlowSection />
      <ProductHonestyNote status="demo" />
    </main>
  );
}
