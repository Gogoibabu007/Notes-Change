// Currency Codes to ISO 3166-1 alpha-2 country codes (lowercase)
const currencyFlags = {
  USD: "us", EUR: "eu", GBP: "gb", INR: "in", JPY: "jp", AUD: "au", CAD: "ca", CHF: "ch", CNY: "cn", SEK: "se", NZD: "nz",
  MXN: "mx", SGD: "sg", HKD: "hk", NOK: "no", KRW: "kr", TRY: "tr", RUB: "ru", BRL: "br", ZAR: "za", AED: "ae", AFN: "af",
  ALL: "al", AMD: "am", ANG: "cw", AOA: "ao", ARS: "ar", AWG: "aw", AZN: "az", BAM: "ba", BBD: "bb", BDT: "bd", BGN: "bg",
  BHD: "bh", BIF: "bi", BMD: "bm", BND: "bn", BOB: "bo", BSD: "bs", BTN: "bt", BWP: "bw", BYN: "by", BZD: "bz", CDF: "cd",
  CLP: "cl", COP: "co", CRC: "cr", CUP: "cu", CVE: "cv", CZK: "cz", DJF: "dj", DKK: "dk", DOP: "do", DZD: "dz", EGP: "eg",
  ERN: "er", ETB: "et", FJD: "fj", FKP: "fk", GEL: "ge", GGP: "gg", GHS: "gh", GIP: "gi", GMD: "gm", GNF: "gn", GTQ: "gt",
  GYD: "gy", HNL: "hn", HRK: "hr", HTG: "ht", HUF: "hu", IDR: "id", ILS: "il", IMP: "im", IQD: "iq", IRR: "ir", ISK: "is",
  JEP: "je", JMD: "jm", JOD: "jo", KES: "ke", KGS: "kg", KHR: "kh", KMF: "km", KPW: "kp", KWD: "kw", KYD: "ky", KZT: "kz",
  LAK: "la", LBP: "lb", LKR: "lk", LRD: "lr", LSL: "ls", LYD: "ly", MAD: "ma", MDL: "md", MGA: "mg", MKD: "mk", MMK: "mm",
  MNT: "mn", MOP: "mo", MRU: "mr", MUR: "mu", MVR: "mv", MWK: "mw", MYR: "my", MZN: "mz", NAD: "na", NGN: "ng", NIO: "ni",
  NPR: "np", OMR: "om", PAB: "pa", PEN: "pe", PGK: "pg", PHP: "ph", PKR: "pk", PLN: "pl", PYG: "py", QAR: "qa", RON: "ro",
  RSD: "rs", RWF: "rw", SAR: "sa", SBD: "sb", SCR: "sc", SDG: "sd", SHP: "sh", SLL: "sl", SOS: "so", SRD: "sr", SSP: "ss",
  STN: "st", SVC: "sv", SYP: "sy", SZL: "sz", THB: "th", TJS: "tj", TMT: "tm", TND: "tn", TOP: "to", TTD: "tt", TWD: "tw",
  TZS: "tz", UAH: "ua", UGX: "ug", UYU: "uy", UZS: "uz", VES: "ve", VND: "vn", VUV: "vu", WST: "ws", XAF: "cm", XCD: "ag",
  XOF: "sn", XPF: "pf", YER: "ye", ZMW: "zm", ZWL: "zw"
};

