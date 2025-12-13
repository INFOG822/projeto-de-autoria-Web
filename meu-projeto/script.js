// BOTÃO DE MODO ESCURO
const botaoModo = document.getElementById("modo");

botaoModo.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        botaoModo.textContent = "Modo claro";
    } else {
        botaoModo.textContent = "Modo escuro";
    }
});

// MOSTRAR/ESCONDER RESUMO
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    const texto = card.querySelector("p");

    const btn = document.createElement("button");
    btn.textContent = "Mostrar resumo";
    btn.style.marginTop = "10px";
    btn.style.padding = "6px 12px";
    btn.style.border = "none";
    btn.style.backgroundColor = "#b18b5e";
    btn.style.color = "white";
    btn.style.borderRadius = "4px";
    btn.style.cursor = "pointer";

    card.appendChild(btn);

    btn.addEventListener("click", () => {
        texto.style.display = texto.style.display === "none" ? "block" : "none";
        btn.textContent = btn.textContent === "Mostrar resumo" ? "Ocultar resumo" : "Mostrar resumo";
    });

    texto.style.display = "none";
});
