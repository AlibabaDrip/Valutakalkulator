async function calculate() {
  const usdAmount = parseFloat(document.getElementById('usdAmount').value);
  const fromCurrency = document.getElementById('fromCurrency').value;
  const toCurrency = document.getElementById('toCurrency').value;

  
  // Fetch exchange rate data
  const response = await fetch(`https://v6.exchangerate-api.com/v6/79082c6a1a96767e7a75f33a/latest/${fromCurrency}`);
  const data = await response.json();
  const exchangeRate = data.conversion_rates[toCurrency];

  const result = usdAmount * exchangeRate;

  // Display the result in the result container
  const resultContainer = document.getElementById('result-container');
  resultContainer.textContent = `Result: ${result.toFixed(2)} ${toCurrency}`;

  
}