// Full currency names mapping
const currencyNames = {
  USD: "United States Dollar", EUR: "Euro", GBP: "British Pound", INR: "Indian Rupee", JPY: "Japanese Yen",
  AUD: "Australian Dollar", CAD: "Canadian Dollar", CHF: "Swiss Franc", CNY: "Chinese Yuan", SEK: "Swedish Krona",
  NZD: "New Zealand Dollar", MXN: "Mexican Peso", SGD: "Singapore Dollar", HKD: "Hong Kong Dollar", NOK: "Norwegian Krone",
  KRW: "South Korean Won", TRY: "Turkish Lira", RUB: "Russian Ruble", BRL: "Brazilian Real", ZAR: "South African Rand",
  AED: "UAE Dirham", AFN: "Afghan Afghani", ALL: "Albanian Lek", AMD: "Armenian Dram", ANG: "Netherlands Guilder",
  AOA: "Angolan Kwanza", ARS: "Argentine Peso", AWG: "Aruban Florin", AZN: "Azerbaijani Manat", BAM: "Bosnia-Herzegovina Mark",
  BBD: "Barbadian Dollar", BDT: "Bangladeshi Taka", BGN: "Bulgarian Lev", BHD: "Bahraini Dinar", BIF: "Burundian Franc",
  BMD: "Bermudan Dollar", BND: "Brunei Dollar", BOB: "Bolivian Boliviano", BSD: "Bahamian Dollar", BTN: "Bhutanese Ngultrum",
  BWP: "Botswanan Pula", BYN: "Belarusian Ruble", BZD: "Belize Dollar", CDF: "Congolese Franc", CLP: "Chilean Peso",
  COP: "Colombian Peso", CRC: "Costa Rican Colón", CUP: "Cuban Peso", CVE: "Cape Verdean Escudo", CZK: "Czech Koruna",
  DJF: "Djiboutian Franc", DKK: "Danish Krone", DOP: "Dominican Peso", DZD: "Algerian Dinar", EGP: "Egyptian Pound",
  ERN: "Eritrean Nakfa", ETB: "Ethiopian Birr", FJD: "Fijian Dollar", FKP: "Falkland Islands Pound", GEL: "Georgian Lari",
  GGP: "Guernsey Pound", GHS: "Ghanaian Cedi", GIP: "Gibraltar Pound", GMD: "Gambian Dalasi", GNF: "Guinean Franc",
  GTQ: "Guatemalan Quetzal", GYD: "Guyanese Dollar", HNL: "Honduran Lempira", HRK: "Croatian Kuna", HTG: "Haitian Gourde",
  HUF: "Hungarian Forint", IDR: "Indonesian Rupiah", ILS: "Israeli New Shekel", IMP: "Isle of Man Pound", IQD: "Iraqi Dinar",
  IRR: "Iranian Rial", ISK: "Icelandic Króna", JEP: "Jersey Pound", JMD: "Jamaican Dollar", JOD: "Jordanian Dinar",
  KES: "Kenyan Shilling", KGS: "Kyrgystani Som", KHR: "Cambodian Riel", KMF: "Comorian Franc", KPW: "North Korean Won",
  KWD: "Kuwaiti Dinar", KYD: "Cayman Islands Dollar", KZT: "Kazakhstani Tenge", LAK: "Laotian Kip", LBP: "Lebanese Pound",
  LKR: "Sri Lankan Rupee", LRD: "Liberian Dollar", LSL: "Lesotho Loti", LYD: "Libyan Dinar", MAD: "Moroccan Dirham",
  MDL: "Moldovan Leu", MGA: "Malagasy Ariary", MKD: "Macedonian Denar", MMK: "Myanmar Kyat", MNT: "Mongolian Tugrik",
  MOP: "Macanese Pataca", MRU: "Mauritanian Ouguiya", MUR: "Mauritian Rupee", MVR: "Maldivian Rufiyaa", MWK: "Malawian Kwacha",
  MYR: "Malaysian Ringgit", MZN: "Mozambican Metical", NAD: "Namibian Dollar", NGN: "Nigerian Naira", NIO: "Nicaraguan Córdoba",
  NPR: "Nepalese Rupee", OMR: "Oman Rial", PAB: "Panamanian Balboa", PEN: "Peruvian Sol", PGK: "Papua New Guinean Kina",
  PHP: "Philippine Peso", PKR: "Pakistani Rupee", PLN: "Polish Zloty", PYG: "Paraguayan Guarani", QAR: "Qatari Rial",
  RON: "Romanian Leu", RSD: "Serbian Dinar", RWF: "Rwandan Franc", SAR: "Saudi Riyal", SBD: "Solomon Islands Dollar",
  SCR: "Seychellois Rupee", SDG: "Sudanese Pound", SHP: "St. Helena Pound", SLL: "Sierra Leonean Leone", SOS: "Somali Shilling",
  SRD: "Surinamese Dollar", SSP: "South Sudanese Pound", STN: "São Tomé & Príncipe Dobra", SVC: "Salvadoran Colón",
  SYP: "Syrian Pound", SZL: "Swazi Lilangeni", THB: "Thai Baht", TJS: "Tajikistani Somi", TMT: "Turkmenistani Manat",
  TND: "Tunisian Dinar", TOP: "Tongan Paʻanga", TRY: "Turkish Lira", TTD: "Trinidad & Tobago Dollar", TWD: "New Taiwan Dollar",
  TZS: "Tanzanian Shilling", UAH: "Ukrainian Hryvnia", UGX: "Ugandan Shilling", UYU: "Uruguayan Peso", UZS: "Uzbekistani Som",
  VES: "Venezuelan Bolívar", VND: "Vietnamese Dong", VUV: "Vanuatu Vatu", WST: "Samoan Tala", XAF: "Central African CFA Franc",
  XCD: "East Caribbean Dollar", XOF: "West African CFA Franc", XPF: "CFP Franc", YER: "Yemeni Rial", ZMW: "Zambian Kwacha",
  ZWL: "Zimbabwean Dollar"
};

