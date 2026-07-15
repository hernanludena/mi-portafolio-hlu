export const minimumAbsoluteDifferenceDetailEn = (
    <>
        <p>
            Given an array of integers, find the smallest absolute difference between any pair of elements.
        </p>

        <h2>Statement</h2>
        <p>
            The absolute difference between two values <code>a</code> and <code>b</code> is <code>|a - b|</code>. Return
            the minimum possible value across all pairs in the array.
        </p>
        <ul>
            <li><strong>Input:</strong> integer array <code>arr</code>.</li>
            <li><strong>Output:</strong> the smallest absolute difference found.</li>
        </ul>

        <h2>Examples</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Input:  [3, -7, 0]
Output: 3

Input:  [-59, -36, -13, 1, -53, -92, -2, -96, -54, 75]
Output: 1`}
        </pre>

        <h2>Approach</h2>
        <ol>
            <li>Sort the array.</li>
            <li>Compare only adjacent elements (<code>arr[i+1] - arr[i]</code>).</li>
            <li>Track the minimum found.</li>
        </ol>
        <p>
            After sorting, the closest pair is always adjacent. There is no need to check every pair.
        </p>

        <h2>Complexity</h2>
        <ul>
            <li><strong>Time:</strong> <code>O(n log n)</code> due to sorting</li>
            <li><strong>Space:</strong> <code>O(1)</code> if sorting in-place</li>
        </ul>

        <h2>Java solution</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            <code>{`import java.util.Arrays;

public class MinimumAbsoluteDifference {

    public static int minimumAbsoluteDifference(int[] arr) {
        Arrays.sort(arr);

        int minDiff = Integer.MAX_VALUE;

        for (int i = 0; i < arr.length - 1; i++) {
            minDiff = Math.min(minDiff, arr[i + 1] - arr[i]);
        }

        return minDiff;
    }
}`}</code>
        </pre>
    </>
);
