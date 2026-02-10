window.onload = () => {
    setTimeout(() => {
        document.getElementById("splash-screen").classList.add("hidden");
        document.getElementById("app").classList.remove("hidden");
    }, 2000);
};

function generate() {
    const text = document.getElementById("prompt").value;
    document.getElementById("output").innerHTML = 
        "<h3>Hasil:</h3><p>" + text + "</p>";
}