// Currency Symbols mapping
const currencySymbols = {
  USD: "$", EUR: "€", GBP: "£", INR: "₹", JPY: "¥", AUD: "A$", CAD: "C$", CHF: "CHF", CNY: "¥", SEK: "kr", NZD: "NZ$",
  MXN: "$", SGD: "S$", HKD: "HK$", NOK: "kr", KRW: "₩", TRY: "₺", RUB: "₽", BRL: "R$", ZAR: "R", AED: "د.إ", EGP: "E£",
  ILS: "₪", PHP: "₱", PLN: "zł", THB: "฿", UAH: "₴", VND: "₫", CAD: "$", AUD: "$"
};

// App State
let exchangeRates = {};
let selectedFrom = "USD";
let selectedTo = "EUR";
let selectedWatchFrom = "USD";
let selectedWatchTo = "EUR";
let watchlist = [];
let conversionHistory = [];
let isFetching = false;

// DOM Elements
const themeToggle = document.getElementById("theme-toggle");
const amountInput = document.getElementById("amount-input");
const fromSymbol = document.getElementById("from-symbol");
const displayFrom = document.getElementById("display-from");
const displayTo = document.getElementById("display-to");
const baseRateEl = document.getElementById("exchange-rate-base");
const inverseRateEl = document.getElementById("exchange-rate-inverse");
const rateTimeEl = document.getElementById("rate-time");
const footerTimeEl = document.getElementById("footer-update-time");
const swapBtn = document.getElementById("swap-btn");
const refreshBtn = document.getElementById("refresh-rates-btn");
const statusPulse = document.querySelector(".status-pulse");

// Dropdowns
const dropdownFrom = document.getElementById("dropdown-from");
const dropdownTo = document.getElementById("dropdown-to");
const triggerFrom = document.getElementById("trigger-from");
const triggerTo = document.getElementById("trigger-to");
const listFrom = document.getElementById("list-from");
const listTo = document.getElementById("list-to");

