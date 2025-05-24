import { Button } from "@/Components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/Components/ui/dialog";

const Card = ({ title, description, prize, id, onDelete }) => {
  return (
    <div className="w-[17rem] px-4 py-4 h-[24.5rem] flex flex-shrink-0 flex-col justify-between gap-4 bg-gradient-to-br from-[#1a3a1a] to-[#0a1f0a] border border-[#39FF14]/20 shadow-lg hover:shadow-[#39FF14]/20 transition-all duration-300 rounded-xl">
      <div className="flex flex-col gap-4">
        <div className="w-full flex items-center justify-center">
          <div className="text-[#39FF14]/[80%] text-xl font-medium">{title}</div>
        </div>
        <div className="text-gray-300 max-h-52 overflow-y-auto ">
          {description}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <div className="text-gray-300">Prizes-Worth</div>
          <div className="rounded-[50px] border bg-[#39FF14]/10 border-[#39FF14]/80 px-2 relative">
            <div className="text-[#fcfcfc] font-bold">{prize}K INR</div>
          </div>
        </div>

        <div className="flex justify-end">
          <Modal id={id} onDelete={onDelete} />
        </div>
      </div>
    </div>
  );
};

const Modal = ({ id, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);  // Call the passed onDelete function with the event id
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#39FF14]/50 hover:bg-[#39FF14]/40 font-bold h-[2rem] px-2">
          Delete Event
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[360px] sm:max-w-[400px] bg-[#F1F0E6] rounded-[1.25rem] border-none">
        <div className="flex flex-col items-center justify-center gap-6 relative">
          <div className="flex flex-col gap-4">
            <div className="text-xl font-medium text-center">Delete This Event</div>
            <div className="text-sm text-center px-4">
              Are you sure you want to delete this event? This action cannot be undone.
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-5">
            <Button
              className="w-[100px] h-[50px] rounded-full bg-red-500 hover:bg-red-600 text-white"
              onClick={handleDelete}
            >
              Delete
            </Button>
            <Button
              variant="outline"
              className="w-[100px] h-[50px] rounded-full"
            >
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Card;
