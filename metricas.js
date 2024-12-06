const esp32IP = "http://192.168.1.105:80";

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".weight-form");

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Impede o envio do formulário

        try {
            // Atribuindo valores aos dados globais
            const pesoMin = parseFloat(document.getElementById("min-weight").value);
            const pesoMed = parseFloat(document.getElementById("avg-weight").value);
            const pesoMax = parseFloat(document.getElementById("max-weight").value);

            // Salvando os valores no localStorage
            localStorage.setItem("pesoMin", pesoMin);
            localStorage.setItem("pesoMed", pesoMed);
            localStorage.setItem("pesoMax", pesoMax);

            // Exibindo os valores no console (para teste)
            console.log(`Peso Mínimo: ${pesoMin} kg`);
            console.log(`Peso Médio: ${pesoMed} kg`);
            console.log(`Peso Máximo: ${pesoMax} kg`);

            // Esperando a função enviarMetricas ser concluída
            await enviarMetricas(pesoMin, pesoMed, pesoMax);

            // Aqui você pode colocar qualquer ação após a função ser concluída
            console.log("Métricas enviadas com sucesso!");
            alert("Métricas enviadas com sucesso!");

        } catch (error) {
            // Tratando qualquer erro que ocorra durante o envio
            console.error("Erro ao enviar métricas:", error);
            alert("Erro ao enviar as métricas. Por favor, tente novamente.")
        }
    });
});

async function enviarMetricas(minimo, medio, maximo) {
    
    const dadosMetricas = {
        pesoMin: minimo,
        pesoMed: medio,
        pesoMax: maximo
    };

    try {
        // Enviando as métricas para o ESP32 usando uma requisição POST
        const response = await fetch(`${esp32IP}/configurarPesos`, {
            method: 'POST', // Método HTTP para enviar dados
            headers: {
                'Content-Type': 'application/json', // Definindo o tipo de conteúdo como JSON
            },
            body: JSON.stringify(dadosMetricas) // Enviando os dados como JSON
        });

        // Verificando se a resposta foi bem-sucedida
        if (!response.ok) {
            throw new Error("Erro ao enviar as métricas para o ESP32.");
        }

        // Exibindo sucesso no console
        console.log("Métricas enviadas com sucesso para o ESP32.");
        const data = await response.json();
        console.log("Resposta do servidor:", data);

    } catch (error) {
        console.error("Erro ao enviar as métricas:", error);
    }
}






// Search logic
let click = 0; // Variável para rastrear o estado de clique
document.getElementById("pesquisar").addEventListener("click", function (event) {
    event.preventDefault(); // Evita o comportamento padrão do link

    const input = document.getElementById("searchInput");
    const button = document.getElementById("SearchButton");

    if (click === 0) {
        // Remove a classe "a" do input e botão
        input.classList.remove("hidden");
        button.classList.remove("hidden");
        click = 1; // Atualiza o estado
    } else {
        // Adiciona a classe "a" ao input e botão
        input.classList.add("hidden");
        button.classList.add("hidden");
        click = 0; // Atualiza o estado
    }
});