// Watchlist Elements
const toggleAddWatchlist = document.getElementById("toggle-add-watchlist");
const watchlistFormContainer = document.getElementById("watchlist-form-container");
const dropdownWatchFrom = document.getElementById("dropdown-watch-from");
const dropdownWatchTo = document.getElementById("dropdown-watch-to");
const triggerWatchFrom = document.getElementById("trigger-watch-from");
const triggerWatchTo = document.getElementById("trigger-watch-to");
const listWatchFrom = document.getElementById("list-watch-from");
const listWatchTo = document.getElementById("list-watch-to");
const btnAddWatchlistConfirm = document.getElementById("btn-add-watchlist-confirm");
const watchlistItemsContainer = document.getElementById("watchlist-items");

// History Elements
const historyItemsContainer = document.getElementById("history-items");
const clearHistoryBtn = document.getElementById("clear-history-btn");

// Initialization
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  loadDataFromStorage();
  fetchExchangeRates();
  setupEventListeners();
});

// Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
}

themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});

// Load Watchlist and History from LocalStorage
function loadDataFromStorage() {
  const storedWatchlist = localStorage.getItem("watchlist");
  if (storedWatchlist) {
    watchlist = JSON.parse(storedWatchlist);
  } else {
    // Default watchlist pairs
    watchlist = [
      { from: "USD", to: "EUR" },
      { from: "GBP", to: "USD" },
      { from: "EUR", to: "JPY" }
    ];
    saveWatchlist();
  }

  const storedHistory = localStorage.getItem("history");
  if (storedHistory) {
    conversionHistory = JSON.parse(storedHistory);
  }
}

function saveWatchlist() {
  localStorage.setItem("watchlist", JSON.stringify(watchlist));
}

function saveHistory() {
  localStorage.setItem("history", JSON.stringify(conversionHistory));
}

// Fetch Exchange Rates from API
async function fetchExchangeRates() {
  if (isFetching) return;
  
  isFetching = true;
  statusPulse.classList.add("loading");
  rateTimeEl.textContent = "Fetching rates...";
  refreshBtn.classList.add("loading");
  
  try {
    const response = await fetch("https://open.er-api.com/v6/latest/USD");
    if (!response.ok) throw new Error("Network response was not ok");
    
    const data = await response.json();
    exchangeRates = data.rates;
    
    const lastUpdate = new Date(data.time_last_update_utc);
    const timeString = lastUpdate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const dateString = lastUpdate.toLocaleDateString([], { month: 'short', day: 'numeric' });
    const formattedTime = `${dateString}, ${timeString}`;
    
    rateTimeEl.textContent = `Rates live (Updated: ${formattedTime})`;
    footerTimeEl.textContent = lastUpdate.toLocaleString();
    
    // Save rates cache in localStorage
    localStorage.setItem("rates_cache", JSON.stringify(exchangeRates));
    localStorage.setItem("rates_last_updated", data.time_last_update_utc);
    
    statusPulse.classList.remove("loading");
    refreshBtn.classList.remove("loading");
    isFetching = false;
    
    // Setup UI components and run initial conversion
    initializeUI();
  } catch (error) {
    console.error("Error fetching rates:", error);
    loadCachedRates();
  }
}

