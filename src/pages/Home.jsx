export default function Home() {
  const userEmail = localStorage.getItem("userEmail");

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Личный кабинет</h1>
        <p className="text-gray-600">
          Добро пожаловать, <strong>{userEmail || "пользователь"}</strong>!
        </p>
        <p className="text-gray-500 mt-2">
          Здесь вы можете управлять своим аккаунтом, просматривать заказы и настройки.
        </p>
      </div>
    </div>
  );
}