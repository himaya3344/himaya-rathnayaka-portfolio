import { useEffect, useMemo, useState } from "react";
import "./App.css";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
];

const skills = [
  {
    category: "Programming & Query Languages",
    items: ["Python", "R", "SQL", "Java", "JavaScript"],
  },
  {
    category: "Data Analysis & Business Intelligence",
    items: [
      "Data Cleaning",
      "EDA",
      "Statistical Analysis",
      "Data Visualization",
      "Predictive Modelling",
      "Power BI",
      "Excel",
      "DAX",
    ],
  },
  {
    category: "Libraries & Frameworks",
    items: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "ggplot2",
      "Scikit-learn",
      "Spring Boot",
      "React",
      "Express.js",
      "Tailwind CSS",
    ],
  },
  {
    category: "Databases, Tools & Platforms",
    items: [
      "SQL Server",
      "MySQL",
      "MongoDB",
      "RStudio",
      "SSMS",
      "GitHub",
      "VS Code",
      "Figma",
      "Android Studio",
    ],
  },
  {
    category: "Core Competencies",
    items: [
      "Analytical Thinking",
      "Insight Generation",
      "Business Problem Solving",
      "Dashboard Reporting",
      "Data Storytelling",
      "Decision Support",
    ],
  },
];

const projects = [
  
  {
  category: "BI",
  type: "Data Warehouse + BI",
  title: "E-Commerce Data Warehousing & BI",
  summary:
    "Built an end-to-end e-commerce data warehouse and BI reporting solution using SQL Server, SSIS, SSAS, and Power BI.",
  result:
    "Supported sales, customer, product, and time-based analysis through OLAP operations and interactive dashboards.",
  highlights: [
    "Designed a dimensional model with fact tables, dimensions, hierarchies, and Slowly Changing Dimensions.",
    "Built ETL workflows, SSAS cube, and Power BI reports with slicers, drill-down, and drill-through analysis.",
  ],
  tools: ["SQL Server", "SSIS", "SSAS", "Power BI", "Excel", "DAX", "OLAP"],
  github: "https://github.com/himaya3344/Ecommerce-Data-Warehouse-BI-Solution",
  caseStudy: "#case-study",
  image: "/projects/ecommerce/ecommerce-dashboard.png",
  imageAlt: "Power BI e-commerce sales dashboard",
},
{
  category: "Analysis",
  type: "Statistical Analysis",
  title: "Employee Satisfaction & Performance Analysis",
  summary:
    "Analyzed the IBM HR Analytics dataset to study how employee satisfaction factors relate to performance.",
  result:
    "Found that job satisfaction had a statistically significant effect on employee performance.",
  highlights: [
    "Performed data preprocessing, descriptive analysis, and visualizations using R and ggplot2.",
    "Applied statistical analysis and linear regression to evaluate satisfaction-related performance factors.",
  ],
  tools: ["R", "RStudio", "ggplot2", "Statistical Analysis", "Linear Regression"],
  github: "https://github.com/himaya3344/employee-satisfaction-performance-analysis-r",
  image: "/projects/employee-analysis/employee-performance-chart.png",
  imageAlt: "Employee satisfaction and performance analysis chart",
},
{
  category: "Development",
  type: "Analytics-Enabled System",
  title: "UniCore - Smart Campus Operations Hub",
  summary:
    "Contributed to a smart campus web system supporting facility booking, asset management, and incident reporting workflows.",
  result:
    "Improved the incident ticketing module with issue reporting, status tracking, role-based access, and AI-assisted priority suggestions.",
  highlights: [
    "Built features for reporting maintenance issues with category, description, contact details, and image attachments.",
    "Implemented RESTful endpoints, validation, error handling, and keyword-based priority recommendation logic.",
  ],
  tools: ["Spring Boot", "React", "REST API", "OAuth 2.0", "GitHub Actions"],
  github: "https://github.com/Kaveen12/-it3030-paf-2026-smart-campus-group",
  image: "/projects/unicore/unicore-dashboard.png",
  imageAlt: "UniCore smart campus operations dashboard",
},
  {
    category: "Development",
    type: "Full-Stack MERN System",
    title: "Taste Of Ceylon - Traditional Fruit Management System",
    summary:
      "Built a full-stack fruit supply chain management platform for Sri Lankan fruit businesses using the MERN stack.",
    result:
      "Centralized supplier, inventory, order, finance, and customer engagement workflows to support smoother business operations and reduce wastage.",
    highlights: [
      "Implemented CRUD workflows for suppliers, inventory records, orders, finance data, and customer information.",
      "Designed the system to help local farmers and fruit businesses manage operations from one digital platform.",
      "Used React, Node.js, Express.js, and MongoDB to build a structured full-stack web application.",
    ],
    tools: ["MongoDB", "Express.js", "React", "Node.js", "MERN", "CRUD"],
    github: "https://github.com/RusinduKasun/ITP_Project_2025",
    image: "/projects/taste-of-ceylon/taste-of-ceylon-preview.png",
    imageAlt: "Taste Of Ceylon fruit management system preview",
  },
  {
    category: "Development",
    type: "Android Mobile App",
    title: "HealthyMe - Personal Wellness Tracking App",
    summary:
      "Designed a personal wellness tracking mobile application to help users monitor daily habits, emotional well-being, and lifestyle routines.",
    result:
      "Encouraged users to stay mindful of daily habits, visualize wellness progress, and take small consistent steps toward a healthier lifestyle.",
    highlights: [
      "Designed habit tracking features to support daily self-monitoring and lifestyle improvement.",
      "Focused on emotional well-being awareness through simple tracking and reflection features.",
      "Built the mobile application using Android Studio and Kotlin with a clean user-friendly interface.",
    ],
    tools: ["Android Studio", "Kotlin", "Mobile App", "UI/UX", "Wellness Tracking"],
    github: "https://github.com/himaya3344/healthyme-android-app",
    image: "/projects/healthyme/healthyme-preview.png",
    imageAlt: "HealthyMe wellness tracking mobile app preview",
  },
];

