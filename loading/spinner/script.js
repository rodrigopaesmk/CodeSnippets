const container = document.querySelector(".toast-container");

    // Dados realistas
    const nomes = ["Marcos", "Ana", "Fernanda", "Lucas", "Patrícia", "Rogério", "Vitor", "Camila", "Nathalia", "Eduardo"];
    const cidades = ["São Paulo", "Rio de Janeiro", "Curitiba", "Belo Horizonte", "Fortaleza", "Salvador", "Goiânia", "Florianópolis"];
    const fotos = [
        "https://randomuser.me/api/portraits/men/12.jpg",
        "https://randomuser.me/api/portraits/women/44.jpg",
        "https://randomuser.me/api/portraits/men/32.jpg",
        "https://randomuser.me/api/portraits/women/68.jpg",
        "https://randomuser.me/api/portraits/men/85.jpg"
    ];

    /**
     * Toast Premium com loop automático
     */
    function showToastPremium(delay = 4000, loop = true) {

        function createToast() {
            const toast = document.createElement("div");
            toast.className = "toast";

            // sorteios
            const nome = nomes[Math.floor(Math.random() * nomes.length)];
            const cidade = cidades[Math.floor(Math.random() * cidades.length)];
            const foto = fotos[Math.floor(Math.random() * fotos.length)];

            toast.innerHTML = `
                <img src="${foto}">
                <div>
                    <strong>${nome} – ${cidade}</strong>
                    Acabou de comprar este produto 🔥
                </div>
            `;

            container.appendChild(toast);

            // Remover após X segundos
            setTimeout(() => removeToast(toast), delay);
        }

        function removeToast(toast) {
            toast.style.animation = "slideOut 0.6s forwards";
            setTimeout(() => toast.remove(), 600);

            if (loop) {
                // Reaparece depois de 2s
                setTimeout(() => createToast(), 2000);
            }
        }

        createToast();
    }

    // Executa automaticamente, infinitamente
    showToastPremium(3500, true);