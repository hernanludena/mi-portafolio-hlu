export const electronicsShopDetailEn = (
    <>
        <p>
            A person wants to buy one keyboard and one USB drive. Given a budget, spend as much as possible without
            exceeding it. Return <code>-1</code> if no valid pair exists.
        </p>

        <h2>Statement</h2>
        <p>
            You have two price lists: keyboards and USB drives. Pick exactly one of each so their sum is as large as
            possible without going over budget <code>b</code>.
        </p>
        <ul>
            <li><strong>Input:</strong> arrays <code>keyboards</code>, <code>drives</code>, and budget <code>b</code>.</li>
            <li><strong>Output:</strong> the maximum valid sum, or <code>-1</code>.</li>
        </ul>

        <h2>Example</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`keyboards = [3, 1]
drives    = [5, 2, 8]
b         = 10

Output: 9`}
        </pre>

        <h2>Approach</h2>
        <ol>
            <li>Generate every keyboard + USB sum.</li>
            <li>Keep sums that do not exceed the budget (<code>sum &lt;= b</code>).</li>
            <li>Return the maximum, or <code>-1</code> if none exist.</li>
        </ol>

        <h2>Complexity</h2>
        <ul>
            <li><strong>Time:</strong> <code>O(n * m)</code></li>
            <li><strong>Space:</strong> <code>O(1)</code> with streams</li>
        </ul>

        <h2>Java solution</h2>
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

        <h2>Solution notes</h2>
        <ul>
            <li><code>flatMap</code> builds the cartesian product of prices.</li>
            <li>Use <code>&lt;=</code> (not <code>&lt;</code>) to allow spending the full budget.</li>
            <li>For large inputs, sorting + two pointers would be faster, but brute force is enough here.</li>
        </ul>
    </>
);
