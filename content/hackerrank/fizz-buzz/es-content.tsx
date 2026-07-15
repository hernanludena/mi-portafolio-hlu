export const fizzBuzzDetailEs = (
    <>
        <p>Clásico problema: imprimir del 1 al <code>n</code>. Múltiplos de 3 → Fizz, de 5 → Buzz, de ambos → FizzBuzz.</p>
        <h2>Enunciado</h2>
        <p>Para cada entero <code>i</code> de 1 a <code>n</code>:</p>
        <ul><li>si <code>i</code> es múltiplo de 3 y 5 → imprimir <code>FizzBuzz</code></li>
        <li>si solo de 5 → <code>Buzz</code></li><li>si solo de 3 → <code>Fizz</code></li><li>si no → imprimir <code>i</code></li></ul>
        <h2>Ejemplo</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`n = 15

1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz`}
        </pre>
        <h2>Enfoque</h2>
        <ol><li>Loop de 1 a n.</li><li>Evaluar múltiplos en orden: 3 y 5 primero, luego 5, luego 3.</li></ol>
        <h2>Complejidad</h2>
        <ul>
            <li><strong>Tiempo:</strong> <code>O(n)</code></li>
            <li><strong>Espacio:</strong> <code>O(1)</code></li>
        </ul>
        <h2>Solución en Java</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            <code>{`public static void fizzBuzz(int n) {
    for (int i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            System.out.println("FizzBuzz");
        } else if (i % 5 == 0) {
            System.out.println("Buzz");
        } else if (i % 3 == 0) {
            System.out.println("Fizz");
        } else {
            System.out.println(i);
        }
    }
}`}</code>
        </pre>
        
    </>
);
