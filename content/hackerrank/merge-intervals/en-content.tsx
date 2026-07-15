export const mergeIntervalsDetailEn = (
    <>
        <p>Given intervals <code>[start, end]</code>, merge all overlapping ones.</p>
        <h2>Statement</h2>
        <p>Two intervals overlap if <code>start_next ≤ end_current</code>.</p>
        <h2>Example</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Input:  [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]`}
        </pre>
        <h2>Approach</h2>
        <ol><li>Sort by start.</li><li>Scan: if overlap → extend end; else → save and reset.</li></ol>
        <h2>Complexity</h2>
        <ul>
            <li><strong>Time:</strong> <code>O(n log n)</code></li>
            <li><strong>Space:</strong> <code>O(n)</code></li>
        </ul>
        <h2>Java solution</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            <code>{`public int[][] merge(int[][] intervals) {
    if (intervals.length <= 1) return intervals;
    Arrays.sort(intervals, Comparator.comparingInt(a -> a[0]));

    List<int[]> merged = new ArrayList<>();
    int currentStart = intervals[0][0];
    int currentEnd = intervals[0][1];

    for (int i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= currentEnd) {
            currentEnd = Math.max(currentEnd, intervals[i][1]);
        } else {
            merged.add(new int[]{currentStart, currentEnd});
            currentStart = intervals[i][0];
            currentEnd = intervals[i][1];
        }
    }
    merged.add(new int[]{currentStart, currentEnd});
    return merged.toArray(new int[0][]);
}`}</code>
        </pre>
        
    </>
);
