import { AppSidebar } from "./sidebarcomp";
import TopBar from "./topmenu";
import {
    Card,
    CardContent
} from "@/components/ui/card"
import {
    CheckCircle,
    Loader2,
    ShieldCheck,
    Clock,
} from "lucide-react";
import { BaseTable } from "./TableComponent";
import { ColumnDef } from "@tanstack/react-table";

const DashboardComp = () => {



    type CommissionData = {
        serviceType: string;
        commissionPercent: number;
        totalBookings: number;
        commissionAmount: string;
    };

    const columns: ColumnDef<CommissionData>[] = [
        {
            accessorKey: "serviceType",
            header: "Service Type",
        },
        {
            accessorKey: "commissionPercent",
            header: "Commission %",
            cell: ({ row }: any) => `${row.getValue("commissionPercent")}%`,
        },
        {
            accessorKey: "totalBookings",
            header: "Total Bookings",
        },
        {
            accessorKey: "commissionAmount",
            header: "Commission Amount",
        },
    ];

    const data = [
        {
            serviceType: "Plumbing",
            commissionPercent: 10,
            totalBookings: 120,
            commissionAmount: "$1,200",
        },
        {
            serviceType: "Electrical",
            commissionPercent: 12,
            totalBookings: 95,
            commissionAmount: "$1,140",
        },
        {
            serviceType: "Cleaning",
            commissionPercent: 8,
            totalBookings: 180,
            commissionAmount: "$1,296",
        },
        {
            serviceType: "Painting",
            commissionPercent: 15,
            totalBookings: 60,
            commissionAmount: "$900",
        },
        {
            serviceType: "Carpentry",
            commissionPercent: 9,
            totalBookings: 85,
            commissionAmount: "$765",
        },
        {
            serviceType: "AC Repair",
            commissionPercent: 11,
            totalBookings: 100,
            commissionAmount: "$1,100",
        },
        {
            serviceType: "Pest Control",
            commissionPercent: 7,
            totalBookings: 150,
            commissionAmount: "$1,050",
        },
        {
            serviceType: "Appliance Repair",
            commissionPercent: 10,
            totalBookings: 130,
            commissionAmount: "$1,300",
        },
        {
            serviceType: "Gardening",
            commissionPercent: 6,
            totalBookings: 70,
            commissionAmount: "$420",
        },
        {
            serviceType: "Roofing",
            commissionPercent: 13,
            totalBookings: 40,
            commissionAmount: "$520",
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
                    <h1 className="text-xl font-bold">Dashboard</h1>
                    <div className="flex flex-row justify-between items-center mt-5">
                        <Card className="w-[23%] mt-5 pt-2 ">
                            <CardContent className="flex flex-row items-center justify-start gap-5">
                                <div className="flex flex-row items-center gap-2">
                                    <ShieldCheck className="w-5 h-5" />

                                </div>
                                <div>
                                    <div>Confirmed</div>
                                    <div>0</div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="w-[20%] mt-5  pt-2">
                            <CardContent className="flex flex-row items-center justify-start gap-5">
                                <div className="flex flex-row items-center gap-2">
                                    <Loader2 className="w-5 h-5 animate-spin" />

                                </div>
                                <div>
                                    <div>Ongoing</div>
                                    <div>0</div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="w-[20%] mt-5  pt-2">
                            <CardContent className="flex flex-row items-center justify-start gap-5">
                                <div className="flex flex-row items-center gap-2">
                                    <CheckCircle className="w-5 h-5" />

                                </div>
                                <div>
                                    <div>Completed</div>
                                    <div>0</div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="w-[20%] mt-5  pt-2">
                            <CardContent className="flex flex-row items-center justify-start gap-5">
                                <div className="flex flex-row items-center gap-2">
                                    <Clock className="w-5 h-5" />

                                </div>
                                <div>
                                    <div>Pending</div>
                                    <div>0</div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <h1>Commmison Breakdown</h1>
                    <div>
                        <BaseTable data={data} columns={columns} />
                    </div>
                </div>


            </div>
        </div>
    );
};

export default DashboardComp;
