"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 via-white to-blue-50">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-blue-900 mb-6"><span className="rama text-primary text-8xl">ramaa klae|Sana</span></h1>
        <p className="text-lg text-gray-700 mb-12">
          Your one-stop solution for custom Lehenga designs and tailoring.
        </p>
        <Button
          className="px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 rounded-lg text-lg font-semibold shadow-lg hover:bg-primary"
          onClick={() => {
            router.push("/lehenga/create");
          }}
        >
          Lehenga Entry Form
        </Button>
      </div>
    </div>
  );
}
