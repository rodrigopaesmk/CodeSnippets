let progress = 0;
        const finalValue = 90;  // termina em 90%
        const fill = document.getElementById("progressFill");
        const valueText = document.getElementById("progressValue");

        function startBar(speed = 40) {
            let timer = setInterval(() => {
                progress++;

                fill.style.height = progress + "%";
                valueText.textContent = progress + "%";

                if (progress >= finalValue) {
                    clearInterval(timer);
                }

            }, speed);
        }

        startBar(30); // velocidade da animação