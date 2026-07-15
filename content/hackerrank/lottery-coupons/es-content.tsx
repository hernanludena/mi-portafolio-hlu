export const lotteryCouponsDetailEs = (
    <>
        <p>
            Ejercicio de conteo y agrupación. Dado un entero <code>n</code>, los cupones van del <code>1</code> al{" "}
            <code>n</code>. Cada cupón gana para un valor <code>s</code> si la suma de sus dígitos es igual a{" "}
            <code>s</code>. La meta es encontrar cuántos valores de <code>s</code> producen la máxima cantidad de
            ganadores.
        </p>

        <h2>Enunciado</h2>
        <p>
            Hay una lotería con <code>n</code> cupones numerados consecutivamente del <code>1</code> al <code>n</code>.
            Gana cualquier persona que tenga un cupón cuya <strong>suma de dígitos</strong> sea igual a un valor{" "}
            <code>s</code>.
        </p>
        <p>Debes determinar cuántos valores de <code>s</code> cumplen estas dos condiciones:</p>
        <ul>
            <li>existe al menos un ganador, y</li>
            <li>la cantidad de ganadores es la máxima posible.</li>
        </ul>
        <p>
            En otras palabras: agrupa los cupones por suma de dígitos y devuelve cuántos grupos empatan con la mayor
            frecuencia.
        </p>

        <h2>Problema</h2>
        <p>
            No hace falta simular un sorteo. La clave es agrupar cupones por <strong>suma de dígitos</strong> y luego
            detectar qué grupo tiene más elementos.
        </p>
        <ul>
            <li><strong>Entrada:</strong> un entero <code>n</code>.</li>
            <li><strong>Salida:</strong> cuántos valores de <code>s</code> alcanzan la frecuencia máxima.</li>
            <li><strong>Idea:</strong> frecuencia por suma de dígitos.</li>
        </ul>

        <h2>Ejemplo rápido</h2>
        <p>
            Si <code>n = 12</code>, las sumas son:
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`1 -> 1
2 -> 2
3 -> 3
...
10 -> 1
11 -> 2
12 -> 3`}
        </pre>
        <p>
            Las sumas <code>1</code>, <code>2</code> y <code>3</code> aparecen dos veces. Esa es la frecuencia máxima,
            así que la respuesta es <code>3</code>.
        </p>

        <h2>Enfoque</h2>
        <ol>
            <li>Recorrer los cupones del <code>1</code> al <code>n</code>.</li>
            <li>Calcular la suma de dígitos de cada número.</li>
            <li>Guardar frecuencia en un <code>HashMap&lt;Integer, Integer&gt;</code>.</li>
            <li>Buscar la frecuencia más alta.</li>
            <li>Contar cuántas sumas alcanzan esa frecuencia.</li>
        </ol>

        <h2>Por qué funciona</h2>
        <p>
            Cada cupón pertenece a un solo grupo: el de su suma de dígitos. Si contamos cuántos cupones caen en cada
            grupo, el grupo con mayor frecuencia representa el mayor número posible de ganadores. Luego solo falta
            contar cuántos grupos empatan en ese máximo.
        </p>

        <h2>Complejidad</h2>
        <ul>
            <li>
                <strong>Tiempo:</strong> <code>O(n * d)</code>, donde <code>d</code> es la cantidad de dígitos del
                número.
            </li>
            <li>
                <strong>Espacio:</strong> <code>O(k)</code>, donde <code>k</code> es el número de sumas distintas.
            </li>
        </ul>

        <h2>Casos a cuidar</h2>
        <ul>
            <li><code>n = 1</code>: solo existe una suma posible, respuesta <code>1</code>.</li>
            <li>Empates entre varias sumas: hay que contar todas, no solo una.</li>
            <li>Números con varios dígitos: <code>19</code> y <code>91</code> comparten suma <code>10</code>.</li>
        </ul>

        <h2>Solución en Java</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            <code>{`import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

public class LotteryCoupons {

    public static int lotteryCoupons(int n) {
        Map<Integer, Integer> freq = new HashMap<>();

        for (int i = 1; i <= n; i++) {
            int sum = digitSum(i);
            freq.merge(sum, 1, Integer::sum);
        }

        int maxWinners = Collections.max(freq.values());

        int count = 0;
        for (int winners : freq.values()) {
            if (winners == maxWinners) {
                count++;
            }
        }

        return count;
    }

    private static int digitSum(int value) {
        int sum = 0;

        while (value > 0) {
            sum += value % 10;
            value /= 10;
        }

        return sum;
    }
}`}</code>
        </pre>

        <h2>Lectura de la solución</h2>
        <ul>
            <li><code>digitSum()</code> evita convertir a <code>String</code> y trabaja solo con aritmética.</li>
            <li><code>merge()</code> simplifica el conteo de frecuencias.</li>
            <li>Dos fases claras: contar primero, decidir después.</li>
        </ul>
    </>
);
