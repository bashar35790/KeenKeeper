import { BarChart2, Clock, Home } from "lucide-react";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router";

export default function Navbar() {
  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/timeline", label: "Timeline", icon: Clock },
    { path: "/stats", label: "Stats", icon: BarChart2 },
  ];

  return (
    <nav className="w-full bg-white border-b border-base-200 px-6 py-3 flex items-center justify-between shadow-sm">
      {/* Logo */}
      <div className="flex items-center">
        <NavLink to="/">
          <img src={Logo} alt="Logo" className="w-36 h-8 mr-2 cursor-pointer" />
        </NavLink>
      </div>

      {/* Nav Items */}
      <div className="flex items-center gap-2">
        {navItems.map(({ path, label, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `btn btn-sm gap-2 rounded-lg transition-all ${
                isActive
                  ? "bg-brand text-white border-brand"
                  : "btn-ghost text-base-600"
              }`
            }
          >
            <Icon size={15} />
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
