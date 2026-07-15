export const primeGroupsDetailEs = (
    <>
        <p>Dado un string de dígitos, generar todas las particiones en enteros donde al menos uno sea primo.</p>
        <h2>Enunciado</h2>
        <p>Probar todos los cortes posibles del string. Guardar particiones válidas.</p>
        <h2>Ejemplo</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Input: "1123"
Groups include: [1,1,23], [11,2,3], [1,12,3], etc.
(at least one prime per group)`}
        </pre>
        <h2>Enfoque</h2>
        <ol><li>Backtracking: elegir fin de siguiente número.</li><li>Al llegar al final: si algún número es primo → guardar.</li><li><code>isPrime</code> hasta √n.</li></ol>
        <h2>Complejidad</h2>
        <ul>
            <li><strong>Tiempo:</strong> <code>O(2^n · √n)</code></li>
            <li><strong>Espacio:</strong> <code>O(n)</code></li>
        </ul>
        <h2>Solución en Java</h2>
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
