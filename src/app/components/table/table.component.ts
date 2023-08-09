import { Component, OnInit } from '@angular/core';
import { CoinMarketService } from 'src/app/services/coin-market.service';
import  { Coin } from 'src/app/models/coin.interface'
interface Country {
	name: string;
	flag: string;
	area: number;
	population: number;
}

const COUNTRIES: Country[] = [
	{
		name: 'Russia',
		flag: 'f/f3/Flag_of_Russia.svg',
		area: 17075200,
		population: 146989754,
	},
	{
		name: 'Canada',
		flag: 'c/cf/Flag_of_Canada.svg',
		area: 9976140,
		population: 36624199,
	},
	{
		name: 'United States',
		flag: 'a/a4/Flag_of_the_United_States.svg',
		area: 9629091,
		population: 324459463,
	},
	{
		name: 'China',
		flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
		area: 9596960,
		population: 1409517397,
	},
];


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit  {
  coins:Coin[] = []
  titles: string[] = ['#', 'Coin', 'Price', 'Price Change', '24H Volume'];

  searchText: string = '';
  filteredCoints: Coin[] = [];
  constructor(
   private coinMarketService: CoinMarketService
  )
  {

  }
  async ngOnInit(): Promise<void> {
    this.coins = await this.coinMarketService.getCoins()
    this.filteredCoints = this.coins
    console.log(this.coins)
  }

  searchCoin() {
    this.filteredCoints = this.coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
