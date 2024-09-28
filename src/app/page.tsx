"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Home() {
  const [inputval, setInputval] = useState<string>("");
  const { push } = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    push(`/prediction/${inputval}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-900 to-teal-200">
      <div className="w-full max-w-md bg-gray-800/60 backdrop-blur-md shadow-xl rounded-lg p-8 border border-gray-700/50">
        <h1 className="text-3xl font-extrabold text-center text-teal-200 mb-8 drop-shadow-sm font-serif">
          Enter Your Name
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Type your name..."
            onChange={(e) => setInputval(e.target.value)}
            className="w-full p-4 border-none rounded-lg bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-sm placeholder-gray-500"
          />
          <button
            type="submit"
            className="w-full p-4 bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-lg font-semibold hover:from-teal-600 hover:to-teal-800 transition-all duration-300 shadow-md transform hover:scale-105"
          >
            Predict
          </button>
        </form>
      </div>
    </div>
  );
}
