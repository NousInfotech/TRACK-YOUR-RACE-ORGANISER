import Wrapper from "./wrapper";
import { Layers, ShieldCheck, Users } from "lucide-react";
import { SideBarInterface } from "./interface/user_interface";

import { ReactNode } from "react";
import {
  dashboard_path,
  home_path,
  pages_path,
  pages_path_1,
} from "@/data/path";

type MyComponentProps = {
  children?: ReactNode;
};

function Index({ children }: MyComponentProps) {
  const data: SideBarInterface = {
    root: home_path,
    data: [
      {
        title: "Dashboard",
        url: dashboard_path,
        icon: Users,
      },
      {
        title: "Pages",
        icon: ShieldCheck,
        url: pages_path,
        items: [
          {
            url: pages_path_1,
            title: "Pages",
            icon: Layers,
            hide: false,
          },
        ],
      },
    ],
  };

  return <Wrapper data={data}>{children}</Wrapper>;
}

export default Index;
