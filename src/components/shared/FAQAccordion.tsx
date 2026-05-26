"use client";

import { useState } from "react";

type FAQ = {
  question: string;
  answer: string;
};

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="flex flex-col divide-y divide-border">
      {faqs.map((faq, i) => (
        <div key={i} className="py-4">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 text-left"
          >
            <span className="font-sans font-semibold text-sm text-foreground">{faq.question}</span>
            <span className="text-gold text-lg shrink-0">{open === i ? "−" : "+"}</span>
          </button>
          {open === i && (
            <p className="mt-3 font-sans text-sm text-muted leading-relaxed">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}