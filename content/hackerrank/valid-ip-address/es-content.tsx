export const validIpAddressDetailEs = (
    <>
        <p>Escribir una expresión regular que valide IPs en formato A.B.C.D donde cada octeto está entre 0 y 255.</p>
        <h2>Enunciado</h2>
        <p>IPs válidas: <code>121.234.12.12</code>. Inválidas: demasiados octetos, letras, octetos &gt; 255.</p>
        <h2>Ejemplo</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`000.12.12.034  → true
121.234.12.12  → true
Hello.IP       → false`}
        </pre>
        <h2>Enfoque</h2>
        <p>Octeto válido: <code>{`([01]?\\d{1,2}|2[0-4]\\d|25[0-5])`}</code> cubre 0–199, 200–249 y 250–255.</p>
        <h2>Complejidad</h2>
        <ul>
            <li><strong>Tiempo:</strong> <code>O(1)</code> por match</li>
            <li><strong>Espacio:</strong> <code>O(1)</code></li>
        </ul>
        <h2>Solución en Java</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            <code>{`class MyRegex {
    String octet = "([01]?\\d{1,2}|2[0-4]\\d|25[0-5])";
    public String pattern = "^" + octet + "\\." + octet + "\\." + octet + "\\." + octet + "$";
}`}</code>
        </pre>
        
    </>
);
