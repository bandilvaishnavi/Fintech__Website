import React from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/Components/ui/button"
import {Input} from "@/Components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/Components/ui/dialog"
import { useState } from "react";
import axios from "../utils/axios";

const EventsSection = () => {
  const events = [
    {
      name: "Algoverse",
      about: "A competitive coding and trading challenge organized as part of Concetto'24 offering participants an exciting opportunity to showcase their skills in algorithms and trading.",
      prize: "$2,200",
      date: "Concetto'24",
    },
    {
      name: "Aptiquest",
      about: "A speedy Maths Challenge organized as part of Concetto’24.",
      prize: "$2,200",
      date: "Concetto'24",
    },
    {
      name: "Tradathon",
      about: "Tradathon at Concetto'24 was a thrilling trading competition where participants showcased their strategies and skills in the ultimate stock market battle.",
      prize: "$2,200",
      date: "Concetto'24",
    },
    {
      name: "Introduction to High-Frequency Trading",
      about: "Mr. Ansh Tayal, Deputy Manager of Economic Policy and Research at NSE, delivered an engaging talk on HFT, its growing importance, and the skills required to excel in this domain.",
      prize: "Knowledge",
      date: "Concetto'24",
    },
    {
      name: "PITCH-A-MINUTE (PAM 3.0)",
      about: "A one-minute pitch competition for first-year students, providing a platform to showcase innovative ideas and entrepreneurial spirit.",
      prize: "$2,200",
      date: "Concetto'24",
    },
    {
      name: "Alphathon",
      about: "Organized in collaboration with WorldQuant Brain and the Career Development Centre, this event focused on quantitative finance, with prizes worth $2200 and an insightful session by Ishan Shandilya.",
      prize: "$2,200",
      date: "Concetto'24",
    },
    {
      name: "Bizathon",
      about: "An 18-hour business hackathon at IIT (ISM) Dhanbad, showcasing innovation in fintech and entrepreneurship, organized by the Fintech Club in collaboration with Eduquis Technology LLP.",
      prize: "$2,200",
      date: "Concetto'24",
    },
  ];
  

  return (
    <section className="py-20 bg-black/95">
    <div className="container mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="text-4xl font-bold mb-12 text-center text-white"
      >
        <span className="text-green-400">Events</span>
      </motion.h2>
  
      <div className="relative">
        {/* Horizontal scrollable wrapper */}
        <motion.div className="overflow-x-auto overflow-y-hidden pb-4 scrollbar-hide">
          <motion.div
            className="flex gap-6 min-w-max"
            drag="x"
            dragConstraints={{ left: -324*(events.length-1), right: 0 }}
            whileTap={{ cursor: "grabbing" }}
          >
            {events.map((event, index) => (
              <motion.div
                key={event.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="bg-zinc-900 w-[300px] min-h-[320px] rounded-xl p-6 flex flex-col flex-shrink-0 shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <Calendar className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-white">{event.name}</h3>
                <p className="text-gray-400 flex-grow">{event.about}</p>
                <div className="mt-auto flex justify-between items-center">
                  <span className="text-green-400 font-bold">{event.prize}</span>
                  <Modal id={event.id} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
  
  );
};

const Modal = ({ id }) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Submit email to the database
  const handleSubmit = async () => {
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }

    setIsSubmitting(true);
    setError("");
    setSuccess("");

    try {
      await axios.post("/event/add-email", {
        eventId: id,
        email,
      });

      setSuccess("Email added successfully!");
      setEmail("");
    } catch (error) {
      console.error("Error adding email:", error);
      setError("Failed to add email. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors">
          Register <ArrowRight className="w-4 h-4" />
        </button>
      </DialogTrigger>
      <DialogContent className="w-[350px] sm:max-w-[380px] bg-zinc-900 text-white rounded-xl shadow-lg border border-zinc-700 p-6">
        <div className="flex flex-col items-center gap-4">
          {/* Header */}
          <h3 className="text-xl font-bold text-green-400">Join The Event</h3>
          <p className="text-gray-400 text-center text-sm">
            Details for the event will be shared with you shortly.
          </p>

          {/* Email Input */}
          <Input
            placeholder="Enter Email"
            className="w-full px-4 py-2 bg-zinc-800 text-white rounded-lg border border-zinc-700 focus:border-green-400 focus:outline-none"
            value={email}
            onChange={handleEmailChange}
          />

          {/* Error & Success Messages */}
          {error && <div className="text-red-500 text-sm">{error}</div>}
          {success && <div className="text-green-500 text-sm">{success}</div>}

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full py-2 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-lg transition-colors"
          >
            {isSubmitting ? "Submitting..." : "Join"}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};



export default EventsSection;
