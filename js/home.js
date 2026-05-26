document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btn-test");
    if (btn) {
        btn.addEventListener("click", () => {
            alert("🔔 ¡De dos a tres caídas sin límite de tiempo! (suena la campana)");
        });
    }
});