import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

export default function TestSupabase() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const checkConnection = async () => {
      const { data, error } = await supabase.from('profiles').select('*').limit(1);
      if (error) {
        setMessage('❌ Supabase connection failed: ' + error.message);
      } else {
        setMessage('✅ Supabase connected!');
      }
    };
    checkConnection();
  }, []);

  return (
    <div className="text-center p-10">
      <h1 className="text-2xl font-bold mb-4">Supabase Test</h1>
      <p>{message}</p>
    </div>
  );
}
