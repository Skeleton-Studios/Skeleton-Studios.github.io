class SpecialHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML =
        `
        <div class="navbar">
            <div class="dropdown">
                <button class="dropbtn-active" onclick="ClickFunction()">GAMES</button>
                <div class="dropdown-content">
                    <a href="On_Your_Hands.html#main">ON YOUR HANDS</a>
                    <a href="Welcome_To_Ooblterra.html#main">Welcome To Ooblterra!</a>
                    <a href="Delta_Perspective.html#main">Delta Perspective</a>
                    <a href="Project_Freezer.html">Upcoming Projects...</a>
                </div>
            </div> 
            <div id= "hiddenDropDown1" class="collapsed">
                <a href="On_Your_Hands.html#main" class="uncollapsed">ON YOUR HANDS</a>
                <a href="Welcome_To_Ooblterra.html" class="uncollapsed">Welcome To Ooblterra!</a>
                <a href="Delta_Perspective.html" class="uncollapsed">Delta Perspective</a>
                <a href="Project_Freezer.html" class="uncollapsed">Upcoming Projects...</a>
            </div>
            <a href="index.html">ABOUT</a>
            <a href="devlog.html">NEWSLETTER</a>
            <a href="contact.html">CONTACT</a>
        </div>
        ` 
    }
}

customElements.define('special-header', SpecialHeader)