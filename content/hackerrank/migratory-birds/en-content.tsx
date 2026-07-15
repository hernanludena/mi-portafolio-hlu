export const migratoryBirdsDetailEn = (
    <>
        <p>
            Given an array of bird types (IDs from <code>1</code> to <code>5</code>), return the most frequent type. On
            ties, return the lowest ID.
        </p>

        <h2>Statement</h2>
        <p>
            A flock of migratory birds travels in a single line. Each bird has a type identified by an integer from{" "}
            <code>1</code> to <code>5</code>. Determine the most common type.
        </p>
        <ul>
            <li><strong>Input:</strong> list of integers <code>arr</code> with bird types.</li>
            <li><strong>Output:</strong> the ID of the most frequent type.</li>
            <li><strong>Tie-break:</strong> if multiple types tie, return the lowest ID.</li>
        </ul>

        <h2>Example</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Input:  [1, 4, 4, 4, 5, 3]
Output: 4`}
        </pre>
        <p>Type <code>4</code> appears 3 times. It is the most frequent.</p>

        <h2>Approach</h2>
        <ol>
            <li>Use a fixed array of size 6 (indices 1–5) for frequency counting.</li>
            <li>Iterate <code>arr</code> and increment <code>count[id]</code>.</li>
            <li>Find the maximum by scanning IDs from <code>1</code> to <code>5</code> in order.</li>
            <li>Ascending order naturally keeps the lowest ID on ties.</li>
        </ol>

        <h2>Complexity</h2>
        <ul>
            <li><strong>Time:</strong> <code>O(n)</code></li>
            <li><strong>Space:</strong> <code>O(1)</code> — only 5 fixed counters</li>
        </ul>

        <h2>Java solution</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            <code>{`import java.util.List;

public class MigratoryBirds {

    public static int migratoryBirds(List<Integer> arr) {
        int[] count = new int[6];

        for (int id : arr) {
            count[id]++;
        }

        int maxCount = 0;
        int result = 1;

        for (int i = 1; i <= 5; i++) {
            if (count[i] > maxCount) {
                maxCount = count[i];
                result = i;
            }
        }

        return result;
    }
}`}</code>
        </pre>

        <h2>Solution notes</h2>
        <ul>
            <li>No <code>HashMap</code> needed because IDs are bounded (1–5).</li>
            <li>Looping from <code>1</code> to <code>5</code> handles tie-breaking without extra logic.</li>
        </ul>
    </>
);
