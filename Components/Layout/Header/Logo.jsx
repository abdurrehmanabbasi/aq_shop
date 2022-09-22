import Image from "next/image";
const Logo = () => {

    return ( 
        <div className="flex h-full p-2">
            <Image src={'/icon.png'} width="100" height={100} className="w-2" alt="icon"/>
            <div className="flex flex-col justify-center text-center">
                <h2 className="text-2xl  text-green-500 font-bold">AQSHOP</h2>
                <h2 className="text-sm">Dates & Pickles</h2>
            </div>
        </div>
     );
}
 
export default Logo;