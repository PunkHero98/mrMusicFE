import CollapseMenu from "./CollapseMenu";
import { MagnifyingGlass } from "phosphor-react";
const HeaderComponent = () => {
    return (
        <header className="flex press_start justify-between items-start bg-orange-500 text-zinc-100 py-2 px-80">
            <h1 className="text-xl tracking-tighter">Mr.Music</h1>
            <nav>
                <ul className="flex orbitron_500 text-base space-x-8 tracking-wider">
                    {/* <li><button className="outline px-4 py-0.5 hover:bg-orange-400"><a href="#home">Log In</a></button></li>
                    <li><button className="outline px-4 py-0.5 hover:bg-orange-400"><a href="#about">Sign Up</a></button></li> */}
                    <li><button ><a href="#home">Home</a></button></li>
                    <li><button ><a href="#about">Feed</a></button></li>
                    <li><button ><a href="#about">Library</a></button></li>
                    <div className="px-2 relative">
                        <form className="flex items-center">
                            <input type="text" placeholder="Search..." className="px-4 py-0.5 outline outline-white focus:outline-none focus:ring-2 focus:ring-white" />
                            <button type="submit" className="absolute right-[1.5rem]"><MagnifyingGlass size={22} weight="bold" /></button>
                        </form>
                    </div>
                    <li><button ><a href="#about">Upload</a></button></li>
                    <CollapseMenu />
                </ul>
            </nav>
        </header>
    );
};

export default HeaderComponent; 