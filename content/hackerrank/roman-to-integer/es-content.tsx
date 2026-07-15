export const romanToIntegerDetailEs = (
    <>
        <p>Convertir strings como <code>MMCCCXXIV</code> a su valor entero (2324).</p>
        <h2>Enunciado</h2>
        <p>Dado un numeral romano válido, devuelve su equivalente entero. Símbolos: I=1, V=5, X=10, L=50, C=100, D=500, M=1000.</p>
        <h2>Ejemplo</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Input:  "MMCCCXXIV"
Output: 2324`}
        </pre>
        <h2>Enfoque</h2>
        <ol><li>Mapa char → valor.</li><li>Recorrer izquierda a derecha.</li><li>Si valor actual &gt; anterior → restar doble del anterior (notación subtractiva).</li><li>Si no → sumar normal.</li></ol>
        <h2>Complejidad</h2>
        <ul>
            <li><strong>Tiempo:</strong> <code>O(n)</code></li>
            <li><strong>Espacio:</strong> <code>O(1)</code></li>
        </ul>
        <h2>Solución en Java</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            <code>{`public static int romanToInt(String s) {
    Map<Character, Integer> map = Map.of(
        'I', 1, 'V', 5, 'X', 10, 'L', 50,
        'C', 100, 'D', 500, 'M', 1000
    );

    int result = 0;
    int prev = 0;

    for (int i = 0; i < s.length(); i++) {
        int current = map.get(s.charAt(i));
        if (current > prev && i > 0) {
            result += current - 2 * prev;
        } else {
            result += current;
        }
        prev = current;
    }
    return result;
}`}</code>
        </pre>
        
    </>
);
