import { useState } from 'react';
import { supabase } from '../supabaseClient'; // путь может отличаться
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!role) {
      setError('Пожалуйста, выберите роль');
      return;
    }

    // 1. Регистрируем пользователя
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signUpError) {
      setError(signUpError.message);
      return;
    }

    // 2. После регистрации — добавляем профиль с ролью
    const user = signUpData?.user;

    if (user) {
      const { error: insertError } = await supabase.from('profiles').insert([
        {
          id: user.id,
          email: user.email,
          role: role,
        },
      ]);

      if (insertError) {
        setError('Ошибка при сохранении профиля: ' + insertError.message);
        return;
      }

      // ✅ Успешно — переходим дальше
      navigate('/home'); // или /supplier-dashboard, /store-dashboard
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">Регистрация</h2>

      {error && <div className="text-red-500 mb-2">{error}</div>}

      <form onSubmit={handleRegister} className="flex flex-col gap-3">
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
          className="bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}