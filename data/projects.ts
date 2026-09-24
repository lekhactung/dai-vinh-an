import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "nha-xuong-binh-duong",
    name: "Nhà Xưởng Sản Xuất Bình Dương",
    slug: "nha-xuong-san-xuat-binh-duong",
    location: "Bình Dương",
    type: "Nhà xưởng công nghiệp",
    products: ["Thép hình H", "Xà gồ C", "Thép hộp"],
    description:
      "Cung cấp toàn bộ kết cấu thép cho nhà xưởng sản xuất tại khu công nghiệp Bình Dương. Diện tích 5.000m², khẩu độ 30m, sử dụng thép hình H200 cho cột và dầm chính.",
    images: ["/images/projects/nha-xuong-binh-duong-1.jpg"],
    year: 2024,
    featured: true,
  },
  {
    id: "kho-bai-logistics",
    name: "Kho Bãi Logistics Long An",
    slug: "kho-bai-logistics-long-an",
    location: "Long An",
    type: "Kho bãi logistic",
    products: ["Thép hình I", "Xà gồ Z", "Thép tấm A36"],
    description:
      "Cung cấp thép kết cấu cho kho bãi logistics quy mô lớn tại Long An. Bao gồm dầm I200, xà gồ Z150 và thép tấm sàn.",
    images: ["/images/projects/kho-logistics-1.jpg"],
    year: 2024,
    featured: true,
  },
  {
    id: "cong-trinh-cong-nghiep-tphcm",
    name: "Xưởng Cơ Khí TP. Hồ Chí Minh",
    slug: "xuong-co-khi-tphcm",
    location: "TP. Hồ Chí Minh",
    type: "Xưởng cơ khí",
    products: ["Thép ống", "Thép hộp", "Thép tấm A572"],
    description:
      "Cung cấp thép ống, thép hộp và thép tấm cho xưởng cơ khí tại Bình Tân, TP. Hồ Chí Minh. Đảm bảo tiến độ và chất lượng theo yêu cầu kỹ thuật.",
    images: ["/images/projects/xuong-co-khi-1.jpg"],
    year: 2023,
    featured: false,
  },
  {
    id: "nha-may-thu-duc",
    name: "Nhà Máy Chế Biến Thủ Đức",
    slug: "nha-may-che-bien-thu-duc",
    location: "TP. Thủ Đức, TP. Hồ Chí Minh",
    type: "Nhà máy chế biến",
    products: ["Thép hình H", "Thép tấm A36", "Thép ống"],
    description:
      "Cung cấp thép kết cấu cho nhà máy chế biến thực phẩm tại Thủ Đức. Yêu cầu cao về chất lượng bề mặt và độ chính xác kích thước.",
    images: ["/images/projects/nha-may-thu-duc-1.jpg"],
    year: 2023,
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
