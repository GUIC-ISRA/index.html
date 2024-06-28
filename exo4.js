function nombre() {
    var texte = document.getElementById('comments').value;
    document.getElementById('count').value =texte.length
    return false;
}
document.getElementById('theForm').onsubmit = nombre;