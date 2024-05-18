import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";
import { useSelector } from "react-redux";
import { Badge } from "@material-tailwind/react";
import { MenuIcon, ShoppingCart } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
    const user = JSON.parse(localStorage.getItem('users'));
    const navigate = useNavigate();
    const [isNavListVisible, setNavListVisible] = useState(false);
    


    const logout = () => {
        localStorage.clear('users');
        navigate('/login');
    };

    const cartItems = useSelector((state) => state.cart);

    // navList Data
    const navList = (
        <ul className="flex flex-col lg:flex-row lg:space-x-3 text-white font-medium text-md px-5 space-y-2 lg:space-y-0">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/allproduct">All Product</Link>
            </li>
            {!user && (
                <>
                    <li>
                        <Link to="/signup">Signup</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </>
            )}
            <li>
                <Link to="/cart">
                    <Badge content={cartItems.length} >
                        <ShoppingCart />
                    </Badge>
                </Link>
            </li>
            {user?.role === 'user' && (
                <li>
                    <Link to="/user-dashboard">{user.name}</Link>
                </li>
            )}
            {user?.role === 'admin' && (
                <li>
                    <Link to="/admin-dashboard">{user.name}</Link>
                </li>
            )}
            {user && (
                <li className="cursor-pointer" onClick={logout}>
                    Logout
                </li>
            )}
        </ul>
    );

    const toggleNavList = () => {
        setNavListVisible(!isNavListVisible);
    };

    return (
        <nav className="bg-pink-500 sticky top-0 z-50">
            <div className="flex flex-col lg:flex-row lg:justify-between items-center py-3 lg:px-5">
                {/* Left: Logo */}
                <div className="flex justify-center lg:justify-start py-3 lg:py-0 w-full lg:w-auto">
                    <Link to="/">
                        <h2 className="font-bold text-white text-2xl">eShop</h2>
                    </Link>
                </div>

                {/* Center: Search Bar */}
                <div className="flex justify-center w-full lg:w-auto relative">
                    <MenuIcon onClick={toggleNavList} className="lg:hidden flex items-center mt-2 text-white cursor-pointer" />
                    <SearchBar />

                </div>

                {/* Right: Navigation Links */}
                <div className="lg:flex hidden justify-center lg:justify-end w-full lg:w-auto mt-4 lg:mt-0">
                    {navList}
                </div>
            </div>

            {/* Mobile Navigation */}
            {isNavListVisible && (
                <div className="lg:hidden bg-pink-500 w-full">
                    {navList}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
