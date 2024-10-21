
// lib/api.ts

const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function fetchAPI(endpoint: string, options: RequestInit = {}) {
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  try {
    const res = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers,
    });

    if (!res.ok) {
      const errorResponse = await res.json(); // Intenta obtener el mensaje de error del cuerpo de la respuesta
      throw new Error(errorResponse.message || 'Error en la petición a la API');
    }

    return res.json(); // Devuelve el resultado en formato JSON
  } catch (error) {
    console.error('Error en fetchAPI:', error); // Log del error
    return { success: false, message: error || 'Error en la petición a la API' }; // Devuelve un objeto de error
  }
}

export const api = {

  
  // Users
  getUsers: () => fetchAPI('/users'),
  createUser: (userData: any) => fetchAPI('/users', { method: 'POST', body: JSON.stringify(userData) }),

  // Evaluations
  getEvaluations: () => fetchAPI('/evaluations'),
  createEvaluation: (evaluationData: any) => fetchAPI('/evaluations', { method: 'POST', body: JSON.stringify(evaluationData) }),

  // Employees
  getEmployees: () => fetchAPI('/employees'),
  createEmployee: (employeeData: any) => fetchAPI('/employees', { method: 'POST', body: JSON.stringify(employeeData) }),

  // Auth
  login: (credentials: { email: string; password: string }) => fetchAPI('/auth/login', { method: 'POST',headers: {
    'Content-Type': 'application/json', // Indica que el cuerpo de la solicitud es JSON
  }, body: JSON.stringify(credentials) }),
  register: (userData: any) => fetchAPI('/auth/register', { method: 'POST', body: JSON.stringify(userData) }),

  // Feedback
  getFeedback: () => fetchAPI('/feedback'),
  createFeedback: (feedbackData: any) => fetchAPI('/feedback', { method: 'POST', body: JSON.stringify(feedbackData) }),

  // Reports
  getReports: () => fetchAPI('/reports'),
  createReport: (reportData: any) => fetchAPI('/reports', { method: 'POST', body: JSON.stringify(reportData) }),
};