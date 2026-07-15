export const reverseIntegerDetailEn = (
    <>
        <p>Reverse the digits of <code>x</code>. If result overflows 32-bit int, return 0.</p>
        <h2>Statement</h2>
        <p>Do not convert to string. Handle <code>Integer.MAX_VALUE</code> / <code>MIN_VALUE</code> overflow.</p>
        <h2>Example</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Input:  123   → 321
Input: -123   → -321
Input: 1534236469 → 0 (overflow)`}
        </pre>
        <h2>Approach</h2>
        <ol><li>While x ≠ 0: <code>reversed = reversed*10 + x%10</code>, <code>x = x/10</code>.</li><li>Validate range before returning.</li></ol>
        <h2>Complexity</h2>
        <ul>
            <li><strong>Time:</strong> <code>O(log n)</code></li>
            <li><strong>Space:</strong> <code>O(1)</code></li>
        </ul>
        <h2>Java solution</h2>
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
