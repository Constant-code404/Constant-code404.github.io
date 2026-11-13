// Source unique des informations : le site ET le CV lisent ce fichier.
// Modifie ici, puis lance `npm run cv` pour régénérer le PDF.

export const profile = {
  firstName: 'Constant',
  lastName: 'Pichereau',
  title: 'Serveur · Employé de restauration',
  objective: 'Recherche un CDI ou un CDD',
  location: 'Brest (29)',
  phone: '07 49 24 95 14',
  email: 'constant.pichereau@gmail.com',

  // Photo : mets le fichier dans /public (ex. "photo.jpg") puis indique son nom ici.
  // Tant que la valeur est null, un emplacement avec les initiales est affiché.
  photo: null,

  cvFile: 'cv-constant-pichereau.pdf',

  // Adresse du site une fois en ligne (ex. 'constant-pichereau.vercel.app') :
  // elle s'affichera en bas du CV.
  website: 'constant-code404.github.io',

  summary:
    "Titulaire d'un bac général (spécialités Mathématiques et SES), je recherche un CDI ou un CDD dans la restauration à Brest. À l'aise dans la communication et motivé pour apprendre le métier, je souhaite offrir à vos clients un service chaleureux et efficace.",

  about: [
    "Je m'appelle Constant, j'habite à Brest et je souhaite démarrer ma vie professionnelle dans la restauration, en salle comme serveur ou au sein d'une équipe de restaurant.",
    "Ce qui m'attire dans ce métier, c'est le contact humain : accueillir les clients, les conseiller et faire en sorte qu'ils passent un bon moment. La communication est mon point fort, et j'ai envie de la mettre au service d'une équipe.",
    "Je suis ouvert à un CDI comme à un CDD : je veux apprendre les gestes du métier sur le terrain, progresser vite et prendre des responsabilités.",
  ],

  strengths: [
    {
      title: 'Sens du contact',
      short: 'Très à l’aise à l’oral : accueillir, conseiller, mettre les clients à l’aise.',
      detail:
        "La communication est mon point fort. Je vais facilement vers les gens, j'écoute et je m'adapte à chaque interlocuteur : un atout pour l'accueil, la prise de commande et le conseil en salle.",
    },
    {
      title: 'Aisance avec les chiffres',
      short: 'Calcul mental rapide, utile pour l’encaissement et le rendu de monnaie.',
      detail:
        "Ma spécialité Mathématiques m'a donné de la rigueur et un bon calcul mental. Additions, rendu de monnaie, partage d'addition entre convives : je suis à l'aise avec la caisse.",
    },
    {
      title: 'Compréhension du commerce',
      short: 'Notions d’économie grâce aux SES : clientèle, chiffre d’affaires, qualité de service.',
      detail:
        "Les Sciences économiques et sociales m'ont appris comment fonctionne une entreprise : l'importance de la satisfaction client, du chiffre d'affaires et du travail en équipe.",
    },
    {
      title: 'Anglais B1',
      short: 'Capable d’accueillir et de servir une clientèle touristique.',
      detail:
        "Avec un niveau B1, je peux accueillir des clients étrangers, présenter la carte et répondre aux questions courantes. Pratique dans une ville portuaire et touristique comme Brest.",
    },
    {
      title: 'Outils numériques & IA',
      short: 'Je m’adapte vite aux outils : caisse tactile, prise de commande, réservations.',
      detail:
        "J'utilise au quotidien les outils numériques et l'intelligence artificielle. Je prends en main rapidement les logiciels de caisse, les tablettes de commande ou les plateformes de réservation.",
    },
    {
      title: 'Envie d’apprendre',
      short: 'Motivé pour me former vite et m’investir dans l’équipe.',
      detail:
        "Je débute et je le sais : j'arrive avec de la motivation, de l'écoute et l'envie d'apprendre auprès d'une équipe expérimentée et de m'investir pleinement dans mon travail.",
    },
  ],

  education: [
    {
      title: 'Baccalauréat général',
      detail: 'Spécialités Mathématiques et Sciences économiques et sociales (SES)',
      year: '', // ex. '2025'
      school: '', // ex. 'Lycée …, Brest'
    },
    {
      title: 'Diplôme national du brevet',
      detail: 'Mention Bien',
      year: '',
      school: '',
    },
  ],

  skills: ['Communication orale', 'Accueil et relation client', 'Calcul mental', 'Outils numériques', 'Intelligence artificielle'],

  languages: [
    { name: 'Français', level: 'Langue maternelle', score: 5 },
    { name: 'Anglais', level: 'B1 · Intermédiaire', score: 3 },
  ],

  interests: [
    {
      name: 'Cinéma',
      detail:
        "J'aime découvrir des films et en parler : une bonne façon d'entretenir ma curiosité et d'avoir toujours un sujet de conversation.",
    },
  ],
};

export const fullName = `${profile.firstName} ${profile.lastName}`;
export const initials = `${profile.firstName[0]}${profile.lastName[0]}`;
export const phoneHref = `tel:+33${profile.phone.replace(/\s/g, '').slice(1)}`;
