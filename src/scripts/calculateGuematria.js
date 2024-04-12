// Tabela de correspondência entre letras do alfabeto moderno e valores numéricos do Alfabeto Hebraico
const tabelaCorrespondencia = {
    'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5,
    'F': 6, 'G': 7, 'H': 8, 'I': 9, 'J': 1,
    'K': 2, 'L': 3, 'M': 4, 'N': 5, 'O': 6,
    'P': 7, 'Q': 8, 'R': 9, 'S': 1, 'T': 2,
    'U': 3, 'V': 4, 'W': 5, 'X': 6, 'Y': 7, 'Z': 8
};

// Adiciona evento ao Botão de Calcular Guematria
calcularBtn.addEventListener('click', () => {
    let texto = textoInput.value.toUpperCase(); // Armazena o texto e transforma em letra maiúscula
    let guematria = 0; // Inicializa a variável Guematria com 0

    for (let letra of texto){
        // Verifica se a letra está na tabela de correspondência
        if (letra in tabelaCorrespondencia) {
            guematria += tabelaCorrespondencia[letra]; // Adiciona o valor da letra à guematria
        }
    }

    alert(`O valor das letras são: ${guematria}`); // Exibe o resultado da guematria
});
