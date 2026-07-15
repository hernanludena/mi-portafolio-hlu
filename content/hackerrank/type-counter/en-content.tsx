export const typeCounterDetailEn = (
    <>
        <p>Given a sentence, count how many words are strings, integers, or doubles (with decimal point).</p>
        <h2>Statement</h2>
        <p>Print in order: <code>string count</code>, <code>integer count</code>, <code>double count</code>.</p>
        <h2>Example</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Input: "can you give me 10 bucks puff in 7.5 or 7"
Output:
string 5
integer 2
double 1`}
        </pre>
        <h2>Approach</h2>
        <ol><li><code>split("\s+")</code></li><li>Try <code>Integer.parseInt</code> first.</li><li>If fails, <code>Double.parseDouble</code> + must contain <code>.</code>.</li><li>Else → string.</li></ol>
        <h2>Complexity</h2>
        <ul>
            <li><strong>Time:</strong> <code>O(n)</code></li>
            <li><strong>Space:</strong> <code>O(n)</code></li>
        </ul>
        <h2>Java solution</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            <code>{`public static void typeCounter(String sentence) {
    int strings = 0, integers = 0, doubles = 0;
    String[] words = sentence.trim().split("\\s+");

    for (String word : words) {
        if (isInteger(word)) integers++;
        else if (isDouble(word)) doubles++;
        else strings++;
    }
    System.out.println("string " + strings);
    System.out.println("integer " + integers);
    System.out.println("double " + doubles);
}`}</code>
        </pre>
        
    </>
);
