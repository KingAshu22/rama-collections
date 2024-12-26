import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { ArrowUpDown, Eye, Trash, FileText } from "lucide-react";
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
import axios from "axios";
import Link from "next/link";
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

const generatePDF = async (lehengaData) => {
    const doc = new jsPDF();

    // Add Letterhead
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.setTextColor("#2B547E"); // Dark blue
    doc.text("Rama Collections", 105, 20, { align: "center" });
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.setTextColor("#444444"); // Dark grey
    doc.text("Goregaon East, Mumbai 400 065", 105, 28, { align: "center" });

    // Add a decorative line below the letterhead
    doc.setDrawColor("#2B547E"); // Dark blue
    doc.setLineWidth(1);
    doc.line(10, 32, 200, 32);

    // Add Title
    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.setTextColor("#2B547E"); // Dark blue
    doc.text("Lehenga Details", 105, 45, { align: "center" });

    // Section: Lehenga Measurements
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.setTextColor("#2B547E");
    doc.text("Lehenga Measurements", 10, 55);
    autoTable(doc, {
        startY: 60,
        columnStyles: {
            0: { fontStyle: "bold", textColor: "#2B547E", fillColor: "#D9EAF7" }, // Key styling
            2: { fontStyle: "bold", textColor: "#2B547E", fillColor: "#D9EAF7" },
            4: { fontStyle: "bold", textColor: "#2B547E", fillColor: "#D9EAF7" },
            6: { fontStyle: "bold", textColor: "#2B547E", fillColor: "#D9EAF7" },
        },
        body: [
            ["Waist Circumference", lehengaData.waistCircumference, "Hip Circumference", lehengaData.hipCircumference, "Lehenga Length", lehengaData.lehengaLength, "Bottom Hem", lehengaData.bottomHem],
        ],
        theme: "grid", // Adds borders
        styles: { fontSize: 10, cellPadding: 3 },
    });

    // Section: Blouse Measurements
    doc.text("Blouse Measurements", 10, doc.lastAutoTable.finalY + 10);
    autoTable(doc, {
        startY: doc.lastAutoTable.finalY + 15,
        columnStyles: {
            0: { fontStyle: "bold", textColor: "#2B547E", fillColor: "#D9EAF7" },
            2: { fontStyle: "bold", textColor: "#2B547E", fillColor: "#D9EAF7" },
            4: { fontStyle: "bold", textColor: "#2B547E", fillColor: "#D9EAF7" },
            6: { fontStyle: "bold", textColor: "#2B547E", fillColor: "#D9EAF7" },
        },
        body: [
            ["Bust Circumference", lehengaData.bustCircumference, "Underbust Circumference", lehengaData.underbustCircumference, "Blouse Length", lehengaData.blouseLength, "Shoulder Width", lehengaData.shoulderWidth],
            ["Sleeve Length", lehengaData.sleeveLength, "Sleeve Circumference", lehengaData.sleeveCircumference, "Front Neckline Depth", lehengaData.frontNeckLineDepth, "Back Neckline Depth", lehengaData.backNeckLineDepth],
        ],
        theme: "grid",
        styles: { fontSize: 10, cellPadding: 3 },
    });

    // Section: Dupatta Measurements
    doc.text("Dupatta Measurements", 10, doc.lastAutoTable.finalY + 10);
    autoTable(doc, {
        startY: doc.lastAutoTable.finalY + 15,
        columnStyles: {
            0: { fontStyle: "bold", textColor: "#2B547E", fillColor: "#D9EAF7" },
            2: { fontStyle: "bold", textColor: "#2B547E", fillColor: "#D9EAF7" },
        },
        body: [
            ["Dupatta Length", lehengaData.dupattaLength, "Dupatta Width", lehengaData.dupattaWidth],
        ],
        theme: "grid",
        styles: { fontSize: 10, cellPadding: 3 },
    });

    // Section: Design Preferences
    doc.text("Design Preferences", 10, doc.lastAutoTable.finalY + 10);
    autoTable(doc, {
        startY: doc.lastAutoTable.finalY + 15,
        columnStyles: {
            0: { fontStyle: "bold", textColor: "#2B547E", fillColor: "#D9EAF7" },
            2: { fontStyle: "bold", textColor: "#2B547E", fillColor: "#D9EAF7" },
        },
        body: [
            ["Lehenga Style", lehengaData.lehengaStyle, "Blouse Style", lehengaData.blouseStyle],
            ["Embroidery Preference", lehengaData.embroideryPreference, "Fabric Choice", lehengaData.fabricChoice],
            ["Colour", lehengaData.colour,],
        ],
        theme: "grid",
        styles: { fontSize: 10, cellPadding: 3 },
    });

    // Section: Additional Notes
    doc.text("Additional Notes", 10, doc.lastAutoTable.finalY + 10);
    autoTable(doc, {
        startY: doc.lastAutoTable.finalY + 15,
        columnStyles: {
            0: { fontStyle: "bold", textColor: "#2B547E" },
        },
        body: [
            [lehengaData.additionalNotes || "N/A"],
        ],
        theme: "grid",
        styles: { fontSize: 10, cellPadding: 3 },
    });

    // Save the PDF
    doc.save(`Lehenga_${lehengaData.clientName}.pdf`);
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
                        Are You Sure, You Want to Delete this Enquiry? This cannot be undone.
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
        header: "Actions",
        cell: ({ row }) => {
            const { _id, ...lehengaData } = row.original; // Get all data for the row
            return (
                <>
                    <ShowDelete _id={_id} />
                    <Link href={`/lehenga/${_id}`}>
                        <Button className="bg-green-600 p-1 rounded-lg text-white ml-2">
                            <Eye />
                        </Button>
                    </Link>
                    <Button
                        className="bg-blue-600 p-1 rounded-lg text-white ml-2"
                        onClick={() => generatePDF(lehengaData)}
                    >
                        <FileText />
                    </Button>
                </>
            );
        },
    },
];
