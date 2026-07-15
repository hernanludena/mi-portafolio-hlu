export const simpleArraySumDetailEn = (
    <>
        <p>Given an array of integers, return the sum of all its elements.</p>
        <h2>Statement</h2>
        <p>Complete <code>simpleArraySum</code> which receives an integer array and returns the total sum.</p>
        <ul><li><strong>Input:</strong> integer array.</li><li><strong>Output:</strong> sum as integer.</li></ul>
        <h2>Example</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Input:  [1, 2, 3, 4, 10, 11]
Output: 31`}
        </pre>
        <h2>Approach</h2>
        <ol><li>Initialize <code>total = 0</code>.</li><li>Iterate each element and add it.</li><li>Return <code>total</code>.</li></ol>
        <h2>Complexity</h2>
        <ul>
            <li><strong>Time:</strong> <code>O(n)</code></li>
            <li><strong>Space:</strong> <code>O(1)</code></li>
        </ul>
        <h2>Java solution</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            <code>{`public static int simpleArraySum(List<Integer> ar) {
    int total = 0;
    for (int value : ar) {
        total += value;
    }
    return total;
}`}</code>
        </pre>
        <h2>Solution notes</h2>
        <ul><li>Alternative: <code>ar.stream().mapToInt(Integer::intValue).sum()</code>.</li></ul>
    </>
);
