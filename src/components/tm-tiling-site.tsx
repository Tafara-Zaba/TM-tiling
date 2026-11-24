import { useEffect, useState, type FormEvent } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  BUSINESS_NAME,
  GALLERY_CATEGORIES,
  GALLERY_PHOTOS,
  HERO_SLIDES,
  PHOTO_URLS,
  SERVICES,
  WHATSAPP_MESSAGES,
  buildQuoteMessage,
  photoUrl,
  whatsappUrl,
  type GalleryPhoto,
} from "@/lib/tm-tiling-content";

function Logo() {
  return (
    <a className="tm-logo" href="#top" aria-label="TM Tiling Specialists — back to top">
      <span className="tm-logo-mark">TM</span>
      <span>TILING SPECIALISTS</span>
    </a>
  );
}

function WhatsAppButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Button asChild variant="ghost" className={`tm-button tm-button--whatsapp ${className}`}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </Button>
  );
}

function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="tm-section-heading tm-reveal">
      <div className="tm-eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="tm-header">
      <div className="tm-wrap tm-header-inner">
        <Logo />
        <nav className="tm-nav" aria-label="Main navigation">
          <a className="tm-nav-link" href="#services">Services</a>
          <a className="tm-nav-link" href="#work">Our work</a>
          <a className="tm-nav-link" href="#process">Process</a>
          <a className="tm-nav-link" href="#faq">FAQ</a>
          <WhatsAppButton href={whatsappUrl(WHATSAPP_MESSAGES.general)} className="tm-nav-cta">
            WhatsApp
          </WhatsAppButton>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  const [slideIndex, setSlideIndex] = useState(0);
  const slideNumber = HERO_SLIDES[slideIndex] ?? HERO_SLIDES[0] ?? 0;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = window.setInterval(() => {
      setSlideIndex((current) => (current + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="tm-hero" id="top" aria-labelledby="site-title">
      <img
        className="tm-hero-image"
        key={slideNumber}
        src={photoUrl(slideNumber)}
        alt="TM Tiling Specialists home renovation project"
        fetchPriority="high"
      />
      <div className="tm-hero-shade" aria-hidden="true" />
      <span className="tm-hero-bar tm-hero-bar--top" aria-hidden="true" />
      <span className="tm-hero-bar tm-hero-bar--bottom" aria-hidden="true" />
      <div className="tm-wrap tm-hero-content">
        <div className="tm-eyebrow">Cape Town · Home Renovations</div>
        <h1 id="site-title">
          TRANSFORMING SPACES. <em>ELEVATING HOMES.</em>
        </h1>
        <p>
          Professional home renovation solutions in Cape Town and surrounding areas. From
          beautiful tiling to complete property improvements, we bring quality workmanship and
          attention to every detail.
        </p>
        <div className="tm-button-row">
          <WhatsAppButton href={whatsappUrl(WHATSAPP_MESSAGES.quotation)}>
            Request a free quotation
          </WhatsAppButton>
          <Button asChild variant="ghost" className="tm-button tm-button--hero-outline">
            <a href="#services">Explore our services</a>
          </Button>
        </div>
        <small>
          Owner-led. Clear communication. Quotations discussed directly with you on WhatsApp.
        </small>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="tm-section" id="why">
      <div className="tm-wrap tm-two-column">
        <div className="tm-section-heading tm-reveal">
          <div className="tm-eyebrow">Why TM Tiling Specialists</div>
          <h2>Renovations without the regret</h2>
          <p>
            Most homeowners have a story about a contractor who disappeared, cut corners or left
            a finish they couldn’t live with. We built our approach around the opposite: showing
            up, communicating clearly and getting the details right.
          </p>
        </div>
        <div className="tm-why-list tm-reveal">
          <div>
            <h3>Workmanship you can see</h3>
            <p>Level floors, straight grout lines and clean edges. The small details are what make a space feel premium.</p>
          </div>
          <div>
            <h3>One team, many services</h3>
            <p>From tiling and bathrooms to paving and waterproofing, you don’t need to coordinate several contractors.</p>
          </div>
          <div>
            <h3>Clear communication</h3>
            <p>Talk to us directly on WhatsApp. Send photos, ask questions and get a straightforward response.</p>
          </div>
          <div>
            <h3>Work that meets what we agreed</h3>
            <p>We are committed to delivering the finish you were quoted for, across Cape Town and surrounding areas.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="tm-section tm-section--alternate" id="services">
      <div className="tm-wrap">
        <SectionHeading eyebrow="What we do" title="Our Services">
          Tap enquire on any service and WhatsApp opens with your message ready to send.
        </SectionHeading>
        <div className="tm-service-grid">
          {SERVICES.map((service) => (
            <article className="tm-service-card tm-reveal" key={service.name}>
              <div className={`tm-service-media${service.photoIndex === null ? " tm-service-media--placeholder" : ""}`}>
                {service.photoIndex === null ? (
                  <span>{service.name}</span>
                ) : (
                  <img src={photoUrl(service.photoIndex)} alt={service.name} loading="lazy" />
                )}
                {service.illustrative ? <span className="tm-image-note">Illustrative image</span> : null}
              </div>
              <div className="tm-service-copy">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <div className="tm-service-benefit">{service.benefit}</div>
                <WhatsAppButton
                  href={whatsappUrl(`Hello TM Tiling Specialists. ${service.enquiry}`)}
                  className="tm-service-cta"
                >
                  Enquire on WhatsApp
                </WhatsAppButton>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function RenovationChallenges() {
  return (
    <section className="tm-section tm-problem-section">
      <div className="tm-wrap">
        <SectionHeading eyebrow="The problem. The solution." title="Renovating shouldn’t feel risky" />
        <div className="tm-problem-grid tm-reveal">
          <div>
            <b>Unreliable contractors</b>
            <span>We keep you informed from the first message to the final clean-up.</span>
          </div>
          <div>
            <b>Poor workmanship</b>
            <span>Careful preparation and neat finishing, because good tiling starts under the surface.</span>
          </div>
          <div>
            <b>Disappointing results</b>
            <span>Look through our work, tell us your vision and we’ll discuss what’s possible before you commit.</span>
          </div>
        </div>
        <p className="tm-planning-note tm-reveal">
          <WhatsAppButton href={whatsappUrl(WHATSAPP_MESSAGES.quotation)}>
            Start your project today
          </WhatsAppButton>
          <span>Planning early gives you more time to choose finishes and agree on a start date.</span>
        </p>
      </div>
    </section>
  );
}

function WorkGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxPhoto, setLightboxPhoto] = useState<GalleryPhoto | null>(null);
  const visiblePhotos = GALLERY_PHOTOS.filter(
    (photo) => activeCategory === "All" || photo.category === activeCategory,
  );

  return (
    <section className="tm-section" id="work">
      <div className="tm-wrap">
        <SectionHeading eyebrow="Real projects by TM Tiling Specialists" title="OUR WORK. YOUR INSPIRATION.">
          Tap any image to enlarge. Photos under Project Inspiration are illustrative examples of
          services we can quote for, not our completed projects.
        </SectionHeading>
        <div className="tm-filter-list" role="group" aria-label="Filter project photos">
          {GALLERY_CATEGORIES.map((category) => (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className={`tm-filter${activeCategory === category ? " tm-filter--active" : ""}`}
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              key={category}
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="tm-gallery">
          {visiblePhotos.map((photo) => {
            const alt =
              photo.category === "Project Inspiration"
                ? `${photo.label} (illustrative image)`
                : `${photo.label} by TM Tiling Specialists`;
            return (
              <figure key={`${photo.category}-${photo.label}`}>
                <Button
                  asChild
                  type="button"
                  variant="ghost"
                  className="tm-gallery-trigger"
                  aria-label={`Enlarge ${photo.label}`}
                >
                  <button type="button" onClick={() => setLightboxPhoto(photo)}>
                    <img src={photoUrl(photo.photoIndex)} alt={alt} loading="lazy" />
                    <span className="tm-gallery-caption">{photo.label}</span>
                  </button>
                </Button>
              </figure>
            );
          })}
        </div>
      </div>
      <Dialog
        open={lightboxPhoto !== null}
        onOpenChange={(open) => {
          if (!open) setLightboxPhoto(null);
        }}
      >
        <DialogContent className="tm-lightbox-content">
          <DialogTitle className="sr-only">Enlarged project photo</DialogTitle>
          {lightboxPhoto ? (
            <img
              src={photoUrl(lightboxPhoto.photoIndex)}
              alt={lightboxPhoto.label}
              onClick={() => setLightboxPhoto(null)}
            />
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function Process() {
  const steps = [
    ["MAKE AN ENQUIRY", "Contact us through WhatsApp."],
    ["DISCUSS YOUR PROJECT", "Tell us about your renovation requirements."],
    ["RECEIVE A QUOTATION", "Discuss the proposed work and pricing."],
    ["GET STARTED", "Proceed with the agreed renovation project."],
  ];

  return (
    <section className="tm-section tm-section--alternate" id="process">
      <div className="tm-wrap">
        <SectionHeading eyebrow="Simple from start to finish" title="How Our Process Works" />
        <div className="tm-steps tm-reveal">
          {steps.map(([title, description], index) => (
            <div className="tm-step" key={title}>
              <i>{index + 1}</i>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="tm-section">
      <div className="tm-wrap">
        <SectionHeading eyebrow="Testimonials" title="What Our Customers Say">
          Genuine customer reviews will appear here soon.
        </SectionHeading>
        <div className="tm-testimonial-grid tm-reveal">
          {[1, 2, 3].map((item) => (
            <div className="tm-testimonial" key={item}>
              <p>“Your review could be featured here.”</p>
              <span>Customer name · Suburb</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteSection() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = buildQuoteMessage({
      name: String(formData.get("name") ?? ""),
      contactNumber: String(formData.get("phone") ?? ""),
      service: String(formData.get("service") ?? ""),
      location: String(formData.get("location") ?? ""),
      description: String(formData.get("description") ?? ""),
    });
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  };

  return (
    <section className="tm-section tm-section--alternate" id="quote">
      <div className="tm-wrap tm-two-column tm-quote-layout">
        <div className="tm-section-heading tm-reveal">
          <div className="tm-eyebrow">Free quotation</div>
          <h2>Tell us about your project</h2>
          <p>
            Complete the form and your details will be placed in a WhatsApp message to us, ready
            for you to send. You can attach photos of the space in the chat.
          </p>
          <p className="tm-contact-details">
            <b>WhatsApp:</b> 079 099 7559<br />
            <b>Area:</b> Cape Town and surrounding areas<br />
            <b>Owner:</b> Timothy Mupaso
          </p>
        </div>
        <form className="tm-quote-form tm-reveal" onSubmit={handleSubmit}>
          <div className="tm-form-field">
            <Label htmlFor="quote-name">Your name</Label>
            <Input id="quote-name" name="name" autoComplete="name" required className="tm-field" />
          </div>
          <div className="tm-form-field">
            <Label htmlFor="quote-phone">Contact number</Label>
            <Input
              id="quote-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              className="tm-field"
            />
          </div>
          <div className="tm-form-field">
            <Label htmlFor="quote-service">Service required</Label>
            <select id="quote-service" name="service" className="tm-field" defaultValue={SERVICES[0]?.name}>
              {SERVICES.map((service) => <option key={service.name}>{service.name}</option>)}
              <option>Other</option>
            </select>
          </div>
          <div className="tm-form-field">
            <Label htmlFor="quote-location">Project location</Label>
            <Input
              id="quote-location"
              name="location"
              placeholder="Suburb or area"
              required
              className="tm-field"
            />
          </div>
          <div className="tm-form-field">
            <Label htmlFor="quote-description">Brief project description</Label>
            <Textarea id="quote-description" name="description" rows={3} className="tm-field" />
          </div>
          <Button type="submit" variant="ghost" className="tm-button tm-button--whatsapp tm-submit-button">
            <MessageCircle aria-hidden="true" />
            Submit enquiry via WhatsApp
          </Button>
        </form>
      </div>
    </section>
  );
}

function FrequentlyAskedQuestions() {
  return (
    <section className="tm-section" id="faq">
      <div className="tm-wrap tm-faq-wrap">
        <SectionHeading eyebrow="Good to know" title="Frequently Asked Questions" />
        <details>
          <summary>Which areas do you service?</summary>
          <p>We serve Cape Town, Western Cape, and surrounding areas. Message us your location to confirm.</p>
        </details>
        <details>
          <summary>What renovation services do you offer?</summary>
          <p>
            Wall and floor tiling, bathroom and kitchen renovations, painting, vinyl and wooden
            flooring, ceilings, building and construction, plumbing, paving, air conditioning
            installations, concrete and epoxy flooring and waterproofing.
          </p>
        </details>
        <details>
          <summary>How do I request a quotation?</summary>
          <p>Tap any “Request a quotation” button or use the form on this page. WhatsApp will open with your message ready to send.</p>
        </details>
        <details>
          <summary>Can I enquire about multiple services?</summary>
          <p>Yes. Mention everything you need in one message, for example a bathroom renovation together with new paving.</p>
        </details>
        <details>
          <summary>Do you undertake bathroom renovations?</summary>
          <p>Yes. This includes wall and floor tiling, showers, feature walls and shower niches.</p>
        </details>
        <details>
          <summary>How can I send photographs of my requirements?</summary>
          <p>After WhatsApp opens, tap the attachment icon to add photos or measurements to your message.</p>
        </details>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="tm-footer">
      <div className="tm-wrap">
        <div className="tm-footer-grid">
          <div>
            <div className="tm-footer-logo"><Logo /></div>
            <p>
              TM Tiling Specialists<br />
              Cape Town and surrounding areas<br />
              WhatsApp: 079 099 7559
            </p>
            <WhatsAppButton href={whatsappUrl(WHATSAPP_MESSAGES.general)}>
              Chat on WhatsApp
            </WhatsAppButton>
          </div>
          <div>
            <h3>Quick links</h3>
            <a href="#why">Why choose us</a>
            <a href="#work">Our work</a>
            <a href="#process">Process</a>
            <a href="#quote">Free quotation</a>
            <a href="#faq">FAQ</a>
          </div>
          <div>
            <h3>Services</h3>
            <a href="#services">Tiling &amp; bathrooms</a>
            <a href="#services">Kitchens &amp; flooring</a>
            <a href="#services">Paving &amp; construction</a>
            <a href="#services">Waterproofing &amp; more</a>
          </div>
        </div>
        <div className="tm-copyright">© 2026 TM Tiling Specialists. All rights reserved.</div>
      </div>
    </footer>
  );
}

function useRevealAnimations() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(".tm-reveal");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }
    if (!("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);
}

function SiteStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: BUSINESS_NAME,
    telephone: "+27790997559",
    areaServed: "Cape Town, Western Cape, South Africa",
    founder: { "@type": "Person", name: "Timothy Mupaso" },
  };

  return <script type="application/ld+json">{JSON.stringify(structuredData)}</script>;
}

export function TMTilingSite() {
  useRevealAnimations();

  return (
    <>
      <SiteStructuredData />
      <SiteHeader />
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <RenovationChallenges />
        <WorkGallery />
        <Process />
        <Testimonials />
        <QuoteSection />
        <FrequentlyAskedQuestions />
      </main>
      <SiteFooter />
      <Button asChild variant="ghost" size="icon" className="tm-float-chat">
        <a
          href={whatsappUrl(WHATSAPP_MESSAGES.general)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
        >
          <MessageCircle aria-hidden="true" />
        </a>
      </Button>
    </>
  );
}