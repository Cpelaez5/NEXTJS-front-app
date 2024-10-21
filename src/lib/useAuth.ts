// lib/useAuth.ts

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { api } from './api';

// Define la interfaz para el usuario
interface User {
  token: string;
  // Puedes agregar más propiedades según lo que devuelva tu API
}

export function useAuth() {
  const [user, setUser ] = useState<User | null>(null); // Aquí definimos el tipo
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Verificar si hay un token en localStorage
    const token = localStorage.getItem('token');
    if (token) {
      // Aquí podrías hacer una petición para verificar el token
      // Por ahora, simplemente asumiremos que el token es válido
      setUser ({ token }); // Ahora TypeScript entiende que 'user' puede ser un objeto con 'token'
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const data = await api.login({ email, password });

      console.log(data)
      localStorage.setItem('token', data.token);
      setUser (data.user); // Asegúrate de que 'data.user' sea del tipo 'User '
      router.push('/dashboard');
    } catch (error) {
      console.error('Error de inicio de sesión:', error);
      throw error;
    }
  };

  const registerUser  = async (data: { username: string; email: string; password: string }) => {
    try {
      const response = await api.register({ username: data.username, email: data.email, password: data.password });
      console.log('**RESPUESTA:** ', response);
      return response;
    } catch (error) {
      console.error(error);
      return { success: false, message: 'Error registering user' };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser (null);
    router.push('/auth/login');
  };

  return { user, loading, login, logout, registerUser };
}