import type { Product } from "@/types/product";

export const products: Product[] = [
  // ===== THÉP TẤM =====
  {
    id: "thep-tam-a36-10-40mm",
    name: "Thép Tấm A36 (10mm–40mm × 3000×12000)",
    slug: "thep-tam-a36-10-40mm",
    categoryId: "thep-tam",
    categoryName: "Thép Tấm",
    shortDescription: "Thép tấm tiêu chuẩn ASTM A36, độ dày 10–40mm, kích thước 3000×12000mm.",
    description:
      "Thép tấm A36 là loại thép carbon kết cấu phổ biến nhất, đáp ứng tiêu chuẩn ASTM A36. Sản phẩm có độ bền kéo cao, khả năng hàn tốt, thích hợp cho kết cấu xây dựng, cầu đường và thiết bị công nghiệp.",
    images: ["/images/products/thep-tam-a36-1.jpg"],
    specifications: [
      { label: "Tiêu chuẩn", value: "ASTM A36" },
      { label: "Độ dày", value: "10mm – 40mm" },
      { label: "Kích thước", value: "3000 × 12000 mm" },
      { label: "Giới hạn chảy", value: "≥ 250 MPa" },
      { label: "Độ bền kéo", value: "400 – 550 MPa" },
    ],
    standard: "ASTM A36",
    applications: ["Kết cấu thép", "Cầu đường", "Thiết bị công nghiệp", "Đóng tàu"],
    featured: true,
  },
  {
    id: "thep-tam-a36-100-300mm",
    name: "Thép Tấm A36 (100mm–300mm × 2000×6000)",
    slug: "thep-tam-a36-100-300mm",
    categoryId: "thep-tam",
    categoryName: "Thép Tấm",
    shortDescription: "Thép tấm dày A36, độ dày 100–300mm, kích thước 2000×6000mm.",
    description:
      "Thép tấm A36 độ dày lớn (100–300mm) phù hợp cho các kết cấu chịu tải trọng nặng, máy công cụ, khuôn đúc và nền móng thiết bị công nghiệp nặng.",
    images: ["/images/products/thep-tam-a36-day-1.jpg"],
    specifications: [
      { label: "Tiêu chuẩn", value: "ASTM A36" },
      { label: "Độ dày", value: "100mm – 300mm" },
      { label: "Kích thước", value: "2000 × 6000 mm" },
      { label: "Giới hạn chảy", value: "≥ 250 MPa" },
    ],
    standard: "ASTM A36",
    applications: ["Kết cấu nặng", "Khuôn đúc", "Nền móng thiết bị", "Máy công cụ"],
    featured: false,
  },
  {
    id: "thep-tam-a572",
    name: "Thép Tấm A572 (50mm–70mm × 2000×12000)",
    slug: "thep-tam-a572",
    categoryId: "thep-tam",
    categoryName: "Thép Tấm",
    shortDescription: "Thép tấm cường độ cao A572, độ dày 50–70mm, kích thước 2000×12000mm.",
    description:
      "Thép tấm ASTM A572 Grade 50 là loại thép cường độ cao dùng trong kết cấu thép chịu lực, giảm trọng lượng kết cấu mà vẫn đảm bảo độ bền. Thích hợp cho cầu thép, kết cấu xây dựng tải trọng lớn.",
    images: ["/images/products/thep-tam-a572-1.jpg"],
    specifications: [
      { label: "Tiêu chuẩn", value: "ASTM A572 Grade 50" },
      { label: "Độ dày", value: "50mm – 70mm" },
      { label: "Kích thước", value: "2000 × 12000 mm" },
      { label: "Giới hạn chảy", value: "≥ 345 MPa" },
      { label: "Độ bền kéo", value: "450 – 600 MPa" },
    ],
    standard: "ASTM A572",
    applications: ["Cầu thép", "Kết cấu chịu lực cao", "Công trình công nghiệp"],
    featured: true,
  },
  {
    id: "thep-tam-asm400",
    name: "Thép Tấm ASM400 (Chống mài mòn)",
    slug: "thep-tam-asm400",
    categoryId: "thep-tam",
    categoryName: "Thép Tấm",
    shortDescription: "Thép tấm chống mài mòn ASM400, độ cứng cao, tuổi thọ vượt trội.",
    description:
      "Thép tấm ASM400 là thép chống mài mòn với độ cứng Brinell khoảng 400 HB. Được sử dụng trong thiết bị xây dựng, khai khoáng, toa xe, máy nghiền và các môi trường làm việc abrasive.",
    images: ["/images/products/thep-tam-asm400-1.jpg"],
    specifications: [
      { label: "Tiêu chuẩn", value: "ASM400" },
      { label: "Độ cứng", value: "370 – 430 HB" },
      { label: "Giới hạn chảy", value: "≥ 1000 MPa" },
    ],
    standard: "ASM400",
    applications: ["Thiết bị khai khoáng", "Toa xe", "Máy nghiền", "Bunker"],
    featured: false,
  },

  // ===== THÉP HỘP =====
  {
    id: "thep-hop-vuong-40x40",
    name: "Thép Hộp Vuông 40×40mm",
    slug: "thep-hop-vuong-40x40",
    categoryId: "thep-hop",
    categoryName: "Thép Hộp",
    shortDescription: "Thép hộp vuông 40×40mm, độ dày 1.2–3.0mm, chiều dài 6m.",
    description:
      "Thép hộp vuông 40×40 là quy cách phổ biến nhất trong xây dựng khung kết cấu nhẹ, cửa cổng, hàng rào và gia công cơ khí. Sản phẩm được sản xuất theo tiêu chuẩn TCVN và JIS.",
    images: ["/images/products/thep-hop-40x40-1.jpg"],
    specifications: [
      { label: "Quy cách", value: "40 × 40 mm" },
      { label: "Độ dày", value: "1.2 – 3.0 mm" },
      { label: "Chiều dài", value: "6 m" },
      { label: "Tiêu chuẩn", value: "TCVN / JIS" },
    ],
    standard: "TCVN / JIS",
    applications: ["Khung kết cấu", "Cửa cổng", "Hàng rào", "Cơ khí"],
    featured: true,
  },
  {
    id: "thep-hop-vuong-50x50",
    name: "Thép Hộp Vuông 50×50mm",
    slug: "thep-hop-vuong-50x50",
    categoryId: "thep-hop",
    categoryName: "Thép Hộp",
    shortDescription: "Thép hộp vuông 50×50mm, độ dày 1.5–4.0mm, chiều dài 6m.",
    description:
      "Thép hộp vuông 50×50 dùng cho kết cấu chịu tải trung bình: khung nhà xưởng nhẹ, giá kệ kho bãi, biển quảng cáo và nội thất công nghiệp.",
    images: ["/images/products/thep-hop-50x50-1.jpg"],
    specifications: [
      { label: "Quy cách", value: "50 × 50 mm" },
      { label: "Độ dày", value: "1.5 – 4.0 mm" },
      { label: "Chiều dài", value: "6 m" },
      { label: "Tiêu chuẩn", value: "TCVN / JIS" },
    ],
    standard: "TCVN / JIS",
    applications: ["Nhà xưởng nhẹ", "Giá kệ", "Biển quảng cáo", "Nội thất công nghiệp"],
    featured: false,
  },
  {
    id: "thep-hop-chu-nhat-40x80",
    name: "Thép Hộp Chữ Nhật 40×80mm",
    slug: "thep-hop-chu-nhat-40x80",
    categoryId: "thep-hop",
    categoryName: "Thép Hộp",
    shortDescription: "Thép hộp chữ nhật 40×80mm, độ dày 2.0–3.0mm, chiều dài 6m.",
    description:
      "Thép hộp chữ nhật 40×80 thích hợp cho kết cấu xà ngang, dầm phụ và các chi tiết cần tiết diện moment lớn theo một chiều.",
    images: ["/images/products/thep-hop-40x80-1.jpg"],
    specifications: [
      { label: "Quy cách", value: "40 × 80 mm" },
      { label: "Độ dày", value: "2.0 – 3.0 mm" },
      { label: "Chiều dài", value: "6 m" },
      { label: "Tiêu chuẩn", value: "TCVN / JIS" },
    ],
    standard: "TCVN / JIS",
    applications: ["Xà ngang", "Dầm phụ", "Kết cấu khung"],
    featured: false,
  },

  // ===== THÉP ỐNG =====
  {
    id: "thep-ong-tron-dn50",
    name: "Thép Ống Tròn DN50 (∅60.3mm)",
    slug: "thep-ong-tron-dn50",
    categoryId: "thep-ong",
    categoryName: "Thép Ống",
    shortDescription: "Thép ống tròn DN50, đường kính ngoài 60.3mm, chiều dài 6m.",
    description:
      "Thép ống tròn DN50 hàn điện trở (ERW) phổ biến trong hệ thống cấp nước, khí nén, dẫn dầu và kết cấu giàn giáo. Đạt tiêu chuẩn API 5L hoặc ASTM A53.",
    images: ["/images/products/thep-ong-dn50-1.jpg"],
    specifications: [
      { label: "Đường kính ngoài", value: "60.3 mm" },
      { label: "Độ dày", value: "2.9 – 5.0 mm" },
      { label: "Chiều dài", value: "6 m" },
      { label: "Tiêu chuẩn", value: "ASTM A53 / API 5L" },
    ],
    standard: "ASTM A53 / API 5L",
    applications: ["Cấp nước", "Khí nén", "Dẫn dầu", "Giàn giáo"],
    featured: true,
  },
  {
    id: "thep-ong-tron-dn100",
    name: "Thép Ống Tròn DN100 (∅114.3mm)",
    slug: "thep-ong-tron-dn100",
    categoryId: "thep-ong",
    categoryName: "Thép Ống",
    shortDescription: "Thép ống tròn DN100, đường kính ngoài 114.3mm, chiều dài 6m.",
    description:
      "Thép ống DN100 dùng trong hệ thống đường ống công nghiệp lớn, cột trụ kết cấu, và các ứng dụng cần đường kính ống trung bình.",
    images: ["/images/products/thep-ong-dn100-1.jpg"],
    specifications: [
      { label: "Đường kính ngoài", value: "114.3 mm" },
      { label: "Độ dày", value: "4.0 – 8.0 mm" },
      { label: "Chiều dài", value: "6 m" },
      { label: "Tiêu chuẩn", value: "ASTM A53 / API 5L" },
    ],
    standard: "ASTM A53 / API 5L",
    applications: ["Đường ống công nghiệp", "Cột trụ", "Kết cấu cầu"],
    featured: false,
  },
  {
    id: "thep-ong-tron-dn200",
    name: "Thép Ống Tròn DN200 (∅219.1mm)",
    slug: "thep-ong-tron-dn200",
    categoryId: "thep-ong",
    categoryName: "Thép Ống",
    shortDescription: "Thép ống tròn DN200, đường kính ngoài 219.1mm, chiều dài 6m.",
    description:
      "Thép ống DN200 phù hợp cho hệ thống thoát nước, dẫn lưu chất lỏng khối lượng lớn và cột kết cấu nhà cao tầng.",
    images: ["/images/products/thep-ong-dn200-1.jpg"],
    specifications: [
      { label: "Đường kính ngoài", value: "219.1 mm" },
      { label: "Độ dày", value: "6.0 – 12.0 mm" },
      { label: "Chiều dài", value: "6 m" },
      { label: "Tiêu chuẩn", value: "ASTM A53" },
    ],
    standard: "ASTM A53",
    applications: ["Thoát nước", "Dẫn lưu", "Cột kết cấu"],
    featured: false,
  },

  // ===== THÉP HÌNH =====
  {
    id: "thep-hinh-i200",
    name: "Thép Hình I200 (IPN 200)",
    slug: "thep-hinh-i200",
    categoryId: "thep-hinh",
    categoryName: "Thép Hình",
    shortDescription: "Thép hình chữ I cao 200mm, chiều dài 12m, tiêu chuẩn JIS/TCVN.",
    description:
      "Thép hình chữ I (IPN 200) được dùng làm dầm chịu uốn trong xây dựng nhà xưởng, cầu trục, sàn tầng và các kết cấu công nghiệp. Tiết diện chữ I tối ưu cho chịu lực theo phương đứng.",
    images: ["/images/products/thep-hinh-i200-1.jpg"],
    specifications: [
      { label: "Chiều cao", value: "200 mm" },
      { label: "Chiều rộng cánh", value: "75 mm" },
      { label: "Chiều dài", value: "12 m" },
      { label: "Tiêu chuẩn", value: "JIS G 3192 / TCVN" },
    ],
    standard: "JIS G 3192",
    applications: ["Dầm nhà xưởng", "Cầu trục", "Sàn tầng", "Kết cấu công nghiệp"],
    featured: true,
  },
  {
    id: "thep-hinh-h200",
    name: "Thép Hình H200×200",
    slug: "thep-hinh-h200",
    categoryId: "thep-hinh",
    categoryName: "Thép Hình",
    shortDescription: "Thép hình chữ H 200×200mm, chiều dài 12m, tải trọng lớn.",
    description:
      "Thép hình chữ H (wide flange) 200×200 được dùng làm cột và dầm trong kết cấu nhà thép tiền chế, cầu thép và công trình công nghiệp nặng. Khả năng chịu lực đa chiều vượt trội.",
    images: ["/images/products/thep-hinh-h200-1.jpg"],
    specifications: [
      { label: "Chiều cao", value: "200 mm" },
      { label: "Chiều rộng cánh", value: "200 mm" },
      { label: "Chiều dài", value: "12 m" },
      { label: "Tiêu chuẩn", value: "ASTM A992 / JIS" },
    ],
    standard: "ASTM A992",
    applications: ["Cột nhà thép", "Dầm chính", "Cầu thép", "Nhà tiền chế"],
    featured: true,
  },
  {
    id: "thep-hinh-u200",
    name: "Thép Hình U200 (UPN 200)",
    slug: "thep-hinh-u200",
    categoryId: "thep-hinh",
    categoryName: "Thép Hình",
    shortDescription: "Thép hình chữ U cao 200mm, chiều dài 12m.",
    description:
      "Thép hình chữ U (channel) dùng làm xà ngang, dầm phụ, ray trượt và kết cấu mái trong các công trình xây dựng và nhà xưởng.",
    images: ["/images/products/thep-hinh-u200-1.jpg"],
    specifications: [
      { label: "Chiều cao", value: "200 mm" },
      { label: "Chiều rộng cánh", value: "80 mm" },
      { label: "Chiều dài", value: "12 m" },
      { label: "Tiêu chuẩn", value: "JIS G 3192" },
    ],
    standard: "JIS G 3192",
    applications: ["Xà ngang", "Dầm phụ", "Ray trượt", "Mái nhà xưởng"],
    featured: false,
  },

  // ===== XÀ GỒ =====
  {
    id: "xa-go-c100",
    name: "Xà Gồ C100×50×20",
    slug: "xa-go-c100",
    categoryId: "xa-go",
    categoryName: "Xà Gồ",
    shortDescription: "Xà gồ C100×50×20mm, độ dày 1.6–2.5mm, chiều dài 6m.",
    description:
      "Xà gồ C (C-purlin) 100×50×20 là vật liệu kết cấu phổ biến nhất cho mái tôn, mái vòm nhà xưởng. Sản phẩm được gia công từ thép cuộn cán nguội chất lượng cao.",
    images: ["/images/products/xa-go-c100-1.jpg"],
    specifications: [
      { label: "Quy cách", value: "100 × 50 × 20 mm" },
      { label: "Độ dày", value: "1.6 – 2.5 mm" },
      { label: "Chiều dài", value: "6 m" },
      { label: "Tiêu chuẩn", value: "TCVN" },
    ],
    standard: "TCVN",
    applications: ["Mái tôn", "Vách ngăn nhà xưởng", "Kho bãi"],
    featured: true,
  },
  {
    id: "xa-go-z150",
    name: "Xà Gồ Z150×65×25",
    slug: "xa-go-z150",
    categoryId: "xa-go",
    categoryName: "Xà Gồ",
    shortDescription: "Xà gồ Z150×65×25mm, độ dày 2.0–3.0mm, chiều dài 6m.",
    description:
      "Xà gồ Z (Z-purlin) 150×65×25 dùng cho mái nhà xưởng khẩu độ lớn, khả năng chịu tải tốt hơn xà gồ C cùng quy cách. Dễ lắp đặt theo phương pháp lồng ghép.",
    images: ["/images/products/xa-go-z150-1.jpg"],
    specifications: [
      { label: "Quy cách", value: "150 × 65 × 25 mm" },
      { label: "Độ dày", value: "2.0 – 3.0 mm" },
      { label: "Chiều dài", value: "6 m" },
      { label: "Tiêu chuẩn", value: "TCVN" },
    ],
    standard: "TCVN",
    applications: ["Mái nhà xưởng", "Kho lạnh", "Trung tâm thương mại"],
    featured: false,
  },

  // ===== THÉP CUỘN =====
  {
    id: "thep-cuon-can-nong",
    name: "Thép Cuộn Cán Nóng SS400",
    slug: "thep-cuon-can-nong",
    categoryId: "thep-cuon",
    categoryName: "Thép Cuộn",
    shortDescription: "Thép cuộn cán nóng SS400, độ dày 2.0–12mm, rộng 1000–1500mm.",
    description:
      "Thép cuộn cán nóng SS400 là vật liệu đầu vào cho gia công cắt tấm, dập nguội và sản xuất ống thép. Sản phẩm đạt tiêu chuẩn JIS G3101 SS400.",
    images: ["/images/products/thep-cuon-can-nong-1.jpg"],
    specifications: [
      { label: "Tiêu chuẩn", value: "JIS G3101 SS400" },
      { label: "Độ dày", value: "2.0 – 12 mm" },
      { label: "Chiều rộng", value: "1000 – 1500 mm" },
      { label: "Trọng lượng cuộn", value: "5 – 25 tấn" },
    ],
    standard: "JIS G3101",
    applications: ["Gia công tấm", "Sản xuất ống", "Dập nguội"],
    featured: false,
  },
  {
    id: "thep-cuon-can-nguoi",
    name: "Thép Cuộn Cán Nguội SPCC",
    slug: "thep-cuon-can-nguoi",
    categoryId: "thep-cuon",
    categoryName: "Thép Cuộn",
    shortDescription: "Thép cuộn cán nguội SPCC, độ dày 0.3–3.0mm, bề mặt nhẵn mịn.",
    description:
      "Thép cuộn cán nguội SPCC có bề mặt nhẵn, dung sai kích thước chặt chẽ, thích hợp cho gia công stamping, sản xuất thân xe, tủ điện và các chi tiết yêu cầu độ chính xác cao.",
    images: ["/images/products/thep-cuon-can-nguoi-1.jpg"],
    specifications: [
      { label: "Tiêu chuẩn", value: "JIS G3141 SPCC" },
      { label: "Độ dày", value: "0.3 – 3.0 mm" },
      { label: "Chiều rộng", value: "600 – 1500 mm" },
    ],
    standard: "JIS G3141",
    applications: ["Stamping", "Thân xe", "Tủ điện", "Chi tiết chính xác"],
    featured: false,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((p) => p.categoryId === categoryId);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
