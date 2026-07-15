export const stackImplementationDetailEs = (
    <>
        <p>Implementar una pila (LIFO) con capacidad fija usando un arreglo.</p>
        <h2>Enunciado</h2>
        <p>Operaciones: <code>push</code>, <code>pop</code>, <code>peek</code>, <code>isEmpty</code>, <code>isFull</code>. Lanzar excepción si push en lleno o pop en vacío.</p>
        <h2>Ejemplo</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`push(10), push(20), push(30)
peek() → 30
pop()  → 30, 20, 10`}
        </pre>
        <h2>Enfoque</h2>
        <ol><li><code>top = -1</code> cuando vacío.</li><li>push: <code>array[++top] = item</code></li><li>pop: <code>return array[top--]</code></li></ol>
        <h2>Complejidad</h2>
        <ul>
            <li><strong>Tiempo:</strong> <code>O(1)</code> por operación</li>
            <li><strong>Espacio:</strong> <code>O(n)</code></li>
        </ul>
        <h2>Solución en Java</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            <code>{`class Stack {
    private final int[] array;
    private int top = -1;
    private final int capacity;

    Stack(int capacity) {
        this.capacity = capacity;
        this.array = new int[capacity];
    }

    public void push(int item) {
        if (isFull()) throw new RuntimeException("Stack is full");
        array[++top] = item;
    }

    public int pop() {
        if (isEmpty()) throw new RuntimeException("Stack is empty");
        return array[top--];
    }

    public int peek() {
        if (isEmpty()) throw new RuntimeException("Stack is empty");
        return array[top];
    }

    public boolean isEmpty() { return top == -1; }
    public boolean isFull() { return top == capacity - 1; }
}`}</code>
        </pre>
        
    </>
);
