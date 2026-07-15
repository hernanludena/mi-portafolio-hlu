export const primeGroupsDetailEn = (
    <>
        <p>Given a digit string, generate all partitions into integers where at least one is prime.</p>
        <h2>Statement</h2>
        <p>Try all possible cuts of the string. Keep valid partitions.</p>
        <h2>Example</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Input: "1123"
Groups include: [1,1,23], [11,2,3], [1,12,3], etc.
(at least one prime per group)`}
        </pre>
        <h2>Approach</h2>
        <ol><li>Backtrack: pick end of next number.</li><li>At end: if any number prime → save.</li><li><code>isPrime</code> up to √n.</li></ol>
        <h2>Complexity</h2>
        <ul>
            <li><strong>Time:</strong> <code>O(2^n · √n)</code></li>
            <li><strong>Space:</strong> <code>O(n)</code></li>
        </ul>
        <h2>Java solution</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            <code>{`static void backtrack(String s, int index, List<Integer> current, List<List<Integer>> result) {
    if (index == s.length()) {
        if (current.stream().anyMatch(PrimeGroups::isPrime)) {
            result.add(new ArrayList<>(current));
        }
        return;
    }
    for (int i = index + 1; i <= s.length(); i++) {
        int num = Integer.parseInt(s.substring(index, i));
        current.add(num);
        backtrack(s, i, current, result);
        current.remove(current.size() - 1);
    }
}

static boolean isPrime(int n) {
    if (n <= 1) return false;
    if (n == 2) return true;
    if (n % 2 == 0) return false;
    for (int i = 3; i * i <= n; i += 2) {
        if (n % i == 0) return false;
    }
    return true;
}`}</code>
        </pre>
        
    </>
);
