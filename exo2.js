function resultat(){
    var firstname=document.getElementById('firstName').value;
    var lastname=document.getElementById('lastName').value;
    var completname;
    completname=lastname +" "+ firstname;
    document.getElementById('result').value=completname;
    return false;
}
document.getElementById('theForm').onsubmit=resultat;