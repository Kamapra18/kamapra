import Image from "next/image";

export default function FooterLogo() {
  return (
    <div>
      <Image
        src="/logo_Kamapra1.png"
        alt="logo"
        width={100}
        height={100}
        className="rounded-full"
      />
      <p className="mt-4 text-gray-400">
        Masih pemula, tapi semangat berkarya dan terus belajar.
      </p>
    </div>
  );
}
