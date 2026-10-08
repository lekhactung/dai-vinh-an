import { products } from "@/data/products";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const metadata = {
    title: "Sản Phẩm - DVA Steel",
    description: "Khám phá danh sách các sản phẩm thép công nghiệp và dân dụng từ DVA Steel.",
};

export default function ProductsPage() {
    return (
        <main className="py-20 bg-gray-50 min-h-screen">
            <div className="container-dva">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-dva-charcoal mb-4">Sản Phẩm Của Chúng Tôi</h1>
                    <p className="text-lg text-gray-600 max-w-2xl">
                        Cung cấp các loại thép tấm, thép hộp, thép hình và thép công nghiệp với tiêu chuẩn chất lượng quốc tế, đáp ứng mọi dự án.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition flex flex-col overflow-hidden border border-gray-100">
                            <Link href={`/san-pham/${product.slug}`} className="relative h-48 bg-gray-200 block overflow-hidden">
                                {product.images[0] ? (
                                    <Image 
                                        src={product.images[0]} 
                                        alt={product.name}
                                        fill
                                        className="object-cover hover:scale-105 transition duration-300"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">No Image</div>
                                )}
                            </Link>
                            <div className="p-5 flex flex-col flex-grow">
                                <Link href={`/san-pham/${product.slug}`}>
                                    <h2 className="font-bold text-lg text-dva-charcoal mb-2 hover:text-dva-orange transition">{product.name}</h2>
                                </Link>
                                <p className="text-sm text-gray-500 mb-4 line-clamp-2">{product.shortDescription}</p>
                                
                                <div className="mt-auto">
                                    <Link href={`/san-pham/${product.slug}`} className="text-dva-orange font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                        Xem chi tiết <ArrowRight size={14}/>
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
