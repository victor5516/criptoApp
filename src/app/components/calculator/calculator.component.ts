import { Component, OnInit } from '@angular/core';
import { Coin } from 'src/app/models/coin.interface';
import { CoinMarketService } from 'src/app/services/coin-market.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent  implements OnInit  {

  supportedList: string[] = []
  coins: Coin[] = []
  selectedCoin: Coin | undefined
  vsCurrency: string | undefined

  constructor(private coinMarketService: CoinMarketService) { }

  async ngOnInit(): Promise<void> {
    this.supportedList = await this.coinMarketService.getSupportedCurrencies()
    const allCoins = await this.coinMarketService.getCoins()
    this.coins = this.filterCoinsWithSupportedList(allCoins)
    console.log(this.supportedList)
    console.log(allCoins)
    console.log(this.coins)
  }

  filterCoinsWithSupportedList(allCoins: Coin[]): Coin[] {
    return allCoins.filter(coin => this.supportedList.includes(coin.symbol))
  }

}
