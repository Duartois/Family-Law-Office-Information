import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initAnalytics, trackPageView } from '../analytics';

/** Sem visual: inicia o GA4 (se configurado) e registra cada página visitada. */
export default function Analytics() {
  const { pathname } = useLocation();

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);

  return null;
}
