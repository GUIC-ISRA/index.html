function volumes(){

    var R= Number(document.getElementById('rayon').value);
    var solution = Number((4/3) * R * R * R * 3,14);
    solution=solution.toFixed(2);
    document.getElementById('volume').value = solution;
    return false;
}
document .getElementById('theForm').onsubmit = volumes;