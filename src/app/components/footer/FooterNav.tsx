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
      <h2 className="text-lg font-bold text-[var(--accent)] mb-2">
        Navigation
      </h2>
      <ul className="space-y-2">
        {["home", "about", "projects", "contact", "photobooth"].map((item) => (
          <li key={item} className="group">
            <a
              href={routes[item]}
              className="text-gray-400 capitalize transition-all duration-300 ease-in-out 
                         group-hover:text-[var(--accent)] group-hover:pl-2 flex items-center gap-2">
              {/* Dot indikator yang muncul saat hover */}
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] scale-0 transition-transform duration-300 group-hover:scale-100" />
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
