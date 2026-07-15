export const romanToIntegerDetailEn = (
    <>
        <p>Convert strings like <code>MMCCCXXIV</code> to integer value (2324).</p>
        <h2>Statement</h2>
        <p>Given a valid Roman numeral, return its integer equivalent.</p>
        <h2>Example</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Input:  "MMCCCXXIV"
Output: 2324`}
        </pre>
        <h2>Approach</h2>
        <ol><li>Build char → value map.</li><li>Scan left to right.</li><li>If current &gt; previous → subtract twice previous (subtractive case).</li><li>Else → add normally.</li></ol>
        <h2>Complexity</h2>
        <ul>
            <li><strong>Time:</strong> <code>O(n)</code></li>
            <li><strong>Space:</strong> <code>O(1)</code></li>
        </ul>
        <h2>Java solution</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            <code>{`public static int romanToInt(String s) {
    Map<Character, Integer> map = Map.of(
        'I', 1, 'V', 5, 'X', 10, 'L', 50,
        'C', 100, 'D', 500, 'M', 1000
    );

    int result = 0;
    int prev = 0;

    for (int i = 0; i < s.length(); i++) {
        int current = map.get(s.charAt(i));
        if (current > prev && i > 0) {
            result += current - 2 * prev;
        } else {
            result += current;
        }
        prev = current;
    }
    return result;
}`}</code>
        </pre>
        
    </>
);
