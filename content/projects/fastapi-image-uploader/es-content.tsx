import BlogFigure from "@/components/blog-figure";

export const fastapiImageUploaderDetailEs = (
    <>
        <p>
            Subí imágenes desde una UI <strong>Next.js</strong> a{" "}
            <strong>Supabase Storage</strong> vía backend <strong>FastAPI</strong>. El browser no
            tiene la service-role key — solo la API habla con Supabase.
        </p>

        <BlogFigure
            src="/projects/fastapi-image-uploader-card-original.png"
            alt="Miniatura FastAPI Image Uploader — Next.js, FastAPI, Supabase"
            caption="Vista previa — Next.js → FastAPI → Supabase Storage"
        />

        <h2>Flujo</h2>
        <ol>
            <li>
                Frontend (:3000) — elegí imagen → <strong>Subir</strong> →{" "}
                <code>POST /upload/</code> multipart
            </li>
            <li>
                Backend (:8000) — nombre UUID → upload al bucket público{" "}
                <code>pictures</code> → devolvé <code>file_url</code>
            </li>
            <li>UI muestra preview + URL pública; Dashboard lista objetos del bucket</li>
        </ol>

        <BlogFigure
            src="/projects/fastapi-image-uploader-ui.png"
            alt="UI Next.js de upload con botón Subir, preview y URL Guardado"
            caption="Frontend — Upload to Supabase Storage (localhost:3000)"
        />

        <BlogFigure
            src="/projects/fastapi-image-uploader-supabase.png"
            alt="Dashboard Supabase Storage con bucket público pictures y JPEGs subidos"
            caption="Supabase — bucket público pictures"
        />

        <h2>API</h2>
        <ul>
            <li>
                <code>GET /</code> — health / info de storage
            </li>
            <li>
                <code>POST /upload/</code> — multipart <code>file</code> →{" "}
                <code>{`{ "file_url": "..." }`}</code>
            </li>
            <li>
                <code>GET /files/</code> — listar bucket (opcional <code>?path=</code>)
            </li>
        </ul>
        <p>
            CORS permite <code>http://localhost:3000</code>. Swagger:{" "}
            <code>http://localhost:8000/docs</code>.
        </p>

        <h2>Seguridad</h2>
        <ul>
            <li>
                Keys solo en <code>.env</code> del backend — orden:{" "}
                <code>SUPABASE_KEY</code> → <code>SUPABASE_SERVICE_ROLE_KEY</code> →{" "}
                <code>SUPABASE_ANON_KEY</code>
            </li>
            <li>Preferí service_role / secret; nunca en el frontend</li>
        </ul>

        <h2>Layout</h2>
        <ul>
            <li>
                <code>backend/main.py</code> — FastAPI + supabase-py
            </li>
            <li>
                <code>frontend/app/UploadForm.js</code> — form client (
                <code>&quot;use client&quot;</code>)
            </li>
            <li>
                <code>frontend/app/page.js</code> / <code>layout.js</code> — shell App Router
            </li>
        </ul>

        <h2>Stack</h2>
        <ul>
            <li>FastAPI · Uvicorn · python-multipart · python-dotenv · supabase-py</li>
            <li>Next.js 16 (App Router) · React 19</li>
            <li>Supabase Storage (bucket público)</li>
        </ul>

        <h2>Cómo ejecutarlo</h2>
        <ol>
            <li>
                <code>cd backend && cp .env_template .env</code> — URL + key
            </li>
            <li>
                <code>python3 -m venv venv && source venv/bin/activate && pip install -r requirements.txt</code>
            </li>
            <li>
                <code>uvicorn main:app --reload --port 8000</code>
            </li>
            <li>
                <code>cd frontend && npm install && npm run dev</code> →{" "}
                <code>http://localhost:3000</code>
            </li>
        </ol>

        <p>
            Repo:{" "}
            <a
                href="https://github.com/hernanludena/fastapi-image-uploader"
                target="_blank"
                rel="noopener noreferrer"
            >
                hernanludena/fastapi-image-uploader
            </a>
            .
        </p>
    </>
);
