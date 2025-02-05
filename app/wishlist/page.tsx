import Navbar from "@/components/Navbar";
import ProductGrid from "@/components/Products";
import ProductGridWithButton from "@/components/ProductsWithButton";

export default function Home(){
    return <div>
        <h1 className="text-black text-3xl my-4 mx-7 font-extrabold">WishList</h1>
        <ProductGridWithButton/>
    
        
    </div>
}