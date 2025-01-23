import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100">
            Política de Privacidad de Intiguard
          </CardTitle>
          <CardDescription className="text-center text-gray-600 dark:text-gray-400">
            Seguridad Comunitaria y Protección de Datos
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 text-gray-800 dark:text-gray-300">
          <p>
            En Intiguard, desarrollado por KrizRoMe, tu privacidad es nuestra prioridad. Esta política explica cómo recopilamos, usamos y protegemos tu información personal para ofrecerte una experiencia segura y eficiente.
          </p>
          <h3 className="text-lg font-semibold">Información que recopilamos</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>**Datos de ubicación en tiempo real:** Para enviar alertas de incidentes y mostrar mapas de riesgo.</li>
            <li>**Datos del dispositivo:** Información básica para mejorar la compatibilidad y el rendimiento.</li>
            <li>**Reportes de incidentes:** Detalles del incidente proporcionados por el usuario.</li>
            <li>**Datos de uso anónimos:** Para optimizar el funcionamiento de la aplicación.</li>
          </ul>
          <h3 className="text-lg font-semibold">Cómo usamos tu información</h3>
          <p>
            Utilizamos tus datos para:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Enviar alertas inmediatas al personal de seguridad local.</li>
            <li>Generar mapas interactivos de zonas de riesgo.</li>
            <li>Mejorar la experiencia de usuario y solucionar problemas técnicos.</li>
          </ul>
          <h3 className="text-lg font-semibold">Seguridad de los datos</h3>
          <p>
            Implementamos medidas de seguridad avanzadas para proteger tu información, como el cifrado de datos durante la transmisión y el almacenamiento seguro. Tus datos de ubicación solo se utilizan durante la sesión activa y no se almacenan en nuestros servidores.
          </p>
          <h3 className="text-lg font-semibold">Compartir datos</h3>
          <p>
            No compartimos tu información personal con terceros, excepto cuando sea necesario para cumplir con la ley o mejorar la seguridad comunitaria. Los reportes de incidentes son anónimos y no contienen información identificable del usuario.
          </p>
          <h3 className="text-lg font-semibold">Conservación y eliminación de datos</h3>
          <p>
            Los datos de ubicación y reportes de incidentes se conservan con la finalidad de mostrar un mapa histórico de riesgos y mejorar la precisión de las alertas.
          </p>
          <h3 className="text-lg font-semibold">Tus derechos</h3>
          <p>
            Puedes acceder, corregir o eliminar tu información personal contactando con nuestro equipo de soporte.
          </p>
          <h3 className="text-lg font-semibold">Contacto</h3>
          <p>
            Si tienes preguntas sobre esta política de privacidad o deseas ejercer tus derechos, contáctanos en:
          </p>
          <p className="text-center">
            <Link href="mailto:privacy@intiguard.com" className="text-blue-500 dark:text-blue-400 underline">
              privacy@intiguard.com
            </Link>
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild>
            <Link href="/">Volver al inicio</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
