import { Link, useNavigate } from "react-router-dom";
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

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/main" className="text-2xl font-bold text-blue-700">
          Marketplace
        </Link>

        <div className="flex gap-4 items-center text-gray-700">
          <Link to="/main" className="hover:text-blue-600 transition">Главная</Link>
          {isLoggedIn && (
            <>
              <Link to="/home" className="hover:text-blue-600 transition">Личный кабинет</Link>
              <Link to="/products" className="hover:text-blue-600 transition">Товары</Link>
            </>
          )}
          <Link to="/register" className="hover:text-blue-600 transition">Регистрация</Link>
          {!isLoggedIn ? (
            <Link to="/login" className="hover:text-blue-600 transition">Войти</Link>
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
