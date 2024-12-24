"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { HashLoader } from "react-spinners";

export default function Lehengas() {
    const [lehengas, setLehengas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchLehengas();
    }, []);

    const fetchLehengas = async () => {
        setLoading(true);
        setError(null);
        try {
            // Fetch initial enquiries
            const response = await axios.get("/api/lehenga");
            const lehengas = response.data;
            setLehengas(lehengas);
        } catch (error) {
            console.error("Error fetching Lehengas:", error);
            setError("Failed to fetch Lehengas. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="container mx-auto py-10">
                <div className="flex justify-center items-center p-10">
                    <HashLoader color="#dc2626" size={80} />
                </div>
            </div>
        );
    }

    if (error) {
        return <div className="container mx-auto py-10 text-red-500">{error}</div>;
    }

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={lehengas} />
        </div>
    );
}
