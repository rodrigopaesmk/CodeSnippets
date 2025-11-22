  // Simulação de carregamento
    setTimeout(() => {
        const card = document.getElementById("card");
        
        const skeleton = card.querySelector(".skeleton-wrapper");
        const content = card.querySelector(".content");

        skeleton.style.display = "none";
        content.style.display = "block";
        
    }, 2500); // tempo de carregamento