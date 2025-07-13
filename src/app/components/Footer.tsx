import FooterLogo from "./footer/FooterLogo";
import FooterAddress from "./footer/FooterAddres";
import FooterNav from "./footer/FooterNav";
import FooterContact from "./footer/FooterContact";

export default function FooterSection() {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-8 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
          <FooterLogo />
          <FooterAddress />
          <FooterNav />
          <FooterContact />
        </div>

        <div className="text-center text-gray-400 text-xs mt-11 px-4">
          <div className="h-px bg-white opacity-30 mb-4"></div>
          <p className="mb-1">&copy; 2025. All rights reserved.</p>
          <p className="font-bold text-white">Kamapra.</p>
        </div>
      </footer>
    </div>
  );
}
