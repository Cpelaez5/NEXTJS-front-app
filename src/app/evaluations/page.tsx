'use client';

import { useState } from 'react';
import { api } from '../../lib/api'; // Asegúrate de que esta ruta sea correcta

interface FormData {
  employeeName: string;
  evaluationType: string;
  performanceRating: string;
  comments: string;
}

export default function CreateEvaluation() {
  const [formData, setFormData] = useState<FormData>({
    employeeName: '',
    evaluationType: '',
    performanceRating: '',
    comments: '',
  });

  const [message, setMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.createEvaluation(formData);
      setMessage('Evaluación creada exitosamente.');
      setErrorMessage(null);
      // Limpiar el formulario si es necesario
      setFormData({
        employeeName: '',
        evaluationType: '',
        performanceRating: '',
        comments: '',
      });
    } catch (error) {
      setErrorMessage('Error al crear la evaluación. Intenta nuevamente.');
      setMessage(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Create Evaluation</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <form onSubmit={handleSubmit} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                {message && <div className="text-green-500">{message}</div>}
                {errorMessage && <div className="text-red-500">{errorMessage}</div>}
                <div className="relative">
                  <input
                    id="employeeName"
                    name="employeeName"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    placeholder="Employee Name"
                    value={formData.employeeName}
                    onChange={handleChange}
                  />
                  <label htmlFor="employeeName" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Employee Name</label>
                </div>
                <div className="relative">
                  <select
                    id="evaluationType"
                    name="evaluationType"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    value={formData.evaluationType}
                    onChange={handleChange}
                  >
                    <option value="">Select Evaluation Type</option>
                    <option value="self">Self Evaluation</option>
                    <option value="peer">Peer Evaluation</option>
                    <option value="manager">Manager Evaluation</option>
                  </select>
                  <label htmlFor="evaluationType" className="absolute left-0 -top-3.5 text-gray-600 text-sm">Evaluation Type</label>
                </div>
                <div className="relative">
                  <select
                    id="performanceRating"
                    name="performanceRating"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    value={formData.performanceRating}
                    onChange={handleChange}
                  >
                    <option value="">Select Performance Rating</option>
                    <option value="1">1 - Needs Improvement</option>
                    <option value="2">2 - Meets Some Expectations</option>
                    <option value="3">3 - Meets Expectations</option>
                    <option value="4">4 - Exceeds Expectations</option>
                    <option value="5">5 - Outstanding</option>
                  </select>
                  <label htmlFor="performanceRating" className="absolute left-0 -top-3.5 text-gray-600 text-sm">Performance Rating</label>
                </div>
                <div className="relative">
                  <textarea
                    id="comments"
                    name="comments"
                    className="peer placeholder-transparent h-20 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    placeholder="Comments"
                    value={formData.comments}
                    onChange={handleChange}
                  ></textarea>
                  <label htmlFor="comments" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Comments</label>
                </div>
                <div className="relative">
                  <button className="bg-blue-500 text-white rounded-md px-2 py-1">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}