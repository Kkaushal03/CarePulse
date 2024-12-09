"use client"
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog";
  import "react-datepicker/dist/react-datepicker.css";
  import { Appointment } from "@/types/appwrite.types";
  import { Button } from "@/components/ui/button";
  import  AppointmentForm  from "./forms/AppointmentForm";
  import { useState } from "react";


  export const AppointmentModal = ({patientId, userId, appointment,
  type,}: 
  {
    patientId: string;
    userId: string;
    appointment?: Appointment;
    type: "schedule" | "cancel";
    title: string;
    description: string;
  }) => {
    const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
    <DialogTrigger asChild>
      <Button
        variant="ghost"
        className={`capitalize ${type === "schedule" && "text-green-500"}`}
      >
        {type}
      </Button>
    </DialogTrigger>
    <DialogContent className="shad-dialog sm:max-w-md">
      <DialogHeader className="mb-4 space-y-3">
        <DialogTitle className="capitalize">{type} Appointment</DialogTitle>
        <DialogDescription>
          Please fill in the following details to {type} an  appointment
        </DialogDescription>
      </DialogHeader>

      <AppointmentForm
        userId={userId}
        patientId={patientId}
        type={type}
        appointment={appointment}
        setOpen={setOpen}
      />
    </DialogContent>
  </Dialog>
  
  )
}

export default AppointmentModal