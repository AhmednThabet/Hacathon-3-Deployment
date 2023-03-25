import { countriesCurrency } from "data";

export function getCuntrySymbole(countryName: string) {
  const wantedCurrency = countriesCurrency.filter((item) => {
    if (item.name === countryName) {
      return item.currency;
    }
  });
  console.log(wantedCurrency);

  return wantedCurrency[0]?.currency.symbol;
}
export default getCuntrySymbole;
