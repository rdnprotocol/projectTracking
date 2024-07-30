import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GoPlus } from "react-icons/go";

export const Navbar = () => {
  return (
    <div className="container">
      <div className="flex py-6 justify-between">
        <div className="flex gap-6">
          <img src="/logo/Vector.png  " className="w-6 h-6" />
          <div>Dashboard</div>
          <div className="font-bold">Records</div>
        </div>
        <div className="flex gap-4 items-center">
          <Button className="bg-[#0166FF] h-[27.4px] rounded-[20px] text-sm font-normal gap-2">
            {" "}
            <GoPlus size={20} />
            Record
          </Button>
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};
