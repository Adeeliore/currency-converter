import { Routes } from '@angular/router';
import { ConverterComponent } from './converter/converter.component';

export const routes: Routes = [
  { path: '', redirectTo: '/converter', pathMatch: 'full' }, // Перенаправление на /converter по умолчанию
  { path: 'converter', component: ConverterComponent } // Маршрут для отображения ConverterComponent по URL /converter
];
