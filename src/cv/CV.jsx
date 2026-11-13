import { profile as base } from '../data/profile.js';
import { variants } from '../data/variants.js';

const variantKey = new URLSearchParams(window.location.search).get('v');
const profile = { ...base, ...(variants[variantKey] || {}) };
import Photo from '../components/Photo.jsx';

function Section({ title, children }) {
  return (
    <section className="cv-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function Dots({ score }) {
  return (
    <span className="dots" aria-hidden="true">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= score ? 'on' : ''} />
      ))}
    </span>
  );
}

export default function CV() {
  return (
    <div className="page">
      <header className="cv-header">
        <Photo className="cv-photo" />
        <div>
          <h1>
            {profile.firstName} <strong>{profile.lastName}</strong>
          </h1>
          <p className="cv-title">{profile.title}</p>
          <p className="cv-objective">{profile.objective} · {profile.location}</p>
        </div>
      </header>

      <div className="cv-grid">
        <main>
          <Section title="Profil">
            <p className="cv-summary">{profile.summary}</p>
          </Section>

          <Section title="Atouts pour le poste">
            <ul className="cv-strengths">
              {profile.strengths.map((s) => (
                <li key={s.title}>
                  <h3>{s.title}</h3>
                  <p>{s.short}</p>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Formation">
            <ul className="cv-education">
              {profile.education.map((e) => (
                <li key={e.title}>
                  <div className="cv-edu-head">
                    <h3>{e.title}</h3>
                    {e.year && <span className="cv-year">{e.year}</span>}
                  </div>
                  <p>{e.detail}</p>
                  {e.school && <p className="muted">{e.school}</p>}
                </li>
              ))}
            </ul>
          </Section>
        </main>

        <aside>
          <Section title="Contact">
            <ul className="cv-list">
              <li><span className="label">Téléphone</span>{profile.phone}</li>
              <li><span className="label">Email</span>{profile.email}</li>
              <li><span className="label">Ville</span>{profile.location}</li>
            </ul>
          </Section>

          <Section title="Compétences">
            <ul className="cv-tags">
              {profile.skills.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </Section>

          <Section title="Langues">
            <ul className="cv-list">
              {profile.languages.map((l) => (
                <li key={l.name}>
                  <span className="cv-lang">
                    <strong>{l.name}</strong>
                    <Dots score={l.score} />
                  </span>
                  <span className="muted">{l.level}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Centres d’intérêt">
            <ul className="cv-list">
              {profile.interests.map((i) => <li key={i.name}><strong>{i.name}</strong></li>)}
            </ul>
          </Section>
        </aside>
      </div>

      {profile.website && (
        <footer className="cv-footer">
          Version détaillée en ligne : {profile.website}
        </footer>
      )}
    </div>
  );
}
