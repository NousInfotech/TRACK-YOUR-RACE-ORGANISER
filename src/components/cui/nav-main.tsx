import { ChevronRight, Plus } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { useNavigate } from "react-router";
import { joinPaths } from "@/lib/mergePath";
import { Button } from "../ui/button";
import { SideBarInterface } from "@/features/home-wrapper/interface/user_interface";

export function NavMain({ root, data }: SideBarInterface) {
  const navigate = useNavigate();

  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {data
            .filter(({ hide }) => !Boolean(hide))
            .map((item) =>
              item.items ? (
                <Collapsible
                  key={item.title}
                  asChild
                  defaultOpen={window.location.pathname.includes(item.url)}
                  className="group/collapsible"
                >
                  <SidebarMenuItem className="group/menu">
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton
                        size="lg"
                        className="flex group-data-[collapsible=icon]:justify-center"
                        tooltip={item.title}
                      >
                        {item.icon && <item.icon />}
                        <span className="group-data-[collapsible=icon]:hidden">
                          {item.title}
                        </span>
                        <div className="flex items-center ml-auto gap-2">
                          {item?.edit && (
                            <Button
                              variant="outline"
                              className="p-1 transition-all ease-in-out group-hover/menu:block hidden h-auto"
                              size="sm"
                              // onClick={() =>
                              //   navigate(
                              //     `/engagmemt${engagement_edit_qna_path}`
                              //   )
                              // }
                            >
                              <Plus className="w-4 h-4 ml-auto " />
                            </Button>
                          )}
                          <ChevronRight className="h-4 w-4 group-data-[collapsible=icon]:hidden transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        </div>
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items
                          .filter(({ hide }) => !Boolean(hide))
                          .map((subItem) => {
                            const url = joinPaths([
                              root,
                              item?.url ?? "",
                              subItem?.url ?? "",
                            ]);
                            return (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton
                                  isActive={window.location.pathname.includes(
                                    url
                                  )}
                                  onClick={() => navigate(url)}
                                  asChild
                                >
                                  <a
                                    onClick={(e) => e.preventDefault()}
                                    href={url}
                                  >
                                    {subItem.icon && <subItem.icon />}
                                    <span className="group-data-[collapsible=icon]:hidden truncate w-52">
                                      {subItem.title}
                                    </span>
                                  </a>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            );
                          })}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ) : (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    tooltip={item.title}
                    size="lg"
                    className="flex group-data-[collapsible=icon]:justify-center"
                    onClick={() => navigate(joinPaths([root, item?.url ?? ""]))}
                    isActive={window.location.pathname.includes(item.url)}
                    asChild
                  >
                    <a onClick={(e) => e.preventDefault()} href={item.url}>
                      {item.icon && <item.icon />}
                      <span className="group-data-[collapsible=icon]:hidden">
                        {item.title}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            )}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
