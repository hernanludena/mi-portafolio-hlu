export const processRuntimeConsolidationDetailEs = (
    <>
        <p>
            Dado logs de ejecución de procesos, cada entrada tiene ID de proceso, tiempo de inicio y fin. Un proceso
            puede tener varios intervalos (pausas y reanudaciones). Debes fusionar solapamientos y sumar el tiempo total
            por proceso.
        </p>

        <h2>Enunciado</h2>
        <ul>
            <li><strong>Entrada:</strong> <code>m</code> procesos (IDs <code>0</code> a <code>m-1</code>) y logs{" "}
            <code>[processId, start, end]</code>.</li>
            <li><strong>Salida:</strong> arreglo de tamaño <code>m</code> con el runtime total de cada proceso.</li>
            <li>Intervalos solapados del mismo proceso se fusionan antes de sumar.</li>
            <li>Duración inclusiva: <code>(end - start) + 1</code> segundos.</li>
        </ul>

        <h2>Ejemplo</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`m = 2
logs = [[0,0,5], [0,3,7], [1,10,15], [1,12,18], [0,20,25]]

Proceso 0: [0,5] + [3,7] → [0,7] = 8s
           [20,25] = 6s
           Total = 14

Proceso 1: [10,15] + [12,18] → [10,18] = 9s

Output: [14, 9]`}
        </pre>

        <h2>Enfoque</h2>
        <ol>
            <li>Agrupar intervalos por <code>processId</code>.</li>
            <li>Ordenar cada grupo por <code>start</code>.</li>
            <li>Fusionar si <code>nextStart &lt;= currentEnd</code> (solapamiento).</li>
            <li>Sumar duraciones de intervalos fusionados.</li>
        </ol>

        <h2>Complejidad</h2>
        <ul>
            <li><strong>Tiempo:</strong> <code>O(n log n)</code> — sort por proceso</li>
            <li><strong>Espacio:</strong> <code>O(n + m)</code></li>
        </ul>

        <h2>Solución en Java</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            <code>{`import java.util.ArrayList;
import java.util.List;

public class ProcessRuntimeConsolidation {

    public static int[] calculateTotalRuntimes(int m, int[][] logs) {
        List<List<int[]>> processIntervals = new ArrayList<>();

        for (int i = 0; i < m; i++) {
            processIntervals.add(new ArrayList<>());
        }

        for (int[] log : logs) {
            processIntervals.get(log[0]).add(new int[]{log[1], log[2]});
        }

        int[] result = new int[m];

        for (int i = 0; i < m; i++) {
            List<int[]> intervals = processIntervals.get(i);

            if (intervals.isEmpty()) {
                continue;
            }

            intervals.sort((a, b) -> Integer.compare(a[0], b[0]));

            int total = 0;
            int currentStart = intervals.get(0)[0];
            int currentEnd = intervals.get(0)[1];

            for (int j = 1; j < intervals.size(); j++) {
                int nextStart = intervals.get(j)[0];
                int nextEnd = intervals.get(j)[1];

                if (nextStart <= currentEnd) {
                    currentEnd = Math.max(currentEnd, nextEnd);
                } else {
                    total += (currentEnd - currentStart) + 1;
                    currentStart = nextStart;
                    currentEnd = nextEnd;
                }
            }

            total += (currentEnd - currentStart) + 1;
            result[i] = total;
        }

        return result;
    }
}`}</code>
        </pre>

        <h2>Lectura de la solución</h2>
        <ul>
            <li>Patrón clásico de merge intervals aplicado por proceso.</li>
            <li>La condición de solapamiento depende del problema: aquí uso <code>nextStart &lt;= currentEnd</code>.</li>
        </ul>
    </>
);
