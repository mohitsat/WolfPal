function chatwindowshow() {
    //document.getElementsByName("chatwindow")[0].style.display = "flex";
    //document.getElementsByName("botbutton")[0].style.display = "none";
    document.getElementsByName("botbutton")[0].style.padding = "0px";
    document.getElementsByName("botbutton")[0].style.border = "0px";
    chatwindowhwnormal();
}
function chatwindowhide() {
    //document.getElementsByName("chatwindow")[0].style.display = "none";
    document.getElementsByName("botbutton")[0].style.display = "block";
    document.getElementsByName("botbutton")[0].style.padding = "10px 25px 10px 25px"
    document.getElementsByName("botbutton")[0].style.border = "5px solid white";
    chatwindowhwzero();
}
function chatwindowhwnormal() {
    document.getElementsByName("chatwindow")[0].style.width = "22%";
    document.getElementsByName("chatwindow")[0].style.height = "100%";
    document.getElementsByName("botbutton")[0].style.width = "0%";
    document.getElementsByName("botbutton")[0].style.height = "0%";
}
function chatwindowhwzero() {
    document.getElementsByName("chatwindow")[0].style.width = "10%";
    document.getElementsByName("chatwindow")[0].style.height = "5%";
    document.getElementsByName("botbutton")[0].style.width = "10%";
    document.getElementsByName("botbutton")[0].style.height = "5%";
}

chatwindowhwzero();