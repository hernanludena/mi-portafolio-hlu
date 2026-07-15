export const longestPalindromicSubstringDetailEn = (
    <>
        <p>
            Given a string <code>s</code>, return the longest palindromic substring. A palindrome reads the same forward
            and backward.
        </p>

        <h2>Statement</h2>
        <ul>
            <li><strong>Input:</strong> string <code>s</code> (letters and digits only).</li>
            <li><strong>Output:</strong> the longest palindromic substring.</li>
            <li>If multiple answers exist, any valid one is accepted.</li>
        </ul>

        <h2>Examples</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Input:  "babad"
Output: "bab"   (or "aba")

Input:  "cbbd"
Output: "bb"`}
        </pre>

        <h2>Approach — Expand Around Center</h2>
        <ol>
            <li>For each index <code>i</code>, expand as an odd-length center (<code>i, i</code>).</li>
            <li>Also expand as an even-length center (<code>i, i+1</code>).</li>
            <li>While boundary characters match, keep expanding.</li>
            <li>Track the start index and length of the longest palindrome found.</li>
        </ol>

        <h2>Complexity</h2>
        <ul>
            <li><strong>Time:</strong> <code>O(n²)</code></li>
            <li><strong>Space:</strong> <code>O(1)</code></li>
        </ul>

        <h2>Java solution</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            <code>{`public class LongestPalindromeFinder {

    private static int resultStart;
    private static int maxLength;

    public static String longestPalindrome(String s) {
        if (s.length() < 2) {
            return s;
        }

        resultStart = 0;
        maxLength = 0;

        for (int i = 0; i < s.length(); i++) {
            expandFromCenter(i, i, s);
            expandFromCenter(i, i + 1, s);
        }

        return s.substring(resultStart, resultStart + maxLength);
    }

    private static void expandFromCenter(int left, int right, String s) {
        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            left--;
            right++;
        }

        int currentLen = right - left - 1;

        if (currentLen > maxLength) {
            resultStart = left + 1;
            maxLength = currentLen;
        }
    }
}`}</code>
        </pre>

        <h2>Solution notes</h2>
        <ul>
            <li>Each expansion tests one possible center; there are <code>2n - 1</code> centers.</li>
            <li>Simpler than DP and sufficient for <code>n &lt;= 1000</code>.</li>
        </ul>
    </>
);
