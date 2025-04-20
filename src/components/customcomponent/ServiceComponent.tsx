import { UserPlus, Users } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { AppSidebar } from "./sidebarcomp";
import TopBar from "./topmenu";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { ColumnDef } from "@tanstack/react-table";
import { BaseTable } from "./TableComponent";

export type RevenueAnalytics = {
    title: string;
    totalBookings: number;
    feePerBooking: number;
    platformFee: number;
    totalRevenue: number;
};

const ServiceComponent = () => {

    const revenueColumns: ColumnDef<RevenueAnalytics>[] = [
        {
            accessorKey: "title",
            header: "Event Title",
        },
        {
            accessorKey: "totalBookings",
            header: "Total Bookings",
        },
        {
            accessorKey: "feePerBooking",
            header: "Fee Per Booking",
            cell: ({ row }: any) => `$${row.original.feePerBooking}`,
        },
        {
            accessorKey: "platformFee",
            header: "Platform Fee Collected",
            cell: ({ row }: any) => `$${row.original.platformFee}`,
        },
        {
            accessorKey: "totalRevenue",
            header: "Total Revenue",
            cell: ({ row }: any) => `$${row.original.totalRevenue}`,
        },
    ];

    const revenueData: RevenueAnalytics[] = [
        {
            title: "IPL Final",
            totalBookings: 150,
            feePerBooking: 15,
            platformFee: 2250,
            totalRevenue: 15000,
        },
        {
            title: "Champions League",
            totalBookings: 100,
            feePerBooking: 20,
            platformFee: 2000,
            totalRevenue: 20000,
        },
        {
            title: "Wimbledon Final",
            totalBookings: 80,
            feePerBooking: 18,
            platformFee: 1440,
            totalRevenue: 14400,
        },
        {
            title: "FIFA Final",
            totalBookings: 200,
            feePerBooking: 25,
            platformFee: 5000,
            totalRevenue: 25000,
        },
        {
            title: "Super Bowl",
            totalBookings: 120,
            feePerBooking: 30,
            platformFee: 3600,
            totalRevenue: 24000,
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
                    <h1 className="text-xl font-bold">Services</h1>
                    <div className="flex flex-row items-center mt-5 gap-5">
                        {/* <Card className="w-[23%] mt-5 pt-2 ">
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
                        </Card> */}
                    </div>

                    <div className="flex flex-row items-center justify-between mt-5 w-full border border-gray-300 rounded-lg p-4 shadow-md">
                        <Input
                            placeholder="Search by title"
                            className="w-[80%] mr-4"
                            style={{ width: "80%" }}
                        />

                        {/* <Select className="w-[20%] mt-5" style={{ width: "20%" }}>
                            <SelectTrigger className="w-full">
                                <SelectValue className="w-full" placeholder="All Events" />
                            </SelectTrigger> */}
                            {/* <SelectContent className="w-full">
                                {sportsEvents.map((event) => (
                                    <SelectItem key={event.value} value={event.value}>
                                        {event.label}
                                    </SelectItem>))}
                            </SelectContent> */}
                        {/* </Select> */}
                    </div>

                    <div className="mt-5">
                        <BaseTable data={revenueData} columns={revenueColumns} />
                    </div>
                </div>


            </div>
        </div>
    )
};

export default ServiceComponent;