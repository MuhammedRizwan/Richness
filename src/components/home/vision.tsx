export default function Vision() {
    return (
        <div className="bg-orange-100 w-full py-16 font-serif">
            <div className="w-11/12 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-10">
                <div
                    className="w-3/4 md:w-1/2 h-[450px] md:h-[500px] bg-cover bg-center relative flex items-end justify-center px-6 md:px-12"
                    style={{
                        backgroundImage: `url('/richnesscreatorprofileimg-Yan9KaV40WCEkwBv.avif')`,
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent rounded" />

                    <div className="relative z-10 max-w-3xl text-white text-center md:text-left">
                        <h2 className="text-xs md:text-sm font-semibold leading-relaxed italic mb-3">
                            “Start with yourself. You decide what you will be. <br />
                            You are responsible for yourself. <br />
                            Enjoy the pain and experience the beauty of Transformation.”
                        <span className="mt-4 mx-2 text-sm md:text-md font-semibold tracking-wide text-yellow-400">– Mr TP SHOWKHATH</span>
                        </h2>
                    </div>
                </div>

                {/* Text Content */}
                <div className="w-2/3 md:w-1/2 text-center md:text-left">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">The Visionary</h2>
                    <h3 className="text-md md:text-xl font-semibold text-yellow-300 mb-4">The Business Transformation Guru</h3>
                    <p className="text-gray-700 text-xs md:text-md font-medium  leading-relaxed mb-6">
                        Mr. TP Showkhath, founder of <strong>Richness Creator</strong> in Coimbatore, is a transformative business leader
                        in Tamil Nadu. Over the past two years, he has conducted 20+ highly impactful programs,
                        inspiring and guiding countless entrepreneurs toward sustainable business growth and breakthrough success.
                    </p>
                    <button className="px-6 py-3 bg-yellow-300 text-black text-xs md:text-md font-semibold rounded-full hover:bg-yellow-500 transition">
                        Be Inspired →
                    </button>
                </div>
            </div>
        </div>
    )
}
