import type { ProjectDetailDefinition } from "@/types/project";
import { fastapiImageUploaderDetailEs } from "./es-content";
import { fastapiImageUploaderDetailEn } from "./en-content";

export const fastapiImageUploaderProject: ProjectDetailDefinition = {
    slug: "fastapi-image-uploader",
    image: "/projects/fastapi-image-uploader-thumbnail.png",
    tags: ["Python", "FastAPI", "Next.js", "Supabase", "Storage"],
    urlGithub: "https://github.com/hernanludena/fastapi-image-uploader",
    urlDemo: "",
    locales: {
        es: {
            label: "Open Source",
            title: "FastAPI Image Uploader",
            description:
                "UI Next.js sube imágenes a Supabase Storage vía FastAPI. Multipart upload, URL pública y listado del bucket pictures.",
            metrics: [
                { value: "3", label: "endpoints API" },
                { value: "Next", label: "→ FastAPI" },
                { value: "SB", label: "Storage" },
            ],
        },
        en: {
            label: "Open Source",
            title: "FastAPI Image Uploader",
            description:
                "Next.js UI uploads images to Supabase Storage via FastAPI. Multipart upload, public URL, and pictures bucket listing.",
            metrics: [
                { value: "3", label: "API endpoints" },
                { value: "Next", label: "→ FastAPI" },
                { value: "SB", label: "Storage" },
            ],
        },
    },
    detailLocales: {
        es: {
            title: "FastAPI Image Uploader",
            subtitle: "Next.js → FastAPI → Supabase Storage (bucket pictures)",
            content: fastapiImageUploaderDetailEs,
        },
        en: {
            title: "FastAPI Image Uploader",
            subtitle: "Next.js → FastAPI → Supabase Storage (pictures bucket)",
            content: fastapiImageUploaderDetailEn,
        },
    },
};
