import Image from "next/image";
import Link from "next/link";

type ServiceSectionProps = {
  number: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
  id?: string;
};

export default function ServiceSection({
  number,
  title,
  description,
  bullets,
  image,
  imageAlt,
  reverse = false,
  id,
}: ServiceSectionProps) {
    return (
        <div id={id} className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-12 items-center py-10 md:py-14 border-b border-border last:border-0`}>

        {/* Image */}
        <div className="w-full md:w-1/2 shrink-0">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
            <Image src={image} alt={imageAlt} fill className="object-cover" />
            </div>
        </div>

        {/* Content */}
        <div className="w-full min-w-0 md:w-1/2 flex flex-col gap-5">
            <span className="font-serif text-5xl text-gold/20 font-bold leading-none">{number}</span>
            <h2 className="font-serif text-2xl md:text-3xl text-foreground leading-snug -mt-3 break-words">
            {title}
            </h2>
            <p className="font-sans text-sm text-muted leading-relaxed break-words">{description}</p>
            <ul className="flex flex-col gap-2">
            {bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2 text-sm font-sans text-foreground">
                <span className="text-gold mt-0.5 shrink-0">✦</span>
                <span className="break-words min-w-0">{bullet}</span>
                </li>
            ))}
            </ul>
        </div>

        </div>
    );
}