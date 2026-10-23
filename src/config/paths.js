// Caminhos públicos do site (uma lista só, sem JSX, para poder ser lida também
// pelos scripts de build que geram sitemap.xml e robots.txt).
import { AREAS } from '../content/areas.js';

export const areaPath = (slug) => `/${slug}`;

export const ROUTE_PATHS = ['/', '/saque-fgts-doenca-grave', ...AREAS.map((area) => areaPath(area.slug))];
