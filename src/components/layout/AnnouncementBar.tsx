export default function AnnouncementBar() {
  return (
    <div className="w-full bg-surface text-muted text-xs sm:text-sm py-2 px-4 text-center font-sans border-b border-border">
      Free delivery above ₹499 · 24×7 Emergency Vet:{" "}
      <a href="tel:+919831392669" className="font-semibold text-gold underline underline-offset-2 hover:text-gold-light transition-colors">+91 98313 92669</a>
      {" "}· Bhowanipore, Kolkata
    </div>
  );
}