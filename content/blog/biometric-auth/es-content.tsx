import BlogClosingQuote from "@/components/blog-closing-quote";
import BlogFigure from "@/components/blog-figure";

export const biometricAuthContentEs = (
    <>
        <p>
            Las apps de banca móvil confían cada vez más en biometría para un login fluido. La
            biometría sola no basta: la seguridad depende del protocolo que la rodea.
        </p>
        <p>
            En una evaluación de seguridad de la app de <strong>Banco Lumina</strong>, el equipo de
            ciberseguridad identificó un <strong>Authentication Bypass</strong> crítico: la
            verificación biométrica era correcta, pero el protocolo permitía reenviar una petición
            capturada y acceder sin una nueva biometría.
        </p>
        <p>
            Este case study cubre el modelo de amenazas, los objetivos de rediseño y una
            arquitectura resistente a replay que preservó la UX en Android e iOS.
        </p>

        <blockquote>
            Desafío arquitectónico real basado en un proyecto bancario. Nombre de la compañía,
            diagramas y detalles de implementación generalizados por confidencialidad. El código es
            simplificado y anonimizado — no es código productivo del banco.
        </blockquote>

        <h2>Stack tecnológico</h2>
        <ul>
            <li>
                <strong>Móvil:</strong> React, Apache Cordova, Android, iOS
            </li>
            <li>
                <strong>Backend:</strong> Java 8, REST APIs
            </li>
        </ul>

        <h2>Entendiendo la amenaza</h2>
        <h3>¿Qué es un Replay Attack?</h3>
        <p>
            Un Replay Attack ocurre cuando un atacante captura una petición legítima de
            autenticación y luego reenvía exactamente el mismo payload. Si el servidor no distingue
            original de duplicado, puede autenticarse sin la biometría del usuario.
        </p>
        <p>
            A diferencia del robo de credenciales, el replay no requiere romper cifrado: explota la
            reutilización de un mensaje de autenticación previamente válido.
        </p>

        <h3>Por qué TLS no alcanza</h3>
        <p>
            Un mito común: HTTPS previene por completo el replay. No es así. TLS garantiza
            confidencialidad, integridad y autenticación del servidor. Si el atacante obtiene una
            petición autenticada válida (malware, compromiso del dispositivo, instrumentación), TLS
            no puede decidir si es fresca o un replay.
        </p>
        <p>
            La protección anti-replay debe vivir en la <strong>capa de aplicación</strong>.
        </p>

        <h2>Arquitectura original</h2>
        <p>
            El flujo original usaba un token de sesión biométrica de larga duración en el
            dispositivo, reutilizado entre logins:
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Usuario
  → Verificación de huella
  → Token de sesión biométrica
  → REST API
  → Backend Java
  → Login exitoso`}
        </pre>
        <p>
            El token viajaba cifrado, pero permanecía válido por una ventana larga. Bajo ciertas
            condiciones de ataque, una petición capturada podía reenviarse.
        </p>

        <h2>Análisis de amenazas</h2>
        <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="border-b border-black/15 dark:border-white/15">
                        <th className="px-3 py-2 text-left">Riesgo</th>
                        <th className="px-3 py-2 text-left">Impacto</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">Token de autenticación persistente</td>
                        <td className="px-3 py-2">Posibilidad de replay</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">Cliente demasiado confiable</td>
                        <td className="px-3 py-2">Mayor superficie de ataque</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">Sin unicidad de petición</td>
                        <td className="px-3 py-2">Misma petición aceptada varias veces</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2 font-medium">Sin challenge</td>
                        <td className="px-3 py-2">Servidor no detecta duplicados</td>
                    </tr>
                    <tr>
                        <td className="px-3 py-2 font-medium">Sin rotación de token</td>
                        <td className="px-3 py-2">Ventana de exposición más larga</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h2>Objetivos de diseño</h2>
        <ul>
            <li>Eliminar ataques de replay</li>
            <li>Mantener la biometría transparente para el usuario</li>
            <li>Soportar Android e iOS</li>
            <li>Minimizar cambios de backend</li>
            <li>Preservar la UX existente</li>
            <li>Seguir buenas prácticas de autenticación segura</li>
        </ul>

        <h2>Arquitectura de la solución</h2>
        <p>
            En lugar de una petición reutilizable, el nuevo diseño apila capas de seguridad
            independientes. El cliente deja de ser la fuente de verdad.
        </p>

        <h3>1. Validación biométrica del lado servidor</h3>
        <p>
            Antes de completar el login, el backend valida la sesión biométrica con el proveedor:
            dispositivo registrado, sesión activa, usuario conocido, estado válido. Si falla, la
            autenticación se detiene.
        </p>

        <h3>2. Challenge de un solo uso (nonce)</h3>
        <p>
            Tras la validación, el backend genera un challenge aleatorio criptográficamente seguro:
            único, impredecible, de corta vida y de un solo uso. El cliente debe devolverlo; el
            backend verifica existencia, pertenencia a la sesión, vencimiento y que nunca se haya
            usado. Tras el éxito, el challenge se invalida de forma permanente.
        </p>
        <p>
            El challenge <strong>debe</strong> generarlo el servidor. Un nonce generado por el
            cliente podría controlarse o predecirse. Solo el servidor garantiza unicidad,
            aleatoriedad, ciclo de vida, expiración y ownership.
        </p>
        <p>
            Cada challenge tiene TTL (por ejemplo 30–60 segundos). Al expirar, falla el login y hay
            que pedir uno nuevo — se reduce la ventana de ataque.
        </p>

        <h3>Consumo único (no idempotencia REST)</h3>
        <p>
            El control crítico es el <strong>consumo atómico de un solo uso</strong> del nonce — no
            la idempotencia REST clásica. La misma petición repetida no debe volver a producir una
            autenticación exitosa.
        </p>
        <p>Estados del challenge: Pending → Used / Expired. La reutilización se rechaza al instante.</p>

        <h3>3. Rotación del token de sesión biométrica</h3>
        <p>
            Tras un login exitoso, se invalida el token biométrico anterior y se emite uno nuevo. Los
            tokens viejos dejan de servir después del siguiente login exitoso.
        </p>

        <h2>Nuevo flujo</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`1. La app solicita un challenge al backend
2. El backend genera un nonce aleatorio (SecureRandom)
3. El backend asocia el nonce a usuario, dispositivo y token biométrico
4. La app ejecuta biometría local
5. La app envía nonce + token biométrico
6. El backend consume el nonce de forma atómica
7. El backend valida la sesión biométrica con el proveedor
8. El backend invalida el token anterior
9. El backend emite un token biométrico rotado
10. El backend crea la sesión bancaria`}
        </pre>

        <BlogFigure
            src="/blog/biometric-auth-flow.png"
            alt="Diagrama Before/After: flujo biométrico vulnerable a replay vs flujo resistente con challenge de un solo uso, consumo atómico y rotación de token"
            caption="Before vs After — arquitectura vulnerable a replay y flujo resistente con nonce, consumo atómico y rotación de token"
        />

        <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="border-b border-black/15 dark:border-white/15">
                        <th className="px-3 py-2 text-left">Antes</th>
                        <th className="px-3 py-2 text-left">Después</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2">Token de autenticación persistente</td>
                        <td className="px-3 py-2">Challenge de un solo uso</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2">Vulnerable a replay</td>
                        <td className="px-3 py-2">Resistente a replay</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2">Credenciales de larga duración</td>
                        <td className="px-3 py-2">Credenciales de corta duración</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2">Cliente confiable</td>
                        <td className="px-3 py-2">Servidor autoritativo</td>
                    </tr>
                    <tr>
                        <td className="px-3 py-2">Peticiones reutilizables</td>
                        <td className="px-3 py-2">Peticiones de un solo uso</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h2>Contratos REST (simplificados)</h2>
        <h3>Solicitar challenge</h3>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`POST /api/v1/biometric/challenges

{
  "userId": "usr_78451",
  "deviceId": "device_92c01",
  "biometricToken": "finger-token-current"
}

→ {
  "challengeId": "chl_a46e7c",
  "nonce": "UcQpGWCSqALdTiS34jkT2w",
  "expiresAt": "2026-07-31T18:10:30Z"
}`}
        </pre>

        <h3>Completar autenticación</h3>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`POST /api/v1/biometric/authentications

{
  "challengeId": "chl_a46e7c",
  "nonce": "UcQpGWCSqALdTiS34jkT2w",
  "userId": "usr_78451",
  "deviceId": "device_92c01",
  "biometricToken": "finger-token-current"
}

→ {
  "accessToken": "bank-session-token",
  "newBiometricToken": "finger-token-rotated",
  "expiresIn": 900
}`}
        </pre>

        <h2>Highlights de implementación</h2>
        <p>
            En portafolio: tres fragmentos críticos — generación segura del nonce, consumo atómico y
            rotación condicional del token. Guardar el <strong>hash</strong> del nonce, no el valor
            en texto plano.
        </p>

        <h3>1. Generación segura del nonce</h3>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`public final class NonceGenerator {
    private static final SecureRandom SECURE_RANDOM = new SecureRandom();
    private static final int NONCE_LENGTH_BYTES = 32;

    public static String generate() {
        byte[] randomBytes = new byte[NONCE_LENGTH_BYTES];
        SECURE_RANDOM.nextBytes(randomBytes);
        return Base64.getUrlEncoder()
                .withoutPadding()
                .encodeToString(randomBytes);
    }
}`}
        </pre>
        <p>
            Evitar <code>UUID.randomUUID()</code>, <code>Math.random()</code> o{" "}
            <code>Random</code> para el nonce. Usar <code>SecureRandom</code>.
        </p>

        <h3>2. Consumo atómico del challenge</h3>
        <p>
            Un read-then-write permite que dos peticiones concurrentes vean <code>PENDING</code>.
            Usar update condicional:
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`UPDATE biometric_challenge
   SET status = 'USED',
       used_at = CURRENT_TIMESTAMP
 WHERE challenge_id = ?
   AND status = 'PENDING'
   AND expires_at > CURRENT_TIMESTAMP;

-- updatedRows debe ser exactamente 1; si no → replay`}
        </pre>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Request A consume nonce → actualiza 1 fila → continúa
Request B mismo nonce    → actualiza 0 filas → ReplayDetectedException`}
        </pre>

        <h3>3. Rotación condicional del token</h3>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`UPDATE biometric_token
   SET token_hash = ?,
       rotated_at = CURRENT_TIMESTAMP,
       version = version + 1
 WHERE user_id = ?
   AND device_id = ?
   AND token_hash = ?
   AND status = 'ACTIVE';

-- compare-and-swap: rotar solo si el hash actual sigue coincidiendo`}
        </pre>

        <h2>Lado móvil (React + Cordova)</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`async function loginWithBiometrics({ userId, deviceId, biometricToken }) {
  const challenge = await requestBiometricChallenge({
    userId, deviceId, biometricToken
  });

  const biometricResult = await authenticateLocally();
  if (!biometricResult.success) {
    throw new Error("Local biometric authentication failed");
  }

  const authentication = await completeBiometricAuthentication({
    challengeId: challenge.challengeId,
    nonce: challenge.nonce,
    userId, deviceId, biometricToken
  });

  await secureStorage.set(
    "biometricToken",
    authentication.newBiometricToken
  );

  return authentication.accessToken;
}`}
        </pre>
        <p>
            Nunca guardar el token biométrico en <code>localStorage</code>. Usar almacenamiento
            seguro respaldado por Android Keystore / iOS Keychain.
        </p>

        <h2>Consumir antes vs reservar y completar</h2>
        <ul>
            <li>
                <strong>Consumir primero:</strong> bloquea replays concurrentes de inmediato; si
                falla la llamada al proveedor por un problema técnico, el usuario pide un challenge
                nuevo.
            </li>
            <li>
                <strong>Reservar y completar:</strong>{" "}
                <code>PENDING → PROCESSING → USED|FAILED</code>. Distingue replay de falla técnica
                en validación externa — preferible para login bancario.
            </li>
        </ul>

        <h2>Decisiones de ingeniería</h2>
        <ul>
            <li>
                <strong>Estado de auth en el servidor</strong> — el ciclo de vida del challenge es
                ownership del server.
            </li>
            <li>
                <strong>Credenciales efímeras</strong> — existen solo para un intento de login.
            </li>
            <li>
                <strong>Separar verificación de autorización</strong> — la biometría confirma
                identidad; el backend autoriza la autenticación.
            </li>
            <li>
                <strong>Defense in depth</strong> — validación server-side, challenges de un uso,
                TTL, rotación de token y TLS cubren huecos entre sí.
            </li>
        </ul>

        <h2>Resultados</h2>
        <ul>
            <li>Eliminación del replay de peticiones de autenticación</li>
            <li>Challenges de un solo uso</li>
            <li>Ventanas de exposición de credenciales más cortas</li>
            <li>UX biométrica preservada</li>
            <li>Mejor postura de seguridad en banca móvil</li>
        </ul>

        <h2>Mi contribución</h2>
        <ul>
            <li>Análisis de seguridad con el equipo de ciberseguridad</li>
            <li>Rediseño de la arquitectura de autenticación</li>
            <li>Implementación backend en Java</li>
            <li>Implementación móvil con React y Apache Cordova</li>
            <li>Integración REST y validación end-to-end</li>
            <li>Coordinación con QA y seguridad en el rollout</li>
        </ul>

        <h2>Lecciones aprendidas</h2>
        <p>
            La biometría verifica <strong>quién es el usuario</strong>. El protocolo decide{" "}
            <strong>si la petición es confiable</strong>. Un login seguro exige que cada intento sea
            único, verificable, de corta vida e imposible de reenviar.
        </p>

        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Original          Nuevo
Huella       →    Huella
Token        →    Validación server
persistente       Challenge one-time
Backend      →    Check de timestamp
Login             Consumo single-use
                  Rotación de token
                  Login`}
        </pre>

        <BlogClosingQuote>
            TLS protege el cable. Nonces, TTL, consumo atómico y rotación de token protegen el
            protocolo. Ahí vive el authentication bypass — y ahí la arquitectura demuestra su
            valor.
        </BlogClosingQuote>
    </>
);
