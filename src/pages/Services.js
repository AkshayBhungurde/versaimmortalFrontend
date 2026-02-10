import React, { useEffect } from "react";
import "./Services.css";

// Service Card Component
function ServiceCard({ title, description, icon }) {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Services() {
  // SEO Setup
  useEffect(() => {
    document.title = "Our Services | VersaImmortal Pvt. Ltd.";
    const metaDesc = document.createElement("meta");
    metaDesc.name = "description";
    metaDesc.content =
      "Discover the services offered by VersaImmortal Pvt. Ltd.: Web Development, App Development, Software Development, SaaS, and Digital Marketing.";
    document.head.appendChild(metaDesc);

    return () => {
      document.head.removeChild(metaDesc);
    };
  }, []);

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <h1>Our Services</h1>
          <p>
            At VersaImmortal Pvt. Ltd., we deliver cutting-edge IT solutions that
            empower businesses to thrive in the digital world.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="container">
          <div className="services-grid">
            <ServiceCard
              title="Web Development"
              description="Modern, responsive, and high-performance websites tailored to your business."
              icon="🌐"
            />
            <ServiceCard
              title="App Development"
              description="Custom mobile apps for iOS and Android to engage your customers."
              icon="📱"
            />
            <ServiceCard
              title="Software Development"
              description="Enterprise-grade software solutions to streamline your business operations."
              icon="💻"
            />
            <ServiceCard
              title="SaaS Products"
              description="Scalable cloud-based solutions to improve efficiency and accessibility."
              icon="☁️"
            />
            <ServiceCard
              title="Digital Marketing"
              description="SEO, social media, and marketing strategies to grow your brand online."
              icon="📈"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <h2>Ready to grow your business?</h2>
          <p>Get in touch with our experts today and start your digital journey.</p>
          <button>Contact Us</button>
        </div>
      </section>
    </div>
  );
}
