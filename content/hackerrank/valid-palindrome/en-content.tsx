export const validPalindromeDetailEn = (
    <>
        <p>Determine if text is a palindrome after removing spaces, punctuation, and lowercasing.</p>
        <h2>Statement</h2>
        <p>Consider only letters and digits. Compare from both ends toward the center.</p>
        <h2>Example</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`"Anita lava la tina" → true
"Hello world"      → false
"12321"            → true`}
        </pre>
        <h2>Approach</h2>
        <ol><li><code>clean = text.toLowerCase().replaceAll("[^a-z0-9]", "")</code></li><li>Two pointers i, j from ends.</li><li>If any pair differs → false.</li></ol>
        <h2>Complexity</h2>
        <ul>
            <li><strong>Time:</strong> <code>O(n)</code></li>
            <li><strong>Space:</strong> <code>O(n)</code> for normalized string</li>
        </ul>
        <h2>Java solution</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            <code>{`public static boolean isPalindrome(String text) {
    String clean = text.toLowerCase().replaceAll("[^a-z0-9]", "");

    for (int i = 0, j = clean.length() - 1; i < j; i++, j--) {
        if (clean.charAt(i) != clean.charAt(j)) {
            return false;
        }
    }
    return true;
}`}</code>
        </pre>
        
    </>
);
