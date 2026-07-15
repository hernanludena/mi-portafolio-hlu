export const stringDecryptionReversalDetailEn = (
    <>
        <p>Decrypt message: letter followed by digit repeats N times. Then reverse word order.</p>
        <h2>Statement</h2>
        <p>Per word: <code>a3</code> → <code>aaa</code>. Finally reverse word list.</p>
        <h2>Example</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Input:  "a3b4q2i abcd2 abc"
Output: "abc abcdccccc aaaaabbbbbbqqii"`}
        </pre>
        <h2>Approach</h2>
        <ol><li>Split by spaces.</li><li>Per word: if next char is digit → repeat, skip digit.</li><li><code>Collections.reverse(words)</code></li><li><code>String.join</code></li></ol>
        <h2>Complexity</h2>
        <ul>
            <li><strong>Time:</strong> <code>O(n)</code></li>
            <li><strong>Space:</strong> <code>O(n)</code></li>
        </ul>
        <h2>Java solution</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            <code>{`public static String decryptMessage(String encryptedMessage) {
    String[] words = encryptedMessage.split(" ");
    List<String> decoded = new ArrayList<>();

    for (String word : words) {
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < word.length(); i++) {
            char ch = word.charAt(i);
            if (i + 1 < word.length() && Character.isDigit(word.charAt(i + 1))) {
                int freq = Character.getNumericValue(word.charAt(i + 1));
                for (int j = 0; j < freq; j++) sb.append(ch);
                i++;
            } else {
                sb.append(ch);
            }
        }
        decoded.add(sb.toString());
    }
    Collections.reverse(decoded);
    return String.join(" ", decoded);
}`}</code>
        </pre>
        
    </>
);
