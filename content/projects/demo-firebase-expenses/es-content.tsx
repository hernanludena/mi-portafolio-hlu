import BlogFigure from "@/components/blog-figure";

export const demoFirebaseExpensesDetailEs = (
    <>
        <p>
            <strong>Expenses</strong> es una app Android nativa para llevar control de gastos con
            persistencia en la nube. Stack: <strong>Kotlin</strong>,{" "}
            <strong>Jetpack Compose</strong> (Material 3) y <strong>Firebase Firestore</strong>, con
            arquitectura <strong>MVVM</strong>.
        </p>

        <BlogFigure
            src="/projects/demo-firebase-expenses-ui.jpg"
            alt="Pantalla Registro de Gastos — formulario, total y lista"
            caption="UI principal — descripción, monto, fecha, total y navegación"
            size="phone"
        />

        <BlogFigure
            src="/projects/demo-firebase-expenses-app.jpg"
            alt="App Registro de Gastos en emulador Android"
            caption="Demo en emulador (API 35)"
            size="phone"
        />

        <h2>Qué hace</h2>
        <ul>
            <li><strong>Registro de gastos:</strong> descripción, monto y fecha.</li>
            <li><strong>Historial:</strong> lista de gastos ordenada por fecha.</li>
            <li><strong>Total:</strong> resumen del monto acumulado.</li>
            <li><strong>Filtro por fecha:</strong> consulta de un día concreto.</li>
        </ul>

        <h2>Arquitectura MVVM</h2>
        <ul>
            <li><strong>Model:</strong> entidades de dominio (p. ej. <code>Expense</code> / datos de gasto).</li>
            <li><strong>Repository:</strong> acceso a Firestore (CRUD sobre la colección).</li>
            <li><strong>ViewModel:</strong> orquestación con <code>viewModelScope</code>,{" "}
                <code>StateFlow</code> y corrutinas.</li>
            <li><strong>View:</strong> pantallas Compose (<code>setContent</code>, formularios y{" "}
                <code>LazyColumn</code>).</li>
        </ul>

        <h2>Firebase Firestore</h2>
        <p>
            Cada gasto se guarda en la colección <code>expenses</code> con campos{" "}
            <code>amount</code>, <code>date</code>, <code>description</code> e <code>id</code>.
            El cliente usa el SDK Firebase (<code>firebase-firestore</code> / ktx) y{" "}
            <code>google-services.json</code>.
        </p>
        <BlogFigure
            src="/projects/demo-firebase-expenses-firestore.jpg"
            alt="Consola Firebase — colección expenses en Cloud Firestore"
            caption="Firestore — documento de gasto (amount, date, description)"
        />

        <h2>Stack técnico</h2>
        <ul>
            <li>Kotlin + Android SDK (<code>minSdk 24</code>, <code>targetSdk 35</code>)</li>
            <li>Jetpack Compose + Material 3</li>
            <li>Lifecycle / ViewModel + corrutinas</li>
            <li>Gradle Kotlin DSL (<code>build.gradle.kts</code>)</li>
            <li>Plugin Google Services para Firebase</li>
        </ul>

        <h2>Cómo ejecutarlo</h2>
        <ol>
            <li>Clonar el repo y abrirlo en Android Studio.</li>
            <li>Crear proyecto Firebase, habilitar Firestore y bajar{" "}
                <code>google-services.json</code> a <code>app/</code>.</li>
            <li>Correr en emulador o dispositivo físico.</li>
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
            . Licencia Apache 2.0.
        </p>
    </>
);
