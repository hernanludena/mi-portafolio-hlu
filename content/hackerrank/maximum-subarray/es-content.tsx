export const maximumSubarrayDetailEs = (
    <>
        <p>Devolver dos valores: suma máxima de subarreglo contiguo y suma máxima de subsecuencia (no necesariamente contigua).</p>
        <h2>Enunciado</h2>
        <p><strong>Subarreglo:</strong> elementos consecutivos. <strong>Subsecuencia:</strong> mantiene orden pero puede saltar elementos.</p>
        <h2>Ejemplo</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Input: [2, -1, 2, 3, 4, -5]
Contiguous (Kadane): 10
Subsequence: 11 (2+3+4, skip negatives)`}
        </pre>
        <h2>Enfoque</h2>
        <ol><li>Kadane: <code>maxEndingHere = max(x, maxEndingHere+x)</code></li><li>Subsecuencia: sumar positivos; si todos negativos → max elemento.</li></ol>
        <h2>Complejidad</h2>
        <ul>
            <li><strong>Tiempo:</strong> <code>O(n)</code></li>
            <li><strong>Espacio:</strong> <code>O(1)</code></li>
        </ul>
        <h2>Solución en Java</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            <code>{`public static List<Integer> maxSubarray(List<Integer> arr) {
    int maxEndingHere = arr.get(0);
    int maxSoFar = arr.get(0);
    int sumPositives = arr.get(0) > 0 ? arr.get(0) : 0;
    int maxElement = arr.get(0);
    boolean hasPositive = arr.get(0) > 0;

    for (int i = 1; i < arr.size(); i++) {
        int current = arr.get(i);
        maxEndingHere = Math.max(current, maxEndingHere + current);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
        if (current > 0) { sumPositives += current; hasPositive = true; }
        maxElement = Math.max(maxElement, current);
    }
    int maxSubsequence = hasPositive ? sumPositives : maxElement;
    return Arrays.asList(maxSoFar, maxSubsequence);
}`}</code>
        </pre>
        
    </>
);
