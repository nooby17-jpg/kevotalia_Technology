export default function Display() {
  const productCategories = [
    {
      title: "Biometric & Attendance Systems",
      items: [
        {
          name: "Biometric Attendance Devices",
          link: "https://www.esslsecurity.com/biometric-attendance-system/",
          desc:
            "Advanced fingerprint, face, and RFID-based attendance systems for enterprises and institutions.",
        },
        {
          name: "Face Recognition Systems",
          link: "https://www.esslsecurity.com/face-recognition-attendance-system/",
          desc:
            "Touchless AI-powered face recognition solutions for secure attendance and access control.",
        },
      ],
    },
    {
      title: "Access Control Solutions",
      items: [
        {
          name: "Access Control Systems",
          link: "https://www.esslsecurity.com/access-control-system/",
          desc:
            "Secure entry management using biometric, RFID, and smart card technologies.",
        },
        {
          name: "Door Controllers",
          link: "https://www.esslsecurity.com/door-controller/",
          desc:
            "Single-door and multi-door controllers for enterprise-grade access control deployments.",
        },
        {
          name: "Turnstiles & Gates",
          link: "https://www.esslsecurity.com/turnstile/",
          desc:
            "Tripod, flap barrier, and full-height turnstiles for controlled access environments.",
        },
      ],
    },
    {
      title: "Visitor & Workforce Management",
      items: [
        {
          name: "Visitor Management System",
          link: "https://www.esslsecurity.com/visitor-management-system/",
          desc:
            "Digital visitor registration, tracking, and compliance management systems.",
        },
        {
          name: "Workforce Management Software",
          link: "https://www.esslsecurity.com/time-attendance-software/",
          desc:
            "End-to-end workforce attendance, shift, and payroll integration solutions.",
        },
      ],
    },
  ];

  return (
    <section className="products-section section-divider">
      <h2>Authorized eSSL Security Products</h2>
      <p className="section-subtext">
        Kevotalia Technology is an authorized system integrator and solution
        partner for eSSL Security products, delivering certified installations,
        integrations, and lifecycle support.
      </p>

      {productCategories.map((cat, i) => (
        <div key={i} className="product-category">
          <h3>{cat.title}</h3>

          <div className="products-grid">
            {cat.items.map((item, j) => (
              <a
                key={j}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="product-card"
              >
                <h4>{item.name}</h4>
                <p>{item.desc}</p>
                <span>View official product →</span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
