export const onlineLearningStreamsDetailEn = (
    <>
        <p>Online learning platform with <code>Course</code> and <code>Student</code> records.</p>
        <h2>Statement</h2>
        <ul><li>PROGRAMMING courses</li><li>Total revenue</li><li>Unique students (flatMap)</li><li>Completed lessons</li><li>Most popular course</li><li>Average price by category</li></ul>
        <h2>Example</h2>
        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Java Masterclass (PROGRAMMING, 120), UX Fundamentals (DESIGN, 90)`}
        </pre>
        <h2>Approach</h2>
        <p><code>filter</code> by category, <code>flatMap</code> for students, <code>distinct</code>, <code>maxBy</code> by list size.</p>
        <h2>Complexity</h2>
        <ul>
            <li><strong>Time:</strong> <code>O(n)</code></li>
            <li><strong>Space:</strong> <code>O(n)</code></li>
        </ul>
        <h2>Java solution</h2>
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
