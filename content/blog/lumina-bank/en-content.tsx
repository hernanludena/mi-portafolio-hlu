import BlogClosingQuote from "@/components/blog-closing-quote";
import BlogFigure from "@/components/blog-figure";

export const luminaContentEn = (
    <>
        <p>
            Building software for a bank is very different from building a traditional web
            application. Financial systems must remain available 24/7, protect sensitive customer
            information, process thousands of transactions every second, and continue operating
            even when individual components fail.
        </p>
        <p>
            In this case study I designed the architecture for <strong>Lumina Bank</strong>, a
            fictional digital bank capable of supporting{" "}
            <strong>10 million concurrent users</strong> while maintaining high availability,
            horizontal scalability, and enterprise-grade security.
        </p>

        <blockquote>
            Lumina Bank is an architectural design case study. Based on an enterprise architecture
            exercise; it does not represent a production deployment or real customer data.
        </blockquote>

        <h2>Business challenge</h2>
        <p>
            Lumina Bank planned to launch its digital banking platform nationwide with over 90%
            digital adoption. The solution had to support:
        </p>
        <ul>
            <li>More than <strong>10 million concurrent users</strong></li>
            <li>Mobile and web channels</li>
            <li>Continuous 7×24 operation</li>
            <li><strong>99.8%</strong> service availability</li>
            <li>Secure financial transactions</li>
            <li>Horizontal scalability and disaster recovery</li>
            <li>Proactive monitoring and alerting</li>
        </ul>

        <BlogFigure
            src="/blog/lumina-bank-requirements.png"
            alt="Lumina Bank business challenge: 10M users, 99.8% uptime, 7x24 operation"
            caption="Business Challenge — scale, availability, and continuous operation"
        />

        <h2>Functional requirements</h2>
        <p>The platform manages core banking entities:</p>
        <ul>
            <li>Customers, branches, and accounts (with multiple holders)</li>
            <li>Deposits, withdrawals, and transaction history</li>
        </ul>
        <p>
            Administrative users can create customers, open accounts, activate/deactivate accounts,
            view history, and manage branches.
        </p>

        <h2>Non-functional requirements</h2>

        <h3>1. Scalability</h3>
        <p>The system must handle traffic spikes without affecting performance:</p>
        <ul>
            <li>Stateless services and horizontal scaling</li>
            <li>Auto Scaling and Load Balancing</li>
            <li>Redis Cache and read replicas</li>
            <li>Event-driven architecture with Kafka</li>
        </ul>

        <h3>2. High availability</h3>
        <ul>
            <li>Multiple instances and multi-zone deployment</li>
            <li>Health checks, automatic failover, and rolling deployments</li>
            <li>Contingency site with mirrored architecture</li>
        </ul>
        <p>
            Target availability: <strong>99.8%</strong>
        </p>

        <h3>3. Security</h3>
        <ul>
            <li>OAuth2, JWT, and MFA</li>
            <li>HTTPS, WAF, and OWASP Top 10</li>
            <li>Audit logs, encryption at rest and in transit</li>
            <li>Single session per user</li>
        </ul>

        <BlogFigure
            src="/blog/lumina-bank-security.png"
            alt="Enterprise security strategy with JWT and OAuth2"
            caption="Enterprise Security — OAuth2, JWT, WAF, and distributed audit trail"
        />

        <h2>High-level architecture</h2>
        <p>Cloud-native platform based on independent microservices:</p>

        <pre className="p-4 overflow-x-auto text-sm rounded-xl bg-black/[0.04] dark:bg-white/[0.06] font-mono">
            {`Users → CDN → Load Balancer → API Gateway
  → Authentication / Customer / Account / Transaction Services
  → Kafka Event Bus → Redis Cache → Primary DB → Read Replicas
  → Monitoring Stack`}
        </pre>

        <BlogFigure
            src="/blog/lumina-bank-architecture.png"
            alt="Lumina Bank high-level architecture with Spring Boot microservices, Redis and Kafka"
            caption="High Level Architecture — API Gateway, microservices, and data layer"
        />

        <h2>Scalability strategy</h2>
        <ul>
            <li><strong>Horizontal scaling:</strong> automatic instances during peak traffic.</li>
            <li><strong>Stateless services:</strong> no user session stored in application servers.</li>
            <li><strong>Redis cache:</strong> reduces database load.</li>
            <li><strong>Async processing:</strong> long operations via Kafka events.</li>
            <li><strong>Replication:</strong> reads on replicas; writes on primary.</li>
            <li><strong>Data sharding:</strong> partition by customer ID range.</li>
        </ul>

        <BlogFigure
            src="/blog/lumina-bank-scaling.png"
            alt="Horizontal scaling strategy with microservices and Kafka"
            caption="Horizontal Scaling — auto-scale, sharding, and contingency site"
        />

        <h2>Monitoring and observability</h2>
        <p>Continuous monitoring stack:</p>
        <ul>
            <li>Prometheus, Grafana, OpenTelemetry, and ELK Stack</li>
            <li>Health checks and distributed tracing</li>
            <li>PagerDuty integration for alerts</li>
        </ul>
        <p>
            Key metrics: API response time, CPU/memory, error rate, failed transactions,
            authentication failures, database performance, and concurrent users.
        </p>

        <BlogFigure
            src="/blog/lumina-bank-monitoring.png"
            alt="Prometheus Grafana monitoring dashboard with PagerDuty alerts"
            caption="Monitoring & Observability — distributed telemetry and alerts"
        />

        <h2>Project team</h2>
        <p>Delivering a system at this scale requires specialized roles:</p>
        <ul>
            <li>Software Architect, Backend/Frontend Developers, QA</li>
            <li>DevOps, Security Engineer, DBA</li>
            <li>Product Owner and Scrum Master</li>
        </ul>

        <h2>Success metrics</h2>
        <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr className="border-b border-black/15 dark:border-white/15">
                        <th className="px-3 py-2 text-left">Metric</th>
                        <th className="px-3 py-2 text-left">Target</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2">Availability</td>
                        <td className="px-3 py-2">99.8%</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2">Response time</td>
                        <td className="px-3 py-2">&lt; 300 ms</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2">Failed transactions</td>
                        <td className="px-3 py-2">&lt; 0.1%</td>
                    </tr>
                    <tr className="border-b border-black/10 dark:border-white/10">
                        <td className="px-3 py-2">Authentication success</td>
                        <td className="px-3 py-2">&gt; 99%</td>
                    </tr>
                    <tr>
                        <td className="px-3 py-2">Production deployments</td>
                        <td className="px-3 py-2">100% successful (zero-downtime)</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <h2>Lessons learned</h2>
        <p>
            Designing enterprise banking systems requires much more than implementing business
            functionality. Scalability, availability, security, and observability must be considered
            from the beginning — not as afterthoughts.
        </p>

        <h2>Technologies</h2>
        <p>
            Java, Spring Boot, React, Oracle, Redis, Kafka, Docker, Kubernetes, Azure/AWS, REST,
            OAuth2, JWT, Prometheus, Grafana, OpenTelemetry, ELK, and microservices.
        </p>

        <BlogClosingQuote>
            Enterprise banking is not about CRUD — it is about designing systems that stay correct
            under load, failure, and attack.
        </BlogClosingQuote>
    </>
);
