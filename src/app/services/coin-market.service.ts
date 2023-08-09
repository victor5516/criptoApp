import { Injectable } from '@angular/core';
import  { Coin } from 'src/app/models/coin.interface'
@Injectable({
  providedIn: 'root'
})
export class CoinMarketService {
  private url = 'https://api.coingecko.com/api/v3/'
  constructor() { }

  async getCoins(): Promise<Coin[]> {
    const response = await fetch(`${this.url}coins/markets?vs_currency=usd&per_page=100&page=1`)
    const data = await response.json()
    return data
  }

  async getSupportedCurrencies(): Promise<string[]> {
    const response = await fetch(`${this.url}simple/supported_vs_currencies`)
    const data = await response.json()
    return data
  }
}
