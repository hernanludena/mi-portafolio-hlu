export const migratoryBirdsDetailEs = (
    <>
        <p>
            Dado un arreglo de tipos de aves (IDs del <code>1</code> al <code>5</code>), debes devolver el tipo que
            aparece con mayor frecuencia. Si hay empate, gana el ID más bajo.
        </p>

        <h2>Enunciado</h2>
        <p>
            Un grupo de aves migratorias viaja en una sola fila. Cada ave tiene un tipo identificado por un entero del{" "}
            <code>1</code> al <code>5</code>. Debes determinar cuál es el tipo más común.
        </p>
        <ul>
            <li><strong>Entrada:</strong> lista de enteros <code>arr</code> con tipos de aves.</li>
            <li><strong>Salida:</strong> el ID del tipo más frecuente.</li>
            <li><strong>Desempate:</strong> si varios tipos empatan, devuelve el menor ID.</li>
        </ul>

        <h2>Ejemplo</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Input:  [1, 4, 4, 4, 5, 3]
Output: 4`}
        </pre>
        <p>El tipo <code>4</code> aparece 3 veces. Es el más frecuente.</p>

        <h2>Enfoque</h2>
        <ol>
            <li>Usar un arreglo fijo de tamaño 6 (índices 1–5) para contar frecuencias.</li>
            <li>Recorrer <code>arr</code> e incrementar <code>count[id]</code>.</li>
            <li>Buscar el máximo recorriendo IDs de <code>1</code> a <code>5</code> en orden.</li>
            <li>Al iterar en orden ascendente, un empate mantiene el ID más bajo.</li>
        </ol>

        <h2>Complejidad</h2>
        <ul>
            <li><strong>Tiempo:</strong> <code>O(n)</code></li>
            <li><strong>Espacio:</strong> <code>O(1)</code> — solo 5 contadores fijos</li>
        </ul>

        <h2>Solución en Java</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            <code>{`import java.util.List;

public class MigratoryBirds {

    public static int migratoryBirds(List<Integer> arr) {
        int[] count = new int[6];

        for (int id : arr) {
            count[id]++;
        }

        int maxCount = 0;
        int result = 1;

        for (int i = 1; i <= 5; i++) {
            if (count[i] > maxCount) {
                maxCount = count[i];
                result = i;
            }
        }

        return result;
    }
}`}</code>
        </pre>

        <h2>Lectura de la solución</h2>
        <ul>
            <li>No hace falta <code>HashMap</code> porque los IDs están acotados (1–5).</li>
            <li>El loop de <code>1</code> a <code>5</code> resuelve el desempate sin lógica extra.</li>
        </ul>
    </>
);
