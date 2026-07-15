export const approximateMatchingDetailEs = (
    <>
        <p>Encontrar la subcadena de <code>text</code> con mayor puntaje: coincidencia final de <code>prefixString</code> + inicio de <code>suffixString</code>.</p>
        <h2>Enunciado</h2>
        <p><code>textScore = prefixScore + suffixScore</code>. En empate, devolver la subcadena lexicográficamente menor.</p>
        <h2>Ejemplo</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`text="engine", prefix="raven", suffix="ginkgo"
Best: "engin" (prefixScore=2, suffixScore=3, total=5)`}
        </pre>
        <h2>Enfoque</h2>
        <ol><li>Generar todas las subcadenas de text.</li><li>Calcular prefixScore con <code>endsWith</code>.</li><li>Calcular suffixScore con <code>startsWith</code>.</li><li>Max score; empate → <code>compareTo</code> menor.</li></ol>
        <h2>Complejidad</h2>
        <ul>
            <li><strong>Tiempo:</strong> <code>O(n³)</code></li>
            <li><strong>Espacio:</strong> <code>O(n)</code></li>
        </ul>
        <h2>Solución en Java</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            <code>{`public static String calculateScore(String text, String prefixString, String suffixString) {
    String best = "";
    int maxScore = -1;

    for (int i = 0; i < text.length(); i++) {
        for (int j = i + 1; j <= text.length(); j++) {
            String sub = text.substring(i, j);
            int total = getPrefixScore(sub, prefixString) + getSuffixScore(sub, suffixString);
            if (total > maxScore || (total == maxScore && sub.compareTo(best) < 0)) {
                maxScore = total;
                best = sub;
            }
        }
    }
    return best;
}`}</code>
        </pre>
        
    </>
);
