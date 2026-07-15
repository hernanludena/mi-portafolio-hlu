export const validPalindromeDetailEs = (
    <>
        <p>Determinar si un texto es palíndromo tras quitar espacios y puntuación y pasar a minúsculas.</p>
        <h2>Enunciado</h2>
        <p>Solo considerar letras y números. Comparar desde ambos extremos hacia el centro.</p>
        <h2>Ejemplo</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`"Anita lava la tina" → true
"Hello world"      → false
"12321"            → true`}
        </pre>
        <h2>Enfoque</h2>
        <ol><li><code>clean = text.toLowerCase().replaceAll("[^a-z0-9]", "")</code></li><li>Two pointers i, j desde extremos.</li><li>Si algún par difiere → false.</li></ol>
        <h2>Complejidad</h2>
        <ul>
            <li><strong>Tiempo:</strong> <code>O(n)</code></li>
            <li><strong>Espacio:</strong> <code>O(n)</code> por string normalizado</li>
        </ul>
        <h2>Solución en Java</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            <code>{`public static boolean isPalindrome(String text) {
    String clean = text.toLowerCase().replaceAll("[^a-z0-9]", "");

    for (int i = 0, j = clean.length() - 1; i < j; i++, j--) {
        if (clean.charAt(i) != clean.charAt(j)) {
            return false;
        }
    }
    return true;
}`}</code>
        </pre>
        
    </>
);
