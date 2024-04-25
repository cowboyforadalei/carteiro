document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("tracking-form");
    const resultDiv = document.getElementById("result");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const trackingCode = document.getElementById("tracking-code").value.trim();
        if (trackingCode !== "") {
            trackPackage(trackingCode);
        }
    });

    function trackPackage(trackingCode) {
        // Aqui você faria uma requisição à sua API de rastreamento de encomendas
        // Substitua esta parte pelo código de chamada à API real

        // Exemplo de resposta simulada
        const mockApiResponse = {
            status: "Em trânsito",
            location: "Centro de Distribuição",
            estimatedDelivery: "25/04/2024"
        };

        displayResult(mockApiResponse);
    }

    function displayResult(response) {
        resultDiv.innerHTML = `
            <p>Status: ${response.status}</p>
            <p>Localização: ${response.location}</p>
            <p>Entrega estimada: ${response.estimatedDelivery}</p>
        `;
    }
});
