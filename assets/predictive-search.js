class PredictiveSearch extends HTMLElement{

    /**
     * @description 
     *  - Initialize Search Input and Search Result Container
     *  - Add Input Onchange Listeners
     */
    constructor(){
        super();
        this.input = this.querySelector('input[type="search"]');
        this.predictiveSearchResults = this.querySelector('#predictive-search');
        this.input.addEventListener('input', debounce((event) => {
            this.onChange(event);
          }, 300).bind(this));
    }


  onChange() {
    const searchTerm = this.input.value.trim();
  
    if (!searchTerm.length) {
      this.close();
      return;
    }

    this.getSearchResults(searchTerm);
  }

  /**
   * 
   * @param {String} searchTerm 
   * @description Fetch Data using the Section AJAX Rendering api (section_id=predictive-search)
   * @link  https://shopify.dev/themes/navigation-search/search/predictive-search
   * @link https://shopify.dev/api/section-rendering
   */
  async getSearchResults(searchTerm){

    try {
        const response = await fetch(`${routes.predictive_search_url}?q=${searchTerm}&resources[type]=product,collection,article,page&resources[limit]=4&section_id=predictive-search`);

        if (!response.ok) {
            const responseError = new Error(response.status);
            this.close();
            throw responseError;
        }

        const resultMarkup = new DOMParser().parseFromString(await response.text(), 'text/html').querySelector('#shopify-section-predictive-search').innerHTML;

        this.renderSearchResults(resultMarkup);

    } catch (error) {
        this.close();
        throw error;
    }
   
  }

  renderSearchResults(resultsMarkup) {
    this.predictiveSearchResults.innerHTML = resultsMarkup;
    this.open();
  }

  open() {
    this.predictiveSearchResults.style.display = 'block';
  }

  close() {
    this.predictiveSearchResults.style.display = 'none';
  }

}


customElements.define('predictive-search', PredictiveSearch);