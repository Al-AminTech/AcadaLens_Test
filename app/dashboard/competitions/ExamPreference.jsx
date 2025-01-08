"use client";
import { useState } from "react";
import { Bell, Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaRegBell } from "react-icons/fa";

const competitors = [
  {
    username: "Agboola001",
    department: "Social Science",
    state: "Social Science",
    rank: "Scholar",
    activity1: "Social Science",
    activity2: "Social Science",
  },
  {
    username: "Agboola001",
    department: "Social Science",
    state: "Social Science",
    rank: "Scholar",
    activity1: "Social Science",
    activity2: "Social Science",
  },
  {
    username: "Agboola001",
    department: "Social Science",
    state: "Social Science",
    rank: "Scholar",
    activity1: "Social Science",
    activity2: "Social Science",
  },
  {
    username: "Agboola001",
    department: "Social Science",
    state: "Social Science",
    rank: "Scholar",
    activity1: "Social Science",
    activity2: "Social Science",
  },
  {
    username: "Agboola001",
    department: "Social Science",
    state: "Social Science",
    rank: "Scholar",
    activity1: "Social Science",
    activity2: "Social Science",
  },
];

export default function ExamPreference() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="p-5">
      {/* <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Set Exam Preference</h1>
        <div className="flex items-center space-x-4">
          <Search className="w-6 h-6 text-gray-500" />
          <div className="relative">
            <FaRegBell className="text-blue-500 text-3xl" />
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">2</span>
          </div>
        </div>
      </div> */}

      <div className=" ">
        <div className="pt-5 flex justify-between">
          <div>
            <h1 className="text-2xl font-bold">Select Competitors</h1>
          </div>
          <div className="flex justify-between items-center mb-8 space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2  transform -translate-y-1/2 text-gray-300" />
              <Input
                type="text"
                placeholder="Search Name, Username Etc"
                className="pl-10 pr-4 py-2 w-64 outline-none rounded-lg border-[#99EBFF]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        <Table className="border-spacing-y-4 w-full">
          <TableHeader className="bg-[#F2FDFF]">
            <TableRow>
              <TableHead className="pl-6">Username</TableHead>
              <TableHead className="pl-6">Department</TableHead>
              <TableHead className="pl-6">State</TableHead>
              <TableHead className="pl-6">Rank</TableHead>
              <TableHead className="pl-6">Activity</TableHead>
              <TableHead className="pl-6">Activity</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {competitors.map((competitor, index) => (
              <TableRow key={index} className="">
                <TableCell className="font-medium p-6 border-b border-gray-200">
                  <div className="flex items-center">
                    <span className="bg-blue-600 text-white text-xs font-bold mr-2 px-2.5 py-0.5 rounded">
                      SA
                    </span>
                    {competitor.username}
                  </div>
                </TableCell>
                <TableCell className="p-6 border-b border-gray-200">
                  {competitor.department}
                </TableCell>
                <TableCell className="p-6 border-b border-gray-200">
                  {competitor.state}
                </TableCell>
                <TableCell className="p-6 border-b border-gray-200">
                  {competitor.rank}
                </TableCell>
                <TableCell className="p-6 border-b border-gray-200">
                  {competitor.activity1}
                </TableCell>
                <TableCell className="p-6 border-b border-gray-200">
                  {competitor.activity2}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
