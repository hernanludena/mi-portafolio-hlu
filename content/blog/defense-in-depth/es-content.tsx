import BlogClosingQuote from "@/components/blog-closing-quote";
import BlogFigure from "@/components/blog-figure";

export const defenseInDepthContentEs = (
    <>
        <p>
            En una aplicación bancaria, la seguridad no puede depender de una sola tecnología. No
            basta con utilizar HTTPS o solicitar un segundo factor de autenticación. Un atacante
            puede intentar interceptar comunicaciones, modificar la aplicación, ejecutar ingeniería
            inversa, automatizar ataques, comprometer un dispositivo o explotar vulnerabilidades en
            la infraestructura.
        </p>
        <p>
            Por esa razón, durante mi experiencia participando en el desarrollo de una plataforma
            bancaria móvil, aprendí que la mejor estrategia consiste en aplicar el principio de{" "}
            <strong>Defense in Depth</strong>, donde múltiples mecanismos trabajan de forma
            coordinada para proteger la aplicación desde el dispositivo del cliente hasta los
            servicios que procesan la información financiera.
        </p>
        <p>
            En este artículo comparto una arquitectura de referencia basada en buenas prácticas
            ampliamente utilizadas en la industria financiera.
        </p>

        <h2>Una solicitud aparentemente simple</h2>
        <p>
            Cuando un usuario abre la aplicación y consulta el saldo de su cuenta, en realidad esa
            petición atraviesa numerosas capas de protección antes de llegar al backend.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Mobile App
      │
SSL/TLS + SSL Pinning
      │
Cloudflare
      │
NetScaler (ADC)
      │
API Gateway
      │
Authentication Services
      │
Java Microservices
      │
Encryption Services / HSM
      │
Oracle Database`}
        </pre>
        <p>
            Cada una de estas capas tiene un propósito específico y protege frente a amenazas
            diferentes.
        </p>

        <BlogFigure
            src="/blog/defense-in-depth-arquitectura.png"
            alt="Arquitectura completa de una aplicación bancaria móvil con múltiples capas de seguridad Defense in Depth"
            caption="Arquitectura completa — del dispositivo móvil al core bancario, con capas transversales y amenazas mitigadas"
        />

        <BlogFigure
            src="/blog/defense-in-depth-flujo-transaccion.png"
            alt="Flujo de una transacción bancaria desde la app móvil hasta el core con capas de seguridad"
            caption="Flujo de una transacción — validaciones en dispositivo, perímetro, aplicación, HSM y sistemas centrales"
        />

        <h2>Primera línea de defensa: proteger la infraestructura</h2>
        <p>
            Antes de que una petición alcance los servidores del banco, suele atravesar servicios
            especializados de protección perimetral.
        </p>

        <h3>Cloudflare</h3>
        <p>
            Cloudflare actúa como la primera barrera frente al tráfico proveniente de Internet.
        </p>
        <p>Entre sus responsabilidades se encuentran:</p>
        <ul>
            <li>Protección contra ataques DDoS.</li>
            <li>Web Application Firewall (WAF).</li>
            <li>Protección frente a bots.</li>
            <li>Rate Limiting.</li>
            <li>Filtrado por reputación de IP.</li>
            <li>Geo Blocking.</li>
            <li>Protección de APIs.</li>
        </ul>
        <p>
            Gracias a esta capa, una gran cantidad de ataques nunca llega a la infraestructura
            bancaria.
        </p>

        <h3>NetScaler</h3>
        <p>
            Después de Cloudflare es común encontrar un Application Delivery Controller como
            NetScaler.
        </p>
        <p>Además del balanceo de carga, puede encargarse de:</p>
        <ul>
            <li>Terminación SSL.</li>
            <li>Reverse Proxy.</li>
            <li>Alta disponibilidad.</li>
            <li>Distribución inteligente del tráfico.</li>
            <li>Health Checks.</li>
            <li>Persistencia de sesiones.</li>
        </ul>
        <p>
            Esta capa mejora tanto la disponibilidad como el rendimiento de la plataforma.
        </p>

        <h2>Comunicaciones seguras</h2>
        <p>
            Toda la comunicación entre la aplicación móvil y el backend debe viajar cifrada mediante
            TLS.
        </p>
        <p>Sin embargo, utilizar HTTPS por sí solo no elimina todos los riesgos.</p>

        <h3>SSL Pinning</h3>
        <p>
            Uno de los mecanismos más utilizados en aplicaciones bancarias es SSL Pinning.
        </p>
        <p>
            La aplicación almacena previamente la información del certificado esperado y verifica
            que el servidor presente exactamente ese certificado.
        </p>
        <p>Esto evita ataques como:</p>
        <ul>
            <li>Man in the Middle.</li>
            <li>Certificados falsificados.</li>
            <li>Redes WiFi comprometidas.</li>
            <li>Proxies maliciosos.</li>
        </ul>
        <p>
            Aunque un atacante consiga instalar un certificado fraudulento en el dispositivo, la
            aplicación rechazará la conexión.
        </p>

        <BlogFigure
            src="/blog/defense-in-depth-ssl-pinning.png"
            alt="Comparación SSL Pinning frente a un ataque Man in the Middle"
            caption="Sin pinning el MITM puede prosperar; con certificate/public key pinning la app rechaza el certificado falso"
        />

        <h2>Protegiendo la propia aplicación</h2>
        <p>
            Una aplicación bancaria también debe defenderse de ataques dirigidos contra ella misma.
        </p>
        <p>Entre las protecciones más habituales se encuentran:</p>

        <h3>Root y Jailbreak Detection</h3>
        <p>
            Detectar dispositivos comprometidos donde un atacante dispone de privilegios elevados.
        </p>

        <h3>Emulator Detection</h3>
        <p>
            Evitar que la aplicación se ejecute en entornos utilizados para análisis automatizado.
        </p>

        <h3>Anti Debugging</h3>
        <p>
            Detectar herramientas de depuración que permitan inspeccionar la ejecución de la
            aplicación.
        </p>

        <h3>Hook Detection</h3>
        <p>
            Bloquear frameworks utilizados para modificar el comportamiento de la aplicación en
            tiempo real, como Frida o Xposed.
        </p>

        <h3>Tampering Detection</h3>
        <p>
            Detectar si el APK fue modificado, recompilado o firmado nuevamente por un atacante.
        </p>

        <h3>Code Obfuscation</h3>
        <p>
            Dificultar la ingeniería inversa mediante herramientas como ProGuard, R8 o DexGuard.
        </p>
        <p>
            Estas técnicas no hacen imposible un ataque, pero incrementan significativamente el
            esfuerzo necesario para comprometer la aplicación.
        </p>

        <BlogFigure
            src="/blog/defense-in-depth-app-hardening.png"
            alt="Protecciones en el dispositivo móvil: root, emulator, anti-debug, hooks, tampering y ofuscación"
            caption="Hardening del cliente — detección de amenazas en runtime y protección del binario"
        />

        <h2>Protección de credenciales</h2>
        <p>
            Uno de los activos más sensibles en una aplicación bancaria son las credenciales del
            usuario.
        </p>
        <p>Las contraseñas nunca deberían viajar ni almacenarse en texto plano.</p>
        <p>
            En muchos sistemas financieros también se utiliza <strong>PIN Block</strong>, un
            estándar ampliamente empleado para proteger PINes durante operaciones críticas como
            autenticación, cambio de PIN o recuperación de credenciales.
        </p>
        <p>
            El PIN se transforma siguiendo el estándar ISO 9564 y posteriormente es cifrado antes
            de ser procesado por un HSM.
        </p>
        <p>
            Este mecanismo evita que el PIN real pueda exponerse durante su transmisión.
        </p>

        <BlogFigure
            src="/blog/defense-in-depth-pin-hsm.png"
            alt="Flujo PIN Block ISO 9564 cifrado hasta el HSM sin exponer el PIN en texto plano"
            caption="PIN Block + HSM — el PIN se transforma (ISO 9564), se cifra y se procesa en hardware seguro"
        />

        <h2>Cifrado y gestión de claves</h2>
        <p>
            La protección de los datos no termina cuando llegan al backend.
        </p>
        <p>Normalmente encontramos varias tecnologías trabajando conjuntamente.</p>
        <ul>
            <li>AES para cifrado de información sensible.</li>
            <li>RSA o ECC para intercambio seguro de claves.</li>
            <li>SHA 256 o SHA 512 para integridad.</li>
            <li>bcrypt, PBKDF2 o Argon2 para almacenamiento seguro de contraseñas.</li>
        </ul>
        <p>
            Las claves criptográficas normalmente son administradas mediante un Hardware Security
            Module (HSM), evitando que las llaves privadas abandonen un entorno seguro.
        </p>

        <h2>Autenticación multifactor</h2>
        <p>
            Una contraseña ya no es suficiente para proteger una cuenta bancaria.
        </p>
        <p>Las plataformas modernas implementan múltiples mecanismos adicionales.</p>
        <ul>
            <li>OTP.</li>
            <li>Biometría.</li>
            <li>Device Binding.</li>
            <li>Push Authentication.</li>
            <li>Risk Based Authentication.</li>
        </ul>
        <p>
            Este último permite adaptar el nivel de seguridad según el contexto del usuario.
        </p>
        <p>Por ejemplo:</p>
        <ul>
            <li>ubicación inusual,</li>
            <li>dispositivo nuevo,</li>
            <li>horario atípico,</li>
            <li>dirección IP sospechosa.</li>
        </ul>

        <h2>Protección contra ataques de repetición</h2>
        <p>
            Una amenaza menos conocida son los <strong>Replay Attacks</strong>.
        </p>
        <p>
            En este tipo de ataque, un atacante captura una petición legítima y posteriormente
            intenta enviarla nuevamente para ejecutar una operación sin autorización.
        </p>
        <p>Para mitigar este riesgo suelen combinarse varios mecanismos.</p>
        <ul>
            <li>Nonces de un solo uso.</li>
            <li>Timestamps.</li>
            <li>Tokens con corta duración.</li>
            <li>Identificadores únicos por transacción.</li>
            <li>Firmas digitales.</li>
            <li>Validaciones de idempotencia.</li>
        </ul>
        <p>
            Gracias a estas medidas, una petición válida deja de ser reutilizable una vez
            procesada.
        </p>

        <BlogFigure
            src="/blog/defense-in-depth-replay.png"
            alt="Antes y después de mitigar un Replay Attack con nonce, timestamp e idempotencia"
            caption="Replay Attack — sin controles la petición se reutiliza; con nonce de un solo uso el replay se rechaza"
        />

        <h2>La seguridad es un proceso continuo</h2>
        <p>
            Durante el desarrollo de aplicaciones bancarias es habitual realizar evaluaciones
            periódicas de seguridad.
        </p>
        <p>
            Los hallazgos obtenidos mediante Pentesting, SAST, DAST y pruebas basadas en OWASP
            Mobile Top 10 permiten fortalecer continuamente la plataforma.
        </p>
        <p>
            Cada vulnerabilidad corregida representa una nueva capa de protección incorporada al
            sistema.
        </p>

        <h2>Reflexión final</h2>
        <p>
            Uno de los mayores aprendizajes que obtuve trabajando en aplicaciones financieras fue
            comprender que la seguridad no es una característica aislada ni una responsabilidad
            exclusiva del equipo de ciberseguridad.
        </p>
        <p>
            Es una disciplina transversal que involucra arquitectura, desarrollo móvil, backend,
            infraestructura, criptografía y monitoreo continuo.
        </p>
        <p>
            Cuando todas estas capas trabajan juntas, el resultado es una plataforma
            considerablemente más resistente frente a ataques modernos.
        </p>
        <p>
            La verdadera fortaleza de una aplicación bancaria no reside en una tecnología
            específica, sino en la forma en que múltiples mecanismos colaboran para proteger cada
            transacción desde el dispositivo del cliente hasta el núcleo del sistema financiero.
        </p>

        <BlogClosingQuote>
            La fortaleza no está en una tecnología aislada, sino en cómo múltiples capas colaboran
            para proteger cada transacción — del dispositivo al núcleo financiero.
        </BlogClosingQuote>
    </>
);
