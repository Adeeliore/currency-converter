interface Currency {
  ID: string;
  NumCode: string;
  CharCode: string;
  Nominal: number;
  Name: string;
  Value: number;
  Previous: number;
}

interface ExchangeRates {
  [key: string]: Currency;
}

interface CurrencyData {
  Date: string;
  PreviousDate: string;
  PreviousURL: string;
  Timestamp: string;
  Valute: ExchangeRates;
}
