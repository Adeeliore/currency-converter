import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Импортируем CommonModule

import { AppComponent } from './app.component';
import { ConverterComponent } from './converter/converter.component';
import {CurrencyService} from "./service/currency.service";


@NgModule({
  declarations: [
    ConverterComponent
  ],
  imports: [
    CommonModule, // Используем CommonModule вместо BrowserModule
    FormsModule,
    HttpClientModule
  ],
  providers: [CurrencyService],
  exports: [
    ConverterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
