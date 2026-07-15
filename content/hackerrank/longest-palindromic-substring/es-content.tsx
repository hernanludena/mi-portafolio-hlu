export const longestPalindromicSubstringDetailEs = (
    <>
        <p>
            Dado un string <code>s</code>, devuelve el substring palindrómico más largo. Un palíndromo se lee igual de
            izquierda a derecha y de derecha a izquierda.
        </p>

        <h2>Enunciado</h2>
        <ul>
            <li><strong>Entrada:</strong> string <code>s</code> (solo letras y dígitos).</li>
            <li><strong>Salida:</strong> el substring palindrómico más largo.</li>
            <li>Si hay varios válidos, cualquiera sirve.</li>
        </ul>

        <h2>Ejemplos</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Input:  "babad"
Output: "bab"   (o "aba")

Input:  "cbbd"
Output: "bb"`}
        </pre>

        <h2>Enfoque — Expand Around Center</h2>
        <ol>
            <li>Para cada índice <code>i</code>, expandir como centro de palíndromo impar (<code>i, i</code>).</li>
            <li>También expandir como centro par (<code>i, i+1</code>).</li>
            <li>Mientras los caracteres en los extremos coincidan, seguir expandiendo.</li>
            <li>Guardar el inicio y largo del palíndromo más largo encontrado.</li>
        </ol>

        <h2>Complejidad</h2>
        <ul>
            <li><strong>Tiempo:</strong> <code>O(n²)</code></li>
            <li><strong>Espacio:</strong> <code>O(1)</code></li>
        </ul>

        <h2>Solución en Java</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            <code>{`public class LongestPalindromeFinder {

    private static int resultStart;
    private static int maxLength;

    public static String longestPalindrome(String s) {
        if (s.length() < 2) {
            return s;
        }

        resultStart = 0;
        maxLength = 0;

        for (int i = 0; i < s.length(); i++) {
            expandFromCenter(i, i, s);
            expandFromCenter(i, i + 1, s);
        }

        return s.substring(resultStart, resultStart + maxLength);
    }

    private static void expandFromCenter(int left, int right, String s) {
        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            left--;
            right++;
        }

        int currentLen = right - left - 1;

        if (currentLen > maxLength) {
            resultStart = left + 1;
            maxLength = currentLen;
        }
    }
}`}</code>
        </pre>

        <h2>Lectura de la solución</h2>
        <ul>
            <li>Cada expansión prueba un centro posible; hay <code>2n - 1</code> centros.</li>
            <li>Es más simple que DP y suficiente para <code>n &lt;= 1000</code>.</li>
        </ul>
    </>
);
