import BlogClosingQuote from "@/components/blog-closing-quote";
import BlogFigure from "@/components/blog-figure";

export const mobileThreatsMitigationsContentEs = (
    <>
        <p>
            Esta sección puede ser una de las más valiosas del artículo porque conecta cada amenaza
            con las contramedidas utilizadas en aplicaciones bancarias reales.
        </p>
        <p>
            Complementa la visión de capas de{" "}
            <strong>Defense in Depth</strong>: aquí el foco no es la arquitectura de referencia,
            sino el catálogo de ataques que esa arquitectura intenta contener — y cómo se mitiga
            cada uno en la práctica.
        </p>

        <BlogFigure
            src="/blog/mobile-threats-mitigations-card.png"
            alt="Amenazas y mitigaciones en banca móvil"
            caption="Doce amenazas frecuentes y sus contramedidas en apps financieras"
        />

        <BlogFigure
            src="/blog/mobile-threats-mitigations-infografia.png"
            alt="Infografía: ataques comunes en aplicaciones bancarias móviles y cómo mitigarlos"
            caption="Mapa visual: ataque → cómo funciona → ejemplo → riesgo → mitigación"
        />

        <h2>1. Man in the Middle (MITM)</h2>
        <h3>¿Qué es?</h3>
        <p>
            Un atacante se coloca entre la aplicación móvil y el servidor para interceptar o
            modificar las comunicaciones sin que el usuario lo note.
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`App
   │
   ▼
Atacante
   │
   ▼
Banco`}
        </pre>

        <h3>Ejemplo real</h3>
        <p>Un usuario se conecta al WiFi gratuito de un aeropuerto.</p>
        <p>El atacante crea un Access Point falso con el mismo nombre.</p>
        <p>Todo el tráfico pasa primero por el atacante.</p>
        <p>
            Si la aplicación no verifica correctamente el certificado del servidor, el atacante
            puede:
        </p>
        <ul>
            <li>leer respuestas</li>
            <li>modificar respuestas</li>
            <li>robar tokens</li>
            <li>capturar credenciales</li>
        </ul>

        <h3>Cómo se mitiga</h3>
        <ul>
            <li>TLS 1.3</li>
            <li>SSL Pinning</li>
            <li>HSTS</li>
            <li>Mutual TLS (mTLS)</li>
            <li>Certificate Transparency</li>
            <li>Rotación periódica de certificados</li>
        </ul>

        <h2>2. Replay Attack</h2>
        <h3>¿Qué es?</h3>
        <p>El atacante captura una petición válida y posteriormente la vuelve a enviar.</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Usuario
Transferir $500
        ↓
Atacante captura
        ↓
Vuelve a enviar exactamente la misma petición`}
        </pre>
        <p>
            Si el backend no valida la unicidad de la operación, podría ejecutar la transferencia
            nuevamente.
        </p>

        <h3>Ejemplo</h3>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`POST /transfer
