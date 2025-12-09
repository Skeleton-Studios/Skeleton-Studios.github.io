class SpecialHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML =
        `
        <div class="navbar">
            <div class="dropdown">
                <button id="gamesButton" onclick="ClickFunction()">GAMES</button>
                <div class="dropdown-content">
                    <a id="oyh" href="On_Your_Hands.html#main">ON YOUR HANDS</a>
                    <a id="wto" href="Welcome_To_Ooblterra.html#main">WELCOME TO OOBLTERRA</a>
                    <a id="deltaP" href="Delta_Perspective.html#main">DELTA PERSPECTIVE</a>
                    <a id="freezer" href="Project_Freezer.html">UPCOMING PROJECTS</a>
                </div>
            </div> 
            <div id= "hiddenDropDown1" class="collapsed">
                <a href="On_Your_Hands.html#main" class="uncollapsed">ON YOUR HANDS</a>
                <a href="Welcome_To_Ooblterra.html" class="uncollapsed">WELCOME TO OOBLTERRA</a>
                <a href="Delta_Perspective.html#main">DELTA PERSPECTIVE</a>
                <a href="Project_Freezer.html">UPCOMING PROJECTS</a>
            </div>
            <a id="about" href="index.html">ABOUT</a>
            <a id="newsletter" href="devlog.html">NEWSLETTER</a>
            <a id="contact" href="contact.html">CONTACT</a>
        </div>
        ` 
    }
}

customElements.define('special-header', SpecialHeader)