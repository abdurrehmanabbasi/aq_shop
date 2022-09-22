const Topnav = () => {
    return ( 
        <div className="flex justify-evenly text-sm">
            <div className="flex gap-2">
                <a href="">About Us</a>
                |<a href=""> My Account</a>
                |<a href="">Wishlist</a>
                |<a href="">Order Tracking</a>
            </div>
            <div className="center">
                <a href="">Super Value Deals - save more with out coupons</a>
            </div>
            <div className="flex gap-2">
                <a href="">Need up Call us:<span>+920000000</span></a>
                |<a href="">English</a>
                |<a href="">USD</a>
            </div>
        </div>
     );
}
 
export default Topnav;