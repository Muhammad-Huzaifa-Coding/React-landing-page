const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center bg-gradient-to-b from-indigo-50 to-white pt-24"
        >
            <div className="max-w-5xl mx-auto text-center px-6">

                <span className="inline-block text-sm bg-indigo-100 text-indigo-600 px-4 py-1 rounded-full">
                    🚀 Trusted by 1,000+ creators
                </span>

                <h1 className="mt-6 text-5xl font-extrabold leading-tight">
                    Launch your product <br />
                    <span className="text-indigo-600">faster than ever</span>
                </h1>

                <p className="mt-6 text-gray-600 max-w-xl mx-auto">
                    A modern landing page built using React, Tailwind CSS and Vite.
                </p>

                <div className="mt-10 flex justify-center gap-4">
                    <button
                        className="bg-indigo-600 text-black px-8 py-3 rounded-full
                       font-medium transition-all duration-300
                       hover:bg-indigo-700 hover:scale-105
                       active:scale-95"
                    >
                        Get Started
                    </button>

                    <button
                        className="border px-8 py-3 rounded-full hover:bg-gray-100"
                    >
                        Live Demo
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Hero;
