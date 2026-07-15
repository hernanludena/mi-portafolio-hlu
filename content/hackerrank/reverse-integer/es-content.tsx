export const reverseIntegerDetailEs = (
    <>
        <p>Invertir los dígitos de <code>x</code>. Si el resultado no cabe en un <code>int</code>, devolver 0.</p>
        <h2>Enunciado</h2>
        <p>No usar conversión a string. Manejar overflow de <code>Integer.MAX_VALUE</code> / <code>MIN_VALUE</code>.</p>
        <h2>Ejemplo</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Input:  123   → 321
Input: -123   → -321
Input: 1534236469 → 0 (overflow)`}
        </pre>
        <h2>Enfoque</h2>
        <ol><li>Mientras x ≠ 0: <code>reversed = reversed*10 + x%10</code>, <code>x = x/10</code>.</li><li>Validar rango antes de devolver.</li></ol>
        <h2>Complejidad</h2>
        <ul>
            <li><strong>Tiempo:</strong> <code>O(log n)</code></li>
            <li><strong>Espacio:</strong> <code>O(1)</code></li>
        </ul>
        <h2>Solución en Java</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            <code>{`public static int reverse(int x) {
    int reversed = 0;
    while (x != 0) {
        int digit = x % 10;
        if (reversed > Integer.MAX_VALUE / 10
                || (reversed == Integer.MAX_VALUE / 10 && digit > 7)) {
            return 0;
        }
        if (reversed < Integer.MIN_VALUE / 10
                || (reversed == Integer.MIN_VALUE / 10 && digit < -8)) {
            return 0;
        }
        reversed = reversed * 10 + digit;
        x /= 10;
    }
    return reversed;
}`}</code>
        </pre>
        
    </>
);
