import {
  DollarSign,
  FlaskConical,
  LucideIcon,
  ShieldCheck,
  TruckElectric,
} from "lucide-react";

const features: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: ShieldCheck,
    title: "جودة لا تُضاهى",
    description:
      "نختار لك منتجاتنا بعناية فائقة من مصادر طبيعية موثوقة خالية تماماً من أي إضافات صناعية أو مواد حافظة",
  },
  {
    icon: FlaskConical,
    title: "خبرة وتخصص",
    description: "فريقنا من الخبراء يضمن لك منتجات مميزة بمواصفات عالية الجودة",
  },
  {
    icon: DollarSign,
    title: "أسعار تنافسية",
    description: "نقدم لك القيمة الحقيقية بأسعار مناسبة للجميع",
  },
  {
    icon: TruckElectric,
    title: "توصيل سريع وآمن",
    description: "نضمن وصول طلبك بأفضل حالة وفي أسرع وقت ممكن",
  },
];
export default features;
