export const printLinkedListDetailEs = (
    <>
        <p>Imprimir cada <code>data</code> de un nodo en una singly linked list.</p>
        <h2>Enunciado</h2>
        <p>Recorrer desde <code>head</code> hasta <code>null</code>, imprimiendo cada valor.</p>
        <h2>Ejemplo</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`List: 10 → 20 → 30 → 40 → 50
Output:
10
20
30
40
50`}
        </pre>
        <h2>Enfoque</h2>
        <ol><li><code>current = head</code></li><li>Mientras current ≠ null: imprimir, avanzar.</li></ol>
        <h2>Complejidad</h2>
        <ul>
            <li><strong>Tiempo:</strong> <code>O(n)</code></li>
            <li><strong>Espacio:</strong> <code>O(1)</code></li>
        </ul>
        <h2>Solución en Java</h2>
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
