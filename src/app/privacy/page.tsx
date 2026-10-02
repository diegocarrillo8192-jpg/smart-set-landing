import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { type LegalSection } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Política de Privacidad — Smart Set Architect",
  description:
    "Política de Privacidad de Smart Set Architect: cero recolección, cero telemetría y procesamiento de audio 100 % local en tu propio equipo.",
};

const sections: LegalSection[] = [
  {
    heading: "Nuestro compromiso",
    paragraphs: [
      "En Smart Set Architect la privacidad no es una función opcional: es el diseño por defecto. No queremos tus datos, no los necesitamos y no los pedimos. Esta política explica con claridad qué ocurre (y qué no ocurre) con tu información.",
    ],
  },
  {
    heading: "Cero recolección de datos",
    paragraphs: [
      "El Software no recopila, almacena, transmite ni comparte datos personales. No hay cuentas de usuario, no hay formularios obligatorios y no hay servidores que reciban información sobre ti ni sobre tu biblioteca.",
    ],
  },
  {
    heading: "Procesamiento de audio 100 % local",
    paragraphs: [
      "Todo el análisis y procesamiento de tus archivos de audio se ejecuta exclusivamente en la máquina del usuario. Tus pistas, metadatos, listas y sets nunca se suben a internet ni salen de tu equipo.",
      "El Software funciona completamente offline. Si realizas una comprobación de actualizaciones, se consulta únicamente el canal oficial de distribuciones para verificar si existe una versión más reciente.",
    ],
  },
  {
    heading: "Datos que NO recopilamos",
    bullets: [
      "Archivos de audio, pistas o fragmentos de las mismas.",
      "Metadatos de tu biblioteca musical, listas de reproducción o sets.",
      "Identificadores personales, nombre, correo electrónico o ubicación.",
      "Identificadores de dispositivo, direcciones IP con fines de perfilado o huellas digitales del navegador.",
      "Datos de uso, estadísticas, eventos o métricas de comportamiento (telemetría).",
    ],
  },
  {
    heading: "Sin telemetría ni rastreo",
    paragraphs: [
      "El Software no incluye SDKs de analítica, rastreadores, píxeles de seguimiento ni servicios de reporte de errores que envíen datos a terceros. Tu actividad dentro de la aplicación es privada y permanece en tu equipo.",
    ],
  },
  {
    heading: "Sitio web y cookies",
    paragraphs: [
      "Este sitio web es una landing informativa. No utilizamos cookies de seguimiento ni publicidad personalizada. Solo pueden emplearse cookies estrictamente técnicas, necesarias para el funcionamiento y la seguridad del sitio por parte de nuestro proveedor de hosting.",
    ],
  },
  {
    heading: "Servicios de terceros",
    paragraphs: [
      "La distribución de los instaladores se realiza a través de GitHub Releases, y el alojamiento de este sitio a través de Vercel. Estos proveedores pueden procesar datos técnicos básicos (como la dirección IP) según sus propias políticas de privacidad al momento de servirtel contenido. No compartimos con ellos ningún dato sobre el uso real del Software.",
    ],
  },
  {
    heading: "Seguridad",
    paragraphs: [
      "Al minimizar la recolección de datos, reducimos al máximo la superficie de riesgo. Como no almacenamos información tuya, no hay bases de datos que puedan filtrarse. Aun así, recomendamos descargar el Software únicamente desde el repositorio oficial.",
    ],
  },
  {
    heading: "Menores de edad",
    paragraphs: [
      "El Software no está dirigido a menores de edad y, dado que no recopilamos datos, no tratamos información de menores de forma consciente.",
    ],
  },
  {
    heading: "Cambios a esta Política",
    paragraphs: [
      "Podemos actualizar esta Política de Privacidad para reflejar mejoras o cambios legales. La versión vigente siempre estará disponible en esta página con su fecha de actualización.",
    ],
  },
  {
    heading: "Contacto",
    paragraphs: [
      "Si tienes preguntas sobre esta Política de Privacidad, puedes contactarnos a través de los canales publicados en el repositorio oficial del proyecto en GitHub.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Política de Privacidad"
      updated="2 de octubre de 2026"
      intro="Smart Set Architect fue construido con un principio simple: tus pistas son tuyas. Esta política describe cómo protegemos tu privacidad mediante el procesamiento local y la ausencia total de recolección de datos."
      sections={sections}
      footerNote={
        <>
          Para conocer las condiciones de uso del Software, consulta nuestros{" "}
          <Link href="/terms" className="text-neon underline-offset-4 hover:underline">
            Términos y Condiciones
          </Link>
          .
        </>
      }
    />
  );
}
