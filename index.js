document.getElementById('reservation-form').addEventListener('submit', function(e) {
    e.preventDefault();  // Impede o envio do formulário

    // Captura os dados do formulário
    const plate = document.getElementById('plate').value;
    const owner = document.getElementById('owner').value;
    const apartment = document.getElementById('apartment').value;
    const block = document.getElementById('block').value;
    const model = document.getElementById('model').value;
    const color = document.getElementById('color').value;
    const parkingSpot = document.getElementById('parking-spot').value;

    // Exibe os dados no console
    console.log(`Placa: ${plate}, Proprietário: ${owner}, Apartamento: ${apartment}, Bloco: ${block}, Modelo: ${model}, Cor: ${color}, Vaga: ${parkingSpot}`);

    // Exibe um pop-up de confirmação
    alert('Cadastro realizado com sucesso!');
});
