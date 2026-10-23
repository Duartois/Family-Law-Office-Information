import { SITE } from '../config/site';

/** Etiqueta [REVISAR] para textos novos que ainda precisam da aprovação das advogadas. */
export default function ReviewMarker() {
  if (!SITE.showReviewMarkers) return null;

  return (
    <span className="mr-2 inline-block rounded bg-bordo px-1.5 py-0.5 align-middle text-[0.65rem] font-bold uppercase leading-none tracking-wide text-white">
      [REVISAR]
    </span>
  );
}
