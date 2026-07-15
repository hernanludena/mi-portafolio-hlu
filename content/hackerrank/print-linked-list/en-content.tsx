export const printLinkedListDetailEn = (
    <>
        <p>Print each node's <code>data</code> in a singly linked list.</p>
        <h2>Statement</h2>
        <p>Traverse from <code>head</code> to <code>null</code>, printing each value.</p>
        <h2>Example</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`List: 10 → 20 → 30 → 40 → 50
Output:
10
20
30
40
50`}
        </pre>
        <h2>Approach</h2>
        <ol><li><code>current = head</code></li><li>While current ≠ null: print, advance.</li></ol>
        <h2>Complexity</h2>
        <ul>
            <li><strong>Time:</strong> <code>O(n)</code></li>
            <li><strong>Space:</strong> <code>O(1)</code></li>
        </ul>
        <h2>Java solution</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            <code>{`static void printLinkedList(SinglyLinkedListNode head) {
    SinglyLinkedListNode current = head;
    while (current != null) {
        System.out.println(current.data);
        current = current.next;
    }
}`}</code>
        </pre>
        
    </>
);
