import { UserPlus, Users } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { AppSidebar } from "./sidebarcomp";
import { BaseTable } from "./TableComponent";
import TopBar from "./topmenu";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { ColumnDef } from "@tanstack/react-table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Mail, Phone } from "lucide-react";

type User = {
    name: string;
    email: string;
    phone: string;
    createdAt: string;
};

const UserComponent = () => {
    const users = [
        { id: 1, name: "John Doe", email: "john.doe@example.com", phone: "+1234567890" },
        { id: 2, name: "Jane Smith", email: "jane.smith@example.com", phone: "+1234567891" },
        { id: 3, name: "Michael Johnson", email: "michael.johnson@example.com", phone: "+1234567892" },
        { id: 4, name: "Emily Brown", email: "emily.brown@example.com", phone: "+1234567893" },
        { id: 5, name: "Chris Lee", email: "chris.lee@example.com", phone: "+1234567894" },
    ];

    const userColumns: ColumnDef<User>[] = [
        {
            accessorKey: "name",
            header: "Name",
            cell: ({ row }) => {
                const name: string = row.getValue("name");
                return (
                    <div className="flex items-center gap-3">
                        <Avatar>
                            <AvatarFallback>{name[0]}</AvatarFallback>
                        </Avatar>
                        <span>{name}</span>
                    </div>
                );
            },
        },
        {
            accessorKey: "email",
            header: "Email",
            cell: ({ row }) => {
                const email: string = row.getValue("email");
                return (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Mail className="h-4 w-4" /> {email}
                    </div>
                );
            },
        },
        {
            accessorKey: "phone",
            header: "Mobile No",
            cell: ({ row }) => {
                const phone: string = row.getValue("phone");
                return (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="h-4 w-4" /> {phone}
                    </div>
                );
            },
        },
        {
            accessorKey: "createdAt",
            header: "Created At",
            cell: ({ row }) => {
                const date: string = row.getValue("createdAt");
                return (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CalendarDays className="h-4 w-4" /> {date}
                    </div>
                );
            },
        },
        {
            id: "status",
            header: "",
            cell: () => (
                <Badge className="bg-green-100 text-green-700 border border-green-500">
                    Active
                </Badge>
            ),
        },
    ];

    const userData = [
        {
            name: "Pranav",
            email: "pranav@example.com",
            phone: "+91 9876543210",
            createdAt: "2024-12-12",
        },
        {
            name: "Aisha",
            email: "aisha@example.com",
            phone: "+91 9876501234",
            createdAt: "2024-10-05",
        },
        {
            name: "Mohit",
            email: "mohit@example.com",
            phone: "+91 9988776655",
            createdAt: "2025-01-20",
        },
        {
            name: "Divya",
            email: "divya@example.com",
            phone: "+91 9123456780",
            createdAt: "2025-02-01",
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
                    <h1 className="text-xl font-bold">Users Lists</h1>
                    <div className="flex flex-row items-center mt-5 gap-5">
                        <Card className="w-[23%] mt-5 pt-2 ">
                            <CardContent className="flex flex-row items-center justify-start gap-5">
                                <div className="flex flex-row items-center gap-2">
                                    <Users className="w-5 h-5 text-muted-foreground" />

                                </div>
                                <div>
                                    <div>Total Users</div>
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
                                    <div>Recent Users</div>
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
                                <SelectValue className="w-full" placeholder="Select a User" />
                            </SelectTrigger>
                            <SelectContent className="w-full">
                                {users.map((user) => (
                                    <SelectItem key={user.id} value={user.id.toString()}>
                                        {user.name} - {user.email} - {user.phone}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="mt-5">
                        <BaseTable data={userData} columns={userColumns} />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default UserComponent;