import React from 'react';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Brain } from 'lucide-react';
import { Button } from '../components/ui/Button';

const TermsSpanish: React.FC = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Helmet>
        <title>Términos de Uso - MemoriaNASA</title>
        <meta name="description" content="Términos de uso y condiciones de servicio de MemoriaNASA." />
      </Helmet>

      {/* Header */}
      <header className="py-6 px-4 border-b border-gray-800">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Brain className="w-8 h-8 text-purple-400" />
              <span className="text-xl font-bold text-white">MemoriaNASA</span>
            </div>
            <Button variant="outline" onClick={goBack} className="flex items-center space-x-2">
              <ArrowLeft className="w-4 h-4" />
              <span>Volver</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Términos de Uso</h1>
        
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-purple-400 mb-4">1. Términos</h2>
            <p className="text-gray-300 leading-relaxed">
              Al acceder al sitio web, usted acepta estar sujeto a estos términos de servicio, todas las leyes y regulaciones aplicables, y usted acepta que es responsable del cumplimiento de todas las leyes locales aplicables. Si no está de acuerdo con alguno de estos términos, se le prohíbe usar o acceder a este sitio web. Los materiales contenidos en este sitio están protegidos por las leyes de derechos de autor y marcas comerciales aplicables.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-400 mb-4">2. Uso de Licencia</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Se otorga permiso para descargar temporalmente una copia de los materiales (información o software) en el sitio web de MemoriaNASA para visualización personal y no comercial únicamente. Esta es la concesión de una licencia, no una transferencia de título y bajo esta licencia usted no puede:
            </p>
            <ul className="text-gray-300 space-y-2 ml-6">
              <li>• modificar o copiar los materiales;</li>
              <li>• usar los materiales para cualquier propósito comercial o para exhibición pública (comercial o no comercial);</li>
              <li>• intentar descompilar o realizar ingeniería inversa de cualquier software contenido en el sitio web;</li>
              <li>• eliminar cualquier derecho de autor u otras notaciones propietarias de los materiales; o</li>
              <li>• transferir los materiales a otra persona o 'reflejar' los materiales en cualquier otro servidor.</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              Esta licencia terminará automáticamente si viola cualquiera de estas restricciones y puede ser terminada por MemoriaNASA en cualquier momento. Al terminar su visualización de estos materiales o al terminar esta licencia, debe eliminar todos los materiales descargados en su posesión, ya sea en formato electrónico o impreso.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-400 mb-4">3. Descargo de Responsabilidad</h2>
            <p className="text-gray-300 leading-relaxed">
              Los materiales en el sitio web de MemoriaNASA se proporcionan 'tal como están'. MemoriaNASA no ofrece garantías, expresas o implícitas, y por la presente renuncia y niega todas las demás garantías, incluyendo, sin limitación, garantías implícitas o condiciones de comerciabilidad, idoneidad para un propósito particular, o no infracción de propiedad intelectual u otra violación de derechos. Además, MemoriaNASA no garantiza ni hace ninguna representación con respecto a la precisión, resultados probables o confiabilidad del uso de los materiales en su sitio web o de otra manera relacionado con dichos materiales o en sitios vinculados a este sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-400 mb-4">4. Limitaciones</h2>
            <p className="text-gray-300 leading-relaxed">
              En ningún caso MemoriaNASA o sus proveedores serán responsables de cualquier daño (incluyendo, sin limitación, daños por pérdida de datos o ganancias o debido a interrupción del negocio) que surja del uso o la incapacidad de usar los materiales en MemoriaNASA, incluso si MemoriaNASA o un representante autorizado de MemoriaNASA ha sido notificado oralmente o por escrito de la posibilidad de tal daño. Como algunas jurisdicciones no permiten limitaciones en garantías implícitas, o limitaciones de responsabilidad por daños consecuentes o incidentales, estas limitaciones pueden no aplicarse a usted.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-400 mb-4">5. Precisión de los Materiales</h2>
            <p className="text-gray-300 leading-relaxed">
              Los materiales que aparecen en el sitio web de MemoriaNASA podrían incluir errores técnicos, tipográficos o fotográficos. MemoriaNASA no garantiza que cualquier material en su sitio web sea preciso, completo o actual. MemoriaNASA puede hacer cambios a los materiales contenidos en su sitio web en cualquier momento sin previo aviso. Sin embargo, MemoriaNASA no se compromete a actualizar los materiales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-400 mb-4">6. Enlaces</h2>
            <p className="text-gray-300 leading-relaxed">
              MemoriaNASA no ha revisado todos los sitios vinculados a su sitio y no es responsable del contenido de ningún sitio vinculado. La inclusión de cualquier enlace no implica el respaldo por MemoriaNASA del sitio. El uso de cualquier sitio web vinculado es bajo el propio riesgo del usuario.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-400 mb-4">7. Modificaciones</h2>
            <p className="text-gray-300 leading-relaxed">
              MemoriaNASA puede revisar estos términos de servicio del sitio web en cualquier momento sin previo aviso. Al usar este sitio, usted acepta estar sujeto a la versión actual de estos términos de servicio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-400 mb-4">8. Ley Aplicable</h2>
            <p className="text-gray-300 leading-relaxed">
              Estos términos y condiciones se rigen e interpretan de acuerdo con las leyes aplicables y usted se somete irrevocablemente a la jurisdicción exclusiva de los tribunales en ese estado o localidad.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsSpanish;