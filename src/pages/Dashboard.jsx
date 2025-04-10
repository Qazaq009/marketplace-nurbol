import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // В будущем: здесь будет Supabase/Firebase logout
    navigate("/"); // возвращаем на главную
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center p-6">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">👋 Добро пожаловать в личный кабинет!</h1>
        <p className="text-gray-600 text-lg mb-6">Здесь будет ваша личная информация.</p>

        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded shadow"
        >
          Выйти
        </button>
      </div>
    </>
  );
}
