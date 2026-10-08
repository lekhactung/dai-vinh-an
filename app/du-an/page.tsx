import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";

export const metadata = {
    title: "Dự Án Tiêu Biểu - DVA Steel",
    description: "Khám phá các dự án thi công và cung cấp kết cấu thép tiêu biểu của Đại Vĩnh An.",
};

export default function ProjectsPage() {
    return (
        <main className="py-20 bg-gray-50 min-h-screen">
            <div className="container-dva">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-dva-charcoal mb-4">Các Dự Án Tiêu Biểu</h1>
                    <p className="text-lg text-gray-600 max-w-2xl">
                        Với hơn 30 năm kinh nghiệm, DVA Steel tự hào là nhà cung cấp vật liệu thép đáng tin cậy cho hàng ngàn dự án trên cả nước.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition flex flex-col overflow-hidden border border-gray-100">
                            <Link href={`/du-an/${project.slug}`} className="relative h-64 bg-gray-200 block overflow-hidden">
                                {project.images[0] ? (
                                    <Image 
                                        src={project.images[0]} 
                                        alt={project.name}
                                        fill
                                        className="object-cover hover:scale-105 transition duration-500"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">No Image</div>
                                )}
                                <div className="absolute top-4 left-4">
                                     <span className="bg-dva-charcoal text-white text-xs font-bold uppercase px-3 py-1 rounded-sm shadow-md">
                                        {project.year}
                                    </span>
                                </div>
                            </Link>
                            <div className="p-6 flex flex-col flex-grow">
                                <Link href={`/du-an/${project.slug}`}>
                                    <h2 className="font-bold text-xl text-dva-charcoal mb-2 hover:text-dva-orange transition">{project.name}</h2>
                                </Link>
                                <div className="flex items-center gap-1 text-gray-500 text-sm mb-4">
                                    <MapPin size={14} /> {project.location}
                                </div>
                                <p className="text-gray-600 mb-6 line-clamp-3">{project.description}</p>
                                
                                <div className="mt-auto">
                                    <Link href={`/du-an/${project.slug}`} className="text-dva-orange font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                                        Chi tiết dự án <ArrowRight size={16}/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
