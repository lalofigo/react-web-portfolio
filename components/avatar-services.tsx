import Image from "next/image"
import MotionTransition from "./transition-component"


const AvatarServices = () => {
  return (
    <div>
        <MotionTransition position="right" className="bottom-0 left-0 hidden md:inline-block md:absolute">
            <Image src="/services.png" width={300} height={300} className="w-[350px] h-full" alt="Services image"/>
        </MotionTransition>
    </div>
  )
}

export default AvatarServices