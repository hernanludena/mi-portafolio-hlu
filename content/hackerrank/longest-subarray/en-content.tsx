export const longestSubarrayDetailEn = (
    <>
        <p>Find longest contiguous subarray with at most 2 distinct values differing by at most 1.</p>
        <h2>Statement</h2>
        <p>Valid: [1,2,1,2]. Invalid: [1,3] (difference 2).</p>
        <h2>Example</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Input: [0, 1, 2, 1, 2, 3]
Output: 4  ([1, 2, 1, 2])`}
        </pre>
        <h2>Approach</h2>
        <ol><li>Two pointers left/right.</li><li>TreeMap counts frequencies.</li><li>Shrink while size&gt;2 or max-min&gt;1.</li></ol>
        <h2>Complexity</h2>
        <ul>
            <li><strong>Time:</strong> <code>O(n log n)</code></li>
            <li><strong>Space:</strong> <code>O(1)</code> bounded types</li>
        </ul>
        <h2>Java solution</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            <code>{`public static int longestSubarray(List<Integer> arr) {
    if (arr == null || arr.isEmpty()) return 0;
    int left = 0, maxLen = 0;
    TreeMap<Integer, Integer> counts = new TreeMap<>();

    for (int right = 0; right < arr.size(); right++) {
        int val = arr.get(right);
        counts.put(val, counts.getOrDefault(val, 0) + 1);

        while (counts.size() > 2 || counts.lastKey() - counts.firstKey() > 1) {
            int leftVal = arr.get(left);
            counts.put(leftVal, counts.get(leftVal) - 1);
            if (counts.get(leftVal) == 0) counts.remove(leftVal);
            left++;
        }
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}`}</code>
        </pre>
        
    </>
);
