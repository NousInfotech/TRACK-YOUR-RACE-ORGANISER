import {
  Bell,
  ChevronsUpDown,
  BadgeCheck,
  CreditCard,
  LogOut,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CLink } from "@/components/cui/c-link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useNavigate } from "react-router";
import { useAuthState } from "@/context/auth";
import useFetchData from "@/hooks/use-fetch-data";
import useHelperFunctions from "@/hooks/use-helper-function";

export function NavUser() {
  const { onToggleLogoutModal } = useAuthState();
  const navigate = useNavigate();
  const { isMobile } = useSidebar();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage
                  className="object-cover"
                  src={"/"}
                  // alt={user?.first_name}
                />
                <AvatarFallback className="rounded-lg">
                  {/* {user?.first_name[0]}
                  {user?.last_name[0]} */}
                </AvatarFallback>
              </Avatar>

              {/* <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate heading font-semibold">
                  {user?.first_name} {user?.last_name}
                </span>
                <span className="truncate text-xs">{user?.email_id}</span>
              </div> */}
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            {/* <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage
                    className="object-cover"
                    src={"/"}
                    alt={user?.first_name}
                  />
                  <AvatarFallback className="rounded-lg">
                    {user?.first_name[0]}
                    {user?.last_name[0]}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    {user?.first_name} {user?.last_name}
                  </span>
                  <span className="truncate text-xs">{user?.email_id}</span>
                </div>
              </div>
            </DropdownMenuLabel> */}
            <DropdownMenuSeparator />
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={() => navigate("/home/edit-profile")}>
                <BadgeCheck />
                <CLink href={"/edit-profile"}>Account</CLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell />
                <CLink href="">Notifications</CLink>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={onToggleLogoutModal}>
              <LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
