import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const CampSchedules = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  const schedules = [
    {
      department: "Emergency Department (ED)",
      date: "Ongoing (24/7)",
      location: "Uttar Pradesh, Lucknow, Raebareli",
      timing: "24/7 availability"
    },
    {
      department: "Intensive Care Unit (ICU)",
      date: "Ongoing (24/7)",
      location: "Maharashtra, Mumbai, Vasai",
      timing: "24/7 availability"
    },
    {
      department: "Cardiology",
      date: "February 1 - February 5",
      location: "Tamil Nadu, Chennai, Manali",
      timing: "8 AM to 5 PM"
    },
    // Add more departments as needed
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-[#0077B6]">Medical Camp Schedules</h1>
      <div className="grid gap-6">
        {schedules.map((schedule, index) => (
          <Card key={index} className="p-6 shadow-md">
            <h2 className="text-xl font-semibold text-[#0077B6] mb-2">
              {schedule.department}
            </h2>
            <div className="space-y-2 text-gray-600">
              <p><span className="font-medium">Date:</span> {schedule.date}</p>
              <p><span className="font-medium">Location:</span> {schedule.location}</p>
              <p><span className="font-medium">Timing:</span> {schedule.timing}</p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  className="mt-4 bg-[#0077B6] hover:bg-[#0077B6]/90"
                >
                  Schedule Camp
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Schedule Camp for {schedule.department}</DialogTitle>
                </DialogHeader>
                <div className="p-4">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CampSchedules;