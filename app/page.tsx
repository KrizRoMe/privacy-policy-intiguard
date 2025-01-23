import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Política de Privacidad de Intiguard</CardTitle>
          <CardDescription className="text-center">Simulación de Recorrido en Tiempo Real</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Bienvenido a Intiguard. Como desarrollador independiente, me comprometo a proteger tu privacidad y a ser transparente sobre cómo se utiliza tu información.
          </p>
          <h3 className="text-lg font-semibold">Información que recopilo</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Datos de ubicación en tiempo real (solo cuando usas la app)</li>
            <li>Información básica del dispositivo para mejorar la compatibilidad</li>
            <li>Datos anónimos de uso para mejorar la aplicación</li>
          </ul>
          <h3 className="text-lg font-semibold">Cómo uso tu información</h3>
          <p>
            Tu información se utiliza exclusivamente para:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Proporcionar la funcionalidad de simulación de recorrido en tiempo real</li>
            <li>Mejorar la precisión y rendimiento de la aplicación</li>
            <li>Solucionar problemas técnicos si los hubiera</li>
          </ul>
          <h3 className="text-lg font-semibold">Seguridad de los datos</h3>
          <p>
            Utilizo tecnología WebSocket para transmitir datos en tiempo real de manera segura. Todos los datos se cifran y se almacenan de forma segura en tu dispositivo.
          </p>
          <h3 className="text-lg font-semibold">Compartir datos</h3>
          <p>
            No vendo, intercambio ni transfiero tu información personal a terceros. La app es de uso personal y los datos se mantienen en tu dispositivo.
          </p>
          <h3 className="text-lg font-semibold">Tus derechos</h3>
          <p>
            Puedes acceder, corregir o eliminar tu información personal en cualquier momento desde la configuración de la aplicación.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild>
            <Link href="mailto:tu@email.com">Contactar al desarrollador</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}