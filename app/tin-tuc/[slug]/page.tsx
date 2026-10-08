import { notFound } from "next/navigation";
import { posts, getPostBySlug } from "@/data/posts";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Không tìm thấy bài viết" };
  return {
    title: `${post.title} - DVA Steel`,
    description: post.excerpt,
  };
}

export default function PostDetail({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <main className="py-20 bg-white min-h-screen">
      <div className="container-dva max-w-4xl">
        <Link href="/tin-tuc" className="inline-flex items-center gap-2 text-gray-500 hover:text-dva-orange mb-8 transition-colors">
          <ArrowLeft size={16} /> Quay lại tin tức
        </Link>
        
        <article>
            <header className="mb-10 text-center">
                 <div className="flex justify-center items-center gap-4 text-sm text-gray-500 mb-6">
                    <span className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full"><Tag size={14}/> {post.categoryLabel}</span>
                    <span className="flex items-center gap-1"><Calendar size={14} /> {formatDate(post.publishedAt)}</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-black text-dva-charcoal leading-tight mb-6">
                    {post.title}
                </h1>
                <p className="text-xl text-gray-600 italic">
                    {post.excerpt}
                </p>
            </header>

            <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden mb-12 shadow-md">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="prose prose-lg max-w-none text-gray-700">
                {/* Dữ liệu content giả lập từ description/excerpt */}
                <p>Kính chào quý khách hàng và đối tác,</p>
                <p>{post.excerpt}</p>
                <p>Nội dung chi tiết của bài viết đang được biên soạn và sẽ sớm được cập nhật trên hệ thống. Chúng tôi luôn nỗ lực mang lại những thông tin kỹ thuật và tin tức thị trường chính xác, hữu ích nhất đến quý vị.</p>
                <p>Mọi thắc mắc hoặc nhu cầu tư vấn kỹ thuật chuyên sâu về các sản phẩm thép công nghiệp, vui lòng liên hệ trực tiếp với bộ phận kinh doanh của DVA Steel để được hỗ trợ tốt nhất.</p>
                <p>Trân trọng cảm ơn!</p>
            </div>
            
        </article>
      </div>
    </main>
  );
}
