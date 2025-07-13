import Image from "next/image";

export default function FooterLogo() {
  return (
    <div>
      <Image
        src="/Kamapra.png"
        alt="logo"
        width={100}
        height={100}
        className="rounded-full"
      />
      <p className="mt-2 text-gray-400">
        Masih pemula, tapi semangat berkarya dan terus belajar.
      </p>
    </div>
  );
}
