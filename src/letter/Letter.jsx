import { profile } from '../data/profile.js';
import { letters } from '../data/lettres.js';
import Photo from '../components/Photo.jsx';

const key = new URLSearchParams(window.location.search).get('l');
const letter = letters[key] || Object.values(letters)[0];

export default function Letter() {
  return (
    <div className="page letter">
      <header className="cv-header">
        <Photo className="cv-photo letter-photo" />
        <div className="letter-id">
          <h1>
            {profile.firstName} <strong>{profile.lastName}</strong>
          </h1>
          <p className="cv-title">{letter.position}</p>
          <p className="cv-objective">
            {profile.phone} · {profile.email} · {profile.location}
          </p>
        </div>
      </header>

      <div className="letter-meta">
        <div>
          <span className="label">Destinataire</span>
          {letter.recipient.map((l) => <p key={l}>{l}</p>)}
        </div>
        <p className="letter-date">{letter.place}, le {letter.date}</p>
      </div>

      <p className="letter-subject">
        <span className="label">Objet</span>
        {letter.subject}
      </p>

      <div className="letter-body">
        <p>{letter.greeting}</p>
        {letter.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
        <p>{letter.closing}</p>
      </div>

      <p className="letter-signature">{profile.firstName} {profile.lastName}</p>

      {profile.website && (
        <footer className="cv-footer">CV et profil détaillé en ligne : {profile.website}</footer>
      )}
    </div>
  );
}
