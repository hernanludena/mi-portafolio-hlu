export const libraryStreamsDetailEn = (
    <>
        <p>Library inventory management with Java Streams over <code>Book</code> records.</p>
        <h2>Statement</h2>
        <ul><li>Filter TECHNOLOGY genre</li><li>Sum FICTION prices</li><li>Most expensive book</li><li>Group and count by genre</li><li>Titles sorted alphabetically</li><li>Average price with parallel stream</li></ul>
        <h2>Example</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Books: The Great Gatsby (FICTION, 10.99), 1984 (FICTION, 10.99), ...
Filter TECHNOLOGY → The Wizard of Oz`}
        </pre>
        <h2>Approach</h2>
        <p>Use <code>stream()</code>, <code>filter</code>, <code>mapToDouble</code>, <code>groupingBy</code>, <code>Collectors.counting()</code>, <code>parallelStream</code>.</p>
        <h2>Complexity</h2>
        <ul>
            <li><strong>Time:</strong> <code>O(n)</code> per operation</li>
            <li><strong>Space:</strong> <code>O(n)</code></li>
        </ul>
        <h2>Java solution</h2>
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
