"use client";

import { useState, useEffect } from "react";
import { CircleUser } from "lucide-react";

export default function ExamQuestion() {
  const [minutes, setMinutes] = useState(24);
  const [seconds, setSeconds] = useState(59);
  const [selectedOption, setSelectedOption] = useState("");
  
  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timer);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [minutes, seconds]);

  const question = {
    id: 35,
    question: "What is the value of x in the equation 3x + 5 = 14?",
    options: [
      { label: "A", value: "1" },
      { label: "B", value: "2" },
      { label: "C", value: "3" },
      { label: "D", value: "4" },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <CircleUser className="w-10 h-10 text-gray-600" />
            <span className="text-gray-700 font-medium">Sami Ahmed Agboola</span>
          </div>
          <button
            className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
            onClick={() => console.log("Stop Quiz")}
          >
            Stop Quiz
          </button>
        </div>

        {/* Quiz Card */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Quiz Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-xl font-semibold text-gray-800 mb-2">
                Mathematics Quiz
              </h1>
              <p className="text-gray-600">Answer the question below</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-800">
                Timer: {String(minutes).padStart(2, "0")} :{" "}
                {String(seconds).padStart(2, "0")}
              </div>
              <div className="text-sm text-gray-500">
                <span>Minutes</span>
                <span className="ml-[4.2rem]">Seconds</span>
              </div>
            </div>
          </div>

          {/* Question Section */}
          <div className="mb-8">
            <h2 className="text-gray-700 mb-4">
              Question {question.id} of 60
            </h2>
            <p className="text-gray-800 text-lg mb-6">{question.question}</p>
          </div>

          {/* Options */}
          <div className="mb-8">
            <h3 className="text-gray-700 mb-4">Choose answer</h3>
            <div className="grid grid-cols-2 gap-4">
              {question.options.map((option) => (
                <button
                  key={option.label}
                  className={`flex items-center gap-3 p-4 rounded-lg border-2 transition-all ${
                    selectedOption === option.label
                      ? "border-teal-200 bg-teal-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => setSelectedOption(option.label)}
                >
                  <span
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedOption === option.label
                        ? "border-teal-500 bg-teal-500 text-white"
                        : "border-gray-300"
                    }`}
                  >
                    {option.label}
                  </span>
                  <span className="text-gray-700">{option.value}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <button
              className="px-6 py-2 border-2 border-gray-200 rounded-md text-gray-600 hover:bg-gray-50 transition-colors"
        
            >
              Previous
            </button>
            <button
              className="px-8 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"

            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}