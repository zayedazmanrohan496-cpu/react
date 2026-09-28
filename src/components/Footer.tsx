import Logo from "../assets/logo-text.png";

const Footer = () => {
    return (
        <footer className="border-t border-gray-200 bg-white text-gray-600">
            <div className="w-full max-w-7xl mx-auto px-6 py-12">

                {/* Main Footer Content */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-10">

                    {/* Div One: Logo & Bio */}
                    <div className="max-w-sm">
                        <img
                            src={Logo}
                            alt="Dev Stack Logo"
                            className="h-8 object-contain"
                        />

                        <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                            Curated tools, technologies, and resources for developers building modern software.
                        </p>

                        <ul className="flex gap-6 items-center mt-6 text-sm font-medium text-gray-700">
                            <li>
                                <a href="#" className="hover:text-pink-600 transition-colors">
                                    GitHub
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-pink-600 transition-colors">
                                    Twitter
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-pink-600 transition-colors">
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Menu Items Container */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 md:gap-20">

                        {/* Div Two: Product */}
                        <div>
                            <h3 className="text-xs font-bold text-gray-900 tracking-wider uppercase mb-4">
                                Product
                            </h3>

                            <ul className="space-y-3 text-sm text-gray-500">
                                <li>
                                    <a href="#" className="hover:text-gray-900 transition-colors">
                                        Home
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="hover:text-gray-900 transition-colors">
                                        Technologies
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="hover:text-gray-900 transition-colors">
                                        Projects
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Div Three: Company */}
                        <div>
                            <h3 className="text-xs font-bold text-gray-900 tracking-wider uppercase mb-4">
                                Company
                            </h3>

                            <ul className="space-y-3 text-sm text-gray-500">
                                <li>
                                    <a href="#" className="hover:text-gray-900 transition-colors">
                                        About
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="hover:text-gray-900 transition-colors">
                                        Contact
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="hover:text-gray-900 transition-colors">
                                        Careers
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Div Four: Legal */}
                        <div>
                            <h3 className="text-xs font-bold text-gray-900 tracking-wider uppercase mb-4">
                                Legal
                            </h3>

                            <ul className="space-y-3 text-sm text-gray-500">
                                <li>
                                    <a href="#" className="hover:text-gray-900 transition-colors">
                                        Privacy Policy
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="hover:text-gray-900 transition-colors">
                                        Terms of Service
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Bottom Footer / Copyright Bar */}
                <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-4">

                    <p>© 2026 Dev Stack. All rights reserved.</p>

                    <div className="flex gap-6">
                        <a href="#" className="hover:text-gray-600 transition-colors">
                            Privacy
                        </a>

                        <a href="#" className="hover:text-gray-600 transition-colors">
                            Terms
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;

