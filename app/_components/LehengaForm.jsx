"use client";
import axios from "axios";
import { useState } from "react";

export default function LehengaForm({
    isEdit = false,
    lehenga,
}) {
    const [formData, setFormData] = useState({
        clientName: lehenga?.clientName || "",
        contactNumber: lehenga?.contactNumber || "",
        date: lehenga?.date || "",
        waistCircumference: lehenga?.waistCircumference || "",
        hipCircumference: lehenga?.hipCircumference || "",
        lehengaLength: lehenga?.lehengaLength || "",
        bottomHem: lehenga?.bottomHem || "",
        bustCircumference: lehenga?.bustCircumference || "",
        underbustCircumference: lehenga?.underbustCircumference || "",
        blouseLength: lehenga?.blouseLength || "",
        shoulderWidth: lehenga?.shoulderWidth || "",
        sleeveLength: lehenga?.sleeveLength || "",
        sleeveCircumference: lehenga?.sleeveCircumference || "",
        frontNeckLineDepth: lehenga?.frontNeckLineDepth || "",
        backNeckLineDepth: lehenga?.backNeckLineDepth || "",
        dupattaLength: lehenga?.dupattaLength || "",
        dupattaWidth: lehenga?.dupattaWidth || "",
        lehengaStyle: lehenga?.lehengaStyle || "A-line",
        blouseStyle: lehenga?.blouseStyle || "3/4 Sleeves",
        embroideryPreference: lehenga?.embroideryPreference || "",
        fabricChoice: lehenga?.fabricChoice || "Silk",
        colour: lehenga?.colour || "",
        additionalNotes: lehenga?.additionalNotes || "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = axios.post("/api/lehenga",
                {
                    clientName: formData.clientName,
                    contactNumber: formData.contactNumber,
                    date: formData.date,
                    waistCircumference: formData.waistCircumference,
                    hipCircumference: formData.hipCircumference,
                    lehengaLength: formData.lehengaLength,
                    bottomHem: formData.bottomHem,
                    bustCircumference: formData.bustCircumference,
                    underbustCircumference: formData.underbustCircumference,
                    blouseLength: formData.blouseLength,
                    shoulderWidth: formData.shoulderWidth,
                    sleeveLength: formData.sleeveLength,
                    sleeveCircumference: formData.sleeveCircumference,
                    frontNeckLineDepth: formData.frontNeckLineDepth,
                    backNeckLineDepth: formData.backNeckLineDepth,
                    dupattaLength: formData.dupattaLength,
                    dupattaWidth: formData.dupattaWidth,
                    lehengaStyle: formData.lehengaStyle,
                    blouseStyle: formData.blouseStyle,
                    embroideryPreference: formData.embroideryPreference,
                    fabricChoice: formData.fabricChoice,
                    colour: formData.colour,
                    additionalNotes: formData.additionalNotes,
                },
                { withCredentials: true }
            );

            alert("Lehenga measurement form submitted successfully!");
            setFormData({
                clientName: "",
                contactNumber: "",
                date: "",
                waistCircumference: "",
                hipCircumference: "",
                lehengaLength: "",
                bottomHem: "",
                bustCircumference: "",
                underbustCircumference: "",
                blouseLength: "",
                shoulderWidth: "",
                sleeveLength: "",
                sleeveCircumference: "",
                frontNeckLineDepth: "",
                backNeckLineDepth: "",
                dupattaLength: "",
                dupattaWidth: "",
                lehengaStyle: "A-line",
                blouseStyle: "3/4 Sleeves",
                embroideryPreference: "",
                fabricChoice: "Silk",
                colour: "",
                additionalNotes: "",
            });
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An unexpected error occurred. Please try again.");
        }
    };

    const editSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = axios.put(`/api/lehenga/${lehenga?._id}`,
                {
                    clientName: formData.clientName,
                    contactNumber: formData.contactNumber,
                    date: formData.date,
                    waistCircumference: formData.waistCircumference,
                    hipCircumference: formData.hipCircumference,
                    lehengaLength: formData.lehengaLength,
                    bottomHem: formData.bottomHem,
                    bustCircumference: formData.bustCircumference,
                    underbustCircumference: formData.underbustCircumference,
                    blouseLength: formData.blouseLength,
                    shoulderWidth: formData.shoulderWidth,
                    sleeveLength: formData.sleeveLength,
                    sleeveCircumference: formData.sleeveCircumference,
                    frontNeckLineDepth: formData.frontNeckLineDepth,
                    backNeckLineDepth: formData.backNeckLineDepth,
                    dupattaLength: formData.dupattaLength,
                    dupattaWidth: formData.dupattaWidth,
                    lehengaStyle: formData.lehengaStyle,
                    blouseStyle: formData.blouseStyle,
                    embroideryPreference: formData.embroideryPreference,
                    fabricChoice: formData.fabricChoice,
                    colour: formData.colour,
                    additionalNotes: formData.additionalNotes,
                },
                { withCredentials: true }
            );

            alert("Lehenga measurement form Editted successfully!");
            setFormData({
                clientName: "",
                contactNumber: "",
                date: "",
                waistCircumference: "",
                hipCircumference: "",
                lehengaLength: "",
                bottomHem: "",
                bustCircumference: "",
                underbustCircumference: "",
                blouseLength: "",
                shoulderWidth: "",
                sleeveLength: "",
                sleeveCircumference: "",
                frontNeckLineDepth: "",
                backNeckLineDepth: "",
                dupattaLength: "",
                dupattaWidth: "",
                lehengaStyle: "A-line",
                blouseStyle: "3/4 Sleeves",
                embroideryPreference: "",
                fabricChoice: "Silk",
                colour: "",
                additionalNotes: "",
            });
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An unexpected error occurred. Please try again.");
        }
    };

    return (
        <form
            className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8 space-y-6"
            onSubmit={isEdit ? editSubmit : handleSubmit}
        >
            <h1 className="text-2xl font-bold text-center text-gray-800">Lehenga Measurement Form</h1>

            {/* Client Information */}
            <div className="grid md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Client Name:</label>
                    <input
                        name="clientName"
                        value={formData.clientName}
                        onChange={handleChange}
                        className="mt-1 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                        type="text"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Contact Number:</label>
                    <input
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        className="mt-1 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                        type="tel"
                        required
                    />
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Date:</label>
                <input
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                    type="date"
                />
            </div>

            {/* Lehenga Measurements */}
            <h2 className="text-lg font-semibold text-gray-800">Lehenga Measurements</h2>
            <div className="grid sm:grid-cols-2 gap-4">
                {[
                    { label: "Waist Circumference (inch)", name: "waistCircumference" },
                    { label: "Hip Circumference (inch)", name: "hipCircumference" },
                    { label: "Length of Lehenga (inch)", name: "lehengaLength" },
                    { label: "Bottom Hem Circumference (inch)", name: "bottomHem" },
                ].map(({ label, name }) => (
                    <div key={name}>
                        <label className="block text-sm font-medium text-gray-700">{label}:</label>
                        <input
                            name={name}
                            value={formData[name]}
                            onChange={handleChange}
                            className="mt-1 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                            type="text"
                            required
                        />
                    </div>
                ))}
            </div>

            {/* Blouse Measurements */}
            <h2 className="text-lg font-semibold text-gray-800">Blouse/Choli Measurements</h2>
            <div className="grid sm:grid-cols-2 gap-4">
                {[
                    { label: "Bust Circumference (inch)", name: "bustCircumference" },
                    { label: "Underbust Circumference (inch)", name: "underbustCircumference" },
                    { label: "Blouse Length (inch)", name: "blouseLength" },
                    { label: "Shoulder Width (inch)", name: "shoulderWidth" },
                    { label: "Sleeve Length (inch)", name: "sleeveLength" },
                    { label: "Sleeve Circumference (inch)", name: "sleeveCircumference" },
                    { label: "Front Neckline Depth (inch)", name: "frontNeckLineDepth" },
                    { label: "Back Neckline Depth (inch)", name: "backNeckLineDepth" },
                ].map(({ label, name }) => (
                    <div key={name}>
                        <label className="block text-sm font-medium text-gray-700">{label}:</label>
                        <input
                            name={name}
                            value={formData[name]}
                            onChange={handleChange}
                            className="mt-1 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                            type="text"
                            required
                        />
                    </div>
                ))}
            </div>

            {/* Dupatta Measurements */}
            <h2 className="text-lg font-semibold text-gray-800">Dupatta Measurements</h2>
            <div className="grid sm:grid-cols-2 gap-4">
                {[
                    { label: "Dupatta Length (inch)", name: "dupattaLength" },
                    { label: "Dupatta Width (inch)", name: "dupattaWidth" },
                ].map(({ label, name }) => (
                    <div key={name}>
                        <label className="block text-sm font-medium text-gray-700">{label}:</label>
                        <input
                            name={name}
                            value={formData[name]}
                            onChange={handleChange}
                            className="mt-1 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                            type="text"
                            required
                        />
                    </div>
                ))}
            </div>

            {/* Preferences */}
            <h2 className="text-lg font-semibold text-gray-800">Design Preferences</h2>
            <div>
                <label className="block text-sm font-medium text-gray-700">Lehenga Style:</label>
                <select
                    name="lehengaStyle"
                    value={formData.lehengaStyle}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                    required
                >
                    <option value="A-line">A-line</option>
                    <option value="Flared">Flared</option>
                    <option value="Circular">Circular</option>
                    <option value="Mermaid/Fishtail">Mermaid/Fishtail</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Blouse Style:</label>
                <select
                    name="blouseStyle"
                    value={formData.blouseStyle}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                    required
                >
                    <option value="Sleeveless">Sleeveless</option>
                    <option value="Short Sleeves">Short Sleeves</option>
                    <option value="3/4 Sleeves">3/4 Sleeves</option>
                    <option value="Full Sleeves">Full Sleeves</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Embroidery Preferences:</label>
                <input
                    name="embroideryPreference"
                    value={formData.embroideryPreference}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                    type="text"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Fabric Choice:</label>
                <select
                    name="fabricChoice"
                    value={formData.fabricChoice}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                    required
                >
                    <option value="Silk">Silk</option>
                    <option value="Georgette">Georgette</option>
                    <option value="Velvet">Velvet</option>
                    <option value="Net">Net</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Colour Preference:</label>
                <input
                    name="colour"
                    value={formData.colour}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                    type="text"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Additional Notes:</label>
                <textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    className="mt-1 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                    type="text"
                />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
            >
                {isEdit ? "Edit" : "Submit"}
            </button>
        </form>
    );
}
