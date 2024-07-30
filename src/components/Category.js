import { MdRemoveRedEye } from "react-icons/md";
import { MdOutlineArrowRight } from "react-icons/md";
import { GoPlus } from "react-icons/go";
export const Category = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="font-bold">Category</div>
        <div className="text-gray-300 font-normal">Clear</div>
      </div>
      {/* Category */}
      <div className="flex  items-center justify-between">
        <div className="flex items-center gap-1">
          <MdRemoveRedEye /> <div>Food</div>{" "}
        </div>
        <MdOutlineArrowRight />
      </div>
      {/* Add Category */}
      <div className="flex gap-2 items-center">
        {" "}
        <GoPlus size={30} color="#0166FF" />
        Add Category
      </div>
    </>
  );
};
