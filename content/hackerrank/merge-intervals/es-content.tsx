export const mergeIntervalsDetailEs = (
    <>
        <p>Dado un arreglo de intervalos <code>[start, end]</code>, fusionar los que se solapan.</p>
        <h2>Enunciado</h2>
        <p>Dos intervalos se solapan si <code>start_next ≤ end_current</code>.</p>
        <h2>Ejemplo</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Input:  [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]`}
        </pre>
        <h2>Enfoque</h2>
        <ol><li>Ordenar por start.</li><li>Recorrer: si solapa → extender end; si no → guardar y resetear.</li></ol>
        <h2>Complejidad</h2>
        <ul>
            <li><strong>Tiempo:</strong> <code>O(n log n)</code></li>
            <li><strong>Espacio:</strong> <code>O(n)</code></li>
        </ul>
        <h2>Solución en Java</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            <code>{`public int[][] merge(int[][] intervals) {
    if (intervals.length <= 1) return intervals;
    Arrays.sort(intervals, Comparator.comparingInt(a -> a[0]));

    List<int[]> merged = new ArrayList<>();
    int currentStart = intervals[0][0];
    int currentEnd = intervals[0][1];

    for (int i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= currentEnd) {
            currentEnd = Math.max(currentEnd, intervals[i][1]);
        } else {
            merged.add(new int[]{currentStart, currentEnd});
            currentStart = intervals[i][0];
            currentEnd = intervals[i][1];
        }
    }
    merged.add(new int[]{currentStart, currentEnd});
    return merged.toArray(new int[0][]);
}`}</code>
        </pre>
        
    </>
);
