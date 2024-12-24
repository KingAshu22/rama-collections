import { connectToDB } from "@/app/_utils/mongodb";
import Lehenga from "@/models/Lehenga";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    try {
        const { _id } = await params; // Get the `_id` from the URL
        const lehenga = await Lehenga.findById(_id);

        if (!lehenga) {
            return new Response(JSON.stringify({ message: "Lehenga not found" }), {
                status: 404,
                headers: { "Content-Type": "application/json" },
            });
        }

        return new Response(JSON.stringify(lehenga), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error fetching lehenga data:", error);
        return new Response(JSON.stringify({ message: "Failed to fetch lehenga data.", error: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}

export async function PUT(req, { params }) {
    try {
        const { _id } = await params; // Get the `_id` from the URL
        const body = await req.json(); // Parse the incoming JSON data

        const updatedLehenga = await Lehenga.findByIdAndUpdate(_id, body, { new: true });

        if (!updatedLehenga) {
            return new Response(JSON.stringify({ message: "Lehenga not found" }), {
                status: 404,
                headers: { "Content-Type": "application/json" },
            });
        }

        return new Response(JSON.stringify({ message: "Lehenga updated successfully!", updatedLehenga }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error updating lehenga data:", error);
        return new Response(JSON.stringify({ message: "Failed to update lehenga data.", error: error.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}

export async function DELETE(req, { params }) {
    try {
        console.log("Deleting lehenga")
        await connectToDB();
        console.log("Connected to MongoDB")
        const { _id } = await params; // Get the `_id` from the URL
        console.log("_id: ", _id);


        const deletedLehenga = await Lehenga.findByIdAndDelete(_id);

        if (!deletedLehenga) {
            return NextResponse.json(
                { error: "Lehenga not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { message: "Lehenga deleted successfully!" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error deleting lehenga data:", error);
        return NextResponse.json(
            { message: "Failed to delete lehenga data." },
            { status: 500 }
        );
    }
}
