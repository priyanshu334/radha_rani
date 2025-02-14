import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/Products";
import ProductGridWithButton from "@/components/ProductsWithButton";

export default function Home(){
    return <div className="">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-20 mx-7 text-center md:text-left tracking-wide">
  Wishlist
</h1>

        <ProductGridWithButton/>
    
        
    </div>
}