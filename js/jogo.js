const perguntas = [
            { pergunta: "Jack, o Estripador nunca teve sua identidade descoberta.", resposta: true },
            { pergunta: "A Rainha Elizabeth II possuía apenas dois corgis ao longo da vida.", resposta: false },
            { pergunta: "O Big Ben é o nome do sino, não do relógio.", resposta: true },
            { pergunta: "Stonehenge foi construído há cerca de 5.000 anos.", resposta: true },
            { pergunta: "O fish and chips sempre foi servido em pratos de porcelana.", resposta: false },
            { pergunta: "A Inglaterra criou o primeiro metrô do mundo.", resposta: true },
            { pergunta: "Mr. Bean fala muito nas suas aparições.", resposta: false },
            { pergunta: "A palavra 'computador' foi usada pela primeira vez por Ada Lovelace.", resposta: true },
            { pergunta: "Shakespeare criou mais de 1.700 palavras em inglês.", resposta: true },
            { pergunta: "Os britânicos raramente tomam chá — é uma bebida pouco popular.", resposta: false }
        ];

        let indice = 0;
        let pontos = 0;

        function mostrarPergunta() {
            document.getElementById("pergunta").innerText = perguntas[indice].pergunta;
            document.getElementById("feedback").innerText = "";
            document.getElementById("btnProxima").style.display = "none";
        }

        function responder(respostaUsuario) {
            const correta = perguntas[indice].resposta;

            if (respostaUsuario === correta) {
                pontos++;
                document.getElementById("feedback").innerText = "✔ Resposta correta!";
                document.getElementById("feedback").style.color = "green";
            } else {
                document.getElementById("feedback").innerText = "✘ Resposta errada!";
                document.getElementById("feedback").style.color = "red";
            }

            document.getElementById("pontuacao").innerText = "Pontuação: " + pontos;
            document.getElementById("btnProxima").style.display = "block";
        }

        function proxima() {
            indice++;

            if (indice >= perguntas.length) {
                document.getElementById("pergunta").innerText = "Fim do jogo!";
                document.getElementById("feedback").innerText = "Você acertou " + pontos + " de " + perguntas.length + " perguntas.";
                document.getElementById("btnProxima").style.display = "none";
                return;
            }

            mostrarPergunta();
        }

        // inicializar
        mostrarPergunta();