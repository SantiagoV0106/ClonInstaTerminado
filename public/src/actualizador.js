import * as components from "./components/index.js"

class AppContainer extends HTMLElement{
    constructor (){
        super();
        this.attachShadow({mode:'open'})
    }

    connectedCallback(){
        this.render();
    }
    
    render (){
        this.shadowRoot.innerHTML = `<my-post
        post="./Elementos/Narutochikito.jpg"
        fotoperfil="./Elementos/Fotoperfil.jpg"
        vistas="10 views"
        desc="narutofan69"
        comment="View all 5 comments"
        date="2 DAYS AGO"
        usarname="narutofan69"
        ></my-post>`
}

}

customElements.define('app-container', AppContainer);
