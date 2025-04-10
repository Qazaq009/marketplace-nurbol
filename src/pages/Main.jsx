// src/pages/Main.jsx
import React from "react";
import { Newspaper } from "lucide-react";

export default function MainPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex flex-col items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-3xl p-10 max-w-2xl w-full border border-green-100">
        <div className="flex items-center justify-center mb-6">
          <Newspaper className="w-10 h-10 text-green-500 mr-3" />
          <h1 className="text-3xl font-bold text-gray-800">
            Главная страница
          </h1>
        </div>

        <p className="text-gray-600 text-center text-lg mb-6">
          Здесь вы можете просматривать новости, обновления и товары.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 text-center">
          <div className="p-4 bg-green-100 rounded-xl shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-green-700 mb-2">🔥 Новинки</h2>
            <p className="text-sm text-gray-600">Узнайте о новых товарах и предложениях.</p>
          </div>
          <div className="p-4 bg-green-100 rounded-xl shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-green-700 mb-2">🛒 Категории</h2>
            <p className="text-sm text-gray-600">Ищите товары по категориям и фильтрам.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
