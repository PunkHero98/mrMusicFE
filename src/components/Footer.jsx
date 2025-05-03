const FooterComponent = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; 2025 Mr Music. All rights reserved.</p>
                <nav className="mt-2">
                    <ul className="flex justify-center space-x-4">
                        <li><a href="#privacy" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                        <li><a href="#terms" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                        <li><a href="#contact" className="text-gray-400 hover:text-white">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default FooterComponent;