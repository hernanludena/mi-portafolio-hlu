export const onlineLearningStreamsDetailEs = (
    <>
        <p>Plataforma de aprendizaje online con records <code>Course</code> y <code>Student</code>.</p>
        <h2>Enunciado</h2>
        <ul><li>Cursos PROGRAMMING</li><li>Revenue total</li><li>Estudiantes únicos (flatMap)</li><li>Lecciones completadas</li><li>Curso más popular</li><li>Promedio precio por categoría</li></ul>
        <h2>Ejemplo</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Java Masterclass (PROGRAMMING, 120), UX Fundamentals (DESIGN, 90)`}
        </pre>
        <h2>Enfoque</h2>
        <p><code>filter</code> por categoría, <code>flatMap</code> para estudiantes, <code>distinct</code>, <code>maxBy</code> por tamaño de lista.</p>
        <h2>Complejidad</h2>
        <ul>
            <li><strong>Tiempo:</strong> <code>O(n)</code></li>
            <li><strong>Espacio:</strong> <code>O(n)</code></li>
        </ul>
        <h2>Solución en Java</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            <code>{`record Student(String name, List<String> completedLessons) {}
record Course(String title, CategorySchool category, double price, List<Student> students) {}

List<Course> programming = courses.stream()
    .filter(c -> c.category() == CategorySchool.PROGRAMMING)
    .toList();

double revenue = courses.stream().mapToDouble(Course::price).sum();

List<String> uniqueStudents = courses.stream()
    .flatMap(c -> c.students().stream())
    .map(Student::name)
    .distinct()
    .toList();`}</code>
        </pre>
        
    </>
);
