"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MdQuestionMark } from "react-icons/md";
// import { MdQuestionMark } from "react-icons/md"; 

export default function SignOutModal({ isOpen, onClose, onConfirm }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="flex flex-col justify-center items-center">
          <DialogTitle className="">
          <MdQuestionMark className="bg-[#00CFFF] w-20 h-20 rounded-full text-white text-sm"/>
          </DialogTitle>
          <DialogDescription className="text-lg font-bold text-[#000000]">
            Are you sure you want to sign out?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="">
<div className="flex justify-around gap-20 mt-10">
<Button variant="outline" onClick={onClose} className="border w-32 h-14 border-[#005C73] bg-white rounded-md">
            No
          </Button>
          <Button onClick={onConfirm} className="bg-[#005C73] w-32 h-14 text-white rounded-md">Yes</Button>
</div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}