export function generateRandomBorderRadius() {
  // Helper function to get a random percentage between 0% to 100%
  const getRandomPercentage = () => `${Math.floor(Math.random() * 101)}%`;

  // Generate border-radius values for each corner
  const topLeft = getRandomPercentage();
  const topRight = getRandomPercentage();
  const bottomRight = getRandomPercentage();
  const bottomLeft = getRandomPercentage();

  // Construct the border-radius CSS value
  const borderRadius = `${topLeft} ${topRight} ${bottomRight} ${bottomLeft}`;

  return borderRadius;
}
