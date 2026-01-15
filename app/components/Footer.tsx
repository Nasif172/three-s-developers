export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company Info */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Three S</h3>
          <p className="mb-4 text-sm leading-relaxed">
            Developing the future of Bangladesh. 
            Trusted by landowners, loved by investors.
          </p>
          <div className="text-sm text-gray-400">
            &copy; 2026 Three S Developers
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/projects" className="hover:text-white transition">Our Projects</a></li>
            <li><a href="/landowners" className="hover:text-white transition">Landowners</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <span>📍</span>
              <span>
                House #12, Road #5, <br />
                Bashundhara R/A, Dhaka-1229
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span>📞</span>
              <span>+880 1700-000000</span>
            </li>
            <li className="flex items-center gap-3">
              <span>✉️</span>
              <span>info@threesdevelopers.com</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
