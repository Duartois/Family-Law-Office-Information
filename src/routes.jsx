import Home from './pages/Home';
import FgtsDoencaGrave from './pages/FgtsDoencaGrave';
import AreaPage from './pages/AreaPage';
import { AREAS } from './content/areas';
import { areaPath } from './config/paths';

// Todas as páginas do site. A pré-renderização e o sitemap leem esta mesma lista
// (os caminhos vêm de src/config/paths.js), então uma página nova entra nos três.
export const routes = [
  { path: '/', element: <Home /> },
  { path: '/saque-fgts-doenca-grave', element: <FgtsDoencaGrave /> },
  ...AREAS.map((area) => ({ path: areaPath(area.slug), element: <AreaPage area={area} /> })),
];
