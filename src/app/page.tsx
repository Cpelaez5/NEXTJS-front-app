import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <main className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Bienvenido a la Evaluación 360° de Empleados
        </h1>
        <p className="text-xl mb-8">
          Una plataforma completa para realizar evaluaciones de desempeño de 360 grados.
        </p>
        <Link 
          href="/auth/login" 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Iniciar Sesión
        </Link>
      </main>
      <footer className="mt-8 text-center text-gray-500">
        <p>© 2023 Tu Empresa. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}