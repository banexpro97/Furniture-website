function validation(){
var name = document.SMforma.imeprezime.value;
var email = document.SMforma.email.value;
var poruka = document.SMforma.porudzbina.value;

    if ( name.length < 6){
        document.getElementById('imp').style.borderColor = "red"
        alert('Ime i prezime moraju da imaju najmanje 6 karaktera!');
        event.preventDefault();
    }
    else{
        document.getElementById('imp').style.borderColor = "green"

    }
    if (email.length < 6){
        document.getElementById('em').style.borderColor = "red"
        alert('Mail ili broj telefona moraju da imaju najmanje 6 karaktera!');
        event.preventDefault();
    }
    else {
        document.getElementById('em').style.borderColor = "green"

    }
    if (poruka.length < 20) {
        document.getElementById('por').style.borderColor = "red"
        alert('Poruka mora da sadrzi najmanje 20 karaktera!');
        event.preventDefault();
    }
    else {
        document.getElementById('por').style.borderColor = "green"

    }
}