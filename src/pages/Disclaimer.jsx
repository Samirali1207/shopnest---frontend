import React from "react";

const Disclaimer = () => {
    return (
        <div className="min-h-screen bg-gray-950 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-gray-900 border border-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 md:p-10">

                {/* Heading */}
                <h1 className="text-3xl sm:text-4xl font-bold text-white border-b border-gray-700 pb-4 mb-8">
                    Legal & Site Disclaimer
                </h1>

                {/* Introduction */}
                <p className="text-gray-300 leading-8 text-sm sm:text-base mb-8">
                    The data, interfaces, and graphical components presented throughout
                    <span className="text-orange-500 font-semibold"> ShopNest </span>
                    are intended solely for educational and portfolio purposes. This
                    project demonstrates modern web development practices and application
                    architecture and should not be considered a commercial e-commerce
                    platform.
                </p>

                {/* Section 1 */}
                <div className="mb-8">
                    <h2 className="text-xl sm:text-2xl font-semibold text-orange-500 mb-3">
                        1. Accuracy of Materials
                    </h2>

                    <p className="text-gray-300 leading-8 text-sm sm:text-base">
                        Information, product descriptions, pricing, and images displayed on
                        this website are for demonstration purposes only. Many images are
                        sourced from placeholder services or royalty-free image providers
                        and do not represent actual products available for sale.
                    </p>
                </div>

                {/* Section 2 */}
                <div className="mb-8">
                    <h2 className="text-xl sm:text-2xl font-semibold text-orange-500 mb-3">
                        2. Payment Processing
                    </h2>

                    <p className="text-gray-300 leading-8 text-sm sm:text-base">
                        Any payment functionality within this application operates only in
                        a testing or sandbox environment. No real financial transactions
                        are processed, and no actual charges are made to users.
                    </p>
                </div>

                {/* Section 3 */}
                <div className="mb-8">
                    <h2 className="text-xl sm:text-2xl font-semibold text-orange-500 mb-3">
                        3. Third-Party Links
                    </h2>

                    <p className="text-gray-300 leading-8 text-sm sm:text-base">
                        This website may contain links to external websites or services.
                        ShopNest is not responsible for the content, privacy practices, or
                        availability of any third-party resources.
                    </p>
                </div>

                {/* Section 4 */}
                <div className="mb-8">
                    <h2 className="text-xl sm:text-2xl font-semibold text-orange-500 mb-3">
                        4. Limitation of Liability
                    </h2>

                    <p className="text-gray-300 leading-8 text-sm sm:text-base">
                        The creators of this project are not liable for any loss, damage,
                        or inconvenience arising from the use of this demonstration
                        application. Users access and use this project entirely at their
                        own discretion.
                    </p>
                </div>

                {/* Footer Note */}
                <div className="mt-10 border-t border-gray-700 pt-6">
                    <p className="text-gray-400 italic text-sm sm:text-base text-center">
                        By using this website, you acknowledge that this project is created
                        for educational and demonstration purposes and agree to the terms
                        outlined in this disclaimer.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Disclaimer;