export function lookupName(name) {
  return { 
        armas: 'Armas',
        explosivo: 'Explosivo',
        granadas: 'Granadas',
        pirotecnico: 'Pirotecnico',
        goldenretriever: 'Golden Retriever',
        husky: 'Husky',
        dalmatian: 'Dalmatian',
        beagle: 'Beagle'
      }[name] || name;
}