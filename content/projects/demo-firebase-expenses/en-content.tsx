import BlogFigure from "@/components/blog-figure";

export const demoFirebaseExpensesDetailEn = (
    <>
        <p>
            <strong>Expenses</strong> is a native Android app for tracking spending with cloud
            persistence. Stack: <strong>Kotlin</strong>, <strong>Jetpack Compose</strong> (Material 3),
            and <strong>Firebase Firestore</strong>, under an <strong>MVVM</strong> architecture.
        </p>

        <BlogFigure
            src="/projects/demo-firebase-expenses-ui.jpg"
            alt="Expense Tracker screen — form, total, and list"
            caption="Main UI — description, amount, date, total, and bottom nav"
            size="phone"
        />

        <BlogFigure
            src="/projects/demo-firebase-expenses-app.jpg"
            alt="Expense Tracker app on Android emulator"
            caption="Demo on emulator (API 35)"
            size="phone"
        />

        <h2>Features</h2>
        <ul>
            <li><strong>Expense logging:</strong> description, amount, and date.</li>
            <li><strong>History:</strong> full list sorted by date.</li>
            <li><strong>Totals:</strong> summary of amount spent.</li>
            <li><strong>Date filter:</strong> expenses for a specific day.</li>
        </ul>

        <h2>MVVM architecture</h2>
        <ul>
            <li><strong>Model:</strong> domain entities (e.g. expense data).</li>
            <li><strong>Repository:</strong> Firestore access (CRUD on the collection).</li>
            <li><strong>ViewModel:</strong> orchestration with <code>viewModelScope</code>,{" "}
                <code>StateFlow</code>, and coroutines.</li>
            <li><strong>View:</strong> Compose screens (<code>setContent</code>, forms, and{" "}
                <code>LazyColumn</code>).</li>
        </ul>

        <h2>Firebase Firestore</h2>
        <p>
            Each expense is stored in the <code>expenses</code> collection with{" "}
            <code>amount</code>, <code>date</code>, <code>description</code>, and <code>id</code>.
            Client uses the Firebase SDK (<code>firebase-firestore</code> / ktx) and{" "}
            <code>google-services.json</code>.
        </p>
        <BlogFigure
            src="/projects/demo-firebase-expenses-firestore.jpg"
            alt="Firebase Console — expenses collection in Cloud Firestore"
            caption="Firestore — expense document (amount, date, description)"
        />

        <h2>Tech stack</h2>
        <ul>
            <li>Kotlin + Android SDK (<code>minSdk 24</code>, <code>targetSdk 35</code>)</li>
            <li>Jetpack Compose + Material 3</li>
            <li>Lifecycle / ViewModel + coroutines</li>
            <li>Gradle Kotlin DSL (<code>build.gradle.kts</code>)</li>
            <li>Google Services plugin for Firebase</li>
        </ul>

        <h2>How to run</h2>
        <ol>
            <li>Clone the repo and open it in Android Studio.</li>
            <li>Create a Firebase project, enable Firestore, and place{" "}
                <code>google-services.json</code> under <code>app/</code>.</li>
            <li>Run on an emulator or physical device.</li>
        </ol>

        <p>
            Repo:{" "}
            <a
                href="https://github.com/hernanludena/DemoFirebaseExpenses"
                target="_blank"
                rel="noopener noreferrer"
            >
                hernanludena/DemoFirebaseExpenses
            </a>
            . Apache 2.0 license.
        </p>
    </>
);
