let exitShown = false;

        function showExitPopup() {
            if (!exitShown) {
                document.getElementById("exitOverlay").style.display = "flex";
                exitShown = true;
            }
        }

        function closeExitPopup() {
            document.getElementById("exitOverlay").style.display = "none";
        }

        // Detecta intenção de saída pelo mouse indo ao topo
        document.addEventListener("mouseleave", (e) => {
            if (e.clientY <= 0) {
                showExitPopup();
            }
        });

        // Botão X
        document.getElementById("closeBtn").onclick = closeExitPopup;

        // Fechar ao clicar fora do popup
        document.getElementById("exitOverlay").addEventListener("click", function(e) {
            const popup = document.getElementById("exitPopup");
            if (!popup.contains(e.target)) {
                closeExitPopup();
            }
        });