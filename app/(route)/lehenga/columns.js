import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Eye, Trash } from "lucide-react";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import { formatToIndianNumber } from "@/lib/utils";
// import Modal from "@/app/_components/Modal";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const deleteEnquiry = async (_id) => {
    try {
        const response = await axios.delete(`/api/lehenga/${_id}`, {
            withCredentials: true,
        });
        console.log("Delete response:", response.data);
    } catch (error) {
        console.error("Error deleting lehenga:", error);
        alert("Failed to delete lehenga. Please try again.");
    }
};


const ShowDelete = ({ _id }) => {
    const router = useRouter();
    return (
        <AlertDialog>
            <AlertDialogTrigger className="bg-red-600 p-1 rounded-lg text-white">
                <Trash />
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are You Sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Are You Sure, You Want to Delete this Enquiry. This cannot be
                        undone.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        className="bg-red-600"
                        onClick={async () => {
                            await deleteEnquiry(_id);
                            toast.success(
                                "Enquiry Deleted Successfully, Please Refresh 🔄..."
                            );
                            router.refresh();
                        }}
                    >
                        Delete Enquiry
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export const columns = [
    {
        accessorKey: "clientName",
        header: ({ column }) => (
            <span
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                className="flex items-center gap-1"
            >
                Client Name
                <ArrowUpDown className="h-4 w-4" />
            </span>
        ),
    },
    {
        accessorKey: "date",
        header: ({ column }) => (
            <span
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                className="flex items-center gap-1"
            >
                Date
                <ArrowUpDown className="h-4 w-4" />
            </span>
        ),
    },
    {
        accessorKey: "contactNumber",
        header: ({ column }) => (
            <span
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                className="flex items-center gap-1"
            >
                Contact
                <ArrowUpDown className="h-4 w-4" />
            </span>
        ),
    },
    {
        accessorKey: "_id",
        header: "Delete",
        cell: ({ row }) => {
            const { _id } = row.original;
            return (
                <>
                    <ShowDelete _id={_id} />
                    <Link href={`/lehenga/${_id}`}>
                        <Button className="bg-green-600 p-1 rounded-lg text-white ml-2">
                            <Eye />
                        </Button>
                    </Link>
                </>
            );
        },
    },
];
