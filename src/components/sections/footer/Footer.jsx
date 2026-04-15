import Facebook from "../../../assets/facebook.png";
import Instagram from "../../../assets/instagram.png";
import Twitter from "../../../assets/twitter.png";  
export default function Footer() {
  return (
    <footer className="bg-brand text-white pt-16 pb-6">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="md:text-5xl text-3xl  font-bold mb-4">KeenKeeper</h2>

        {/* Subtitle */}
        <p className="text-gray-200 max-w-2xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        {/* Social Links */}
        <div className="mt-8">
          <h4 className="mb-4 text-lg font-medium">Social Links</h4>

          <div className="flex justify-center gap-4">
            <button className="btn btn-circle bg-white text-black hover:bg-gray-200">
              <img src={Instagram} alt="Instagram" />
            </button>

            <button className="btn btn-circle bg-white text-black hover:bg-gray-200">
              <img src={Facebook} alt="Facebook" />
            </button>

            <button className="btn btn-circle bg-white text-black hover:bg-gray-200">
              <img src={Twitter} alt="Twitter" />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="divider divide-gray-300 my-10"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <p>© {new Date().getFullYear()} KeenKeeper. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
