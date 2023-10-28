export const getUniqueTypes = (events) => {
  const types = events.map((event) => event.type);
  return [...new Set(types)];
}