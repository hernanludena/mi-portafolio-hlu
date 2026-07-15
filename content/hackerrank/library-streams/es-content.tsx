export const libraryStreamsDetailEs = (
    <>
        <p>Gestión de inventario de biblioteca con Java Streams sobre records <code>Book</code>.</p>
        <h2>Enunciado</h2>
        <ul><li>Filtrar por género TECHNOLOGY</li><li>Sumar precios FICTION</li><li>Libro más caro</li><li>Agrupar y contar por género</li><li>Títulos ordenados alfabéticamente</li><li>Promedio de precio con parallel stream</li></ul>
        <h2>Ejemplo</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Books: The Great Gatsby (FICTION, 10.99), 1984 (FICTION, 10.99), ...
Filter TECHNOLOGY → The Wizard of Oz`}
        </pre>
        <h2>Enfoque</h2>
        <p>Usar <code>stream()</code>, <code>filter</code>, <code>mapToDouble</code>, <code>groupingBy</code>, <code>Collectors.counting()</code>, <code>parallelStream</code>.</p>
        <h2>Complejidad</h2>
        <ul>
            <li><strong>Tiempo:</strong> <code>O(n)</code> por operación</li>
            <li><strong>Espacio:</strong> <code>O(n)</code></li>
        </ul>
        <h2>Solución en Java</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            <code>{`record Book(String title, GENRE genre, String availableCopies, double price) {}

// Filter TECHNOLOGY
books.stream().filter(b -> b.genre() == GENRE.TECHNOLOGY).forEach(System.out::println);

// Total FICTION price
double total = books.stream().filter(b -> b.genre() == GENRE.FICTION).mapToDouble(Book::price).sum();

// Group by genre
Map<GENRE, List<Book>> byGenre = books.stream().collect(Collectors.groupingBy(Book::genre));

// Count by genre
Map<GENRE, Long> counts = books.stream().collect(Collectors.groupingBy(Book::genre, Collectors.counting()));`}</code>
        </pre>
        
    </>
);
