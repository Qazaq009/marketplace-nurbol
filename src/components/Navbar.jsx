import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("loggedIn") === "true");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    setIsLoggedIn(false);
    navigate("/main");
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-700 font-semibold underline"
      : "hover:text-blue-600 transition";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <NavLink to="/main" className="text-2xl font-bold text-blue-700">
          Marketplace
        </NavLink>

        <div className="flex gap-4 items-center text-gray-700">
          <NavLink to="/main" className={navLinkClass}>
            Главная
          </NavLink>

          {isLoggedIn && (
            <>
              <NavLink to="/home" className={navLinkClass}>
                Личный кабинет
              </NavLink>
              <NavLink to="/products" className={navLinkClass}>
                Товары
              </NavLink>
              <NavLink to="/supplier-dashboard" className={navLinkClass}>
                Поставщик
              </NavLink>
            </>
          )}

          <NavLink to="/register" className={navLinkClass}>
            Регистрация
          </NavLink>

          {!isLoggedIn ? (
            <NavLink to="/login" className={navLinkClass}>
              Войти
            </NavLink>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition"
            >
              Выйти
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
