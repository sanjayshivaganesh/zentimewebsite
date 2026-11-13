import LegalLayout from "@/components/LegalLayout";
import { CONTACT_EMAIL } from "@/lib/links";

const SECTIONS = [
  {
    heading: "Acceptance of Terms",
    body: [
      "By accessing or using ZenTime, you agree to be bound by these Terms of Service. If you do not agree, please do not use the product.",
    ],
  },
  {
    heading: "Use of the Service",
    body: [
      "ZenTime grants you a personal, non-transferable right to use the product for planning and productivity. You agree not to misuse the service, attempt to disrupt it, or use it for unlawful purposes.",
    ],
  },
  {
    heading: "Accounts",
    body: [
      "You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account.",
    ],
  },
  {
    heading: "Free & Pro Plans",
    body: [
      "The core of ZenTime is free to use. Paid Pro features may be introduced in the future; pricing and availability will be communicated clearly before any charges apply.",
    ],
  },
  {
    heading: "Third-Party Services",
    body: [
      "ZenTime integrates with services such as Google Calendar and Microsoft Outlook. Your use of those services is also governed by their respective terms and policies.",
    ],
  },
  {
    heading: "Disclaimer & Limitation of Liability",
    body: [
      "ZenTime is provided \u201cas is\u201d without warranties of any kind. To the maximum extent permitted by law, we are not liable for any indirect or consequential damages arising from your use of the service.",
    ],
  },
  {
    heading: "Changes to These Terms",
    body: [
      "We may update these terms from time to time. Continued use of ZenTime after changes take effect constitutes acceptance of the revised terms.",
    ],
  },
  {
    heading: "Contact",
    body: [`Questions about these terms? Email us at ${CONTACT_EMAIL}.`],
  },
];

export default function Terms() {
  return (
    <LegalLayout
      testId="terms-page"
      eyebrow="Legal"
      title="Terms of Service"
      intro="The rules for using ZenTime."
      lastUpdated="October 2026"
      sections={SECTIONS}
    />
  );
}
