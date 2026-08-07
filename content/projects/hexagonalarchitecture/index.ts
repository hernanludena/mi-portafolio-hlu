import type { ProjectDetailDefinition } from "@/types/project";
import { hexagonalArchitectureDetailEs } from "./es-content";
import { hexagonalArchitectureDetailEn } from "./en-content";

export const hexagonalArchitectureProject: ProjectDetailDefinition = {
    slug: "hexagonalarchitecture",
    image: "/projects/hexagonalarchitecture-thumbnail.png",
    tags: ["Java 21", "Spring Boot", "Hexagonal", "Apache Kafka", "Avro", "Schema Registry"],
    urlGithub: "https://github.com/hernanludena/hexagonalarchitecture",
    urlDemo: "",
    locales: {
        es: {
            label: "Open Source",
            title: "Hexagonal Architecture",
            description:
                "Spring Boot con ports & adapters: Domain → Application → Infrastructure. Kafka + Avro + Schema Registry; producer/consumer vía puertos hexagonales.",
            metrics: [
                { value: "3", label: "capas hex" },
                { value: "2", label: "topics Kafka" },
                { value: "Avro", label: "+ Schema Reg." },
            ],
        },
        en: {
            label: "Open Source",
            title: "Hexagonal Architecture",
            description:
                "Spring Boot with ports & adapters: Domain → Application → Infrastructure. Kafka + Avro + Schema Registry; produce/consume via hexagonal ports.",
            metrics: [
                { value: "3", label: "hex layers" },
                { value: "2", label: "Kafka topics" },
                { value: "Avro", label: "+ Schema Reg." },
            ],
        },
    },
    detailLocales: {
        es: {
            title: "Hexagonal Architecture",
            subtitle: "Ports & adapters + Kafka Avro con Spring Boot 3.5 y Java 21",
            content: hexagonalArchitectureDetailEs,
        },
        en: {
            title: "Hexagonal Architecture",
            subtitle: "Ports & adapters + Kafka Avro with Spring Boot 3.5 and Java 21",
            content: hexagonalArchitectureDetailEn,
        },
    },
};
