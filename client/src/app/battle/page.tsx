import Notifications from "@/components/Notifications";
import Options from "@/components/options";
import VideoPlayer from "@/components/videoPlayer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="justify-center h-[100vh] ">
      <div className="text-3xl w-full text-center">Battle Page</div>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </div>
  );
}
