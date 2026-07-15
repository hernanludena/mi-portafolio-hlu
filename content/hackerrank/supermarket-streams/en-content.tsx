export const supermarketStreamsDetailEn = (
    <>
        <p>Supermarket product management with <code>Producto</code> records and Java Streams.</p>
        <h2>Statement</h2>
        <ul><li>Filter FRUTAS</li><li>Total LACTEOS price</li><li>Cheapest product</li><li>Group by category</li><li>Average per category; highest average category</li></ul>
        <h2>Example</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Manzana (FRUTAS, 2.5), Leche (LACTEOS, 1.2), Pan (PANADERIA, 1.0)`}
        </pre>
        <h2>Approach</h2>
        <p><code>filter</code>, <code>mapToDouble().sum()</code>, <code>min(Comparator)</code>, <code>groupingBy</code>, <code>averagingDouble</code>.</p>
        <h2>Complexity</h2>
        <ul>
            <li><strong>Time:</strong> <code>O(n)</code></li>
            <li><strong>Space:</strong> <code>O(n)</code></li>
        </ul>
        <h2>Java solution</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            <code>{`record Producto(String name, Category category, int amount, double price) {}

// Filter FRUTAS
productos.stream().filter(p -> p.category() == Category.FRUTAS).forEach(System.out::println);

// Total LACTEOS
double total = productos.stream().filter(p -> p.category() == Category.LACTEOS).mapToDouble(Producto::price).sum();

// Cheapest
Optional<Producto> cheapest = productos.stream().min(Comparator.comparingDouble(Producto::price));

// Group by category
Map<Category, List<Producto>> groups = productos.stream().collect(Collectors.groupingBy(Producto::category));`}</code>
        </pre>
        
    </>
);
