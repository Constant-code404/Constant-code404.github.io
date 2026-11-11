import { profile, fullName, initials } from '../data/profile.js';

export default function Photo({ className = '' }) {
  if (profile.photo) {
    return <img className={`photo ${className}`} src={`./${profile.photo}`} alt={fullName} />;
  }
  return (
    <div className={`photo photo--placeholder ${className}`} aria-label="Emplacement photo">
      <span>{initials}</span>
    </div>
  );
}
