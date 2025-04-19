import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

import { Badge } from "@/components/ui/badge";
import { NavUser } from "./components/user-control";
import DynamicBreadcrumb from "@/components/cui/dynamic-breadcrumb";
import { ScrollArea } from "@/components/ui/scroll-area";
import { NavMain } from "@/components/cui/nav-main";
import { SideBarInterface } from "./interface/user_interface";
import { ThemeSwitcher } from "../theme-changer";
import useFetchData from "@/hooks/use-fetch-data";

const Header: React.FC = () => {
  // const { user, company } = useFetchData();
  return (
    <SidebarHeader className="p-4 group-data-[collapsible=icon]:p-2">
      <p className="font-extrabold text-2xl truncate heading uppercase">
        SAMPLE
      </p>
      <Separator />
    </SidebarHeader>
  );
};

const Wrapper = ({
  children,
  data,
}: {
  children: React.ReactNode;
  data: SideBarInterface;
}) => {
  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <Header />
        <SidebarContent>
          <NavMain root={data.root} data={data.data} />
        </SidebarContent>
        <SidebarFooter>
          <Separator />
          <NavUser />
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset className="relative">
        <img
          src="/images/back.svg"
          className="absolute top-0 left-0 opacity-5"
        />
        <div className="h-screen relative flex flex-col top-0 z-1">
          <header className="flex h-16 shrink-0 bg-sidebar border-b border-sidebar-border items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex justify-between w-full items-center gap-2 px-4">
              <div className="flex items-center gap-2">
                <SidebarTrigger />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <DynamicBreadcrumb />
              </div>
              <ThemeSwitcher />
            </div>
          </header>
          <ScrollArea className="h-full">
            <main className="h-[110vh]">{children}</main>
          </ScrollArea>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Wrapper;
