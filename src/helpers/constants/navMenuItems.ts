import { T_IconName } from "@/components/bases/icon/types";

interface I_NavMenuItems {
  id: string;
  label: string;
  icon: T_IconName;
}

export const navMenuItems: I_NavMenuItems[] = [
  {
    id: "home",
    label: "Home",
    icon: "home-filled",
  },
  {
    id: "about",
    label: "About",
    icon: "ghost-filled",
  },
  {
    id: "skills",
    label: "Skills",
    icon: "code-circle-2-filled",
  },
  {
    id: "experience",
    label: "Experience",
    icon: "apps-filled",
  },
  {
    id: "portfolio",
    label: "Portfolio",
    icon: "stack-2-filled",
  },
  {
    id: "blogs",
    label: "Blogs",
    icon: "article-filled",
  },
  {
    id: "contact",
    label: "Contact",
    icon: "mail-filled",
  },
];
