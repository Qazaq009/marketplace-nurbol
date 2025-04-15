import { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [storeName, setStoreName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    setError('');

    if (!role) {
      setError('Пожалуйста, выберите роль');
      return;
    }

    if (password !== confirmPassword) {
      setError('Пароли не совпадают');
      return;
    }

    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signUpError) {
      setError(signUpError.message);
      return;
    }

    const user = signUpData?.user;

    if (user) {
      const { error: insertError } = await supabase.from('profiles').insert([
        {
          id: user.id,
          email: user.email,
          role: role,
          store_name: storeName,
        },
      ]);

      if (insertError) {
        setError('Ошибка при сохранении профиля: ' + insertError.message);
        return;
      }

      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('userEmail', user.email);
      navigate(role === 'supplier' ? '/supplier-dashboard' : '/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white shadow-md p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-700">Регистрация</h2>

        {error && <div className="text-red-500 mb-3 text-center">{error}</div>}

        <form onSubmit={handleRegister} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Название магазина / поставщика"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
            className="border px-3 py-2 rounded"
            required
          />

          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border px-3 py-2 rounded"
          />

          <input
            type="password"
            placeholder="Пароль"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border px-3 py-2 rounded"
          />

          <input
            type="password"
            placeholder="Подтвердите пароль"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border px-3 py-2 rounded"
          />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
            className="border px-3 py-2 rounded"
          >
            <option value="">Выберите роль</option>
            <option value="store">Магазин</option>
            <option value="supplier">Поставщик</option>
          </select>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Зарегистрироваться
          </button>
        </form>

        <p className="mt-4 text-sm text-center">
          Уже есть аккаунт?{" "}
          <a href="/login" className="text-blue-600 underline">
            Войти
          </a>
        </p>
      </div>
    </div>
  );
}
