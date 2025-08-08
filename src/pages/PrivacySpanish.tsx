import React from 'react';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Brain } from 'lucide-react';
import { Button } from '../components/ui/Button';

const PrivacySpanish: React.FC = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <Helmet>
        <title>Política de Privacidad - MemoriaNASA</title>
        <meta name="description" content="Política de privacidad y protección de datos de MemoriaNASA." />
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
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Política de Privacidad</h1>
        
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 space-y-8">
          <section>
            <p className="text-gray-300 leading-relaxed mb-6">
              Toda su información personal recopilada se utilizará para ayudar a que su visita a nuestro sitio sea lo más productiva y agradable posible.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              La garantía de la confidencialidad de los datos personales de los usuarios de nuestro sitio es importante para MemoriaNASA.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Toda la información personal relacionada con miembros, suscriptores, clientes o visitantes que usan MemoriaNASA será tratada de acuerdo con la Ley de Protección de Datos Personales del 26 de octubre de 1998 (Ley No. 67/98).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Información Personal</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              La información personal recopilada puede incluir su nombre, correo electrónico, número de teléfono y/o móvil, dirección, fecha de nacimiento y/o otros.
            </p>
            <p className="text-gray-300 leading-relaxed">
              El uso de MemoriaNASA implica la aceptación de este Acuerdo de Privacidad. El equipo de MemoriaNASA se reserva el derecho de cambiar este acuerdo sin previo aviso. Por lo tanto, recomendamos que consulte nuestra política de privacidad regularmente para que siempre esté actualizado.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Publicidad</h2>
            <p className="text-gray-300 leading-relaxed">
              Como otros sitios web, recopilamos y usamos información contenida en anuncios. La información contenida en los anuncios incluye su dirección IP (Protocolo de Internet), su ISP (Proveedor de Servicios de Internet, como Sapo, Clix u otros), el navegador que usó al visitar nuestro sitio web (como Internet Explorer o Firefox), la hora de su visita y qué páginas visitó dentro de nuestro sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Cookies y Web Beacons</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Usamos cookies para almacenar información como sus preferencias personales cuando visita nuestro sitio web. Esto puede incluir una ventana emergente simple, o un enlace a varios servicios que proporcionamos, como foros.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Además, también usamos publicidad de terceros en nuestro sitio web para apoyar los costos de mantenimiento. Algunos de estos anunciantes pueden usar tecnologías como cookies y/o web beacons cuando anuncian en nuestro sitio web, lo que hará que estos anunciantes (como Google a través de Google AdSense) también reciban su información personal, como su dirección IP, su ISP, su navegador, etc. Esta función generalmente se usa para geotargeting (mostrar publicidad de Lisboa solo a lectores de Lisboa, por ejemplo) o mostrar publicidad dirigida a un tipo de usuario (como mostrar publicidad de restaurantes a un usuario que visita sitios de cocina regularmente, por ejemplo).
            </p>
            <p className="text-gray-300 leading-relaxed">
              Usted tiene el poder de desactivar sus cookies, en las opciones de su navegador, o haciendo cambios en las herramientas del programa Anti-Virus, como Norton Internet Security. Sin embargo, esto puede cambiar la forma en que interactúa con nuestro sitio web, u otros sitios web. Esto puede o no afectar su capacidad para iniciar sesión en programas, sitios o foros en nuestras y otras redes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Enlaces a Sitios de Terceros</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              MemoriaNASA tiene enlaces a otros sitios, que, en nuestra opinión, pueden contener información/herramientas útiles para nuestros visitantes. Nuestra política de privacidad no se aplica a sitios de terceros, por lo que si visita otro sitio desde el nuestro, debe leer su política de privacidad.
            </p>
            <p className="text-gray-300 leading-relaxed">
              No somos responsables de la política de privacidad o el contenido en estos sitios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-purple-400 mb-4">Contacto</h2>
            <p className="text-gray-300 leading-relaxed">
              Si tiene alguna pregunta sobre esta Política de Privacidad, las prácticas de este sitio o sus tratos con este sitio web, puede contactarnos a través de los medios proporcionados en nuestro sitio web.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacySpanish;