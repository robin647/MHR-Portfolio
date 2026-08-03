// ─────────────────────────────────────────────────────────
// EDIT THIS FILE to update every social / contact link.
// Set `enabled: false` to hide a link everywhere it's used.
// ─────────────────────────────────────────────────────────

import {
  Github,
  Linkedin,
  Facebook,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  type LucideIcon,
} from "lucide-react";

export type SocialLink = {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
  enabled: boolean;
};

export const socialLinks: SocialLink[] = [
  {
    id: "fiverr",
    label: "Fiverr",
    href: "https://www.fiverr.com/your-username",
    icon: MessageCircle,
    enabled: true,
  },
  {
    id: "upwork",
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/your-profile",
    icon: MessageCircle,
    enabled: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/your-profile",
    icon: Linkedin,
    enabled: true,
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/robin647",
    icon: Github,
    enabled: true,
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://facebook.com/your-profile",
    icon: Facebook,
    enabled: true,
  },
  {
    id: "email",
    label: "Gmail",
    href: "mailto:mhrobin471@gmail.com",
    icon: Mail,
    enabled: true,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/01781879276",
    icon: MessageCircle,
    enabled: true,
  },
  {
    id: "telegram",
    label: "Telegram",
    href: "https://t.me/your-username",
    icon: Send,
    enabled: true,
  },
];

export const contactDetails = {
  email: { label: "mhrobin471@gmail.com", href: "mhrobin471@gmail.com", icon: Mail },
  phone: { label: "01781879276", href: "tel:01781879276", icon: Phone },
  location: { label: "Dhaka, Bangladesh", href: "#", icon: MapPin },
};

// EmailJS — create a free account at emailjs.com and paste your IDs here.
export const emailjsConfig = {
  serviceId: "YOUR_EMAILJS_SERVICE_ID",
  templateId: "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: "YOUR_EMAILJS_PUBLIC_KEY",
};
