function SetActiveTab(name) {
    var content = document.getElementById(name);
    if(content != null){
        content.classList.add('active');
        
    }
    if(name != "gamesButton"){
        var gamesbttn = document.getElementById("gamesButton");
        gamesbttn.classList.add('dropbtn');
        content.removeAttribute("href")
    }   
}
