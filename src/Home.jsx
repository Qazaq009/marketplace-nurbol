// src/pages/Home.jsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Marketplace Nurbol</h1>
      <p className="text-gray-600 mb-6 max-w-md">
        Добро пожаловать! Здесь магазины и поставщики могут находить друг друга и делать заказы без посредников.
      </p>
      <div className="flex gap-4">
      <Link
  to="/login"
  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
>
  Войти
</Link>
      </div>
    </div>
  );
}
