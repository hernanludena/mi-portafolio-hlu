export const minimumAbsoluteDifferenceDetailEs = (
    <>
        <p>
            Dado un arreglo de enteros, encuentra la menor diferencia absoluta entre cualquier par de elementos.
        </p>

        <h2>Enunciado</h2>
        <p>
            La diferencia absoluta entre dos valores <code>a</code> y <code>b</code> es <code>|a - b|</code>. Debes
            devolver el valor mínimo posible entre todos los pares del arreglo.
        </p>
        <ul>
            <li><strong>Entrada:</strong> arreglo <code>arr</code> de enteros.</li>
            <li><strong>Salida:</strong> la menor diferencia absoluta encontrada.</li>
        </ul>

        <h2>Ejemplos</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Input:  [3, -7, 0]
Output: 3

Input:  [-59, -36, -13, 1, -53, -92, -2, -96, -54, 75]
Output: 1`}
        </pre>

        <h2>Enfoque</h2>
        <ol>
            <li>Ordenar el arreglo.</li>
            <li>Comparar solo elementos adyacentes (<code>arr[i+1] - arr[i]</code>).</li>
            <li>Guardar el mínimo encontrado.</li>
        </ol>
        <p>
            Tras ordenar, el par con menor diferencia siempre queda junto. No hace falta revisar todos los pares.
        </p>

        <h2>Complejidad</h2>
        <ul>
            <li><strong>Tiempo:</strong> <code>O(n log n)</code> por el sort</li>
            <li><strong>Espacio:</strong> <code>O(1)</code> si ordenas in-place</li>
        </ul>

        <h2>Solución en Java</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            <code>{`import java.util.Arrays;

public class MinimumAbsoluteDifference {

    public static int minimumAbsoluteDifference(int[] arr) {
        Arrays.sort(arr);

        int minDiff = Integer.MAX_VALUE;

        for (int i = 0; i < arr.length - 1; i++) {
            minDiff = Math.min(minDiff, arr[i + 1] - arr[i]);
        }

        return minDiff;
    }
}`}</code>
        </pre>
    </>
);
