import { getFeaturedProjects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";

export default function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section id="du-an" className="section-padding bg-dva-charcoal">
      <div className="container-dva">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-dva-orange">
            Dự án
          </p>
          <h2 className="section-heading text-white">Dự Án Tiêu Biểu</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {featured.map((proj) => (
            <Link
              key={proj.id}
              href={`/du-an/${proj.slug}`}
              className="card-hover group block overflow-hidden rounded-lg"
            >
              <div className="relative h-56">
                <Image
                  src={proj.images[0]}
                  alt={proj.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-dva-steel p-6">
                <p className="mb-1 text-xs uppercase tracking-wide text-dva-orange-muted">
                  {proj.type} · {proj.location} · {proj.year}
                </p>
                <h3 className="text-lg font-bold text-white group-hover:text-dva-orange transition-colors">
                  {proj.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/du-an" className="btn-outline">
            Xem tất cả dự án
          </Link>
        </div>
      </div>
    </section>
  );
}