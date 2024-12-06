const esp32IP = "http://192.168.1.105"; 

let pesoMin, pesoMed, pesoMax;

document.addEventListener("DOMContentLoaded", function () {
    // Recuperando os valores do localStorage
    pesoMin = localStorage.getItem("pesoMin");
    pesoMed = localStorage.getItem("pesoMed");
    pesoMax = localStorage.getItem("pesoMax");

    // Verificando se os valores existem
    if (pesoMin && pesoMed && pesoMax) {
        console.log(`Peso Mínimo: ${pesoMin} kg`);
        console.log(`Peso Médio: ${pesoMed} kg`);
        console.log(`Peso Máximo: ${pesoMax} kg`);

        alterarLed();
    } else {
        console.log("Nenhum valor de peso foi armazenado.");
    }
});


    // Função para buscar o peso do ESP32
async function buscarPeso() {
        try {
          const response = await fetch(`${esp32IP}/peso`);
          if (!response.ok) throw new Error("Erro na resposta do servidor");
      
          const data = await response.json();
      
          // Converte o peso em gramas para float
          const pesoGramas = parseFloat(data.peso_gramas).toFixed(2); // Duas casas decimais
      
          console.log(`Peso em gramas: ${pesoGramas} g`);

          // Atualiza o valor no DOM (se necessário)
          
            
          // Retorna o peso em gramas
          return parseFloat(pesoGramas); // Retorna como float
        } catch (error) {
          console.error("Erro ao buscar dados:", error);
          
      
          // Retorna um valor padrão ou lança o erro novamente
          return null;
        }
    }
     
     async function alterarLed() {
        const peso = await buscarPeso(); 
        
        console.log("peso no alterar led", pesoMin);
        if (peso !== null) {
            const led = document.getElementById("led1"); // Supondo que o ID do LED seja "led1"
            console.log("peso no alterar led", peso);
            // Lógica para alterar a cor do LED com base no peso
            if (peso < pesoMin) {
                led.style.backgroundColor = 'rgb(255, 0, 0)'; // Vermelho

            } else if (peso >= pesoMin && peso <= pesoMax) {
                led.style.backgroundColor = 'rgb(255, 255, 0)'; // Amarelo

            } else if (peso > pesoMax) {
                led.style.backgroundColor = 'rgb(70, 255, 9)'; // Verde

            }
        } else {
            console.log("Erro ao obter o peso, LED não alterado.");
        }
    }
   
    
      