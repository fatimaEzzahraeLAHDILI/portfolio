import { useState } from 'react'
import './index.css'

const skills = [
  ['HTML 5', '95%', '◈'], ['Node.js', '80%', '⬡'], ['CSS 3', '90%', '▣'],
  ['React.js', '90%', '⚛'], ['MongoDB', '75%', '●'], ['JavaScript', '90%', 'JS'],
  ['Tailwind CSS', '90%', '≋'],
]

const projects = [
  {
    title: 'Pharmacy Management Website',
    type: 'HEALTHCARE / WEB APP',
    image: '/page Home.png',
    url: 'https://pharmacierhamna-nine.vercel.app',
    tags: ['React', 'Laravel', 'MySQL'],
    summary: 'A full pharmacy management system built for efficient inventory tracking, prescriptions, and internal operations.',
    screenshots: [
      { title: 'Page Home', image: '/page Home.png' },
      { title: 'Inscription', image: '/inscription.png' },
      { title: 'Connexion', image: '/connexion.png' },
      { title: 'Boutique', image: '/Boutique.png' },
      { title: 'Gestion Stock', image: '/Gestion stock.png' },
      { title: 'Détails Médicaments', image: '/details medicaments.png' },
    ],
  },
  {
    title: 'Système de Gestion des Formations pour les Formateurs',
    type: 'WEB APP / DASHBOARD',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=85',
    tags: ['React', 'Laravel', 'MySQL'],
    summary: 'A training management platform for instructors, with dashboards, sessions, attendance, and course tracking.',
    screenshots: [
      { title: 'S’inscrire', image: '/image1.png' },
      { title: 'Authentification', image: '/image2.png' },
      { title: 'Tableau de bord Admin', image: '/image3.png' },
      { title: 'Tableau de bord DR', image: '/image4.png' },
      { title: 'Tableau de bord CDC', image: '/image5.png' },
      { title: 'Tableau de bord Formation', image: '/image6.png' },
      { title: 'Tableau de bord Formateur', image: '/image7.png' },
      { title: 'Tableau de bord Animateur', image: '/image8.png' },
    ],
  },
  {
    title: 'E-commerce Store',
    type: 'COMMERCE / EXPERIENCE',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85',
    tags: ['Next.js', 'Stripe', 'Tailwind CSS'],
    summary: 'An elegant storefront designed to convert visitors into buyers with product discovery and smooth checkout flow.',
    screenshots: [
      { title: 'Landing Store', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=85' },
      { title: 'Catalogue Produits', image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1000&q=85' },
      { title: 'Panier & Checkout', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=85' },
      { title: 'Paiement Sécurisé', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=85' },
    ],
  },
  {
    title: 'CRM Dashboard',
    type: 'SALES / ANALYTICS',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=85',
    tags: ['React', 'Charts', 'UX'],
    summary: 'A customer relationship dashboard focused on conversion tracking, performance insights, and team reporting.',
    screenshots: [
      { title: 'Overview', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=85' },
      { title: 'Pipeline', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=85' },
      { title: 'Reports', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85' },
    ],
  },
  {
    title: 'Learning Platform',
    type: 'EDUCATION / PLATFORM',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=85',
    tags: ['Laravel', 'MySQL', 'UI'],
    summary: 'A course platform built for online learning, student progress tracking, and instructor-led modules.',
    screenshots: [
      { title: 'Courses', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=85' },
      { title: 'Student Panel', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85' },
      { title: 'Progress', image: 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1000&q=85' },
    ],
  },
  {
    title: 'Business Landing Page',
    type: 'MARKETING / BRAND',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85',
    tags: ['Branding', 'React', 'SEO'],
    summary: 'A polished marketing site for a company looking to strengthen its digital presence and conversion strategy.',
    screenshots: [
      { title: 'Home', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85' },
      { title: 'Services', image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1000&q=85' },
      { title: 'Contact', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=85' },
    ],
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [activeProject, setActiveProject] = useState(null)
  const [contactOpen, setContactOpen] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [formStatus, setFormStatus] = useState('')

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 3)

  const openContact = (event) => {
    event.preventDefault()
    setContactOpen(true)
    setMenuOpen(false)
    setFormStatus('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setFormStatus('sending')
    try {
      const response = await fetch('https://formsubmit.co/ajax/fatimaishrak1@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message, _subject: `Portfolio message from ${form.name}` }),
      })
      if (!response.ok) throw new Error('Message failed')
      setFormStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setFormStatus('error')
    }
  }

  return (
    <main>
      <header className="nav wrap">
        <a className="brand" href="#top"><span>FEL</span><strong>Fatima Ezzahrae Lahdili</strong><small>FULL STACK DEVELOPER</small></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? '×' : '☰'}</button>
        <nav className={menuOpen ? 'open' : ''}>{['HOME', 'SKILLS', 'PROJECTS'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}<a className="nav-cta" href="#contact" onClick={openContact}>CONTACT <span>↗</span></a></nav>
      </header>

      <section id="top" className="hero wrap">
        <div className="hero-copy"><p className="eyebrow">HELLO, I'M FATIMA</p><h1>I Build Digital<br /><em>Experiences</em><br />That Matter.</h1><p className="intro">Full Stack Developer crafting responsive, fast and scalable web applications with modern technologies.</p><p className="available"><i /> AVAILABLE FOR WORK</p><div className="actions"><a className="button gold" href="#projects">VIEW MY WORK <span>→</span></a><a className="button outline" href="/cv-fatima-ezzahrae-lahdili.pdf" download="Fatima-Ezzahrae-Lahdili-CV.pdf">DOWNLOAD CV <span>↓</span></a></div></div>
          <div className="hero-photo"><div className="photo-overlay" /></div>
      </section>

      <section id="skills" className="skills wrap"><div className="section-head"><p className="eyebrow">MY SKILLS</p><span>01 — 03</span></div><div className="skill-grid">{skills.map(([name, level, icon]) => <div className="skill" key={name}><div className="skill-top"><b>{icon}</b><span>{name}</span><small>{level}</small></div><div className="bar"><i style={{ width: level }} /></div></div>)}</div></section>

      <section id="projects" className="projects wrap">
        <div className="section-head">
          <p className="eyebrow">FEATURED PROJECTS</p>
          <button type="button" className="section-link" onClick={() => setShowAllProjects((value) => !value)}>{showAllProjects ? 'SHOW LESS' : 'VIEW ALL PROJECTS'} <span>→</span></button>
        </div>
        <div className="project-grid">{visibleProjects.map((project, index) => <article className="project" key={project.title} onClick={() => setActiveProject(project)}><div className="project-image"><img src={project.image} alt={project.title} /><span>0{index + 1}</span></div><div className="project-info"><div><small>{project.type}</small><h3>{project.title}</h3></div><span className="arrow">↗</span></div><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div>
      </section>

      <section id="contact" className="contact wrap"><div className="contact-copy"><p className="eyebrow">LET'S WORK TOGETHER</p><h2>Have a project<br />in <em>mind?</em></h2><p>I'm currently available for freelance work.<br />Let's create something amazing together.</p><a className="button gold" href="#contact" onClick={openContact}>SEND MESSAGE <span>↗</span></a></div><div className="contact-card"><p className="eyebrow">GET IN TOUCH</p><a href="mailto:fatimaishrak1@gmail.com">✉ &nbsp; fatimaishrak1@gmail.com</a><a href="tel:0644119305">⌕ &nbsp; 0644119305</a><span>⌖ &nbsp; Casablanca, Morocco</span><div className="socials"><a href="https://github.com/fatimaEzzahraeLAHDILI" target="_blank" rel="noreferrer">GH</a><a href="https://www.linkedin.com/in/fatima-ezzahrae-lahdili-270b392a1" target="_blank" rel="noreferrer">in</a></div></div></section>
      <footer className="wrap"><span>© 2026 Fatima Ezzahrae Lahdili</span><span>DESIGNED & BUILT WITH INTENTION</span><a href="#top">BACK TO TOP ↑</a></footer>
      {activeProject && <div className="project-detail-backdrop" onMouseDown={(event) => event.target === event.currentTarget && setActiveProject(null)}><section className="project-detail project-detail-compact" role="dialog" aria-modal="true" aria-labelledby="project-detail-title"><button className="modal-close project-close" onClick={() => setActiveProject(null)} aria-label="Close project details">×</button><div className="project-detail-header compact-header"><h2 id="project-detail-title">{activeProject.title}</h2><p>{activeProject.summary}</p><div className="detail-actions">{activeProject.url && <a href={activeProject.url} target="_blank" rel="noreferrer" className="button gold">VIEW LIVE <span>↗</span></a>}</div></div><div className="project-screens">{activeProject.screenshots.map((screen) => <figure className="screen-card" key={screen.title}><img src={screen.image} alt={screen.title} /><figcaption>{screen.title}</figcaption></figure>)}</div></section></div>}
      {contactOpen && <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && setContactOpen(false)}><section className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-title"><button className="modal-close" onClick={() => setContactOpen(false)} aria-label="Close contact form">×</button><h2 id="contact-title">Send Me a Message</h2><p className="modal-subtitle">Fill in the form below and I will get back to you within 24 hours.</p><form onSubmit={handleSubmit}><label>Your Name<input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Fatima Ezzahrae" /></label><label>Email Address<input required type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="fatimaezzahrae@gmail.com" /></label><label>Message<textarea required value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} placeholder="Tell me about your project..." /></label><button className="modal-submit" type="submit" disabled={formStatus === 'sending'}>{formStatus === 'sending' ? 'SENDING...' : 'SEND MESSAGE'}</button>{formStatus === 'success' && <p className="form-success">Message sent successfully.</p>}{formStatus === 'error' && <p className="form-error">Could not send. Please try again.</p>}</form></section></div>}
    </main>
  )
}

export default App
