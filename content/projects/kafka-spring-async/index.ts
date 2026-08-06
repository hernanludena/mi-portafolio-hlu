import type { ProjectDetailDefinition } from "@/types/project";
import { kafkaSpringAsyncDetailEs } from "./es-content";
import { kafkaSpringAsyncDetailEn } from "./en-content";

export const kafkaSpringAsyncProject: ProjectDetailDefinition = {
    slug: "kafka-spring-async",
    image: "/projects/kafka-spring-async-thumbnail.png",
    tags: ["Java 17", "Spring Boot", "Apache Kafka", "Spring Cloud Stream", "Docker"],
    urlGithub: "https://github.com/hernanludena/kafka-spring-async",
    urlDemo: "",
    locales: {
        es: {
            label: "Open Source",
            title: "Kafka Spring Async",
            description:
                "Demo de streaming async: producer REST + KafkaTemplate y consumer con Spring Cloud Stream. Eventos de rider (location/status), particiones sticky y escalado horizontal.",
            metrics: [
                { value: "2", label: "topics · 3 parts" },
                { value: "202", label: "Accepted async" },
                { value: "Stream", label: "functional beans" },
            ],
        },
        en: {
            label: "Open Source",
            title: "Kafka Spring Async",
            description:
                "Async streaming demo: REST producer + KafkaTemplate and Spring Cloud Stream consumer. Rider events (location/status), sticky partitions, and horizontal scaling.",
            metrics: [
                { value: "2", label: "topics · 3 parts" },
                { value: "202", label: "Accepted async" },
                { value: "Stream", label: "functional beans" },
            ],
        },
    },
    detailLocales: {
        es: {
            title: "Kafka Spring Async",
            subtitle: "Streaming async con Spring Boot 3.3, Kafka y Spring Cloud Stream",
            content: kafkaSpringAsyncDetailEs,
        },
        en: {
            title: "Kafka Spring Async",
            subtitle: "Async streaming with Spring Boot 3.3, Kafka, and Spring Cloud Stream",
            content: kafkaSpringAsyncDetailEn,
        },
    },
};
