document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".tab-content");

    function showContent(id) {
        contents.forEach(content => content.style.display = "none");
        document.getElementById(id + "-content").style.display = "block";
    }

    tabs.forEach(tab => {
        tab.addEventListener("change", function() {
            showContent(this.id);
        });
    });
    
    document.getElementById("html").checked = true;
    showContent("html");
});