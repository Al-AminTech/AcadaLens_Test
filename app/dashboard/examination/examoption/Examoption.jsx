"use client";

import { useState } from "react";
import { ChevronLeft, Search } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ExamOptions() {
  const [selectedSubjects, setSelectedSubjects] = useState([
    "Use of English",
    "Mathematics",
  ]);
  const [timePerSubject, setTimePerSubject] = useState("25 Min/Subject");
  const [timingMode, setTimingMode] = useState("Stop after each subject");

  const subjects = [
    "Use of English",
    "Economics",
    "Financial Accounting",
    "Government",
    "Literature",
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
  ];

  const handleSubjectToggle = (subject) => {
    setSelectedSubjects((prev) =>
      prev.includes(subject)
        ? prev.filter((s) => s !== subject)
        : [...prev, subject]
    );
  };

  return (
    <div className="max-w-2xl p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Set Exam Options</h1>
        {/* <Search className="w-6 h-6 text-gray-400" /> */}
      </div>

      <div className="mb-6">
        <button className="flex items-center text-primary font-semibold">
          <Link href={"/dashboard/examination"}>
            <ChevronLeft className="w-5 h-5 mr-1" />
          </Link>
          Select options
        </button>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">
            Select subjects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {subjects.map((subject) => (
              <label key={subject} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={selectedSubjects.includes(subject)}
                  onChange={() => handleSubjectToggle(subject)}
                  className="form-checkbox h-5 w-5 text-primary"
                />
                <span className="text-gray-700">{subject}</span>
              </label>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">Set time</h2>
          <div className="space-y-2">
            {["25 Min/Subject", "30 Min/Subject"].map((time) => (
              <label key={time} className="flex items-center space-x-3">
                <input
                  type="radio"
                  checked={timePerSubject === time}
                  onChange={() => setTimePerSubject(time)}
                  className="form-radio h-5 w-5 text-primary"
                />
                <span className="text-gray-700">{time}</span>
              </label>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">
            Timing mode
          </h2>
          <div className="space-y-2">
            {["Stop after each subject", "Stop after exam"].map((mode) => (
              <label key={mode} className="flex items-center space-x-3">
                <input
                  type="radio"
                  checked={timingMode === mode}
                  onChange={() => setTimingMode(mode)}
                  className="form-radio h-5 w-5 text-primary"
                />
                <span className="text-gray-700">{mode}</span>
              </label>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-10 flex justify-start space-x-4">
        <Button className="px-6 py-2 w-44 bg-gray-50 border border-primary text-primary rounded-md hover:bg-primary/10">
          Cancel
        </Button>
        <Link href={"/dashboard/examination/examinstruct"}>
          <Button className="px-6 w-44 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
            Next
          </Button>
        </Link>
      </div>
    </div>
  );
}
