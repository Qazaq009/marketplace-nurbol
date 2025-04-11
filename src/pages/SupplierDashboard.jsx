import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function SupplierDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-50 text-center p-6">
        <h1 className="text-4xl font-bold text-yellow-800 mb-4">👋 Добро пожаловать, Поставщик!</h1>
        <p className="text-gray-600 text-lg mb-6">Здесь будет панель управления товарами.</p>

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
