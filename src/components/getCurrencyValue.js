const getCurrencyValue = async (base) => {
    base = base || "USD";
    const url = `https://api.exchangeratesapi.io/latest?base=${base}`;
    const resp = await fetch(url);
    const data = await resp.json();
    return data
}

export default getCurrencyValue;