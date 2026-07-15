export const stringAnagramDetailEn = (
    <>
        <p>For each word in <code>query</code>, count how many dictionary words are its anagram.</p>
        <h2>Statement</h2>
        <p>Two words are anagrams if they share the same letters (same multiset).</p>
        <h2>Example</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`dictionary: [heater, cold, clod, reheat, docl]
query: [codl, heater, abcd]
output: [3, 2, 0]`}
        </pre>
        <h2>Approach</h2>
        <ol><li>Sort letters of each dictionary word → key.</li><li>HashMap key → count.</li><li>Per query: lookup sorted key.</li></ol>
        <h2>Complexity</h2>
        <ul>
            <li><strong>Time:</strong> <code>O(n·k log k + q·k log k)</code></li>
            <li><strong>Space:</strong> <code>O(n)</code></li>
        </ul>
        <h2>Java solution</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            <code>{`public static List<Integer> stringAnagram(List<String> dictionary, List<String> query) {
    Map<String, Integer> counts = new HashMap<>();
    for (String word : dictionary) {
        String key = sortString(word);
        counts.put(key, counts.getOrDefault(key, 0) + 1);
    }
    List<Integer> result = new ArrayList<>();
    for (String q : query) {
        result.add(counts.getOrDefault(sortString(q), 0));
    }
    return result;
}

private static String sortString(String input) {
    char[] chars = input.toCharArray();
    Arrays.sort(chars);
    return new String(chars);
}`}</code>
        </pre>
        
    </>
);
