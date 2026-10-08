export const navLinks = [
    { label: "Trang chủ", href: "/" },
    { label: "Giới thiệu", href: "/gioi-thieu" },
    { label: "Sản phẩm", href: "/san-pham" },
    { label: "Dự án", href: "/du-an" },
    { label: "Tin tức", href: "/tin-tuc" },
    { label: "Liên hệ", href: "/lien-he" },
];

export const footerNavLinks = navLinks.filter(link => link.href !== "/" && link.href !== "/san-pham");
