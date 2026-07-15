export const treeReviewDetailEs = (
    <>
        <p>
            Construir un árbol binario de búsqueda (BST) insertando valores y recorrerlo con inorder para obtener los
            elementos ordenados.
        </p>

        <h2>Enunciado</h2>
        <p>
            Dado un arreglo de enteros, construir un BST insertando cada valor y luego imprimir el recorrido inorder
            (izquierda → raíz → derecha).
        </p>
        <ul>
            <li>Valores menores van a la izquierda.</li>
            <li>Valores mayores o iguales van a la derecha.</li>
            <li>Inorder de un BST devuelve los valores en orden ascendente.</li>
        </ul>

        <h2>Ejemplo</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Input:  [4, 5, 6, 2, 3, 4]
Inorder: 2 3 4 4 5 6`}
        </pre>

        <h2>Enfoque</h2>
        <ol>
            <li>Definir nodo con <code>value</code>, <code>left</code>, <code>right</code>.</li>
            <li><code>insertNode</code>: si raíz es null, crear nodo; si no, ir a izquierda o derecha según comparación.</li>
            <li><code>inOrder</code>: recursión — primero izquierda, luego raíz, luego derecha.</li>
        </ol>

        <h2>Complejidad</h2>
        <ul>
            <li><strong>Inserción:</strong> <code>O(h)</code> por nodo — <code>h</code> = altura del árbol</li>
            <li><strong>Inorder:</strong> <code>O(n)</code></li>
            <li>En el peor caso (árbol degenerado): <code>O(n²)</code> para insertar todos</li>
        </ul>

        <h2>Solución en Java</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            <code>{`public class TreeReview {

    static class Node {
        int value;
        Node left;
        Node right;

        Node(int value) {
            this.value = value;
        }
    }

    private static Node insertNode(Node root, int value) {
        if (root == null) {
            return new Node(value);
        }

        if (value < root.value) {
            root.left = insertNode(root.left, value);
        } else {
            root.right = insertNode(root.right, value);
        }

        return root;
    }

    private static void inOrder(Node root) {
        if (root == null) {
            return;
        }

        inOrder(root.left);
        System.out.print(root.value + " ");
        inOrder(root.right);
    }
}`}</code>
        </pre>

        <h2>Lectura de la solución</h2>
        <ul>
            <li>La inserción recursiva es el patrón estándar de BST.</li>
            <li>Inorder es la forma más simple de validar que el árbol quedó ordenado.</li>
            <li>Duplicados van a la derecha (<code>&gt;=</code>) — convención común pero no única.</li>
        </ul>
    </>
);
