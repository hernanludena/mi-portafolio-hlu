export const processRuntimeConsolidationDetailEn = (
    <>
        <p>
            Given process execution logs, each entry has a process ID, start time, and end time. A process may have
            multiple intervals (pause/resume). Merge overlaps and sum total runtime per process.
        </p>

        <h2>Statement</h2>
        <ul>
            <li><strong>Input:</strong> <code>m</code> processes (IDs <code>0</code> to <code>m-1</code>) and logs{" "}
            <code>[processId, start, end]</code>.</li>
            <li><strong>Output:</strong> array of size <code>m</code> with total runtime per process.</li>
            <li>Overlapping intervals for the same process are merged before summing.</li>
            <li>Inclusive duration: <code>(end - start) + 1</code> seconds.</li>
        </ul>

        <h2>Example</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`m = 2
logs = [[0,0,5], [0,3,7], [1,10,15], [1,12,18], [0,20,25]]

Process 0: [0,5] + [3,7] → [0,7] = 8s
           [20,25] = 6s
           Total = 14

Process 1: [10,15] + [12,18] → [10,18] = 9s

Output: [14, 9]`}
        </pre>

        <h2>Approach</h2>
        <ol>
            <li>Group intervals by <code>processId</code>.</li>
            <li>Sort each group by <code>start</code>.</li>
            <li>Merge when <code>nextStart &lt;= currentEnd</code> (overlap).</li>
            <li>Sum durations of merged intervals.</li>
        </ol>

        <h2>Complexity</h2>
        <ul>
            <li><strong>Time:</strong> <code>O(n log n)</code> — sort per process</li>
            <li><strong>Space:</strong> <code>O(n + m)</code></li>
        </ul>

        <h2>Java solution</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            <code>{`import java.util.ArrayList;
import java.util.List;

public class ProcessRuntimeConsolidation {

    public static int[] calculateTotalRuntimes(int m, int[][] logs) {
        List<List<int[]>> processIntervals = new ArrayList<>();

        for (int i = 0; i < m; i++) {
            processIntervals.add(new ArrayList<>());
        }

        for (int[] log : logs) {
            processIntervals.get(log[0]).add(new int[]{log[1], log[2]});
        }

        int[] result = new int[m];

        for (int i = 0; i < m; i++) {
            List<int[]> intervals = processIntervals.get(i);

            if (intervals.isEmpty()) {
                continue;
            }

            intervals.sort((a, b) -> Integer.compare(a[0], b[0]));

            int total = 0;
            int currentStart = intervals.get(0)[0];
            int currentEnd = intervals.get(0)[1];

            for (int j = 1; j < intervals.size(); j++) {
                int nextStart = intervals.get(j)[0];
                int nextEnd = intervals.get(j)[1];

                if (nextStart <= currentEnd) {
                    currentEnd = Math.max(currentEnd, nextEnd);
                } else {
                    total += (currentEnd - currentStart) + 1;
                    currentStart = nextStart;
                    currentEnd = nextEnd;
                }
            }

            total += (currentEnd - currentStart) + 1;
            result[i] = total;
        }

        return result;
    }
}`}</code>
        </pre>

        <h2>Solution notes</h2>
        <ul>
            <li>Classic merge intervals pattern applied per process.</li>
            <li>Overlap condition depends on the problem: here <code>nextStart &lt;= currentEnd</code>.</li>
        </ul>
    </>
);
