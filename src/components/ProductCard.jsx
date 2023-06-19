import Image from "next/image";
import Stars from "./Stars";

const ProductCard = ({title,desscription}) => {
  return (
    <div className="flex max-w-[650px] p-4 bg-white radi justify-between gap-12 border rounded-lg shadow-xl drop-shadow-xl">
      <div className="flex flex-col justify-center gap-2 text-sm">
        <p>Sula Vineyards</p>
        <h2 className="font-bold text-pink-700 capitalize">{title}</h2>
        <p>
          {desscription}
        </p>
        <p>Nashik, India</p>
        <Stars/>
      </div>
      <Image
        src={
          "/square.avif"
        }
        width={"250"}
        height={"250"}
        className="rounded-md aspect-square"
      />
    </div>
  );
}

export default ProductCard