function loadCachedRates() {
  const cachedRates = localStorage.getItem("rates_cache");
  const lastUpdated = localStorage.getItem("rates_last_updated");
  
  if (cachedRates && lastUpdated) {
    exchangeRates = JSON.parse(cachedRates);
    const updateTime = new Date(lastUpdated);
    rateTimeEl.textContent = `Offline. Cached: ${updateTime.toLocaleDateString()} ${updateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    footerTimeEl.textContent = updateTime.toLocaleString();
  } else {
    rateTimeEl.textContent = "Failed to load rates. Check internet connection.";
  }
  
  statusPulse.classList.remove("loading");
  refreshBtn.classList.remove("loading");
  isFetching = false;
  
  initializeUI();
}

// Initialize Custom Dropdowns and Lists after rates are loaded
function initializeUI() {
  const currencyCodes = Object.keys(exchangeRates).sort();
  
  // Populate dropdown menus
  buildDropdownList(listFrom, currencyCodes, selectedFrom, selectFromCurrency);
  buildDropdownList(listTo, currencyCodes, selectedTo, selectToCurrency);
  buildDropdownList(listWatchFrom, currencyCodes, selectedWatchFrom, selectWatchFromCurrency);
  buildDropdownList(listWatchTo, currencyCodes, selectedWatchTo, selectWatchToCurrency);
  
  // Render updates
  updateDropdownTrigger(triggerFrom, selectedFrom);
  updateDropdownTrigger(triggerTo, selectedTo);
  updateDropdownTrigger(triggerWatchFrom, selectedWatchFrom, true);
  updateDropdownTrigger(triggerWatchTo, selectedWatchTo, true);
  
  updateCurrencySymbol();
  performConversion();
  renderWatchlist();
  renderHistory();
}

// Helper to map country flags
function getFlagUrl(currencyCode) {
  const countryCode = currencyFlags[currencyCode];
  if (countryCode) {
    return `https://flagcdn.com/w40/${countryCode}.png`;
  }
  // Generic fallbacks
  return "https://flagcdn.com/w40/un.png"; // Fallback to UN flag
}

// Build list elements inside Custom Dropdowns
function buildDropdownList(listElement, codes, selectedValue, onSelect) {
  listElement.innerHTML = "";
  
  codes.forEach(code => {
    const li = document.createElement("li");
    li.className = `dropdown-item ${code === selectedValue ? 'selected' : ''}`;
    li.dataset.code = code;
    
    const name = currencyNames[code] || "Foreign Currency";
    const flagUrl = getFlagUrl(code);
    
    li.innerHTML = `
      <img src="${flagUrl}" alt="${code} Flag" class="item-flag" onerror="this.src='https://flagcdn.com/w40/un.png'">
      <span class="item-code">${code}</span>
      <span class="item-name">${name}</span>
      <i data-lucide="check" class="selected-check"></i>
    `;
    
    li.addEventListener("click", () => {
      onSelect(code);
      // Close parent dropdown menu
      const dropdown = listElement.closest(".custom-dropdown");
      if (dropdown) dropdown.classList.remove("active");
    });
    
    listElement.appendChild(li);
  });
  
  lucide.createIcons({ attrs: { class: 'selected-check' } });
}

// Update Dropdown trigger state
function updateDropdownTrigger(triggerEl, currencyCode, isMin = false) {
  const name = currencyNames[currencyCode] || "Foreign Currency";
  const flagUrl = getFlagUrl(currencyCode);
  
  if (isMin) {
    // Watchlist trigger has smaller layout (no full name)
    triggerEl.innerHTML = `
      <img src="${flagUrl}" alt="${currencyCode} Flag" class="selected-flag" style="width:18px;height:13px;" onerror="this.src='https://flagcdn.com/w40/un.png'">
      <span class="selected-code">${currencyCode}</span>
      <i data-lucide="chevron-down" class="chevron"></i>
    `;
  } else {
    triggerEl.innerHTML = `
      <img src="${flagUrl}" alt="${currencyCode} Flag" class="selected-flag" onerror="this.src='https://flagcdn.com/w40/un.png'">
      <span class="selected-code">${currencyCode}</span>
      <span class="selected-name">${name}</span>
      <i data-lucide="chevron-down" class="chevron"></i>
    `;
  }
  lucide.createIcons();
}

// Handle Select Currency Events
function selectFromCurrency(code) {
  selectedFrom = code;
  updateDropdownTrigger(triggerFrom, code);
  updateActiveMark(listFrom, code);
  updateCurrencySymbol();
  performConversion();
}

function selectToCurrency(code) {
  selectedTo = code;
  updateDropdownTrigger(triggerTo, code);
  updateActiveMark(listTo, code);
  performConversion();
}

function selectWatchFromCurrency(code) {
  selectedWatchFrom = code;
  updateDropdownTrigger(triggerWatchFrom, code, true);
  updateActiveMark(listWatchFrom, code);
}

