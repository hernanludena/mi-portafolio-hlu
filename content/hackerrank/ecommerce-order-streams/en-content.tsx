export const ecommerceOrderStreamsDetailEn = (
    <>
        <p>E-commerce order processing with records, builder pattern, and Java Streams.</p>
        <h2>Statement</h2>
        <ul><li>Total per order (sum products)</li><li>Filter PAID orders</li><li>10% discount for premium customers</li><li>Total revenue</li><li>Group orders by customer</li></ul>
        <h2>Example</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Order O1: premium customer, PAID, products [Laptop 999, Mouse 25]
Total: 1024 → with 10% discount: 921.6`}
        </pre>
        <h2>Approach</h2>
        <p><code>flatMap</code> for products, <code>filter</code> by status, <code>mapToDouble</code> for amounts, <code>groupingBy</code> by customer.</p>
        <h2>Complexity</h2>
        <ul>
            <li><strong>Time:</strong> <code>O(n)</code></li>
            <li><strong>Space:</strong> <code>O(n)</code></li>
        </ul>
        <h2>Java solution</h2>
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
