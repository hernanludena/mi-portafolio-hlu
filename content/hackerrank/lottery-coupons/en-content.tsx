export const lotteryCouponsDetailEn = (
    <>
        <p>
            Counting and grouping exercise. Given an integer <code>n</code>, coupons go from <code>1</code> to{" "}
            <code>n</code>. A coupon wins for a value <code>s</code> when the sum of its digits equals <code>s</code>.
            The goal is to find how many values of <code>s</code> produce the maximum number of winners.
        </p>

        <h2>Statement</h2>
        <p>
            There is a lottery with <code>n</code> coupons numbered consecutively from <code>1</code> to <code>n</code>.
            A person wins when their coupon's <strong>digit sum</strong> equals a value <code>s</code>.
        </p>
        <p>You must determine how many values of <code>s</code> satisfy both conditions:</p>
        <ul>
            <li>there is at least one winner, and</li>
            <li>the number of winners is as large as possible.</li>
        </ul>
        <p>
            In other words: group coupons by digit sum and return how many groups tie for the highest frequency.
        </p>

        <h2>Problem</h2>
        <p>
            There is no need to simulate a lottery. Key idea: group coupons by <strong>digit sum</strong>, then find
            which group has the highest frequency.
        </p>
        <ul>
            <li><strong>Input:</strong> an integer <code>n</code>.</li>
            <li><strong>Output:</strong> how many values of <code>s</code> reach the maximum frequency.</li>
            <li><strong>Main idea:</strong> frequency by digit sum.</li>
        </ul>

        <h2>Quick example</h2>
        <p>
            If <code>n = 12</code>, the sums are:
        </p>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`1 -> 1
2 -> 2
3 -> 3
...
10 -> 1
11 -> 2
12 -> 3`}
        </pre>
        <p>
            Sums <code>1</code>, <code>2</code>, and <code>3</code> appear twice. That is the highest frequency, so
            the answer is <code>3</code>.
        </p>

        <h2>Approach</h2>
        <ol>
            <li>Iterate from <code>1</code> to <code>n</code>.</li>
            <li>Compute the digit sum for each number.</li>
            <li>Store frequencies in a <code>HashMap&lt;Integer, Integer&gt;</code>.</li>
            <li>Find the highest frequency.</li>
            <li>Count how many sums match that maximum.</li>
        </ol>

        <h2>Why it works</h2>
        <p>
            Every coupon belongs to exactly one group: its digit sum. Once each group size is known, the largest group
            represents the maximum possible number of winners. The final step is counting how many groups tie at that
            maximum.
        </p>

        <h2>Complexity</h2>
        <ul>
            <li>
                <strong>Time:</strong> <code>O(n * d)</code>, where <code>d</code> is the number of digits.
            </li>
            <li>
                <strong>Space:</strong> <code>O(k)</code>, where <code>k</code> is the number of distinct sums.
            </li>
        </ul>

        <h2>Edge cases</h2>
        <ul>
            <li><code>n = 1</code>: only one possible sum, so the answer is <code>1</code>.</li>
            <li>Ties across multiple sums: count all of them, not just one.</li>
            <li>Multi-digit numbers: <code>19</code> and <code>91</code> share the same sum <code>10</code>.</li>
        </ul>

        <h2>Java solution</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            <code>{`import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

public class LotteryCoupons {

    public static int lotteryCoupons(int n) {
        Map<Integer, Integer> freq = new HashMap<>();

        for (int i = 1; i <= n; i++) {
            int sum = digitSum(i);
            freq.merge(sum, 1, Integer::sum);
        }

        int maxWinners = Collections.max(freq.values());

        int count = 0;
        for (int winners : freq.values()) {
            if (winners == maxWinners) {
                count++;
            }
        }

        return count;
    }

    private static int digitSum(int value) {
        int sum = 0;

        while (value > 0) {
            sum += value % 10;
            value /= 10;
        }

        return sum;
    }
}`}</code>
        </pre>

        <h2>Solution notes</h2>
        <ul>
            <li><code>digitSum()</code> avoids converting to <code>String</code> and uses arithmetic only.</li>
            <li><code>merge()</code> keeps the frequency update concise.</li>
            <li>Two clear phases: count first, decide after.</li>
        </ul>
    </>
);
