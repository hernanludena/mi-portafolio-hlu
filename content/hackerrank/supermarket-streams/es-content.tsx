export const supermarketStreamsDetailEs = (
    <>
        <p>Gestión de productos de supermercado con records <code>Producto</code> y Java Streams.</p>
        <h2>Enunciado</h2>
        <ul><li>Filtrar FRUTAS</li><li>Total precio LACTEOS</li><li>Producto más barato</li><li>Agrupar por categoría</li><li>Promedio por categoría; categoría con mayor promedio</li></ul>
        <h2>Ejemplo</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Manzana (FRUTAS, 2.5), Leche (LACTEOS, 1.2), Pan (PANADERIA, 1.0)`}
        </pre>
        <h2>Enfoque</h2>
        <p><code>filter</code>, <code>mapToDouble().sum()</code>, <code>min(Comparator)</code>, <code>groupingBy</code>, <code>averagingDouble</code>.</p>
        <h2>Complejidad</h2>
        <ul>
            <li><strong>Tiempo:</strong> <code>O(n)</code></li>
            <li><strong>Espacio:</strong> <code>O(n)</code></li>
        </ul>
        <h2>Solución en Java</h2>
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
