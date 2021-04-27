const getCurrencyValue = async (base = "USD") => {
  const key = "7e3e55292c8604fbcebd2ea7";
  const url = `https://v6.exchangerate-api.com/v6/${key}/latest/${base}`;
  const resp = await fetch(url);
  const data = await resp.json();
  return data;
};

export default getCurrencyValue;
