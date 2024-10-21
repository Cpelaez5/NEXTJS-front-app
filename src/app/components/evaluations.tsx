// src/app/components/evaluations.tsx
'use client';

import { useState, useEffect } from 'react';
import { api } from '../../lib/api';

interface Evaluation {
  _id: string;
  title: string;
  // Agrega más propiedades según la estructura de tu evaluación
}

export default function EvaluationList() {
  const [evaluations, setEvaluations] = useState<Evaluation[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchEvaluations() {
      try {
        const data = await api.getEvaluations(); // Asegúrate de usar el método correcto
        setEvaluations(data);
      } catch (err) {
        setError((err as Error).message); // Asegúrate de que err sea del tipo Error
      } finally {
        setLoading(false);
      }
    }

    fetchEvaluations();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Lista de Evaluaciones</h2>
      <ul className="bg-white shadow rounded-lg">
        {evaluations.map((evaluation) => (
          <li key={evaluation._id} className="p-4 border-b last:border-b-0 hover:bg-gray-100">
            {evaluation.title}
          </li>
        ))}
      </ul>
    </div>
  );
}