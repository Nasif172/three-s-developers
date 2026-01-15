import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative h-[80vh] w-full bg-slate-900 flex items-center justify-center text-center px-4">
      
      {/* Background Overlay (Dark Blue Gradient) */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 opacity-90"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Invest in <span className="text-yellow-400">Land</span>,<br/>
          Secure Your Future.
        </h1>
        
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Three S Developers brings you RAJUK-compliant plots in the most promising locations of Dhaka. 100% ownership transparency.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/projects" 
            className="bg-yellow-500 hover:bg-yellow-400 text-slate-900 text-lg font-bold px-8 py-4 rounded-lg transition duration-300"
          >
            View Available Plots
          </Link>
          <Link 
            href="/landowners" 
            className="border-2 border-white text-white hover:bg-white hover:text-slate-900 text-lg font-bold px-8 py-4 rounded-lg transition duration-300"
          >
            Sell Your Land
          </Link>
        </div>
      </div>
    </div>
  );
}
