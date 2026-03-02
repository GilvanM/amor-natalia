document.getElementById("revealBtn").addEventListener("click", function() {
    document.getElementById("loveMessage").classList.add("show");
    document.getElementById("clickHint").style.display = "none";
    this.style.display = "none";
});