"use client";

import { useLanguage } from "@/context/LanguageContext";

import aboutID from "@/message/about/id";
import aboutEN from "@/message/about/en";
import aboutBAN from "@/message/about/ban";

import PersonalStatement from "../about/PersonalStatement";
import JourneySection from "../about/JourneySection";
import ApproachSection from "../about/ApproachSection";
import BeyondScreenSection from "../about/BeyondSection";
import ClosingSection from "../about/ClosingSection";

const messages = {
  ID: aboutID,
  EN: aboutEN,
  BAN: aboutBAN,
};

export default function AboutStory() {
  const { lang } = useLanguage();
  const t = messages[lang] ?? messages.ID;

  return (
    <div className="overflow-hidden bg-background text-foreground">
      <PersonalStatement t={t} />
      <JourneySection t={t} />
      <ApproachSection t={t} />
      <BeyondScreenSection t={t} />
      <ClosingSection t={t} />
    </div>
  );
}