const certifications = [
  {
    issuer: "SLIIT CODL",
    name: "AI/ML Engineer - Stage 1 & 2",
  },
  {
    issuer: "AWS",
    name: "Cloud Practitioner Essentials",
  },
  {
    issuer: "AWS",
    name: "Data Engineering on AWS - Foundations",
  },
  {
    issuer: "AWS",
    name: "Fundamentals of Analytics on AWS - Parts 1 & 2",
  },
  {
    issuer: "freeCodeCamp",
    name: "Data Analysis with Python Developer Certification",
  },
  {
    issuer: "Cisco Networking Academy",
    name: "Python Essentials 1",
  },
  {
    issuer: "University of Moratuwa",
    name: "Python for Beginners",
  },
];

const filters = ["All", "BI", "Analysis", "Development"];

function ProjectVisual() {
  return (
    <div className="ticketVisual" aria-label="Smart Campus incident workflow preview">
      <div className="ticketVisualTop">
        <span>INC-0248</span>
        <span className="ticketStatus">In review</span>
      </div>
      <div className="ticketVisualBody">
        <p>Facilities incident</p>
        <strong>Water leak reported in Block C</strong>
        <div className="ticketMeta">
          <span>Category: Maintenance</span>
          <span>Attachment: 1</span>
        </div>
      </div>
      <div className="prioritySuggestion">
        <span>AI priority suggestion</span>
        <strong>High</strong>
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [activeFilter, setActiveFilter] = useState("All");
  const [scrollProgress, setScrollProgress] = useState(0);

  const filteredProjects = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0.05, 0.2, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const cvUrl = `${import.meta.env.BASE_URL}Himaya_Rathnayaka_CV.pdf`;

  return (
    <>
      <div className="scrollProgress" style={{ width: `${scrollProgress}%` }} />

      <header className="siteHeader">
        <nav className="nav" aria-label="Primary navigation">
          <a href="#home" className="logo" onClick={closeMenu} aria-label="Home">
            HR<span></span>
          </a>

          <button
            className="menuButton"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            aria-controls="primary-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>

          <div id="primary-menu" className={`navLinks ${menuOpen ? "isOpen" : ""}`}>
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={activeSection === item.href.slice(1) ? "active" : ""}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <a className="navContact" href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="heroText">
            <div className="heroIdentity">
              <img
                className="profilePhoto"
                src="/himaya-profile.jpeg"
                alt="Himaya Rathnayaka"
              />
              <div>
                <p className="eyebrow">Data Science & Analytics Portfolio</p>
                <h1>Himaya Rathnayaka</h1>
              </div>
            </div>

            <p className="heroStatement">
              I turn data into clear insights and dashboards that support better decisions.
            </p>

            <h2>Aspiring Data Analyst / Data Science Undergraduate</h2>

            <p className="intro">
              Building practical analytics solutions with Python, SQL, Power BI, R,
              data warehousing, and statistical modelling.
            </p>

            <div className="availability">
              <span />
              Open to Data Analyst and Data Science internships
            </div>

            <div className="actions">
              <a className="primaryButton" href="#projects">
                View Projects
              </a>
              <a href={cvUrl} download="Himaya_Rathnayaka_CV.pdf">
                Download CV
              </a>
              <a
                href="https://github.com/himaya3344"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/himaya-rathnayaka-54527a3a9"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="analyticsPanel" aria-label="Portfolio analytics summary">
            <div className="panelHeader">
              <div>
                <span className="panelKicker">Portfolio overview</span>
                <h3>analytics_profile.sql</h3>
              </div>
              <span className="liveStatus">
                <i /> Available
              </span>
            </div>

            <div className="statsGrid">
              <div>
                <strong>5+</strong>
                <span>Projects</span>
              </div>
              <div>
                <strong>3.45</strong>
                <span>Current GPA</span>
              </div>
              <div>
                <strong>10+</strong>
                <span>Tools & Technologies</span>
              </div>
              <div>
                <strong>Open</strong>
                <span>Internship Status</span>
              </div>
            </div>

            <div className="focusChart">
              <div className="chartHeading">
                <span>Analytics capability map</span>
                <span>Current focus</span>
              </div>
              {[
                ["Data preparation", "core", "Core"],
                ["SQL & modelling", "core", "Core"],
                ["BI & storytelling", "primary", "Primary"],
                ["Statistics & ML", "growing", "Growing"],
              ].map(([label, emphasis, level], index) => (
                <div className="focusRow" key={label}>
                  <span>{label}</span>
                  <div className="focusTrack">
                    <i
                      className={`focus-${emphasis}`}
                      style={{ "--bar-delay": `${index * 90}ms` }}
                    />
                  </div>
                  <em>{level}</em>
                </div>
              ))}
            </div>

            <div className="pipeline">
              <span>Clean</span>
              <i />
              <span>Model</span>
              <i />
              <span>Visualize</span>
              <i />
              <span>Explain</span>
            </div>

            <code className="queryLine">
              SELECT insight FROM data WHERE decision_value = TRUE;
            </code>
          </div>
        </section>

        <section id="about" className="section aboutSection">
          <div className="aboutLayout">
            <div className="aboutContent">
              <p className="eyebrow">About</p>
              <h2>Building a career around useful data.</h2>
              <p className="sectionIntro">
                I am a BSc (Hons) Information Technology undergraduate specializing
                in Data Science at SLIIT. I work across the analytics process, from
                cleaning and modelling data to building reports and explaining what
                the findings mean.
              </p>

              <ul className="strengthList">
                <li>Translate business questions into structured analysis.</li>
                <li>Build understandable dashboards and reporting workflows.</li>
                <li>Communicate findings clearly to support decisions.</li>
              </ul>
            </div>

            <div className="timeline">
              <div>
                <span>Current direction</span>
                <h3>Analytics, BI & Data Science</h3>
                <p>Developing stronger portfolio projects and internship-ready skills.</p>
              </div>
              <div>
                <span>2023 - Present</span>
                <h3>BSc (Hons) IT - Data Science</h3>
                <p>SLIIT, Malabe / Current GPA: 3.45 out of 4.0</p>
              </div>
              <div>
                <span>2013 - 2022</span>
                <h3>Physical Science Stream</h3>
                <p>Sri Lanka Singapore Friendship College, Weeraketiya</p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="sectionHeading">
            <p className="eyebrow">Skills & Expertise</p>
            <h2>A practical analytics toolkit.</h2>
            <p>
              My technical foundation combines programming, analysis, business
              intelligence, databases, and communication skills for end-to-end
              data work.
            </p>
          </div>

          <div className="skillGrid">
            {skills.map((skill) => (
              <article className="skillGroup" key={skill.category}>
                <h3>{skill.category}</h3>
                <div className="skillTags">
                  {skill.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section projectsSection">
          <div className="sectionHeading">
            <p className="eyebrow">Featured Projects</p>
            <h2>Work that shows the full thinking process.</h2>
            <p>
              Each project explains the problem, the method, and the outcome, with
              direct access to the source repository where available.
            </p>
          </div>

          <div className="projectFilters" aria-label="Filter projects">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={activeFilter === filter ? "active" : ""}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="projectGrid">
            {filteredProjects.map((project) => (
              <article className="projectCard" key={project.title}>
                <div className="projectMedia">
                  {project.image ? (
                    <img src={project.image} alt={project.imageAlt} />
                  ) : (
                    <ProjectVisual />
                  )}
                </div>

                <div className="projectBody">
                  <p className="projectType">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <p className="projectResult">
                    <strong>Outcome:</strong> {project.result}
                  </p>

                  {project.highlights && (
                    <ul className="projectHighlights">
                      {project.highlights.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  )}

                  <div className="projectTags">
                    {project.tools.map((tool) => (
                      <span key={tool}>{tool}</span>
                    ))}
                  </div>

                  <div className="projectActions">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer">
                        GitHub Repository
                      </a>
                    )}
                    {project.caseStudy && <a href={project.caseStudy}>View Case Study</a>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="case-study" className="section caseStudy">
          <div className="sectionHeading">
            <p className="eyebrow">Main Case Study</p>
            <h2>E-Commerce Data Warehouse & Business Intelligence</h2>
            <p>
              A complete reporting workflow that transforms raw e-commerce data
              into a dimensional model, OLAP layer, and decision-ready dashboard.
            </p>
          </div>

          <div className="caseFlow">
            {[
              [
                "01",
                "Model",
                "Designed a star schema with FactSales and reusable product, customer, date, device, and referral dimensions.",
              ],
              [
                "02",
                "Transform",
                "Built ordered SSIS workflows to validate, clean, and load data into the warehouse.",
              ],
              [
                "03",
                "Analyze",
                "Created an SSAS cube with measures, dimensions, hierarchies, and OLAP exploration.",
              ],
              [
                "04",
                "Communicate",
                "Delivered Power BI reports with slicers, matrix views, drill-down, and drill-through.",
              ],
            ].map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>

          <div className="caseGallery">
            <figure>
              <img
                src="/projects/ecommerce/ecommerce-data-model.png"
                alt="E-commerce dimensional data model"
              />
              <figcaption>Dimensional data model</figcaption>
            </figure>
            <figure>
              <img
                src="/projects/ecommerce/dashboard.png"
                alt="Interactive e-commerce Power BI dashboard"
              />
              <figcaption>Interactive Power BI dashboard</figcaption>
            </figure>
            <figure>
              <img
                src="/projects/ecommerce/ecommerce-drillthrough.png"
                alt="Power BI drill-through report"
              />
              <figcaption>Detailed drill-through analysis</figcaption>
            </figure>
          </div>
        </section>

        <section id="certifications" className="section">
          <div className="sectionHeading">
            <p className="eyebrow">Certifications</p>
            <h2>Learning aligned with my direction.</h2>
            <p>
              Focused training in cloud fundamentals, analytics, data engineering,
              Python, and machine learning supports my academic and project work.
            </p>
          </div>

          <div className="certificationList">
            {certifications.map((certification) => (
              <article key={certification.name}>
                <div>
                  <p>{certification.issuer}</p>
                  <h3>{certification.name}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contactSection">
          <div className="contactIntro">
            <p className="eyebrow">Let&apos;s Connect</p>

            <h2>Open to opportunities, collaborations, and meaningful data problems.</h2>

            <p>
              I&apos;m Himaya Rathnayaka, a Data Science undergraduate at SLIIT and
              an aspiring Data Analyst. I&apos;m interested in internships, research
              collaborations, and conversations about analytics, business
              intelligence, dashboards, and practical data solutions.
            </p>

            <p>
              Based in Malabe, Colombo, Sri Lanka. Feel free to reach out — I&apos;d
              be happy to connect.
            </p>
          </div>

          <div className="contactLinks">
            <a className="emailLink" href="mailto:rathnayakatharukihimaya@gmail.com">
              rathnayakatharukihimaya@gmail.com
            </a>
            <a href={cvUrl} download="Himaya_Rathnayaka_CV.pdf">
              Download CV
            </a>
            <a href="https://github.com/himaya3344" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/himaya-rathnayaka-54527a3a9"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer>
        <span>Designed and built by Himaya Rathnayaka</span>
        <span>2026</span>
      </footer>
    </>
  );
}

export default App;