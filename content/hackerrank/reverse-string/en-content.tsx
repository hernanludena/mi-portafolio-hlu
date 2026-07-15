export const reverseStringDetailEn = (
    <>
        <p>
            Given a string <code>str</code>, return it in reverse order. Two approaches: with{" "}
            <code>StringBuilder</code> or a manual loop.
        </p>

        <h2>Statement</h2>
        <p>Given a string <code>str</code>, return it in reverse order.</p>
        <ul>
            <li><strong>Input:</strong> string <code>str</code>.</li>
            <li><strong>Output:</strong> reversed string.</li>
        </ul>

        <h2>Example</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Input:  "asac al"
Output: "la casa"`}
        </pre>

        <h2>Approach 1 — StringBuilder.reverse()</h2>
        <p>Uses Java&apos;s <code>StringBuilder.reverse()</code>. Short and direct code.</p>

        <h2>Approach 2 — Manual loop</h2>
        <p>Iterate right to left and build the result character by character.</p>

        <h2>Complexity</h2>
        <ul>
            <li><strong>Time:</strong> <code>O(n)</code></li>
            <li><strong>Space:</strong> <code>O(n)</code> — new result string</li>
        </ul>

        <h2>Java solution</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            <code>{`public class ReverseString {

    public static String reverseStr(String str) {
        return new StringBuilder(str).reverse().toString();
    }

    public static String reverseManuallyStr(String str) {
        StringBuilder sb = new StringBuilder();

        for (int i = str.length() - 1; i >= 0; i--) {
            sb.append(str.charAt(i));
        }

        return sb.toString();
    }
}`}</code>
        </pre>

        <h2>Solution notes</h2>
        <ul>
            <li><code>StringBuilder</code> is mutable — avoids many intermediate strings.</li>
            <li>The manual loop shows you understand the mechanism without relying on the API.</li>
        </ul>
    </>
);
