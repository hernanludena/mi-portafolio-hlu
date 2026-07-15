export const detectCapitalUseDetailEs = (
    <>
        <p>Una palabra es válida si está toda en minúsculas, en Title Case (solo primera mayúscula) o en MAYÚSCULAS.</p>
        <h2>Enunciado</h2>
        <p>Dado un string <code>word</code>, devuelve <code>true</code> si cumple una de las tres reglas de capitalización válidas.</p>
        <h2>Ejemplo</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`"USA"      → true
"leetcode" → true
"Google"   → true
"FlaG"     → false`}
        </pre>
        <h2>Enfoque</h2>
        <ol><li>Si longitud ≤ 1 → válido.</li><li>Si primer y segundo char son mayúsculas → esperar todo mayúsculas.</li><li>Si no → esperar minúsculas desde el segundo char.</li></ol>
        <h2>Complejidad</h2>
        <ul>
            <li><strong>Tiempo:</strong> <code>O(n)</code></li>
            <li><strong>Espacio:</strong> <code>O(1)</code></li>
        </ul>
        <h2>Solución en Java</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            <code>{`public boolean detectCapitalUse(String word) {
    if (word.length() <= 1) return true;

    Predicate<Character> correctCase = Character::isLowerCase;

    if (Character.isUpperCase(word.charAt(0))
            && Character.isUpperCase(word.charAt(1))) {
        correctCase = Character::isUpperCase;
    }

    for (int i = 1; i < word.length(); i++) {
        if (!correctCase.test(word.charAt(i))) {
            return false;
        }
    }
    return true;
}`}</code>
        </pre>
        
    </>
);
