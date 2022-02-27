fetch(`${routes.predictive_search_url}.json?q=frennie&resources[type]=product&resources[options][unavailable_products]=hide&resources[options][fields]=title,product_type,variants.title`)
  .then((response) => response.json())
  .then((suggestions) => {
    const productSuggestions = suggestions.resources.results.products;
    console.log(productSuggestions);
    if (productSuggestions.length > 0) {
      const firstProductSuggestion = productSuggestions[0];

      console.log(`The title of the first product suggestion is: ${
        firstProductSuggestion.title}`
      );
    }
  }
);

/**
 * 
 * @param {Function} func 
 * @param {Number} timeout 
 * @description forces a function to wait a certain amount of time before running again 
 * @link https://www.freecodecamp.org/news/javascript-debounce-example/
 */
function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), timeout);
  };
}