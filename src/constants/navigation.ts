import { NavItem, FooterLinkGroup } from "@/types/navigation";

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Home",
    labelId: "Beranda",
    href: "/",
  },
  {
    label: "About Us",
    labelId: "Tentang Kami",
    href: "/about",
  },
  {
    label: "Export Products",
    labelId: "Produk Ekspor",
    href: "/products",
  },
  {
    label: "Export Process",
    labelId: "Proses Ekspor",
    href: "/process",
  },
  {
    label: "Articles",
    labelId: "Artikel",
    href: "/articles",
  },
  {
    label: "Contact",
    labelId: "Kontak",
    href: "/contact",
  },
];

export const FOOTER_QUICK_LINKS: FooterLinkGroup = {
  title: "Quick Links",
  titleId: "Tautan Cepat",
  links: [
    { label: "Home", labelId: "Beranda", href: "/" },
    { label: "About Us", labelId: "Tentang Kami", href: "/about" },
    { label: "Export Products", labelId: "Produk Ekspor", href: "/products" },
    { label: "Export Process", labelId: "Proses Ekspor", href: "/process" },
    { label: "Articles", labelId: "Artikel", href: "/articles" },
    { label: "Contact", labelId: "Kontak", href: "/contact" },
  ],
};

export const FOOTER_PRODUCT_LINKS: FooterLinkGroup = {
  title: "Our Products",
  titleId: "Produk Kami",
  links: [
    { label: "Premium Cascara", labelId: "Premium Cascara", href: "/products" },
    { label: "Spec Sheet", labelId: "Spec Sheet", href: "/#spec-sheet" },
    { label: "Sample Request", labelId: "Sample Request", href: "/contact?inquiry=sample" },
  ],
};
