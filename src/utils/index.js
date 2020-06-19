export const shuffleArray = (array) => {
  return Array.from(array).sort(() => 0.5 - Math.random());
};
