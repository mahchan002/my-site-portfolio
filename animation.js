
            // Seletor do botão de hambúrguer e do menu de navegação
            var hamburger = document.querySelector(".hamburger");
            var navmenu = document.querySelector(".nav-menu");
            var navitem = document.querySelector(".nav-item")
            // Obtém uma referência para o elemento navbar


            // Adiciona um evento de clique ao botão de hambúrguer
            hamburger.addEventListener("click", () => {
                // Adiciona/remova a classe 'active' para alternar o menu
                hamburger.classList.toggle('active');
                navmenu.classList.toggle('active');
            });

            const slideContainer = document.querySelector(".slide-container");
            let scrollPosition = 0; // Inicializa a posição de rolagem
        
            // Função para rolar automaticamente
            function autoScroll() {
                if (scrollPosition < slideContainer.scrollWidth - slideContainer.clientWidth) {
                    scrollPosition += slideContainer.clientWidth; // Incrementa a posição de rolagem
                } else {
                    scrollPosition = 0; // Volta ao início quando chegar ao final
                }
                slideContainer.scrollTo({ left: scrollPosition, behavior: "smooth" });
            }
        
            // Inicia a rolagem automática a cada 3 segundos (3000 milissegundos)
            setInterval(autoScroll, 3000);