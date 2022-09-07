function sub(){
    var form=document.getElementById("form");
    var section=document.getElementById("results");
    form.style.display="none";
    section.style.display="block"
    var menRadios = document.getElementsByName('mentype');
    for (var radio of menRadios)
    {
        if (radio.checked) {
            document.getElementById('as').innerHTML = radio.value;
        }
    }
    document.getElementById('name').innerHTML = document.getElementById("lname").value;
    var geRadios = document.getElementsByName('gender');
    for (var radio of geRadios)
    {
        if (radio.checked) {
            document.getElementById('gen').innerHTML = radio.value;
        }
    }

    document.getElementById('ag2').innerHTML = document.getElementById("age").value;
    document.getElementById('nc').innerHTML = document.getElementById("natcode").value;
    document.getElementById('phn').innerHTML = document.getElementById("phone").value;
    document.getElementById('ema').innerHTML = document.getElementById("email").value;

}
