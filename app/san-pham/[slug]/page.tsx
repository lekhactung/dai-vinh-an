import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: "Không tìm thấy sản phẩm" };
  return {
    title: `${product.name} - DVA Steel`,
    description: product.shortDescription,
  };
}

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  
  if (!product) {
    notFound();
  }

  return (
    <main className="py-20 bg-gray-50 min-h-screen">
      <div className="container-dva">
        <Link href="/san-pham" className="inline-flex items-center gap-2 text-gray-500 hover:text-dva-orange mb-8 transition-colors">
          <ArrowLeft size={16} /> Quay lại danh sách
        </Link>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Ảnh */}
            <div className="relative h-[400px] md:h-[600px] bg-gray-100 p-8">
              {product.images[0] ? (
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              ) : (
                 <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
                    Hình ảnh đang cập nhật...
                 </div>
              )}
            </div>

            {/* Chi tiết */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col">
              <span className="text-dva-orange font-semibold text-sm uppercase tracking-wider mb-2">
                {product.categoryName}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-dva-charcoal mb-4">
                {product.name}
              </h1>
              
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {product.description}
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Thông số kỹ thuật</h3>
                <ul className="space-y-3">
                  {product.specifications.map((spec, i) => (
                    <li key={i} className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-gray-50 border-dashed">
                      <span className="text-gray-500">{spec.label}</span>
                      <span className="font-semibold text-gray-800">{spec.value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {product.applications && product.applications.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Ứng dụng</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                        <CheckCircle size={14} className="text-green-500"/> {app}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-auto pt-6 flex gap-4">
                <a href="#contact" className="btn-primary w-full text-center py-4">Nhận báo giá ngay</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
