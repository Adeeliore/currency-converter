import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurrencyData, ExchangeRates } from '../model/currency.model';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private apiUrl = 'https://www.cbr-xml-daily.ru/daily_json.js';

  constructor(private http: HttpClient) { }

  getExchangeRates(): Observable<CurrencyData> {
    return this.http.get<CurrencyData>(this.apiUrl);
  }

  convert(amount: number, fromCurrency: string, toCurrency: string, exchangeRates: ExchangeRates): number {
    if (!exchangeRates) {
      return 0;
    }

    let fromRate = 1;
    let toRate = 1;

    if (fromCurrency !== 'RUB') {
      const fromCurrencyData = exchangeRates[fromCurrency];
      if (fromCurrencyData) {
        fromRate = fromCurrencyData.Value / fromCurrencyData.Nominal;
      }
    }

    if (toCurrency !== 'RUB') {
      const toCurrencyData = exchangeRates[toCurrency];
      if (toCurrencyData) {
        toRate = toCurrencyData.Value / toCurrencyData.Nominal;
      }
    }

    return (amount * fromRate) / toRate;
  }
}
