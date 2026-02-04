export default function FooterNav() {
  const routes: Record<string, string> = {
    home: "/",
    about: "/about",
    projects: "/projects",
    contact: "/contact",
    photobooth: "/photobooth",
  };

  return (
    <div>
      <h2 className="text-lg font-bold bg-[linear-gradient(135deg,#2563EB,#38BDF8)] bg-clip-text text-transparent">
        Navigation
      </h2>
      <ul className="mt-2 space-y-2 text-gray-400">
        {["home", "about", "projects", "contact", "photobooth"].map((item) => (
          <li key={item} className="hover:text-white capitalize">
            <a href={routes[item]}>{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
