import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Box, CheckCircle, MapPin, CalendarDays } from "lucide-react";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Không tìm thấy dự án" };
  return {
    title: `${project.name} - DVA Steel`,
    description: project.description,
  };
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  
  if (!project) {
    notFound();
  }

  return (
    <main className="py-20 bg-gray-50 min-h-screen">
      <div className="container-dva">
        <Link href="/du-an" className="inline-flex items-center gap-2 text-gray-500 hover:text-dva-orange mb-8 transition-colors">
          <ArrowLeft size={16} /> Quay lại dự án
        </Link>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="relative h-[300px] md:h-[500px] bg-gray-900 w-full">
            {project.images[0] ? (
              <Image
                src={project.images[0]}
                alt={project.name}
                fill
                className="object-cover opacity-80"
              />
            ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  Hình ảnh đang cập nhật...
                </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-90"/>
            <div className="absolute bottom-6 md:bottom-12 left-6 md:left-12 right-6 md:right-12">
               <span className="bg-dva-orange text-white text-sm font-bold uppercase px-3 py-1 rounded-sm shadow-md mb-4 inline-block">
                  {project.type}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  {project.name}
              </h1>
              <div className="flex flex-wrap gap-6 text-gray-300">
                  <span className="flex items-center gap-2"><MapPin size={18}/> {project.location}</span>
                  <span className="flex items-center gap-2"><CalendarDays size={18}/> Năm: {project.year}</span>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 lg:px-16 lg:py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Mô tả dự án</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {project.description}
                </p>
                <div className="bg-gray-50 p-6 or rounded-xl border border-gray-100">
                    <p className="font-semibold text-gray-700 italic">"Chúng tôi cam kết chất lượng sản phẩm chuẩn quốc tế, giao hàng đúng hạn, đáp ứng yêu cầu kỹ thuật khắt khe cho từng hạng mục thi công."</p>
                </div>
            </div>

            <div>
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    <Box size={20} className="text-dva-orange"/> Vật tư cung cấp
                </h3>
                <ul className="space-y-4">
                  {project.products.map((product, i) => (
                    <li key={i} className="flex gap-3 items-center text-gray-700 font-medium">
                      <CheckCircle size={18} className="text-green-500 shrink-0"/> {product}
                    </li>
                  ))}
                </ul>

                <div className="mt-12">
                  <a href="/lien-he" className="btn-primary w-full text-center block">
                      Liên hệ báo giá dự án
                  </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
