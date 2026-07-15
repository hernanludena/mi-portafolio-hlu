export const treeReviewDetailEn = (
    <>
        <p>
            Build a binary search tree (BST) by inserting values and traverse it with inorder to get sorted elements.
        </p>

        <h2>Statement</h2>
        <p>
            Given an array of integers, build a BST by inserting each value, then print the inorder traversal (left →
            root → right).
        </p>
        <ul>
            <li>Smaller values go left.</li>
            <li>Greater or equal values go right.</li>
            <li>Inorder on a BST returns values in ascending order.</li>
        </ul>

        <h2>Example</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Input:  [4, 5, 6, 2, 3, 4]
Inorder: 2 3 4 4 5 6`}
        </pre>

        <h2>Approach</h2>
        <ol>
            <li>Define a node with <code>value</code>, <code>left</code>, <code>right</code>.</li>
            <li><code>insertNode</code>: if root is null, create node; otherwise go left or right by comparison.</li>
            <li><code>inOrder</code>: recurse — left first, then root, then right.</li>
        </ol>

        <h2>Complexity</h2>
        <ul>
            <li><strong>Insertion:</strong> <code>O(h)</code> per node — <code>h</code> = tree height</li>
            <li><strong>Inorder:</strong> <code>O(n)</code></li>
            <li>Worst case (degenerate tree): <code>O(n²)</code> to insert all</li>
        </ul>

        <h2>Java solution</h2>
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

        <h2>Solution notes</h2>
        <ul>
            <li>Recursive insertion is the standard BST pattern.</li>
            <li>Inorder is the simplest way to verify the tree is ordered.</li>
            <li>Duplicates go right (<code>&gt;=</code>) — common but not the only convention.</li>
        </ul>
    </>
);
