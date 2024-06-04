import Workspace from "./_components/Workspace";
import { twoSum } from "@/utils/problems/twoSum";

export default function Fight() {
  return (
    <div className="h-full w-full flex" style={{ minHeight: "100vh" }}>
      <div className="w-[80%]">
        <Workspace problem={twoSum} />
      </div>
      <div className="w-[20%] bg-gray-800 text-white"></div>
    </div>
  );
}
