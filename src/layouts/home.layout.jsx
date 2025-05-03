import { Outlet } from "react-router-dom";
import HeaderComponent from "../components/Header";
import FooterComponent from "../components/Footer";

const HomeLayout = () => {
    return (
        <div className="flex flex-col">
            <HeaderComponent />
            <main className="flex-grow p-4">
                <Outlet />
            </main>
            <FooterComponent />
        </div>
    );
};

export default HomeLayout;