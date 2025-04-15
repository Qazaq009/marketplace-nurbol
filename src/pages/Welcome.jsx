import React from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl rounded-2xl border border-blue-100">
        <CardContent className="p-6">
          <h1 className="text-3xl font-semibold text-center mb-6 text-blue-700">
            Добро пожаловать 👋
          </h1>

          <p className="text-sm text-gray-500 text-center mb-8">
            Добро пожаловать на маркетплейс! Нажмите кнопку ниже, чтобы продолжить.
          </p>

          <Button
            onClick={handleLogin}
            className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl"
          >
            Войти
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
