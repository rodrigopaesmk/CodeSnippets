const container = document.querySelector(".toast-container");

    function showToast(message, type = "info") {
        const toast = document.createElement("div");
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <span>${message}</span>
            <span class="toast-close">&times;</span>
        `;

        container.appendChild(toast);

        // Remover manualmente
        toast.querySelector(".toast-close").addEventListener("click", () => closeToast(toast));

        // Remover automaticamente após 4s
        setTimeout(() => closeToast(toast), 4000);
    }

    function closeToast(toast) {
        toast.style.animation = "slideOut 0.4s forwards";
        setTimeout(() => toast.remove(), 400); // remove depois da animação
    }