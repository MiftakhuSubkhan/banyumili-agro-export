export interface NavItem {
  label: string;
  labelId: string;
  href: string;
  isExternal?: boolean;
}

export interface FooterLinkGroup {
  title: string;
  titleId: string;
  links: {
    label: string;
    labelId: string;
    href: string;
  }[];
}
