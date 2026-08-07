import BlogFigure from "@/components/blog-figure";

export const fastapiImageUploaderDetailEn = (
    <>
        <p>
            Upload images from a <strong>Next.js</strong> UI to{" "}
            <strong>Supabase Storage</strong> through a <strong>FastAPI</strong> backend. The
            browser never holds the service-role key — only the API talks to Supabase.
        </p>

        <BlogFigure
            src="/projects/fastapi-image-uploader-thumbnail-original.png"
            alt="FastAPI Image Uploader thumbnail — Next.js, FastAPI, Supabase"
            caption="Preview — Next.js → FastAPI → Supabase Storage"
        />

        <h2>Flow</h2>
        <ol>
            <li>
                Frontend (:3000) — pick image → <strong>Subir</strong> →{" "}
                <code>POST /upload/</code> multipart
            </li>
            <li>
                Backend (:8000) — UUID filename → upload to public bucket{" "}
                <code>pictures</code> → return <code>file_url</code>
            </li>
            <li>UI shows preview + public URL; Dashboard lists objects in the bucket</li>
        </ol>

        <BlogFigure
            src="/projects/fastapi-image-uploader-ui.png"
            alt="Next.js upload UI with Subir button, preview, and Guardado URL"
            caption="Frontend — Upload to Supabase Storage (localhost:3000)"
        />

        <BlogFigure
            src="/projects/fastapi-image-uploader-supabase.png"
            alt="Supabase Storage dashboard showing public pictures bucket with uploaded JPEGs"
            caption="Supabase — public bucket pictures"
        />

        <h2>API</h2>
        <ul>
            <li>
                <code>GET /</code> — health / storage info
            </li>
            <li>
                <code>POST /upload/</code> — multipart <code>file</code> →{" "}
                <code>{`{ "file_url": "..." }`}</code>
            </li>
            <li>
                <code>GET /files/</code> — list bucket (optional <code>?path=</code>)
            </li>
        </ul>
        <p>
            CORS allows <code>http://localhost:3000</code>. Swagger:{" "}
            <code>http://localhost:8000/docs</code>.
        </p>

        <h2>Security</h2>
        <ul>
            <li>
                Keys only in backend <code>.env</code> — resolve order:{" "}
                <code>SUPABASE_KEY</code> → <code>SUPABASE_SERVICE_ROLE_KEY</code> →{" "}
                <code>SUPABASE_ANON_KEY</code>
            </li>
            <li>Prefer service_role / secret; never expose it in the frontend</li>
        </ul>

        <h2>Layout</h2>
        <ul>
            <li>
                <code>backend/main.py</code> — FastAPI + supabase-py
            </li>
            <li>
                <code>frontend/app/UploadForm.js</code> — client form (<code>&quot;use client&quot;</code>)
            </li>
            <li>
                <code>frontend/app/page.js</code> / <code>layout.js</code> — App Router shell
            </li>
        </ul>

        <h2>Stack</h2>
        <ul>
            <li>FastAPI · Uvicorn · python-multipart · python-dotenv · supabase-py</li>
            <li>Next.js 16 (App Router) · React 19</li>
            <li>Supabase Storage (public bucket)</li>
        </ul>

        <h2>How to run</h2>
        <ol>
            <li>
                <code>cd backend && cp .env_template .env</code> — set URL + key
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
