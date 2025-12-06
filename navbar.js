function ShowDropdownMobile() {
    var content = document.getElementById('hiddenDropDown1');
    if(window.innerWidth > 600){
        return;
    } 
    if (content.classList.contains('collapsed')) {
        content.classList.remove('collapsed');
        return;
    }  
    content.classList.add('collapsed');
}