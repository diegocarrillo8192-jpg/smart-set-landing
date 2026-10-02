import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { type LegalSection } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Términos y Condiciones — Smart Set Architect",
  description:
    "Términos y Condiciones de uso de Smart Set Architect: licencia de uso personal, procesamiento de audio 100 % local y software entregado tal cual (AS IS).",
};

const sections: LegalSection[] = [
  {
    heading: "Aceptación de los Términos",
    paragraphs: [
      "Al descargar, instalar o utilizar Smart Set Architect (en adelante, «el Software») aceptas quedar vinculado por estos Términos y Condiciones. Si no estás de acuerdo con alguna de estas condiciones, no instales ni utilices el Software.",
      "El Software es desarrollado y distribuido por un desarrollador independiente. Su uso es completamente voluntario.",
    ],
  },
  {
    heading: "Licencia de uso personal",
    paragraphs: [
      "Se concede una licencia limitada, no exclusiva, no transferible y revocable para instalar y usar el Software en equipos de tu propiedad o bajo tu control, exclusivamente con fines personales y no comerciales.",
      "Esta licencia no te autoriza a:",
    ],
    bullets: [
      "Vender, alquilar, sublicenciar o redistribuir el Software.",
      "Descompilar, realizar ingeniería inversa o modificar el Software, salvo en la medida permitida por la ley aplicable.",
      "Eliminar o alterar avisos de autoría, marcas o avisos legales incluidos en el Software.",
      "Utilizar el Software para prestar un servicio comercial a terceros sin autorización previa por escrito.",
    ],
  },
  {
    heading: "Procesamiento de audio 100 % local",
    paragraphs: [
      "Todo el análisis, la lectura de metadatos y el procesamiento de audio se realizan íntegramente en la máquina del usuario. Tus pistas y archivos nunca se suben, transmiten ni procesan en servidores externos.",
      "El Software no requiere conexión a internet para funcionar. Cualquier conexión se limita, cuando corresponda, a la comprobación manual de actualizaciones o a la descarga de las mismas.",
    ],
  },
  {
    heading: "Entrega «TAL CUAL» (AS IS)",
    paragraphs: [
      "El Software se entrega «TAL CUAL» («AS IS») y «SEGÚN DISPONIBILIDAD» («AS AVAILABLE»), sin garantías de ningún tipo, expresas o implícitas, incluyendo, entre otras, las garantías implícitas de comerciabilidad, idoneidad para un fin particular y no infracción.",
      "El desarrollador no garantiza que el Software funcione sin interrupciones ni errores, ni que los resultados obtenidos sean exactos o satisfactorios. El uso del Software es bajo tu propio riesgo.",
    ],
  },
  {
    heading: "Derechos de autor del material musical",
    paragraphs: [
      "El usuario es el único responsable del material musical, las pistas y los metadatos que cargue o procese con el Software. El Software no incluye, distribuye ni licencia contenido musical de terceros.",
      "El desarrollador no asume ninguna responsabilidad por reclamaciones relacionadas con derechos de autor, derechos conexos o licencias derivadas del material que el usuario cargue. Es responsabilidad exclusiva del usuario contar con las licencias y autorizaciones necesarias sobre dicho material.",
    ],
  },
  {
    heading: "Avisos de seguridad del sistema operativo",
    paragraphs: [
      "Smart Set Architect es distribuido por un desarrollador independiente que no cuenta con certificados de firma de código comerciales de alto costo. Por este motivo, es posible que veas advertencias de seguridad al instalar:",
    ],
    bullets: [
      "Windows SmartScreen: puede mostrar «Windows protegió tu PC» para aplicaciones sin reputación establecida. Puedes continuar mediante «Más información» → «Ejecutar de todas formas» si descargaste el instalador desde el canal oficial.",
      "macOS Gatekeeper: puede indicar que la aplicación proviene de un «desarrollador no identificado». Puedes abrirla con clic derecho → «Abrir», o desde Ajustes del Sistema → Privacidad y seguridad → «Abrir de todos modos».",
    ],
  },
  {
    heading: "Limitación de responsabilidad",
    paragraphs: [
      "En la máxima medida permitida por la ley, el desarrollador no será responsable de daños directos, indirectos, incidentales, especiales o consecuentes, incluyendo pérdida de datos, pérdida de beneficios o interrupción del negocio, derivados del uso o de la imposibilidad de usar el Software.",
      "Siempre recomendamos mantener copias de seguridad de tu biblioteca musical antes de ejecutar cualquier proceso automático.",
    ],
  },
  {
    heading: "Cambios en los Términos",
    paragraphs: [
      "Estos Términos pueden actualizarse periódicamente para reflejar mejoras del Software o cambios legales. La versión vigente se publicará en esta página con su fecha de actualización. El uso continuado del Software tras una actualización implica su aceptación.",
    ],
  },
  {
    heading: "Contacto",
    paragraphs: [
      "Para consultas sobre estos Términos y Condiciones, puedes escribirnos a través de los canales de contacto publicados en el repositorio oficial del proyecto en GitHub.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Términos y Condiciones"
      updated="2 de octubre de 2026"
      intro="Estos Términos y Condiciones regulan la descarga, instalación y uso de Smart Set Architect. Te recomendamos leerlos con atención antes de utilizar el Software."
      sections={sections}
      footerNote={
        <>
          El Software procesa tu audio de forma local y no recopila datos. Consulta también
          nuestra{" "}
          <Link href="/privacy" className="text-neon underline-offset-4 hover:underline">
            Política de Privacidad
          </Link>{" "}
          para más información.
        </>
      }
    />
  );
}
