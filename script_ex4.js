if (document.getElementById("txt").style.display = "block") {
    document.getElementById("btn").onclick = function () {
        document.getElementById("txt").style.display = "none";
        }
}
else {
    document.getElementById("btn").onclick = function () {
        document.getElementById("txt").style.display = "block";
    }
};