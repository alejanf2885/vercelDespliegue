import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './Router';
import { Analytics } from '@vercel/analytics/react';

createRoot(document.getElementById("root")).render(
    <><Analytics /><Router /></>
);

