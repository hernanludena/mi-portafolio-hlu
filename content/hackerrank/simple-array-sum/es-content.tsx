export const simpleArraySumDetailEs = (
    <>
        <p>Dado un arreglo de enteros, devuelve la suma de todos sus elementos.</p>
        <h2>Enunciado</h2>
        <p>Completa la función <code>simpleArraySum</code> que recibe un arreglo de enteros y devuelve la suma total.</p>
        <ul><li><strong>Entrada:</strong> arreglo de enteros.</li><li><strong>Salida:</strong> entero con la suma.</li></ul>
        <h2>Ejemplo</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Input:  [1, 2, 3, 4, 10, 11]
Output: 31`}
        </pre>
        <h2>Enfoque</h2>
        <ol><li>Inicializar <code>total = 0</code>.</li><li>Recorrer cada elemento y sumarlo.</li><li>Devolver <code>total</code>.</li></ol>
        <h2>Complejidad</h2>
        <ul>
            <li><strong>Tiempo:</strong> <code>O(n)</code></li>
            <li><strong>Espacio:</strong> <code>O(1)</code></li>
        </ul>
        <h2>Solución en Java</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            <code>{`public static int simpleArraySum(List<Integer> ar) {
    int total = 0;
    for (int value : ar) {
        total += value;
    }
    return total;
}`}</code>
        </pre>
        <h2>Lectura de la solución</h2>
        <ul><li>Alternativa: <code>ar.stream().mapToInt(Integer::intValue).sum()</code>.</li></ul>
    </>
);