function selectWatchToCurrency(code) {
  selectedWatchTo = code;
  updateDropdownTrigger(triggerWatchTo, code, true);
  updateActiveMark(listWatchTo, code);
}

// Update active checkmarks inside lists
function updateActiveMark(listEl, code) {
  const items = listEl.querySelectorAll(".dropdown-item");
  items.forEach(item => {
    if (item.dataset.code === code) {
      item.classList.add("selected");
    } else {
      item.classList.remove("selected");
    }
  });
}

function updateCurrencySymbol() {
  const symbol = currencySymbols[selectedFrom] || selectedFrom;
  fromSymbol.textContent = symbol;
}

// Perform Main Conversion
function performConversion() {
  if (!exchangeRates[selectedFrom] || !exchangeRates[selectedTo]) return;

  let amount = parseFloat(amountInput.value);
  if (isNaN(amount) || amount < 0) {
    amount = 0;
  }

  // Calculate Exchange Rates
  const rateFromUsd = exchangeRates[selectedFrom];
  const rateToUsd = exchangeRates[selectedTo];
  
  // conversion factor: (1 / rateFromUsd) converts FROM to USD, then multiplying by rateToUsd converts USD to TO.
  const crossRate = rateToUsd / rateFromUsd;
  const inverseCrossRate = rateFromUsd / rateToUsd;
  
  const convertedAmount = amount * crossRate;

  // Formatting values
  const formattedAmount = amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const formattedConverted = convertedAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  // Update DOM Output Display
  displayFrom.textContent = `${formattedAmount} ${selectedFrom}`;
  displayTo.textContent = `${formattedConverted} ${selectedTo}`;
  
  const symbolTo = currencySymbols[selectedTo] || "";
  
  baseRateEl.textContent = `1 ${selectedFrom} = ${crossRate.toFixed(4)} ${selectedTo}`;
  inverseRateEl.textContent = `1 ${selectedTo} = ${inverseCrossRate.toFixed(4)} ${selectedFrom}`;
}

// Add history item after direct actions (debounced during quick typing)
let historyDebounceTimeout;
function queueAddToHistory(from, to, amount, result) {
  clearTimeout(historyDebounceTimeout);
  historyDebounceTimeout = setTimeout(() => {
    if (amount <= 0) return;
    
    // Avoid duplicate adjacent history items
    if (conversionHistory.length > 0) {
      const last = conversionHistory[0];
      if (last.from === from && last.to === to && last.fromAmount === amount) return;
    }
    
    const newEntry = {
      from,
      to,
      fromAmount: amount,
      toAmount: result,
      timestamp: Date.now()
    };
    
    conversionHistory.unshift(newEntry);
    if (conversionHistory.length > 8) {
      conversionHistory.pop();
    }
    
    saveHistory();
    renderHistory();
  }, 1200); // 1.2 seconds after final keystroke
}

