import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../service/currency.service';
import { ExchangeRates } from '../model/currency.model';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
  amount: number = 1;
  fromCurrency: string = 'RUB';
  toCurrency: string = 'USD';
  result: number = 0;

  exchangeRates: ExchangeRates = {};

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.currencyService.getExchangeRates().subscribe(data => {
      this.exchangeRates = data.Valute;
      this.convert();
    });
  }

  convert(): void {
    if (this.exchangeRates) {
      this.result = this.currencyService.convert(this.amount, this.fromCurrency, this.toCurrency, this.exchangeRates);
    }
  }
}
