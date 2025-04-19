import { SidebarTrigger } from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function TopBar() {
  return (
    <header className="flex items-center justify-between px-4 py-2 border-b bg-background">
    {/* <header> */}
      {/* Left: Hamburger */}
      <SidebarTrigger />

      {/* Right: Profile Icon */}
      <div className="flex items-center gap-2">
        <Avatar className="h-8 w-8">
          <AvatarImage src="https://github.com/shadcn.png" alt="Profile" />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
