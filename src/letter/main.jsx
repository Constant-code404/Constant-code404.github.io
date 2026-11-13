import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '../styles/base.css';
import '../styles/cv.css';
import '../styles/letter.css';
import Letter from './Letter.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(<Letter />);
