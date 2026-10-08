const certs = ["ASTM", "JIS G3101", "TCVN", "API 5L", "API A572"];

export default function PartnersSection() {
  return (
    <section className="border-y border-dva-border py-10">
      <div className="container-dva">
        <p className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-dva-text-muted">
          Tiêu chuẩn áp dụng
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {certs.map((c) => (
            <span
              key={c}
              className="rounded-md border border-dva-border bg-white px-5 py-2 text-sm font-semibold text-dva-charcoal shadow-sm"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
