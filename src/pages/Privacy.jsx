import LegalLayout from "@/components/LegalLayout";
import { CONTACT_EMAIL } from "@/lib/links";

const SECTIONS = [
  {
    heading: "Overview",
    body: [
      "ZenTime is designed to help you plan and execute your work. We collect the minimum data needed to make the product function and never sell your personal information.",
    ],
  },
  {
    heading: "Information We Collect",
    body: [
      "Account information such as your name and email address when you sign up.",
      "Content you create in ZenTime, including tasks, projects, commitments and focus sessions.",
      "Calendar data you explicitly authorize us to access via Google Calendar, used solely to build and sync your plan.",
    ],
  },
  {
    heading: "How We Use Your Information",
    body: [
      "To provide, maintain and improve ZenTime, build your execution plans, and use authorized calendar data as scheduling context.",
      "To communicate important service updates. We do not use your task or calendar content for advertising.",
    ],
  },
  {
    heading: "Google Calendar Data",
    body: [
      "When you connect Google Calendar, ZenTime accesses your events only to display and schedule them within your workspace. You can disconnect at any time, which revokes that access.",
    ],
  },
  {
    heading: "Data Storage & Security",
    body: [
      "Your data is stored securely and protected with industry-standard measures. Offline caching stores a copy locally on your device to support offline use.",
    ],
  },
  {
    heading: "Your Rights",
    body: [
      "You can access, export or delete your data at any time. Deleting your account permanently removes your content from our systems.",
    ],
  },
  {
    heading: "Contact",
    body: [`Questions about this policy? Email us at ${CONTACT_EMAIL}.`],
  },
];

export default function Privacy() {
  return (
    <LegalLayout
      testId="privacy-page"
      eyebrow="Legal"
      title="Privacy Policy"
      intro="How ZenTime collects, uses and protects your information."
      lastUpdated="December 2025"
      sections={SECTIONS}
    />
  );
}
