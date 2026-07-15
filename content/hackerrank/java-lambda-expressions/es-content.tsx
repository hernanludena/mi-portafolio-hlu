export const javaLambdaExpressionsDetailEs = (
    <>
        <p>Implementar tres lambdas detrás de <code>PerformOperation</code>: impar, primo y palíndromo numérico.</p>
        <h2>Enunciado</h2>
        <ul><li><code>isOdd()</code> → n % 2 != 0</li><li><code>isPrime()</code> → primalidad hasta √n</li><li><code>isPalindrome()</code> → comparar string con reverso</li></ul>
        <h2>Ejemplo</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`isOdd(5) → true
isPrime(7) → true
isPalindrome(121) → true`}
        </pre>
        <h2>Enfoque</h2>
        <p>Cada método retorna una lambda que implementa <code>check(int a)</code>.</p>
        <h2>Complejidad</h2>
        <ul>
            <li><strong>isPrime:</strong> <code>O(√n)</code></li>
            <li><strong>isPalindrome:</strong> <code>O(log n)</code></li>
        </ul>
        <h2>Solución en Java</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            <code>{`interface PerformOperation { boolean check(int a); }

public PerformOperation isOdd() {
    return n -> n % 2 != 0;
}

public PerformOperation isPrime() {
    return n -> {
        if (n <= 1) return false;
        for (int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) return false;
        }
        return true;
    };
}

public PerformOperation isPalindrome() {
    return n -> {
        String s = Integer.toString(n);
        return s.equals(new StringBuilder(s).reverse().toString());
    };
}`}</code>
        </pre>
        
    </>
);
