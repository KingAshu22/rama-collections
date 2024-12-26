import { NextResponse } from "next/server";
import { connectToDB } from "@/app/_utils/mongodb";
import Lehenga from "@/models/Lehenga";

export async function POST(req) {
    await connectToDB();
    try {
        const {
            clientName,
            contactNumber,
            date,
            waistCircumference,
            hipCircumference,
            lehengaLength,
            bottomHem,
            bustCircumference,
            underbustCircumference,
            blouseLength,
            shoulderWidth,
            sleeveLength,
            sleeveCircumference,
            frontNeckLineDepth,
            backNeckLineDepth,
            dupattaLength,
            dupattaWidth,
            lehengaStyle,
            blouseStyle,
            embroideryPreference,
            fabricChoice,
            colour,
            additionalNotes,
        } = await req.json();

        console.log("Lehenga Data", clientName,
            contactNumber,
            date,
            waistCircumference,
            hipCircumference,
            lehengaLength,
            bottomHem,
            bustCircumference,
            underbustCircumference,
            blouseLength,
            shoulderWidth,
            sleeveLength,
            sleeveCircumference,
            frontNeckLineDepth,
            backNeckLineDepth,
            dupattaLength,
            dupattaWidth,
            lehengaStyle,
            blouseStyle,
            embroideryPreference,
            fabricChoice,
            colour,
            additionalNotes,)

        // Create a new Lehenga document
        const newLehenga = await Lehenga.create({
            clientName,
            contactNumber,
            date,
            waistCircumference,
            hipCircumference,
            lehengaLength,
            bottomHem,
            bustCircumference,
            underbustCircumference,
            blouseLength,
            shoulderWidth,
            sleeveLength,
            sleeveCircumference,
            frontNeckLineDepth,
            backNeckLineDepth,
            dupattaLength,
            dupattaWidth,
            lehengaStyle,
            blouseStyle,
            embroideryPreference,
            fabricChoice,
            colour,
            additionalNotes,
        });

        // Send a success response
        return NextResponse.json(newLehenga, { status: 201 });
    } catch (error) {
        console.error("Error saving Lehenga data:", error);
        return NextResponse.json(
            { error: "Failed to create lehenga" },
            { status: 500 }
        );
    }
}

// GET: Fetch all lehengas
export async function GET() {
    await connectToDB();
    try {
        // Fetch all lehengas from the database
        const lehengas = await Lehenga.find();

        // Return the lehengas
        return NextResponse.json(lehengas, { status: 200 });
    } catch (error) {
        console.error("Error fetching lehengas:", error);
        return NextResponse.json(
            { error: "Failed to fetch lehengas" },
            { status: 500 }
        );
    }
}