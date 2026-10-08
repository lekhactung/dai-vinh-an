import { getFeaturedProducts } from "@/data/products";
import Link from "next/link";

export default function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section id="san-pham" className="section-padding">
      <div className="container-dva">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-dva-orange">
            Sản phẩm
          </p>
          <h2 className="section-heading">Sản Phẩm Nổi Bật</h2>
          <p className="section-subheading mx-auto max-w-2xl">
            Đáp ứng đa dạng nhu cầu kết cấu với tiêu chuẩn quốc tế
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <Link
              key={p.id}
              href={`/san-pham/${p.slug}`}
              className="card-hover group block rounded-lg border border-dva-border bg-white p-6"
            >
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-dva-orange">
                {p.categoryName}
              </p>
              <h3 className="mb-3 text-base font-bold text-dva-charcoal group-hover:text-dva-orange transition-colors">
                {p.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {p.applications.slice(0, 3).map((a) => (
                  <span                    className="rounded-full bg-dva-bg px-3 py-0.5 text-xs text-dva-text-muted"

                    key={a}
                  >
                    {a}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/san-pham" className="btn-primary">
            Xem tất cả sản phẩm
          </Link>
        </div>
      </div>
    </section>
  );
}