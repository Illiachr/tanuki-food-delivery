const AND_JOINER = ' and ';

const capitalizeWord = (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

const formatString = (input) => {
  const words = input.split('-');
  return words
      .map(capitalizeWord)
      .join(' ');
}

const formatMeals = (meals) => meals
  .map(capitalizeWord)
  .join(AND_JOINER);

const findProviderData = (data, queryVal) => data.find(
  ({name}) => name.toLowerCase() === formatString(queryVal).toLowerCase());

export {
  capitalizeWord,
  formatString,
  formatMeals,
  findProviderData
}