"use client"

import { useState } from "react";
import ContainerPage from "@/components/container-page";
import TransitionPage from "@/components/transition-page";
import { personalData } from "@/data";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";

const ContactPage = () => {
    const { t } = useLanguage();
    const [phoneRevealed, setPhoneRevealed] = useState(false);

    // Teléfono ofuscado: se muestra con puntos hasta que el usuario hace clic
    const maskedPhone = personalData.phone.slice(0, 5) + personalData.phone.slice(5).replace(/\d/g, "•");
    const phoneTel = `tel:${personalData.phone.replace(/\s+/g, "")}`;

    const contactItems = [
        {
            id: "email",
            icon: <Mail size={22} />,
            label: t("contact.email"),
            value: personalData.email,
            href: `mailto:${personalData.email}`,
        },
        {
            id: "linkedin",
            icon: <Linkedin size={22} />,
            label: "LinkedIn",
            value: "in/hernanludena",
            href: personalData.linkedin,
        },
        {
            id: "location",
            icon: <MapPin size={22} />,
            label: t("contact.location"),
            value: personalData.location,
            href: null,
        },
    ];

    const card = (icon: React.ReactNode, label: string, value: React.ReactNode) => (
        <div className="flex items-center gap-4 p-4 transition-all border rounded-xl border-black/10 bg-black/[0.03] dark:border-white/15 dark:bg-white/5 hover:border-secondary">
            <span className="flex items-center justify-center w-11 h-11 rounded-lg shrink-0 bg-secondary/15 text-secondary">
                {icon}
            </span>
            <div className="min-w-0">
                <p className="text-xs uppercase tracking-wide opacity-60">{label}</p>
                <p className="font-medium truncate">{value}</p>
            </div>
        </div>
    );

    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <h1 className="text-3xl leading-tight text-center md:text-left md:text-5xl">
                    {t("contact.title1")} <span className="font-bold text-secondary">{t("contact.title2")}</span>
                </h1>
                <p className="mt-4 mb-10 opacity-80 max-w-2xl">
                    {t("contact.subtitle")}
                </p>

                {/* Datos de contacto */}
                <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
                    {/* Email */}
                    <Link href={contactItems[0].href!} className="block">
                        {card(contactItems[0].icon, contactItems[0].label, contactItems[0].value)}
                    </Link>

                    {/* Teléfono (ofuscado, clic para mostrar) */}
                    {phoneRevealed ? (
                        <Link href={phoneTel} className="block">
                            {card(<Phone size={22} />, t("contact.phone"), personalData.phone)}
                        </Link>
                    ) : (
                        <button
                            type="button"
                            onClick={() => setPhoneRevealed(true)}
                            className="block w-full text-left"
                            aria-label={t("contact.showphone")}
                        >
                            {card(
                                <Phone size={22} />,
                                t("contact.phone"),
                                <span className="flex items-center gap-2">
                                    <span className="tracking-widest select-none">{maskedPhone}</span>
                                    <span className="text-xs text-secondary">{t("contact.showphone")}</span>
                                </span>
                            )}
                        </button>
                    )}

                    {/* LinkedIn */}
                    <Link href={contactItems[1].href!} target="_blank" className="block">
                        {card(contactItems[1].icon, contactItems[1].label, contactItems[1].value)}
                    </Link>

                    {/* Ubicación */}
                    <div>{card(contactItems[2].icon, contactItems[2].label, contactItems[2].value)}</div>
                </div>
            </ContainerPage>
        </>
    );
}

export default ContactPage;
