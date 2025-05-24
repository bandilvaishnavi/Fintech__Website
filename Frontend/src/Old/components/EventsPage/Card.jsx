import { Button } from "@/Components/ui/button"
import {Input} from "@/Components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/Components/ui/dialog"
import axios from "../../utils/axios"
import { useState } from "react";
const Card=({title,description,prize,id})=>{
    return(
      <div className='w-[17rem] px-4 py-4 h-[24.5rem] flex flex-shrink-0 flex-col justify-between gap-4 bg-gradient-to-br from-[#1a3a1a] to-[#0a1f0a] border border-[#39FF14]/20 shadow-lg hover:shadow-[#39FF14]/20 transition-all duration-300 rounded-xl'>
      <div className="flex flex-col gap-4 ">
      <div className='w-full flex items-center justify-center'>
          <div className='text-[#39FF14]/[80%] text-xl  font-medium'>{title}</div>
      </div>
      <div className='text-gray-300 max-h-52 overflow-y-auto  '>
     {description} 
      </div>
      </div>
      <div className=" flex flex-col gap-4">
      <div className='flex items-center gap-2'>
      <div className='text-gray-300'>
      Prizes-Worth
      </div>
      <div className=' rounded-[50px]  border bg-[#39FF14]/10 border-[#39FF14]/80 px-2 relative'>
      <div className='absolute inset-0  rounded-[50px]'></div>
      <div className='text-[#fcfcfc] font-bold'>{prize}K INR</div>
      </div>
      </div>
      <div className='flex justify-end'>
      <Modal id={id}/>
      </div>
      </div>
      </div>
    )
  }
  
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
      if (!email || !email.includes('@')) {
        setError("Please enter a valid email");
        return;
      }
  
      setIsSubmitting(true);
      setError("");
      setSuccess("");
  
      try {
        const response = await axios.post("/event/add-email", {
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
          <Button className="bg-[#39FF14]/50 hover:bg-[#39FF14]/40 font-bold h-[2rem] px-2">
            Join Us
          </Button>
        </DialogTrigger>
        <DialogContent className="w-[360px] sm:max-w-[400px] bg-[#F1F0E6] rounded-[1.25rem] border-none">
          <div className="flex flex-col items-center justify-center gap-6 relative">
            <div className="flex flex-col gap-4">
              <div className="text-xl font-medium inter text-center">Join The Event</div>
              <div className="text-black text-base inter tracking-[-0.32px] font-normal text-center px-8">
                Details for the event will be shared with you shortly.
              </div>
              <div className="flex w-full justify-center items-center">
                <Input
                  placeholder="Enter Email"
                  className="text-black text-base inter tracking-[-0.32px] w-[60%]"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
            </div>
            {error && <div className="text-red-500">{error}</div>}
            {success && <div className="text-green-500">{success}</div>}
            <div className="flex flex-row items-center justify-center gap-5">
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-[100px] h-[50px] text-black hover:bg-[#F1F0E6] cursor-pointer rounded-full flex items-center justify-center bg-transparent border border-black mt-0 font-normal text-base"
              >
                {isSubmitting ? "Submitting..." : "Join"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  };
    
  
    export default Card;