const usdRate = 89;
const eurRate = 96;

const somInput = document.getElementById('som');
const usdInput = document.getElementById('usd');
const eurInput = document.getElementById('eur');

somInput.addEventListener('input', () => {
const som = parseFloat(somInput.value);
usdInput.value = (som / usdRate).toFixed(2);
eurInput.value = (som / eurRate).toFixed(2);
});

usdInput.addEventListener('input', () => {
const usd = parseFloat(usdInput.value);
const som = usd * usdRate;
somInput.value = som.toFixed(2);
eurInput.value = (som / eurRate).toFixed(2);
});

eurInput.addEventListener('input', () => {
const eur = parseFloat(eurInput.value);
const som = eur * eurRate;
somInput.value = som.toFixed(2);
usdInput.value = (som / usdRate).toFixed(2);
});