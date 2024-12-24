"use client";

import LehengaForm from "@/app/_components/LehengaForm";
import axios from "axios";
import { useState, useEffect } from "react";
import { use } from "react";
import toast from "react-hot-toast";

export default function EditLehenga({ params }) {
    const { _id } = use(params); // Unwrap params using `use()`
    const [lehenga, setLehenga] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLehenga = async () => {
            try {
                const response = await axios.get(`/api/lehenga/${_id}`);
                setLehenga(response.data);
            } catch (error) {
                console.error("Error fetching Lehenga data:", error);
                toast.error("Failed to fetch Lehenga data. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchLehenga();
    }, [_id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Loading...</p>
            </div>
        );
    }

    if (!lehenga) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Lehenga data not found.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <LehengaForm isEdit={true} lehenga={lehenga} />
        </div>
    );
}
