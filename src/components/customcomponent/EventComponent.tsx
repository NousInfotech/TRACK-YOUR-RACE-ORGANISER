import { UserPlus, Users } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { AppSidebar } from "./sidebarcomp";
import TopBar from "./topmenu";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { BaseTable } from "./TableComponent";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";

type Event = {
    title: string;
    date: string;
    time: string;
    description: string;
    url: string;
    info: string;
    created: string;
};

const EventComponent = () => {

    const sportsEvents = [
        { label: "Indian Premier League (IPL) 2025", value: "ipl" },
        { label: "Asia Cup 2025", value: "asiaCup" },
        { label: "ICC Women's Cricket World Cup", value: "womenCWC" },
        { label: "FIH Pro League (Men's & Women's)", value: "hockeyProLeague" },
        { label: "World Para Athletics Championships", value: "paraAthletics" },
        { label: "World Boxing Cup Finals", value: "boxingCup" },
        { label: "Junior Men's Hockey World Cup", value: "juniorHockeyWC" },
        { label: "BWF World Junior Championships", value: "bwfJuniorWC" },
        { label: "Syed Modi International (Badminton)", value: "syedModi" },
        { label: "Guwahati Masters (Badminton)", value: "guwahatiMasters" },
        { label: "Odisha Masters (Badminton)", value: "odishaMasters" },
        { label: "Continental Tour Bronze Meet (Athletics)", value: "continentalTour" },
        { label: "Khelo India Youth Games", value: "kheloIndia" },
        { label: "National Games", value: "nationalGames" },
        { label: "Khelo India Winter Games", value: "kheloWinter" },
        { label: "Khelo India Summer Games", value: "kheloSummer" },
        { label: "Pro Kabaddi League", value: "proKabaddi" },
        { label: "Indian Super League (Football)", value: "indianSuperLeague" },
        { label: "Premier Badminton League", value: "premierBadminton" },
        { label: "World Junior U-20 Chess Championship", value: "chessU20" },
        { label: "Kho Kho World Cup", value: "khoKhoWC" },
    ];

  

    const eventColumns: ColumnDef<Event>[] = [
        {
            accessorKey: "title",
            header: "Title",
        },
        {
            accessorKey: "date",
            header: "Date",
        },
        {
            accessorKey: "time",
            header: "Time",
        },
        {
            accessorKey: "description",
            header: "Description",
        },
        {
            accessorKey: "url",
            header: "URL",
            cell: ({ row }: any) => (
                <a
                    href={row.original.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                >
                    {row.original.url}
                </a>
            ),
        },
        {
            accessorKey: "info",
            header: "Info",
        },
        {
            accessorKey: "created",
            header: "Created",
        },
        {
            id: "actions",
            header: "Action",
            cell: () => (
                <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                        <Pencil className="w-4 h-4" />
                    </Button>
                    <Button variant="destructive" size="sm">
                        <Trash2 className="w-4 h-4" />
                    </Button>
                </div>
            ),
        },
    ];

    const eventData = [
        {
          title: "IPL 2025 Opening Ceremony",
          date: "2025-04-10",
          time: "18:00",
          description: "The grand opening ceremony of IPL 2025.",
          url: "https://ipl2025.com/opening",
          info: "Wankhede Stadium, Mumbai",
          created: "2025-03-01",
        },
        {
          title: "Asia Cup Final",
          date: "2025-06-12",
          time: "20:00",
          description: "The final match of the Asia Cup 2025.",
          url: "https://asiacup2025.com/final",
          info: "Eden Gardens, Kolkata",
          created: "2025-03-15",
        },
        {
          title: "Badminton World Championship",
          date: "2025-07-03",
          time: "14:00",
          description: "Quarter finals of the World Championship.",
          url: "https://bwf.com/wc2025",
          info: "Indira Gandhi Stadium, Delhi",
          created: "2025-03-18",
        },
        {
          title: "Pro Kabaddi Semi-Finals",
          date: "2025-05-22",
          time: "19:00",
          description: "Two matches to decide who goes to the finals.",
          url: "https://prokabaddi.com/semi",
          info: "Chennai Indoor Stadium",
          created: "2025-03-22",
        },
      ];
      


    return (
        <div className="flex h-screen w-screen">
            {/* Sidebar on the left */}
            <AppSidebar />

            {/* Right side: TopBar + Content */}
            <div className="flex flex-col flex-1">
                {/* TopBar at the top */}
                <TopBar />

                {/* Main content below topbar (optional) */}
                <div className="overflow-auto p-4">
                    {/* Your main page content here */}
                    <h1 className="text-xl font-bold">Events Lists</h1>
                    <div className="flex flex-row items-center mt-5 gap-5">
                        <Card className="w-[23%] mt-5 pt-2 ">
                            <CardContent className="flex flex-row items-center justify-start gap-5">
                                <div className="flex flex-row items-center gap-2">
                                    <Users className="w-5 h-5 text-muted-foreground" />

                                </div>
                                <div>
                                    <div>Total Events</div>
                                    <div>10</div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="w-[20%] mt-5  pt-2">
                            <CardContent className="flex flex-row items-center justify-start gap-5">
                                <div className="flex flex-row items-center gap-2">
                                    <UserPlus className="w-5 h-5 text-muted-foreground" />

                                </div>
                                <div>
                                    <div>Upcomeing Events</div>
                                    <div>10</div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="w-[20%] mt-5  pt-2">
                            <CardContent className="flex flex-row items-center justify-start gap-5">
                                <div className="flex flex-row items-center gap-2">
                                    <UserPlus className="w-5 h-5 text-muted-foreground" />

                                </div>
                                <div>
                                    <div>Todays Events</div>
                                    <div>0</div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="flex flex-row items-center justify-between mt-5 w-full border border-gray-300 rounded-lg p-4 shadow-md">
                        <Input
                            placeholder="Search by name, email, or phone"
                            className="w-[80%] mr-4"
                            style={{ width: "80%" }}
                        />

                        <Select className="w-[20%] mt-5" style={{ width: "20%" }}>
                            <SelectTrigger className="w-full">
                                <SelectValue className="w-full" placeholder="All Events" />
                            </SelectTrigger>
                            <SelectContent className="w-full">
                                {sportsEvents.map((event) => (
                                    <SelectItem key={event.value} value={event.value}>
                                        {event.label}
                                    </SelectItem>))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="mt-5">
                        <BaseTable data={eventData} columns={eventColumns} />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default EventComponent;