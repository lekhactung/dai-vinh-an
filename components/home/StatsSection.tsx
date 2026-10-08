import { stats } from "@/data/company";

export default function StatsSection() {
  return (
    <section className="bg-dva-orange py-12">
      <div className="container-dva grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center text-white">
            <p className="text-4xl font-black">{s.value}</p>
            <p className="mt-1 text-sm font-medium uppercase tracking-wide opacity-80">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}