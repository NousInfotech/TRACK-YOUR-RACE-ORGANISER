// import {
//   Sidebar,
//   SidebarHeader,
//   SidebarContent,
//   SidebarMenu,
//   SidebarMenuItem,
//   SidebarMenuButton,
// } from "@/components/ui/sidebar"

// import {
//   LayoutDashboard,
//   Users,
//   Truck,
//   Calendar,
//   Settings,
//   ClipboardList,
//   Star,
//   Phone,
//   Percent,
// } from "lucide-react"

// export function AppSidebar() {
//   return (
//     <Sidebar>
//       <SidebarHeader>
//         <div className="flex justify-center py-4">
//           <LayoutDashboard className="w-8 h-8 text-primary" />
//         </div>
//       </SidebarHeader>

//       <SidebarContent>
//         <SidebarMenu>
//           <SidebarMenuItem>
//             <SidebarMenuButton>
//               <LayoutDashboard />
//               <span>Dashboard</span>
//             </SidebarMenuButton>
//           </SidebarMenuItem>

//           <SidebarMenuItem>
//             <SidebarMenuButton>
//               <Users />
//               <span>User</span>
//             </SidebarMenuButton>
//           </SidebarMenuItem>

//           <SidebarMenuItem>
//             <SidebarMenuButton>
//               <Truck />
//               <span>Supplier</span>
//             </SidebarMenuButton>
//           </SidebarMenuItem>

//           <SidebarMenuItem>
//             <SidebarMenuButton>
//               <Calendar />
//               <span>Event</span>
//             </SidebarMenuButton>
//           </SidebarMenuItem>

//           <SidebarMenuItem>
//             <SidebarMenuButton>
//               <Settings />
//               <span>Service</span>
//             </SidebarMenuButton>
//           </SidebarMenuItem>

//           <SidebarMenuItem>
//             <SidebarMenuButton>
//               <ClipboardList />
//               <span>Booking</span>
//             </SidebarMenuButton>
//           </SidebarMenuItem>

//           <SidebarMenuItem>
//             <SidebarMenuButton>
//               <Star />
//               <span>Reviews</span>
//             </SidebarMenuButton>
//           </SidebarMenuItem>

//           <SidebarMenuItem>
//             <SidebarMenuButton>
//               <Phone />
//               <span>Contacts</span>
//             </SidebarMenuButton>
//           </SidebarMenuItem>

//           <SidebarMenuItem>
//             <SidebarMenuButton>
//               <Percent />
//               <span>Service Percentage</span>
//             </SidebarMenuButton>
//           </SidebarMenuItem>
//         </SidebarMenu>
//       </SidebarContent>
//     </Sidebar>
//   )
// }


'use client'

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

import {
  LayoutDashboard,
  Users,
  Truck,
  Calendar,
  Settings,
  ClipboardList,
  Star,
  Phone,
  Percent,
} from "lucide-react"

import { useNavigate, useLocation } from "react-router-dom"
import clsx from "clsx"

export function AppSidebar() {
  const navigate = useNavigate()
  const location = useLocation()

  // Define your menu items here
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
    { icon: Users, label: "Users", path: "/users" },
    { icon: Truck, label: "Supplier", path: "/suppliers" },
    { icon: Calendar, label: "Event", path: "/events" },
    { icon: Settings, label: "Service", path: "/services" },
    { icon: ClipboardList, label: "Booking", path: "/bookings" },
    { icon: Star, label: "Reviews", path: "/reviews" },
    { icon: Phone, label: "Contacts", path: "/contacts" },
    { icon: Percent, label: "Service Percentage", path: "/service-percentage" },
  ]

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex justify-center py-4">
          <LayoutDashboard className="w-8 h-8 text-primary" />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {menuItems.map(({ icon: Icon, label, path }) => {
            const isActive = location.pathname === path

            return (
              <SidebarMenuItem key={path}>
                <SidebarMenuButton
                  onClick={() => navigate(path)}
                  className={clsx(
                    "flex items-center gap-2",
                    isActive && "bg-muted text-primary"
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}
