const getCurrencyValue = async (base) => {
  const corrBase = base || "USD";
  const url = `https://api.exchangeratesapi.io/latest?base=${corrBase}`;
  const resp = await fetch(url);
  const data = await resp.json();
  return data;
};

export default getCurrencyValue;
