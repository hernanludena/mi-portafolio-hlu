export const reverseStringDetailEs = (
    <>
        <p>
            Dado un string <code>str</code>, devolver el mismo string en orden inverso. Dos enfoques: con{" "}
            <code>StringBuilder</code> o con un loop manual.
        </p>

        <h2>Enunciado</h2>
        <p>Dado un string <code>str</code>, devolver el mismo string en orden inverso.</p>
        <ul>
            <li><strong>Entrada:</strong> string <code>str</code>.</li>
            <li><strong>Salida:</strong> string invertido.</li>
        </ul>

        <h2>Ejemplo</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Input:  "asac al"
Output: "la casa"`}
        </pre>

        <h2>Enfoque 1 — StringBuilder.reverse()</h2>
        <p>Usa <code>StringBuilder.reverse()</code> de Java. Código corto y directo.</p>

        <h2>Enfoque 2 — Loop manual</h2>
        <p>Recorre el string de derecha a izquierda y construye el resultado carácter por carácter.</p>

        <h2>Complejidad</h2>
        <ul>
            <li><strong>Tiempo:</strong> <code>O(n)</code></li>
            <li><strong>Espacio:</strong> <code>O(n)</code> — nuevo string resultante</li>
        </ul>

        <h2>Solución en Java</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            <code>{`public class ReverseString {

    public static String reverseStr(String str) {
        return new StringBuilder(str).reverse().toString();
    }

    public static String reverseManuallyStr(String str) {
        StringBuilder sb = new StringBuilder();

        for (int i = str.length() - 1; i >= 0; i--) {
            sb.append(str.charAt(i));
        }

        return sb.toString();
    }
}`}</code>
        </pre>

        <h2>Lectura de la solución</h2>
        <ul>
            <li><code>StringBuilder</code> es mutable — evita crear muchos strings intermedios.</li>
            <li>El loop manual demuestra que entiendes el mecanismo sin depender de la API.</li>
        </ul>
    </>
);
