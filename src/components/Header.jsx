const HeaderComponent = () => {
    return (
        <header className="flex press_start justify-between items-center bg-orange-500 text-zinc-100 p-4">
            <h1 className="text-2xl">Mr.Music</h1>
            <nav>
                <ul className="flex orbitron_500 text-lg space-x-8">
                    <li><button className="outline px-4 py-0.5 hover:bg-orange-400"><a href="#home">Log In</a></button></li>
                    <li><button className="outline px-4 py-0.5 hover:bg-orange-400"><a href="#about">Sign Up</a></button></li>
                </ul>
            </nav>
        </header>
    );
};

export default HeaderComponent; 