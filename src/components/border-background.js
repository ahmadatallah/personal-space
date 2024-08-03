export function generateRandomBorderRadius() {
  // Helper function to get a random percentage between a specified range
  const getRandomPercentage = (min, max) =>
    `${Math.floor(Math.random() * (max - min + 1)) + min}%`;

  // Generate consistent border-radius values for right and left sides
  const rightPercentage = getRandomPercentage(60, 80); // More balanced range for right side
  const leftPercentage = getRandomPercentage(60, 80); // More balanced range for left side

  // Construct the border-radius CSS value
  const borderRadius = `${leftPercentage} ${rightPercentage} ${rightPercentage} ${leftPercentage}`;

  return borderRadius;
}
