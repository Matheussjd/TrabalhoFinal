function criarJogo(id, palavra, letras, mensagem) {

    const grade = document.getElementById(id);

    let resposta = "";

    letras.forEach(letra => {

        const botao = document.createElement("button");

        botao.textContent = letra;
        botao.classList.add("letra");

        botao.addEventListener("click", () => {

            resposta += letra;

            botao.style.backgroundColor = "#90EE90";

            if (resposta === palavra) {

                document.getElementById(mensagem).innerHTML =
                "✅ Parabéns! Você encontrou a palavra <strong>" +
                palavra +
                "</strong>";

                document.getElementById(mensagem).style.color =
                "green";
            }

            if (!palavra.startsWith(resposta)) {

                document.getElementById(mensagem).innerHTML =
                "❌ Sequência incorreta. Tente novamente.";

                document.getElementById(mensagem).style.color =
                "red";

                resposta = "";

                grade.querySelectorAll("button")
                .forEach(btn => {
                    btn.style.backgroundColor = "";
                });
            }

        });

        grade.appendChild(botao);

    });

}

/* RAPOSA */
criarJogo(
"raposa",
"RAPOSA",
[
"B","L","O","A","C","B","A","B","L","E","O",
"A","B","O","L","O","R","A","P","O","S","A",
"M","N","A","J","R","J","I","C","O","A","P"
],
"msgRaposa"
);

/* BOCA */
criarJogo(
"boca",
"BOCA",
[
"T","A","T","U","T","E","K","A","G","E","M",
"B","A","R","A","N","E","T","E","E","S","C",
"T","W","B","O","C","A","K","A","B","A","O"
],
"msgBoca"
);

/* GATO */
criarJogo(
"gato",
"GATO",
[
"E","D","D","I","N","O","H","G","A","T","O",
"P","A","Ç","C","A","O","L","U","C","Y","K",
"B","E","A","L","L","T","G","R","E","I","S"
],
"msgGato"
);

/* BANANA */
criarJogo(
"banana",
"BANANA",
[
"F","R","T","U","A","F","Z","B","E","M","P",
"S","U","A","E","D","N","U","C","A","C","O",
"P","E","B","A","N","A","N","A","A","R","T"
],
"msgBanana"
);