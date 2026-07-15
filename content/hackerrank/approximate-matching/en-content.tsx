export const approximateMatchingDetailEn = (
    <>
        <p>Find substring of <code>text</code> with highest score: end of <code>prefixString</code> match + start of <code>suffixString</code> match.</p>
        <h2>Statement</h2>
        <p><code>textScore = prefixScore + suffixScore</code>. On ties, return lexicographically smallest substring.</p>
        <h2>Example</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`text="engine", prefix="raven", suffix="ginkgo"
Best: "engin" (prefixScore=2, suffixScore=3, total=5)`}
        </pre>
        <h2>Approach</h2>
        <ol><li>Generate all substrings of text.</li><li>prefixScore via <code>endsWith</code>.</li><li>suffixScore via <code>startsWith</code>.</li><li>Max score; tie → smallest <code>compareTo</code>.</li></ol>
        <h2>Complexity</h2>
        <ul>
            <li><strong>Time:</strong> <code>O(n³)</code></li>
            <li><strong>Space:</strong> <code>O(n)</code></li>
        </ul>
        <h2>Java solution</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            <code>{`public static String calculateScore(String text, String prefixString, String suffixString) {
    String best = "";
    int maxScore = -1;

    for (int i = 0; i < text.length(); i++) {
        for (int j = i + 1; j <= text.length(); j++) {
            String sub = text.substring(i, j);
            int total = getPrefixScore(sub, prefixString) + getSuffixScore(sub, suffixString);
            if (total > maxScore || (total == maxScore && sub.compareTo(best) < 0)) {
                maxScore = total;
                best = sub;
            }
        }
    }
    return best;
}`}</code>
        </pre>
        
    </>
);
