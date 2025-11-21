const items = document.querySelectorAll('.faq-item');

        items.forEach(item => {
            const question = item.querySelector('.faq-question');

            question.addEventListener('click', () => {
                // Fecha outros itens
                items.forEach(i => {
                    if (i !== item) i.classList.remove('active');
                });

                // Alterna o item clicado
                item.classList.toggle('active');
            });
        });