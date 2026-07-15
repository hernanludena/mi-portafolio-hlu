export const fizzBuzzDetailEn = (
    <>
        <p>Classic problem: print from 1 to <code>n</code>. Multiples of 3 → Fizz, 5 → Buzz, both → FizzBuzz.</p>
        <h2>Statement</h2>
        <p>For each integer <code>i</code> from 1 to <code>n</code>:</p>
        <ul><li>if divisible by 3 and 5 → print <code>FizzBuzz</code></li>
        <li>if only by 5 → <code>Buzz</code></li><li>if only by 3 → <code>Fizz</code></li><li>else → print <code>i</code></li></ul>
        <h2>Example</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`n = 15

1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz`}
        </pre>
        <h2>Approach</h2>
        <ol><li>Loop from 1 to n.</li><li>Check multiples in order: 3 and 5 first, then 5, then 3.</li></ol>
        <h2>Complexity</h2>
        <ul>
            <li><strong>Time:</strong> <code>O(n)</code></li>
            <li><strong>Space:</strong> <code>O(1)</code></li>
        </ul>
        <h2>Java solution</h2>
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
