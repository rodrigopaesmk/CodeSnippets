let progress = 0;
        const circle = document.getElementById("progressCircle");
        const value = document.getElementById("progressValue");
        const label = document.getElementById("loaderLabel");

        function startLoading(speed = 50) {
            let interval = setInterval(() => {
                progress++;

                // Atualiza o texto
                value.textContent = progress + "%";

                // Atualiza o círculo (3.6° por %)
                let angle = progress * 3.6;
                circle.style.background = `conic-gradient(#4caf50 ${angle}deg, #333 ${angle}deg)`;

                // Texto final
                if (progress >= 100) {
                    clearInterval(interval);
                    label.textContent = "Concluído!";
                }
            }, speed);
        }

        startLoading(40); // velocidade do carregamento