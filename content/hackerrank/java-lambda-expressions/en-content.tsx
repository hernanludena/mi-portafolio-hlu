export const javaLambdaExpressionsDetailEn = (
    <>
        <p>Implement three lambdas behind <code>PerformOperation</code>: odd, prime, and numeric palindrome.</p>
        <h2>Statement</h2>
        <ul><li><code>isOdd()</code> → n % 2 != 0</li><li><code>isPrime()</code> → primality up to √n</li><li><code>isPalindrome()</code> → compare string with reverse</li></ul>
        <h2>Example</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`isOdd(5) → true
isPrime(7) → true
isPalindrome(121) → true`}
        </pre>
        <h2>Approach</h2>
        <p>Each method returns a lambda implementing <code>check(int a)</code>.</p>
        <h2>Complexity</h2>
        <ul>
            <li><strong>isPrime:</strong> <code>O(√n)</code></li>
            <li><strong>isPalindrome:</strong> <code>O(log n)</code></li>
        </ul>
        <h2>Java solution</h2>
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
