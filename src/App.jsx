import { profile, fullName, phoneHref } from './data/profile.js';
import Photo from './components/Photo.jsx';

const cvHref = `./${profile.cvFile}`;

const nav = [
  { id: 'profil', label: 'Profil' },
  { id: 'atouts', label: 'Atouts' },
  { id: 'formation', label: 'Formation' },
  { id: 'competences', label: 'Compétences' },
  { id: 'contact', label: 'Contact' },
];

function DownloadButton({ variant = 'primary', children = 'Télécharger le CV (PDF)' }) {
  return (
    <a className={`btn btn--${variant}`} href={cvHref} download>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3v12" />
        <path d="m7 10 5 5 5-5" />
        <path d="M5 21h14" />
      </svg>
      {children}
    </a>
  );
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="section">
      <div className="container section__inner">
        <header className="section__head">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
        </header>
        <div className="section__body">{children}</div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <nav className="nav">
        <div className="container nav__inner">
          <a href="#top" className="nav__brand">{fullName}</a>
          <ul className="nav__links">
            {nav.map((n) => (
              <li key={n.id}><a href={`#${n.id}`}>{n.label}</a></li>
            ))}
          </ul>
          <DownloadButton variant="small">CV PDF</DownloadButton>
        </div>
      </nav>

      <header id="top" className="hero">
        <div className="container hero__inner">
          <Photo className="hero__photo" />
          <div className="hero__text">
            <p className="eyebrow">{profile.objective} · {profile.location}</p>
            <h1>
              {profile.firstName} <strong>{profile.lastName}</strong>
            </h1>
            <p className="hero__title">{profile.title}</p>
            <p className="hero__summary">{profile.summary}</p>
            <div className="hero__actions">
              <DownloadButton />
              <a className="btn btn--ghost" href="#contact">Me contacter</a>
            </div>
          </div>
        </div>
      </header>

      <Section id="profil" eyebrow="01" title="Profil">
        <div className="prose">
          {profile.about.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </Section>

      <Section id="atouts" eyebrow="02" title="Mes atouts pour le poste">
        <ul className="cards">
          {profile.strengths.map((s, i) => (
            <li key={s.title} className="card">
              <span className="card__num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.detail}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="formation" eyebrow="03" title="Formation">
        <ul className="timeline">
          {profile.education.map((e) => (
            <li key={e.title}>
              <div className="timeline__head">
                <h3>{e.title}</h3>
                {e.year && <span className="muted">{e.year}</span>}
              </div>
              <p>{e.detail}</p>
              {e.school && <p className="muted">{e.school}</p>}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="competences" eyebrow="04" title="Compétences & langues">
        <div className="split">
          <div>
            <h3 className="sub">Compétences</h3>
            <ul className="tags">
              {profile.skills.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="sub">Langues</h3>
            <ul className="langs">
              {profile.languages.map((l) => (
                <li key={l.name}>
                  <div className="langs__row">
                    <strong>{l.name}</strong>
                    <span className="muted">{l.level}</span>
                  </div>
                  <div className="bar"><span style={{ width: `${l.score * 20}%` }} /></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="interets" eyebrow="05" title="Centres d’intérêt">
        <ul className="interests">
          {profile.interests.map((i) => (
            <li key={i.name}>
              <h3>{i.name}</h3>
              <p>{i.detail}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="contact" eyebrow="06" title="Contact">
        <p className="contact__intro">
          Disponible pour un entretien ou un essai en salle. N’hésitez pas à m’appeler ou à m’écrire.
        </p>
        <ul className="contact">
          <li>
            <span className="label">Téléphone</span>
            <a href={phoneHref}>{profile.phone}</a>
          </li>
          <li>
            <span className="label">Email</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </li>
          <li>
            <span className="label">Ville</span>
            <span>{profile.location}</span>
          </li>
        </ul>
        <div className="contact__cta">
          <DownloadButton />
        </div>
      </Section>

      <footer className="footer">
        <div className="container footer__inner">
          <span>© {new Date().getFullYear()} {fullName}</span>
          <a href={cvHref} download>Télécharger le CV</a>
        </div>
      </footer>
    </>
  );
}
