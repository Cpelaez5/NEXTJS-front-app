// lib/api.ts

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

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
    
    console.log(res)
    
    if (!res.ok) {
      throw new Error('Error en la petición a la API');
    }
    
    return res.json();
  } catch (error) {
    console.log(error)
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