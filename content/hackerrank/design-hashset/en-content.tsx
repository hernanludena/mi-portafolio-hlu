export const designHashsetDetailEn = (
    <>
        <p>Implement an integer set without duplicates using hash table with chaining.</p>
        <h2>Statement</h2>
        <p>Methods: <code>add(key)</code>, <code>remove(key)</code>, <code>contains(key)</code>.</p>
        <h2>Example</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`add(10), add(20), add(1010)  // collision at bucket 10
contains(1010) → true
remove(10) → contains(1010) still true`}
        </pre>
        <h2>Approach</h2>
        <ol><li>1000 buckets, each a list.</li><li><code>index = key % 1000</code></li><li>Chaining for collisions.</li></ol>
        <h2>Complexity</h2>
        <ul>
            <li><strong>Time:</strong> <code>O(1)</code> average</li>
            <li><strong>Space:</strong> <code>O(n)</code></li>
        </ul>
        <h2>Java solution</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            <code>{`public class MyHashSet {
    private static final int BUCKET_SIZE = 1000;
    private final List<List<Integer>> buckets = new ArrayList<>();

    public MyHashSet() {
        for (int i = 0; i < BUCKET_SIZE; i++) buckets.add(null);
    }

    private int hash(int key) { return key % BUCKET_SIZE; }

    public void add(int key) {
        int index = hash(key);
        List<Integer> bucket = buckets.get(index);
        if (bucket == null) {
            bucket = new LinkedList<>();
            bucket.add(key);
            buckets.set(index, bucket);
        } else if (!bucket.contains(key)) {
            bucket.add(key);
        }
    }

    public void remove(int key) {
        List<Integer> bucket = buckets.get(hash(key));
        if (bucket != null) bucket.remove(Integer.valueOf(key));
    }

    public boolean contains(int key) {
        List<Integer> bucket = buckets.get(hash(key));
        return bucket != null && bucket.contains(key);
    }
}`}</code>
        </pre>
        
    </>
);
