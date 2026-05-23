export default function NewsletterSection() {
  return (
    <section className="w-full bg-surface border-t border-border py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center gap-6 max-w-xl">

        {/* Header */}
        <div>
          <p className="text-xs font-sans font-semibold text-gold uppercase tracking-widest mb-2">
            Stay Connected
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-foreground">
            For the <em className="text-gold not-italic italic">devoted</em> pet parent
          </h2>
          <p className="mt-3 text-sm text-muted font-sans leading-relaxed">
            Vet tips, new arrivals, and exclusive offers — delivered gently, once a week. No noise.
          </p>
        </div>

        {/* Form */}
        <div className="flex w-full gap-2">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 bg-white border border-border rounded-md px-4 py-2.5 text-sm font-sans text-foreground placeholder:text-muted focus:outline-none focus:border-gold transition-colors"
          />
          <button className="bg-gold text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-gold-light transition-colors shrink-0">
            Subscribe
          </button>
        </div>

        <p className="text-xs text-muted font-sans">
          🔒 No spam, ever. Unsubscribe anytime.
        </p>

      </div>
    </section>
  );
}