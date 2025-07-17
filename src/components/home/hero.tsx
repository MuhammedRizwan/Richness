export default function Hero() {
  return (
    <div
      className="w-full h-screen bg-cover bg-center relative flex items-center justify-center text-white font-serif"
      style={{
        backgroundImage: `url('/group-people-working-out-business-plan-office.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-3xl text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Empowering Growth Through <span className="text-yellow-400">Integrated Branding</span>
        </h1>
        <p className="mt-4 text-md md:text-lg text-gray-200">
          We help businesses evolve and achieve breakthrough success with mindset transformation,
          innovative strategy, and scalable business education.
        </p>

        <div className="mt-6 flex md:flex-row justify-center gap-4">
          <button className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full hover:bg-yellow-300 transition">
            Start Your Journey
          </button>
          <button className="px-6 py-3 border border-white font-semibold rounded-full hover:bg-white hover:text-black transition">
            Explore Our Services
          </button>
        </div>
      </div>
    </div>
  )
}