amount=500
account=123
token=abc`}
        </pre>
        <p>El atacante simplemente vuelve a enviar exactamente esa petición.</p>

        <h3>Cómo se mitiga</h3>
        <ul>
            <li>
                <strong>Nonce</strong> — cada petición tiene un identificador único.
            </li>
            <li>
                <strong>Timestamp</strong> — las peticiones expiran después de pocos segundos.
            </li>
            <li>
                <strong>Sequence Number</strong> — cada solicitud posee un número consecutivo.
            </li>
            <li>
                <strong>Idempotency Key</strong> — una misma operación solo puede ejecutarse una
                vez.
            </li>
            <li>
                <strong>Request Signature</strong> — cada petición se firma digitalmente.
            </li>
            <li>
                <strong>JWT de corta duración</strong> — por ejemplo, 5 minutos.
            </li>
        </ul>

        <h2>3. Tampering</h2>
        <h3>¿Qué es?</h3>
        <p>Modificar el APK para alterar su comportamiento.</p>
        <p>Ejemplos:</p>
        <ul>
            <li>eliminar validaciones</li>
            <li>desbloquear funciones</li>
            <li>desactivar biometría</li>
            <li>modificar URLs</li>
            <li>cambiar endpoints</li>
        </ul>

        <h3>Ejemplo real</h3>
        <p>El atacante descompila el APK usando jadx.</p>
        <p>Modifica</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`if(user.isPremium())`}
        </pre>
        <p>por</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`if(true)`}
        </pre>
        <p>Recompila la aplicación y la instala.</p>

        <h3>Cómo se mitiga</h3>
        <ul>
            <li>App Signature Verification</li>
            <li>Integrity Check</li>
            <li>Hash Verification</li>
            <li>Runtime Integrity</li>
            <li>Play Integrity API</li>
            <li>Apple App Attest</li>
            <li>Tamper Detection</li>
            <li>DexGuard</li>
        </ul>

        <h2>4. Rooting / Jailbreak</h2>
        <h3>¿Qué es?</h3>
        <p>El atacante obtiene privilegios administrativos sobre el dispositivo.</p>
        <p>Esto le permite:</p>
        <ul>
            <li>leer memoria</li>
            <li>interceptar llamadas</li>
            <li>modificar archivos</li>
            <li>acceder al almacenamiento seguro</li>
        </ul>

        <h3>Ejemplo</h3>
        <p>
            Un malware con permisos root accede al token almacenado por la aplicación.
        </p>

        <h3>Cómo se mitiga</h3>
        <ul>
            <li>Root Detection</li>
            <li>Jailbreak Detection</li>
            <li>Magisk Detection</li>
            <li>Zygisk Detection</li>
            <li>Play Integrity API</li>
            <li>DeviceCheck</li>
            <li>
                Bloquear operaciones críticas — muchas apps bancarias permiten abrir la aplicación,
                pero bloquean transferencias, pagos y cambios de contraseña.
            </li>
        </ul>

        <h2>5. Reverse Engineering</h2>
        <h3>¿Qué es?</h3>
        <p>Analizar el APK para descubrir cómo funciona.</p>
        <p>Herramientas:</p>
        <ul>
            <li>jadx</li>
            <li>apktool</li>
            <li>Ghidra</li>
        </ul>

        <h3>Objetivos del atacante</h3>
        <p>Encontrar:</p>
        <ul>
            <li>APIs ocultas</li>
            <li>claves</li>
            <li>secretos</li>
            <li>URLs</li>
            <li>algoritmos</li>
        </ul>

        <h3>Ejemplo</h3>
        <p>El desarrollador dejó:</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`String apiKey="123456789";`}
        </pre>
        <p>El atacante simplemente la obtiene.</p>

        <h3>Cómo se mitiga</h3>
        <ul>
            <li>
                <strong>Obfuscation</strong> — ProGuard, R8, DexGuard
            </li>
            <li>String Encryption</li>
            <li>
                <strong>Native Libraries</strong> — mover lógica crítica a C/C++ mediante NDK
            </li>
            <li>
                <strong>Secret Management</strong> — nunca incluir secretos dentro del APK
            </li>
            <li>
                <strong>HSM</strong> — las llaves privadas nunca están en la aplicación
            </li>
        </ul>

        <h2>6. Hooking</h2>
        <h3>¿Qué es?</h3>
        <p>
            Modificar el comportamiento de la aplicación mientras está ejecutándose. No modifica el
            APK: modifica la memoria.
        </p>
        <p>Herramientas:</p>
        <ul>
            <li>Frida</li>
            <li>Xposed</li>
            <li>LSPosed</li>
        </ul>

        <h3>Ejemplo</h3>
        <p>El atacante reemplaza</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`isFingerprintValid()`}
        </pre>
        <p>para que siempre devuelva</p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`true`}
        </pre>

        <h3>Cómo se mitiga</h3>
        <ul>
            <li>Frida Detection</li>
            <li>Hook Detection</li>
            <li>Runtime Integrity</li>
            <li>RASP</li>
        </ul>

        <h2>7. Credential Stuffing</h2>
        <h3>¿Qué es?</h3>
        <p>
            Utilizar millones de usuarios y contraseñas filtradas para intentar acceder
            automáticamente.
        </p>

        <h3>Cómo se mitiga</h3>
        <ul>
            <li>MFA</li>
            <li>Rate Limiting</li>
            <li>CAPTCHA</li>
            <li>Device Fingerprinting</li>
            <li>Behavioral Analytics</li>
        </ul>

        <h2>8. Brute Force</h2>
        <h3>¿Qué es?</h3>
        <p>Intentar miles de contraseñas.</p>

        <h3>Cómo se mitiga</h3>
        <ul>
            <li>Bloqueo temporal</li>
            <li>Incremento progresivo del tiempo de espera</li>
            <li>MFA</li>
            <li>Rate Limiting</li>
        </ul>

        <h2>9. Session Hijacking</h2>
        <h3>¿Qué es?</h3>
        <p>Robar el token de sesión.</p>

        <h3>Cómo se mitiga</h3>
        <ul>
            <li>JWT de corta duración</li>
            <li>Refresh Token Rotation</li>
            <li>Token Binding</li>
            <li>mTLS</li>
            <li>Device Binding</li>
        </ul>

        <h2>10. API Abuse</h2>
        <h3>¿Qué es?</h3>
        <p>Automatizar llamadas hacia las APIs.</p>
        <p>Ejemplo: enviar 100 000 solicitudes por minuto.</p>

        <h3>Cómo se mitiga</h3>
        <ul>
            <li>Cloudflare</li>
            <li>WAF</li>
            <li>Rate Limiting</li>
            <li>Bot Detection</li>
            <li>API Gateway</li>
        </ul>

        <h2>11. Malware Overlay</h2>
        <h3>¿Qué es?</h3>
        <p>
            Una aplicación maliciosa muestra una pantalla falsa encima de la aplicación bancaria
            para capturar credenciales. Muy común en Android.
        </p>

        <h3>Cómo se mitiga</h3>
        <ul>
            <li>Detección de aplicaciones superpuestas</li>
            <li>
                <strong>FLAG_SECURE</strong> — evita capturas de pantalla y grabación de pantalla en
                vistas sensibles
            </li>
            <li>Accessibility Abuse Detection</li>
        </ul>

        <h2>12. Memory Dump</h2>
        <h3>¿Qué es?</h3>
        <p>El atacante extrae la memoria RAM para buscar:</p>
        <ul>
            <li>tokens</li>
            <li>claves</li>
            <li>PIN</li>
            <li>credenciales</li>
        </ul>

        <h3>Cómo se mitiga</h3>
        <ul>
            <li>No almacenar secretos en memoria más tiempo del necesario</li>
            <li>Zeroization de memoria</li>
            <li>Cifrado en memoria para datos críticos</li>
            <li>Anti Debugging</li>
        </ul>

        <h2>Resumen de ataques y mitigaciones</h2>
        <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="border-b border-black/15 dark:border-white/15">
                        <th className="px-3 py-2 text-left">Ataque</th>
                        <th className="px-3 py-2 text-left">Objetivo</th>
                        <th className="px-3 py-2 text-left">Principales mitigaciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">MITM</td>
                        <td className="px-3 py-2">Interceptar o modificar comunicaciones</td>
                        <td className="px-3 py-2">TLS 1.3, SSL Pinning, mTLS</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">Replay</td>
                        <td className="px-3 py-2">Repetir una petición válida</td>
                        <td className="px-3 py-2">
                            Nonce, Timestamp, Idempotency Key, Firmas digitales
                        </td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">Tampering</td>
                        <td className="px-3 py-2">Modificar el APK</td>
                        <td className="px-3 py-2">
                            App Signature Verification, Play Integrity API, Hashes, Runtime
                            Integrity
                        </td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">Rooting / Jailbreak</td>
                        <td className="px-3 py-2">Obtener privilegios elevados</td>
                        <td className="px-3 py-2">
                            Root Detection, Magisk Detection, Device Integrity
                        </td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">Reverse Engineering</td>
                        <td className="px-3 py-2">Analizar el código de la aplicación</td>
                        <td className="px-3 py-2">
                            Obfuscation, String Encryption, NDK, Gestión segura de secretos
                        </td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">Hooking</td>
                        <td className="px-3 py-2">
                            Alterar el comportamiento en tiempo de ejecución
                        </td>
                        <td className="px-3 py-2">Frida Detection, Hook Detection, RASP</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">Credential Stuffing</td>
                        <td className="px-3 py-2">Reutilizar credenciales filtradas</td>
                        <td className="px-3 py-2">MFA, Rate Limiting, Device Fingerprinting</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">Brute Force</td>
                        <td className="px-3 py-2">Adivinar contraseñas</td>
                        <td className="px-3 py-2">Bloqueos temporales, MFA, CAPTCHA</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">Session Hijacking</td>
                        <td className="px-3 py-2">Robar la sesión del usuario</td>
                        <td className="px-3 py-2">
                            JWT de corta duración, Refresh Token Rotation, Device Binding
                        </td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">API Abuse</td>
                        <td className="px-3 py-2">Saturar o automatizar el uso de las APIs</td>
                        <td className="px-3 py-2">
                            WAF, Cloudflare, API Gateway, Bot Detection
                        </td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">Malware Overlay</td>
                        <td className="px-3 py-2">
                            Capturar credenciales mediante pantallas falsas
                        </td>
                        <td className="px-3 py-2">
                            FLAG_SECURE, detección de overlays, Accessibility Protection
                        </td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">Memory Dump</td>
                        <td className="px-3 py-2">Extraer secretos desde la memoria RAM</td>
                        <td className="px-3 py-2">
                            Zeroization, cifrado en memoria, Anti Debugging
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <p>
            Esta sección, combinada con la arquitectura y el flujo de una transacción bancaria,
            convierte el artículo en una guía bastante completa sobre las capas de seguridad que
            suelen implementarse en aplicaciones móviles del sector financiero.
        </p>

        <BlogClosingQuote>
            Cada amenaza tiene contramedida. La banca móvil no elige una: combina muchas — y asume
            que el atacante ya está en el dispositivo.
        </BlogClosingQuote>
    </>
);
