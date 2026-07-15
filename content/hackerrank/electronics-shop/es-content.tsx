export const electronicsShopDetailEs = (
    <>
        <p>
            Una persona quiere comprar un teclado y una memoria USB. Dado el presupuesto, debes gastar el máximo posible
            sin excederlo. Si no hay combinación válida, devuelve <code>-1</code>.
        </p>

        <h2>Enunciado</h2>
        <p>
            Tienes dos listas de precios: teclados y memorias USB. Debes elegir exactamente un teclado y una USB cuya
            suma sea la mayor posible, siempre que no supere el presupuesto <code>b</code>.
        </p>
        <ul>
            <li><strong>Entrada:</strong> arreglos <code>keyboards</code>, <code>drives</code> y presupuesto <code>b</code>.</li>
            <li><strong>Salida:</strong> la suma máxima válida, o <code>-1</code>.</li>
        </ul>

        <h2>Ejemplo</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`keyboards = [3, 1]
drives    = [5, 2, 8]
b         = 10

Output: 9   (3 + 6 no aplica; mejor: 1 + 8 = 9 o 3 + 5 = 8 → max = 9)`}
        </pre>

        <h2>Enfoque</h2>
        <ol>
            <li>Generar todas las sumas posibles teclado + USB.</li>
            <li>Filtrar las que no excedan el presupuesto (<code>sum &lt;= b</code>).</li>
            <li>Tomar el máximo. Si no hay ninguna, devolver <code>-1</code>.</li>
        </ol>

        <h2>Complejidad</h2>
        <ul>
            <li><strong>Tiempo:</strong> <code>O(n * m)</code></li>
            <li><strong>Espacio:</strong> <code>O(1)</code> con streams, o <code>O(n*m)</code> si materializas pares</li>
        </ul>

        <h2>Solución en Java</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            <code>{`import java.util.Arrays;

public class ElectronicsShop {

    public static int getMoneySpent(int[] keyboards, int[] drives, int b) {
        return Arrays.stream(keyboards)
                .flatMap(k -> Arrays.stream(drives).map(d -> k + d))
                .filter(sum -> sum <= b)
                .max()
                .orElse(-1);
    }
}`}</code>
        </pre>

        <h2>Lectura de la solución</h2>
        <ul>
            <li><code>flatMap</code> genera el producto cartesiano de precios.</li>
            <li>Usar <code>&lt;=</code> (no <code>&lt;</code>) permite gastar exactamente el presupuesto.</li>
            <li>Para inputs grandes, ordenar + two pointers sería más eficiente, pero brute force basta aquí.</li>
        </ul>
    </>
);
