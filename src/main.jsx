import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './Router';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

createRoot(document.getElementById("root")).render(
    <><Analytics />
    <SpeedInsights />
    <Router /></>
);

