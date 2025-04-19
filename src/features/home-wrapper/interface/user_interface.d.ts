import { NavMainProps } from "@/components/shared-ui/nav-main";
import { CompanyData } from "@sheetsway/api/src/interfaces/company";
import { EmployeeData } from "@sheetsway/api/src/interfaces/employee";
import { ClientData } from "@sheetsway/shared/src/interfaces/client";
import { LucideIcon } from "lucide-react";
export interface SideBarInterface extends NavMainProps {
  root: string;
  data: {
    title: string;
    url: string;
    icon?: LucideIcon;
    hide?: boolean;
    isActive?: boolean;
    edit?: boolean;
    items?: ISidebarComponent[];
  }[];
}

export interface ISidebarComponent {
  title: string;
  url: string;
  hide?: boolean;
  icon?: LucideIcon;
}
