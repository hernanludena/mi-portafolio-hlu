export const stringAnagramDetailEs = (
    <>
        <p>Para cada palabra en <code>query</code>, contar cuántas palabras del diccionario son su anagrama.</p>
        <h2>Enunciado</h2>
        <p>Dos palabras son anagramas si tienen las mismas letras (mismo multiset).</p>
        <h2>Ejemplo</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`dictionary: [heater, cold, clod, reheat, docl]
query: [codl, heater, abcd]
output: [3, 2, 0]`}
        </pre>
        <h2>Enfoque</h2>
        <ol><li>Ordenar letras de cada palabra del diccionario → clave.</li><li>HashMap clave → count.</li><li>Por query: lookup clave ordenada.</li></ol>
        <h2>Complejidad</h2>
        <ul>
            <li><strong>Tiempo:</strong> <code>O(n·k log k + q·k log k)</code></li>
            <li><strong>Espacio:</strong> <code>O(n)</code></li>
        </ul>
        <h2>Solución en Java</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            <code>{`public static List<Integer> stringAnagram(List<String> dictionary, List<String> query) {
    Map<String, Integer> counts = new HashMap<>();
    for (String word : dictionary) {
        String key = sortString(word);
        counts.put(key, counts.getOrDefault(key, 0) + 1);
    }
    List<Integer> result = new ArrayList<>();
    for (String q : query) {
        result.add(counts.getOrDefault(sortString(q), 0));
    }
    return result;
}

private static String sortString(String input) {
    char[] chars = input.toCharArray();
    Arrays.sort(chars);
    return new String(chars);
}`}</code>
        </pre>
        
    </>
);
