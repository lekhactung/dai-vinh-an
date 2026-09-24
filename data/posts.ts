import type { Post } from "@/types/post";

export const posts: Post[] = [
  {
    id: "1",
    title: "Thép Tấm A36 và A572: Phân biệt và ứng dụng",
    slug: "thep-tam-a36-va-a572-phan-biet-va-ung-dung",
    category: "kien-thuc-sat-thep",
    categoryLabel: "Kiến Thức Sắt Thép",
    excerpt:
      "So sánh chi tiết giữa thép tấm A36 và A572: thành phần hóa học, cơ tính, giá thành và ứng dụng phù hợp cho từng loại công trình.",
    content: "",
    image: "/images/posts/thep-tam-so-sanh.jpg",
    publishedAt: "2024-11-15",
    featured: true,
  },
  {
    id: "2",
    title: "Hướng dẫn chọn thép hình phù hợp cho nhà xưởng",
    slug: "huong-dan-chon-thep-hinh-cho-nha-xuong",
    category: "kien-thuc-sat-thep",
    categoryLabel: "Kiến Thức Sắt Thép",
    excerpt:
      "Bài viết tổng hợp các yếu tố cần cân nhắc khi lựa chọn thép hình I, H, U cho kết cấu nhà xưởng: tải trọng, khẩu độ và chi phí.",
    content: "",
    image: "/images/posts/thep-hinh-nha-xuong.jpg",
    publishedAt: "2024-10-28",
    featured: true,
  },
  {
    id: "3",
    title: "Đại Vĩnh An mở rộng thêm chi nhánh tại Thủ Đức",
    slug: "dai-vinh-an-mo-rong-chi-nhanh-thu-duc",
    category: "tin-doanh-nghiep",
    categoryLabel: "Tin Doanh Nghiệp",
    excerpt:
      "Đáp ứng nhu cầu ngày càng tăng của khách hàng khu vực Đông TP. Hồ Chí Minh, Đại Vĩnh An chính thức khai trương chi nhánh thứ 3 tại Tam Bình, Thủ Đức.",
    content: "",
    image: "/images/posts/chi-nhanh-thu-duc.jpg",
    publishedAt: "2024-09-10",
    featured: false,
  },
  {
    id: "4",
    title: "Xà gồ C và Z: Loại nào phù hợp cho dự án của bạn?",
    slug: "xa-go-c-va-z-loai-nao-phu-hop",
    category: "kien-thuc-sat-thep",
    categoryLabel: "Kiến Thức Sắt Thép",
    excerpt:
      "Phân tích ưu nhược điểm của xà gồ C và Z trong ứng dụng mái nhà xưởng — giúp bạn chọn đúng sản phẩm, tiết kiệm chi phí và đảm bảo an toàn kết cấu.",
    content: "",
    image: "/images/posts/xa-go-c-z.jpg",
    publishedAt: "2024-08-20",
    featured: false,
  },
  {
    id: "5",
    title: "Tiêu chuẩn thép xây dựng TCVN, JIS và ASTM",
    slug: "tieu-chuan-thep-tcvn-jis-astm",
    category: "kien-thuc-sat-thep",
    categoryLabel: "Kiến Thức Sắt Thép",
    excerpt:
      "Tổng quan về các tiêu chuẩn thép xây dựng thông dụng tại Việt Nam: TCVN, JIS (Nhật) và ASTM (Mỹ). Cách đọc và tra cứu ký hiệu thép đúng cách.",
    content: "",
    image: "/images/posts/tieu-chuan-thep.jpg",
    publishedAt: "2024-07-05",
    featured: false,
  },
  {
    id: "6",
    title: "Cung cấp thép kết cấu cho 2.000+ công trình mỗi năm",
    slug: "cung-cap-thep-2000-cong-trinh-moi-nam",
    category: "tin-doanh-nghiep",
    categoryLabel: "Tin Doanh Nghiệp",
    excerpt:
      "Với 30 năm kinh nghiệm và 4 nhà máy quy mô lớn, Đại Vĩnh An hiện đang cung cấp thép kết cấu cho hơn 2.000 đơn hàng mỗi năm trên khắp miền Nam.",
    content: "",
    image: "/images/posts/nang-luc-cung-cap.jpg",
    publishedAt: "2024-06-18",
    featured: false,
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getFeaturedPosts(): Post[] {
  return posts.filter((p) => p.featured);
}
