import { createContext } from 'react';

// Só existe durante a pré-renderização: o build entrega uma função que recebe o SEO
// (title, description, ...) da página renderizada. No navegador o valor é null.
export const HeadContext = createContext(null);
