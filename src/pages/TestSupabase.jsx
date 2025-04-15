import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

export default function TestSupabase() {
  const [status, setStatus] = useState("Connecting...");

  useEffect(() => {
    async function testConnection() {
      const { data, error } = await supabase.from("profiles").select("*").limit(1);
      if (error) {
        console.error("❌ Supabase error:", error.message);
        setStatus("❌ Error: " + error.message);
      } else {
        console.log("✅ Supabase connected");
        setStatus("✅ Supabase is working!");
      }
    }

    testConnection();
  }, []);

  return (
    <div className="text-center p-4 text-lg">
      <p>{status}</p>
    </div>
  );
}
