
function encryptPassword(){
    alert(window.btoa($('#password').val()))
    $('#password').val(window.btoa($('#password').val()));
}

function decodePassword(string){
    return window.atob(string);
}