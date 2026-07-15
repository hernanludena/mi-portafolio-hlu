export const typeCounterDetailEs = (
    <>
        <p>Dada una oración, contar cuántas palabras son strings, enteros o doubles (con punto decimal).</p>
        <h2>Enunciado</h2>
        <p>Imprimir en orden: <code>string count</code>, <code>integer count</code>, <code>double count</code>.</p>
        <h2>Ejemplo</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Input: "can you give me 10 bucks puff in 7.5 or 7"
Output:
string 5
integer 2
double 1`}
        </pre>
        <h2>Enfoque</h2>
        <ol><li><code>split("\s+")</code></li><li>Intentar <code>Integer.parseInt</code> primero.</li><li>Si falla, <code>Double.parseDouble</code> + debe contener <code>.</code>.</li><li>Si no → string.</li></ol>
        <h2>Complejidad</h2>
        <ul>
            <li><strong>Tiempo:</strong> <code>O(n)</code></li>
            <li><strong>Espacio:</strong> <code>O(n)</code></li>
        </ul>
        <h2>Solución en Java</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            <code>{`public static void typeCounter(String sentence) {
    int strings = 0, integers = 0, doubles = 0;
    String[] words = sentence.trim().split("\\s+");

    for (String word : words) {
        if (isInteger(word)) integers++;
        else if (isDouble(word)) doubles++;
        else strings++;
    }
    System.out.println("string " + strings);
    System.out.println("integer " + integers);
    System.out.println("double " + doubles);
}`}</code>
        </pre>
        
    </>
);
