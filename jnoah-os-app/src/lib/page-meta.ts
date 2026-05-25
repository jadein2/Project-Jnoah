import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  Target,
  Users,
  UserRound,
} from "lucide-react";

export type PageMeta = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
};

const ROUTES: Record<string, PageMeta> = {
  "/": {
    title: "Command Center",
    subtitle: "Today at a glance",
    icon: LayoutDashboard,
  },
  "/clients": {
    title: "Training Roster",
    subtitle: "Active coaching clients",
    icon: Users,
  },
  "/goals": {
    title: "Business Targets",
    subtitle: "Growth & systems goals",
    icon: Target,
  },
};

export function getPageMeta(pathname: string): PageMeta {
  if (pathname.startsWith("/clients/") && pathname !== "/clients") {
    const slug = pathname.split("/").pop() ?? "client";
    const title = slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    return {
      title,
      subtitle: "Training roster · Client profile",
      icon: UserRound,
    };
  }
  return ROUTES[pathname] ?? {
    title: "Jnoah OS",
    subtitle: "Gym system access",
    icon: LayoutDashboard,
  };
}
