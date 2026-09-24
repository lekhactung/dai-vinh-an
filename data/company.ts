import type { Company, Stat } from "@/types/company";

export const company: Company = {
  name: "Công ty TNHH Thương Mại Sản Xuất Đại Vĩnh An",
  shortName: "Đại Vĩnh An",
  slogan: "Thép cho hiện tại - Vững cho tương lai",
  description:
    "Chúng tôi luôn đặt chất lượng và sự hài lòng của khách hàng lên hàng đầu, cam kết cung cấp thép đạt tiêu chuẩn quốc tế, đảm bảo tiến độ và hiệu quả cho mọi công trình.",
  email: "thucmy25@gmail.com",
  website: "https://daivinhan.com",
  workingHours: "Thứ 2 – Thứ 7: 7:00 – 17:30",
  headquarter: {
    name: "Trụ Sở Chính",
    address:
      "967 Tỉnh Lộ 10, Khu phố 8, Phường Tân Tạo, Quận Bình Tân, TP. Hồ Chí Minh",
    phones: ["090 818 138", "028 3750 5553", "0908 144 989"],
    email: "thucmy25@gmail.com",
  },
  branches: [
    {
      name: "Chi Nhánh 2",
      address: "C12/2A, Quốc Lộ 1A, TT. Tân Túc, H. Bình Chánh, TP. Hồ Chí Minh",
      phones: ["028 3760 8494", "0909 818 138", "0908 481 253"],
      email: "thucmy25@gmail.com",
    },
    {
      name: "Chi Nhánh 3",
      address: "143, Quốc Lộ 1A, P. Tam Bình, Q. Thủ Đức, TP. Hồ Chí Minh",
      phones: ["0908 173 159", "0909 823 475"],
      email: "thucmy25@gmail.com",
    },
  ],
  social: {
    facebook: "https://facebook.com/daivinhan",
    zalo: "https://zalo.me/0908144989",
  },
};

export const stats: Stat[] = [
  { value: "30+", label: "Năm kinh nghiệm" },
  { value: "4", label: "Nhà máy quy mô lớn" },
  { value: "2000+", label: "Đơn hàng mỗi năm" },
  { value: "5.000m²", label: "Diện tích nhà máy" },
];

/** Số điện thoại chính dùng cho CTA "Gọi ngay" */
export const primaryPhone = "0908144989";
export const primaryPhoneDisplay = "0908 144 989";
export const zaloPhone = "0908144989";
