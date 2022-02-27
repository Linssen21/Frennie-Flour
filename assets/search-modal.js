class SearchModal {
    constructor(){
        // console.log('test Search Modal')
        this.searchModalContainer = document.querySelector('#search-modal');
        this.searchModalToggle = document.querySelector('#search-toggle');
        this.closeSearchModalBtn = document.querySelector('#close-search-modal');
        this.setupEventListeners();
    }
    setupEventListeners(){
        this.searchModalContainer.addEventListener('keyup', (event) => event.code.toUpperCase() === 'ESCAPE' && this.close());
        this.searchModalToggle.addEventListener('click', this.open.bind(this));
        this.closeSearchModalBtn.addEventListener('click', this.close.bind(this));
    }
    open(){
        this.searchModalContainer.style.display = 'block';
        this.searchModalContainer.querySelector('input[type="search"]').focus();
        document.body.style.overflow = 'hidden';
    }
    close(){
        console.log('close')
        this.searchModalContainer.style.display = 'none';
        document.body.style.overflow = 'initial';
    }
}

const searchModal = new SearchModal();