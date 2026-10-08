import { posts } from "@/data/posts";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { formatDate } from "@/lib/utils";

export const metadata = {
    title: "Tin Tức & Sự Kiện - DVA Steel",
    description: "Cập nhật những tin tức mới nhất về ngành thép và hoạt động của Đại Vĩnh An.",
};

export default function NewsPage() {
    return (
        <main className="py-20 bg-gray-50 min-h-screen">
            <div className="container-dva">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-dva-charcoal mb-4">Tin Tức & Sự Kiện</h1>
                    <p className="text-lg text-gray-600 max-w-2xl">
                        Cập nhật các kiến thức, tiêu chuẩn chuyên ngành và tin tức mới nhất từ hệ thống DVA Steel.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <article 
                            key={post.id} 
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full group"
                        >
                            <Link href={`/tin-tuc/${post.slug}`} className="relative h-60 w-full overflow-hidden block">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-dva-orange text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                                        {post.categoryLabel}
                                    </span>
                                </div>
                            </Link>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center text-gray-500 text-sm mb-3 gap-2">
                                    <Calendar size={14} />
                                    <time dateTime={post.publishedAt}>
                                        {formatDate(post.publishedAt)}
                                    </time>
                                </div>

                                <Link href={`/tin-tuc/${post.slug}`} className="block group-hover:text-dva-orange transition-colors duration-200">
                                    <h3 className="text-xl font-bold text-dva-charcoal mb-3 line-clamp-2">
                                        {post.title}
                                    </h3>
                                </Link>

                                <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                                    {post.excerpt}
                                </p>

                                <Link 
                                    href={`/tin-tuc/${post.slug}`}
                                    className="inline-flex items-center gap-2 text-dva-orange font-semibold hover:gap-3 transition-all duration-300 mt-auto"
                                >
                                    Đọc tiếp <ArrowRight size={16} />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
}