// Event Listeners Setup
function setupEventListeners() {
  // Input trigger
  amountInput.addEventListener("input", () => {
    performConversion();
    
    // Queue history calculation
    const amount = parseFloat(amountInput.value);
    if (!isNaN(amount) && amount > 0) {
      const crossRate = exchangeRates[selectedTo] / exchangeRates[selectedFrom];
      queueAddToHistory(selectedFrom, selectedTo, amount, amount * crossRate);
    }
  });

  // Swap Button logic
  swapBtn.addEventListener("click", () => {
    // Add swap rotation class for animation
    const icon = swapBtn.querySelector(".swap-icon");
    icon.style.transform = icon.style.transform === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
    
    // Swap selections
    const temp = selectedFrom;
    selectFromCurrency(selectedTo);
    selectToCurrency(temp);
  });

  // Refresh rates button
  refreshBtn.addEventListener("click", () => {
    fetchExchangeRates();
  });

  // Custom Dropdown Trigger buttons
  setupDropdownTriggerEvent(triggerFrom, dropdownFrom);
  setupDropdownTriggerEvent(triggerTo, dropdownTo);
  setupDropdownTriggerEvent(triggerWatchFrom, dropdownWatchFrom);
  setupDropdownTriggerEvent(triggerWatchTo, dropdownWatchTo);

  // Close dropdowns when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".custom-dropdown")) {
      document.querySelectorAll(".custom-dropdown").forEach(dropdown => {
        dropdown.classList.remove("active");
      });
    }
  });

  // Setup search filter for dropdown lists
  setupDropdownSearchFilter(dropdownFrom, listFrom);
  setupDropdownSearchFilter(dropdownTo, listTo);
  setupDropdownSearchFilter(dropdownWatchFrom, listWatchFrom);
  setupDropdownSearchFilter(dropdownWatchTo, listWatchTo);

  // Toggle watchlist add form
  toggleAddWatchlist.addEventListener("click", () => {
    watchlistFormContainer.classList.toggle("hidden");
    const isHidden = watchlistFormContainer.classList.contains("hidden");
    toggleAddWatchlist.querySelector("i").setAttribute("data-lucide", isHidden ? "plus" : "minus");
    lucide.createIcons();
  });

  // Watchlist Add Confirm Action
  btnAddWatchlistConfirm.addEventListener("click", () => {
    addPairToWatchlist(selectedWatchFrom, selectedWatchTo);
    watchlistFormContainer.classList.add("hidden");
    toggleAddWatchlist.querySelector("i").setAttribute("data-lucide", "plus");
    lucide.createIcons();
  });

  // Clear History
  clearHistoryBtn.addEventListener("click", () => {
    conversionHistory = [];
    saveHistory();
    renderHistory();
  });
}

// Register dropdown trigger events
function setupDropdownTriggerEvent(triggerEl, dropdownEl) {
  triggerEl.addEventListener("click", (e) => {
    e.stopPropagation();
    
    // Close other dropdowns
    document.querySelectorAll(".custom-dropdown").forEach(d => {
      if (d !== dropdownEl) d.classList.remove("active");
    });
    
    dropdownEl.classList.toggle("active");
    
    // If opening, focus search input
    if (dropdownEl.classList.contains("active")) {
      const searchInput = dropdownEl.querySelector(".search-input");
      if (searchInput) {
        searchInput.value = "";
        // Trigger filter to reset list view
        filterList(dropdownEl.querySelector(".dropdown-list"), "");
        setTimeout(() => searchInput.focus(), 50);
      }
    }
  });
}

// Dropdown search filter implementation
function setupDropdownSearchFilter(dropdownEl, listEl) {
  const searchInput = dropdownEl.querySelector(".search-input");
  if (!searchInput) return;
  
  searchInput.addEventListener("input", (e) => {
    filterList(listEl, e.target.value.trim());
  });
  
  // Prevent spacebar or search keys from propagating inside input
  searchInput.addEventListener("click", (e) => e.stopPropagation());
}

