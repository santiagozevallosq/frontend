export function slugify(text) {
  if (!text) return '';
  return text.toString().toLowerCase()
    .normalize('NFD') // separate accents from letters
    .replace(/[\u0300-\u036f]/g, '') // remove those accents
    .replace(/\s+/g, '-') // replace spaces with dashes
    .replace(/[^\w\-]+/g, '') // remove all non-word chars
    .replace(/\-\-+/g, '-') // replace multiple dashes
    .replace(/^-+/, '') // trim starting dash
    .replace(/-+$/, ''); // trim ending dash
}
