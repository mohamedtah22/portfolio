import { useRef, useState } from 'react';
import me from './assets/me.jpeg';
import { LINKS, projects } from './projects';
import type { Project } from './projects';

const categories = ['All work', 'Systems', 'Full-stack', 'Cloud & data'] as const;
type Category = typeof categories[number];
function category(p: Project): Category {
  if (/Systems|xv6|Compiler|Warehouse|Runtime/.test(p.title)) return 'Systems';
  if (/Bang|Notes|World Cup/.test(p.title)) return 'Full-stack';
  return 'Cloud & data';
}
const skills = [
  ['01', 'Systems & languages', 'C / C++ / Java / Python / OCaml', 'Linux, processes, virtual memory, concurrency, compilers and ARM64 simulation.'],
  ['02', 'Products & interfaces', 'React / TypeScript / React Native', 'Web and mobile interfaces, reusable components and real-time state synchronization.'],
  ['03', 'Backend & data', 'Node.js / Flask / PostgreSQL / AWS', 'REST APIs, WebSockets, relational data, ETL and queue-based distributed processing.'],
];
function Arrow() { return <span aria-hidden="true">↗</span>; }
export default function App() {
  const [filter, setFilter] = useState<Category>('All work');
  const [image, setImage] = useState('');
  const dialog = useRef<HTMLDialogElement>(null);
  const shown = projects.filter(p => filter === 'All work' || category(p) === filter);
  function showImage(src: string) { setImage(src); dialog.current?.showModal(); }
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="header"><a className="wordmark" href="#" aria-label="Mohamed Taha home">mt<span>.</span></a>
      <nav aria-label="Main navigation"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact <Arrow /></a></nav>
      <a className="header-github" href={LINKS.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a>
    </header>
    <main id="main">
      <section className="hero wrap">
        <div className="hero-copy"><p className="eyebrow"><span className="status-dot" /> OPEN TO SOFTWARE ENGINEERING ROLES</p>
          <p className="intro">Hi, I’m Mohamed Taha.</p>
          <h1>Curious mind.<br />Systems thinker.<br /><span>Software builder.</span></h1>
          <p className="hero-description">From real-time multiplayer experiences to the internals of a Linux process. I build software—and understand what makes it work.</p>
          <div className="actions"><a className="button primary" href="#work">Explore my work <span aria-hidden="true">↓</span></a><a className="text-link" href={LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a></div>
        </div>
        <div className="portrait-area"><div className="portrait-frame"><img src={me} alt="Mohamed Taha" fetchPriority="high" /><span className="portrait-caption">MOHAMED TAHA / SOFTWARE ENGINEER</span></div><div className="portrait-note"><span className="small-label">THE WAY I BUILD</span><strong>From the interface<br />to the internals<span>.</span></strong><div className="note-tags"><span>Full-stack</span><span>Systems</span></div></div><span className="orbit-mark" aria-hidden="true">✳</span></div>
      </section>
      <div className="credentials wrap"><div><span className="small-label">EDUCATION</span><strong>B.Sc. Computer Science</strong><span>Ben-Gurion University</span></div><div><span className="small-label">ACADEMIC AVERAGE</span><strong>86<span className="muted"> / 100</span></strong><span>GPA</span></div><div><span className="small-label">SELECTED PROJECTS</span><strong>{projects.length.toString().padStart(2,'0')}</strong><span>Products, systems & data</span></div><div><span className="small-label">ENGINEERING FOCUS</span><strong>Across the stack</strong><span>Interfaces → runtimes</span></div></div>
      <section className="work wrap" id="work"><div className="section-heading"><div><p className="eyebrow">01 / SELECTED WORK</p><h2>Built to understand.<br /><span>Designed to work.</span></h2></div><p>Hands-on projects spanning real-time applications, low-level systems and data-driven products.</p></div>
        <div className="filters" aria-label="Filter projects">{categories.map(c=><button key={c} aria-pressed={filter===c} onClick={()=>setFilter(c)}>{c}<span>{c==='All work'?projects.length:projects.filter(p=>category(p)===c).length}</span></button>)}</div>
        <p className="sr-only" role="status">Showing {shown.length} projects</p>
        <div className="project-grid">{shown.map(p=>{const i=projects.indexOf(p);return <article className={'project-card '+(i===0?'featured':'')} key={p.title}>
          <div className={'project-art art-'+(i%4)}>{p.images ? <button className="image-preview" onClick={()=>showImage(p.images![0])} aria-label={'Enlarge '+p.title+' screenshot'}><img loading="lazy" src={p.images[0]} alt={p.title+' application screenshot'} /><span>View screenshot <Arrow /></span></button>: <div className="code-art" aria-hidden="true"><span className="art-label">{p.highlight}</span><strong>{/Runtime/.test(p.title)?'~/runtime':/World Cup/.test(p.title)?'SELECT *':/xv6/.test(p.title)?'user → kernel':/Compiler/.test(p.title)?'λ → asm':/NLP/.test(p.title)?'words → vectors':/Warehouse/.test(p.title)?'class Warehouse':/Networking/.test(p.title)?'client ⇄ server':'input → insight'}</strong><div className="art-lines"><i/><i/><i/><i/></div><span className="art-bottom">{p.tech.slice(0,3).join(' / ')}</span></div>}</div>
          <div className="project-body"><div className="project-meta"><span>{category(p)}</span><span>{String(i+1).padStart(2,'0')}</span></div><h3>{p.title.replace('Bang! Real-Time Multiplayer Mobile Game','BANG! Multiplayer').replace('Notes App - Full-Stack CRUD Web Application','Notes App')}</h3><p>{p.description}</p><div className="tags">{p.tech.slice(0,5).map(t=><span key={t}>{t}</span>)}</div><details><summary>Engineering details <span aria-hidden="true">+</span></summary><ul>{p.points.map(point=><li key={point}>{point}</li>)}</ul>{p.images && <div className="thumbnails">{p.images.map((src,n)=><button key={src} onClick={()=>showImage(src)} aria-label={'Enlarge screenshot '+(n+1)+' of '+p.title}><img loading="lazy" src={src} alt={'Screenshot '+(n+1)} /></button>)}</div>}</details><div className="project-links">{p.links.map(link=><a key={link.url} href={link.url} target="_blank" rel="noreferrer">{link.label} <Arrow /></a>)}</div></div>
        </article>})}</div>
      </section>
      <section className="about" id="about"><div className="wrap about-grid"><div><p className="eyebrow">02 / THE ENGINEER BEHIND THE CODE</p><h2>I like knowing<br /><span>what’s underneath.</span></h2><p className="about-copy">I’m a Computer Science graduate from Ben-Gurion University. I enjoy connecting the visible parts of a product with the systems behind it: the interface, the API, the process and the memory.</p><p className="about-copy">My work ranges from a multiplayer card game to an OCaml compiler and an embedded Linux simulation toolkit. Across all of them, I care about clear design, careful debugging and understanding the trade-offs.</p><a className="text-link" href={LINKS.github} target="_blank" rel="noreferrer">Explore my GitHub <Arrow /></a></div><div className="skill-list">{skills.map(([n,title,tech,desc])=><div className="skill" key={n}><span>{n}</span><div><h3>{title}</h3><strong>{tech}</strong><p>{desc}</p></div></div>)}</div></div></section>
      <section className="contact wrap" id="contact"><p className="eyebrow"><span className="status-dot"/> LET’S CONNECT</p><h2>Good software starts<br />with a <em>conversation.</em></h2><p>Have a software engineering opportunity?<br />I’d love to hear about the team and what you’re building.</p><a className="button primary" href="mailto:mohamedt@post.bgu.ac.il">Get in touch <Arrow /></a><a className="email" href="mailto:mohamedt@post.bgu.ac.il">mohamedt@post.bgu.ac.il</a></section>
    </main>
    <footer className="wrap"><span>© {new Date().getFullYear()} Mohamed Taha</span><div><a href={LINKS.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a><a href={LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a><a href="#">Back to top ↑</a></div></footer>
    <dialog ref={dialog} className="lightbox" onClick={e=>{if(e.target===e.currentTarget)dialog.current?.close()}} aria-label="Project screenshot"><button className="close-dialog" onClick={()=>dialog.current?.close()} aria-label="Close screenshot">×</button>{image&&<img src={image} alt="Expanded project screenshot"/>}</dialog>
  </>;
}
