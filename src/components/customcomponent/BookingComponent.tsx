import { UserPlus, Users } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { AppSidebar } from "./sidebarcomp";
import TopBar from "./topmenu";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { BaseTable } from "./TableComponent";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";


type ServiceBooking = {
    service: string;
    date: string;
    customer: string;
    location: string;
    guests: number;
    paymentStatus: "Paid" | "Pending" | "Failed";
};

const BookingComponent = () => {

    const serviceBookingData: ServiceBooking[] = [
        {
            service: "Plumbing",
            date: "2025-04-15",
            customer: "John Doe",
            location: "New York",
            guests: 2,
            paymentStatus: "Paid",
        },
        {
            service: "Cleaning",
            date: "2025-04-14",
            customer: "Jane Smith",
            location: "Los Angeles",
            guests: 1,
            paymentStatus: "Pending",
        },
        {
            service: "Electrical",
            date: "2025-04-13",
            customer: "Robert Johnson",
            location: "Chicago",
            guests: 3,
            paymentStatus: "Failed",
        },
        {
            service: "Pest Control",
            date: "2025-04-12",
            customer: "Emily Davis",
            location: "San Francisco",
            guests: 2,
            paymentStatus: "Paid",
        },
        {
            service: "AC Repair",
            date: "2025-04-11",
            customer: "Michael Brown",
            location: "Miami",
            guests: 1,
            paymentStatus: "Paid",
        },
    ];

    const serviceBookingColumns: ColumnDef<ServiceBooking>[] = [
        {
            accessorKey: "service",
            header: "Service",
        },
        {
            accessorKey: "date",
            header: "Date",
        },
        {
            accessorKey: "customer",
            header: "Customer",
        },
        {
            accessorKey: "location",
            header: "Location",
        },
        {
            accessorKey: "guests",
            header: "Guests",
        },
        {
            accessorKey: "paymentStatus",
            header: "Payment Status",
            cell: ({ row }: any) => {
                const status = row.getValue("paymentStatus");
                const statusColor =
                    status === "Paid"
                        ? "text-green-600"
                        : status === "Pending"
                            ? "text-yellow-600"
                            : "text-red-600";
                return <span className={`font-medium ${statusColor}`}>{status}</span>;
            },
        },
        {
            id: "actions",
            header: "Actions",
            cell: () => (
                <div className="flex gap-2">
                    <Button size="sm" variant="outline">Edit</Button>
                    <Button size="sm" variant="destructive">Delete</Button>
                </div>
            ),
        },
    ];

    function BookingStatusNavbar() {
        const [active, setActive] = useState("Confirmed Booking");
        const statuses = [
            "Confirmed Booking",
            "Failed Bookings",
            "Ongoing Bookings",
            "Completed Bookings",
            "Pending for Cancellation",
            "Cancelled Bookings",
        ];

        return ( 
            <div className="rounded-md border bg-white shadow-sm mt-3 mx-3">
                <div className="flex flex-wrap gap-2 mt-2 mb-2 mx-5">
                    {statuses.map((status) => (
                        <Button
                            key={status}
                            variant={active === status ? "default" : "outline"}
                            onClick={() => setActive(status)}
                        >
                            {status}
                        </Button>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="flex h-screen w-screen">
            {/* Sidebar on the left */}
            <AppSidebar />

            {/* Right side: TopBar + Content */}
            <div className="flex flex-col flex-1">
                {/* TopBar at the top */}
                <TopBar />

                <BookingStatusNavbar />
                {/* Main content below topbar (optional) */}
                <div className="overflow-auto p-4">
                    {/* Your main page content here */}
                    <h1 className="text-xl font-bold">Confirmed Bookings</h1>
                    <div className="flex flex-row items-center mt-5 gap-5">
                        <Card className="w-[23%] mt-5 pt-2 ">
                            <CardContent className="flex flex-row items-center justify-start gap-5">
                                <div className="flex flex-row items-center gap-2">
                                    <Users className="w-5 h-5 text-muted-foreground" />

                                </div>
                                <div>
                                    <div>Total Bookings</div>
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
                                    <div>Todays Bookings</div>
                                    <div>5</div>
                                </div>
                            </CardContent>
                        </Card>
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
                        <BaseTable data={serviceBookingData} columns={serviceBookingColumns} />
                    </div>
                </div>


            </div>
        </div>
    )
};

export default BookingComponent;