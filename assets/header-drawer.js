class HeaderDrawer extends HTMLElement{
    constructor(){
        super();

        this.menuContainer = document.querySelector('#menu-drawer');
        this.menuDrawerToggle = document.querySelector('#mobile-menu');
        this.menuDrawerOverlay = document.querySelector('#menu-drawer-overlay');

        this.initEventListeners();
        
    }

    initEventListeners(){
        this.menuDrawerToggle.addEventListener('click', this.toggle.bind(this));
        this.menuDrawerOverlay.addEventListener('click', this.toggle.bind(this));
        
        
    }

    isOpen(){
       return document.body.hasAttribute('menu-open');
    }

  

    toggle(){
        const toggle = this.isOpen();
        
        // this.isOpen = !toggle ? this.menuDrawerToggle.setAttribute('open', '') : this.menuDrawerToggle.removeAttribute('open');
        if(!toggle){
            document.body.setAttribute('menu-open', '');
            this.menuDrawerToggle.setAttribute('open', '');
            this.menuContainer.classList.add('show');
            this.menuDrawerOverlay.classList.remove('after:hidden');
            document.body.style.overflow = 'hidden';
            
        }else{
            document.body.removeAttribute('menu-open');
            this.menuDrawerToggle.removeAttribute('open');
            this.menuContainer.classList.remove('show');
            this.menuDrawerOverlay.classList.add('after:hidden');
            document.body.style.overflow = 'auto';
        }

    
    }







}


customElements.define('header-drawer', HeaderDrawer);