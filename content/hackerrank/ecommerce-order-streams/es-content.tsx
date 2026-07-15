export const ecommerceOrderStreamsDetailEs = (
    <>
        <p>Procesamiento de órdenes e-commerce con records, builder pattern y Java Streams.</p>
        <h2>Enunciado</h2>
        <ul><li>Total por orden (suma productos)</li><li>Filtrar órdenes PAID</li><li>Descuento 10% clientes premium</li><li>Revenue total</li><li>Agrupar órdenes por cliente</li></ul>
        <h2>Ejemplo</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Order O1: premium customer, PAID, products [Laptop 999, Mouse 25]
Total: 1024 → with 10% discount: 921.6`}
        </pre>
        <h2>Enfoque</h2>
        <p><code>flatMap</code> para productos, <code>filter</code> por status, <code>mapToDouble</code> para montos, <code>groupingBy</code> por cliente.</p>
        <h2>Complejidad</h2>
        <ul>
            <li><strong>Tiempo:</strong> <code>O(n)</code></li>
            <li><strong>Espacio:</strong> <code>O(n)</code></li>
        </ul>
        <h2>Solución en Java</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            <code>{`record Product(String name, String category, double price) {}
record Customer(String name, boolean premium) {}
record Order(String id, Customer customer, List<Product> products, OrderStatus status) {}

double orderTotal(Order order) {
    return order.products().stream().mapToDouble(Product::price).sum();
}

List<Order> paidOrders = orders.stream()
    .filter(o -> o.status() == OrderStatus.PAID)
    .toList();

double revenue = orders.stream()
    .filter(o -> o.status() == OrderStatus.PAID)
    .mapToDouble(this::orderTotal)
    .sum();`}</code>
        </pre>
        
    </>
);
