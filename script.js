const fromCurrency = document.getElementById('from-currency');
const toCurrency = document.getElementById('to-currency');
const amountInput = document.getElementById('amount');
const swapBtn = document.getElementById('swap-btn');
const rateInfo = document.getElementById('rate-info');
const resultAmount = document.getElementById('result');
const convertBtn = document.querySelector('.convert-btn');
const lastUpdated = document.getElementById('last-updated');
const fromSymbol = document.getElementById('from-symbol');

// Store rates to avoid multiple API calls for the same base currency
let rates = {};
let currentBase = 'USD';

// Common currency symbols map
const currencySymbols = {
    USD: '$', EUR: '€', GBP: '£', JPY: '¥', AUD: 'A$', CAD: 'C$', 
    CHF: 'CHF', CNY: '¥', HKD: 'HK$', NZD: 'NZ$', SEK: 'kr', KRW: '₩', 
    SGD: 'S$', NOK: 'kr', MXN: '$', INR: '₹', RUB: '₽', ZAR: 'R', 
    TRY: '₺', BRL: 'R$', TWD: 'NT$', DKK: 'kr', PLN: 'zł', THB: '฿', 
    IDR: 'Rp', HUF: 'Ft', CZK: 'Kč', ILS: '₪', CLP: '$', PHP: '₱', 
    AED: 'د.إ', COP: '$', SAR: '﷼', MYR: 'RM', RON: 'lei'
};

// Top traded currencies to show first
const topCurrencies = ['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY', 'INR'];

async function fetchCurrencies() {
    try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/USD`);
        const data = await response.json();
        
        rates = data.rates;
        populateSelect(data.rates);
        updateLastUpdated(data.time_last_updated);
        calculate();
    } catch (error) {
        console.error("Error fetching currencies:", error);
        rateInfo.textContent = "Error fetching rates. Please try again.";
    }
}

function getCurrencyName(code) {
    try {
        let displayNames = new Intl.DisplayNames(['en'], { type: 'currency' });
        return displayNames.of(code);
    } catch (e) {
        return code;
    }
}

function populateSelect(ratesData) {
    const currencies = Object.keys(ratesData);
    
    // Sort so top currencies are at the top, then alphabetically
    currencies.sort((a, b) => {
        const aTop = topCurrencies.indexOf(a);
        const bTop = topCurrencies.indexOf(b);
        if (aTop !== -1 && bTop !== -1) return aTop - bTop;
        if (aTop !== -1) return -1;
        if (bTop !== -1) return 1;
        return a.localeCompare(b);
    });

    let optionsHTML = '';
    currencies.forEach(currency => {
        const name = getCurrencyName(currency);
        optionsHTML += `<option value="${currency}">${currency} - ${name}</option>`;
    });

    fromCurrency.innerHTML = optionsHTML;
    toCurrency.innerHTML = optionsHTML;

    // Set defaults
    fromCurrency.value = 'USD';
    toCurrency.value = 'EUR';
    updateSymbol();
}

async function calculate() {
    const from = fromCurrency.value;
    const to = toCurrency.value;
    let amount = parseFloat(amountInput.value);

    if (isNaN(amount)) amount = 0;

    // If base currency changed, fetch new rates
    if (from !== currentBase) {
        try {
            document.querySelector('.glass-panel').classList.add('loading');
            const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
            const data = await response.json();
            rates = data.rates;
            currentBase = from;
            updateLastUpdated(data.time_last_updated);
            document.querySelector('.glass-panel').classList.remove('loading');
        } catch (error) {
            console.error("Error fetching rates:", error);
            document.querySelector('.glass-panel').classList.remove('loading');
            return;
        }
    }

    const rate = rates[to];
    const converted = amount * rate;

    // Format numbers nicely
    const formatOptions = { maximumFractionDigits: 2, minimumFractionDigits: 2 };
    
    // Some currencies don't use decimals (like JPY)
    if (to === 'JPY' || to === 'KRW') {
        formatOptions.maximumFractionDigits = 0;
        formatOptions.minimumFractionDigits = 0;
    }

    resultAmount.innerHTML = `${converted.toLocaleString('en-US', formatOptions)} <span class="to-currency-code">${to}</span>`;
    rateInfo.textContent = `1 ${from} = ${rate.toLocaleString('en-US', {maximumSignificantDigits: 6})} ${to}`;
}

function updateLastUpdated(timestamp) {
    const date = new Date(timestamp * 1000);
    lastUpdated.textContent = date.toLocaleString();
}

function updateSymbol() {
    const from = fromCurrency.value;
    fromSymbol.textContent = currencySymbols[from] || from;
}

// Event Listeners
fromCurrency.addEventListener('change', () => {
    updateSymbol();
    calculate();
});
toCurrency.addEventListener('change', calculate);

amountInput.addEventListener('input', calculate);

swapBtn.addEventListener('click', () => {
    const temp = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;
    updateSymbol();
    calculate();
});

convertBtn.addEventListener('click', (e) => {
    e.preventDefault();
    calculate();
    
    // Add a slight pulse animation to button on click
    convertBtn.style.transform = 'scale(0.98)';
    setTimeout(() => {
        convertBtn.style.transform = '';
    }, 150);
});

// Initial fetch
fetchCurrencies();