function filterList(listEl, query) {
  const items = listEl.querySelectorAll(".dropdown-item");
  const lowercaseQuery = query.toLowerCase();
  
  items.forEach(item => {
    const code = item.dataset.code.toLowerCase();
    const name = (currencyNames[item.dataset.code] || "").toLowerCase();
    
    if (code.includes(lowercaseQuery) || name.includes(lowercaseQuery)) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

// Watchlist Business Logic
function addPairToWatchlist(from, to) {
  if (from === to) return;
  
  // Check duplicate
  const exists = watchlist.some(pair => pair.from === from && pair.to === to);
  if (exists) return;
  
  watchlist.push({ from, to });
  saveWatchlist();
  renderWatchlist();
}

function removePairFromWatchlist(index) {
  watchlist.splice(index, 1);
  saveWatchlist();
  renderWatchlist();
}

function renderWatchlist() {
  watchlistItemsContainer.innerHTML = "";
  
  if (watchlist.length === 0) {
    watchlistItemsContainer.innerHTML = `
      <div class="watchlist-placeholder">
        <i data-lucide="info" class="placeholder-icon"></i>
        <p>No pairs on your watchlist yet. Add pairs like USD/EUR to track them here.</p>
      </div>
    `;
    lucide.createIcons();
    return;
  }
  
  watchlist.forEach((pair, index) => {
    if (!exchangeRates[pair.from] || !exchangeRates[pair.to]) return;
    
    const rate = exchangeRates[pair.to] / exchangeRates[pair.from];
    
    const item = document.createElement("div");
    item.className = "watchlist-item";
    
    const nameFrom = currencyNames[pair.from] || "";
    const nameTo = currencyNames[pair.to] || "";
    const flagFrom = getFlagUrl(pair.from);
    const flagTo = getFlagUrl(pair.to);
    
    item.innerHTML = `
      <div class="wl-pair-info">
        <div class="wl-flags">
          <img src="${flagFrom}" alt="${pair.from}" class="wl-flag wl-flag-from" onerror="this.src='https://flagcdn.com/w40/un.png'">
          <img src="${flagTo}" alt="${pair.to}" class="wl-flag wl-flag-to" onerror="this.src='https://flagcdn.com/w40/un.png'">
        </div>
        <div class="wl-names">
          <span class="wl-pair-text">${pair.from} / ${pair.to}</span>
          <span class="wl-name-labels">${pair.from} to ${pair.to}</span>
        </div>
      </div>
      <div class="wl-values">
        <span class="wl-rate">${rate.toFixed(4)}</span>
        <button class="btn-wl-delete" data-index="${index}" title="Remove pair">
          <i data-lucide="trash-2"></i>
        </button>
      </div>
    `;
    
    // Click on watchlist item loads it into main converter
    item.addEventListener("click", (e) => {
      // Check if delete button was clicked
      if (e.target.closest(".btn-wl-delete")) return;
      
      selectFromCurrency(pair.from);
      selectToCurrency(pair.to);
      
      // Auto scroll to main converter input (smooth)
      amountInput.scrollIntoView({ behavior: "smooth", block: "center" });
      amountInput.focus();
    });
    
    // Delete event
    const deleteBtn = item.querySelector(".btn-wl-delete");
    deleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      removePairFromWatchlist(index);
    });
    
    watchlistItemsContainer.appendChild(item);
  });
  
  lucide.createIcons();
}

// History Business Logic
function renderHistory() {
  historyItemsContainer.innerHTML = "";
  
  if (conversionHistory.length === 0) {
    historyItemsContainer.innerHTML = `
      <li class="history-placeholder">
        <i data-lucide="clock" class="placeholder-icon"></i>
        <p>Calculations history will appear here.</p>
      </li>
    `;
    lucide.createIcons();
    return;
  }
  
  conversionHistory.forEach(entry => {
    const li = document.createElement("li");
    li.className = "history-item";
    
    const formattedFromAmount = entry.fromAmount.toLocaleString(undefined, { maximumFractionDigits: 2 });
    const formattedToAmount = entry.toAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    
    // Relative times or simple timestamp format
    const date = new Date(entry.timestamp);
    const timeStr = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    
    li.innerHTML = `
      <div class="history-details">
        <span class="history-calc">${formattedFromAmount} ${entry.from} <span>=</span> ${formattedToAmount} ${entry.to}</span>
        <span class="history-timestamp">${timeStr}</span>
      </div>
      <div class="history-arrow-btn">
        <i data-lucide="arrow-right"></i>
      </div>
    `;
    
    // Click on history item loads it into main converter
    li.addEventListener("click", () => {
      amountInput.value = entry.fromAmount;
      selectFromCurrency(entry.from);
      selectToCurrency(entry.to);
    });
    
    historyItemsContainer.appendChild(li);
  });
  
  lucide.createIcons();
}
