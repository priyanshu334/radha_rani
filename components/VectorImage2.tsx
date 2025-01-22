import Image from "next/image";

export default function() {
  return (
    <div className="bg-[#9C7A4D] pb-60 ">
      <Image 
        src="/images/Vector2.svg" 
        alt="Vector Image" 
        width={500} 
        height={500} 
        className="w-full h-auto "
      />
    </div>
  );
}
