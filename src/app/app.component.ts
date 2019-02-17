import { Component } from '@angular/core';
import { Account } from './account/account.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'angular-personal-finance';

  private _nextId = 3;

  private _accounts: Array<Account> = [
    {
      id: 1,
      title: "Bank Xyz",
      description: "This is my main bank account.",
      balance: 500.25
    },
    {
      id: 2,
      title: "Bank Zyz",
      description: "This is my other bank account.",
      balance: 2330.25
    }
  ]

  private _selected: Array<boolean> = [false, false];

  private select(index: number) {
    this._selected[index] = !this._selected[index];
  }

  private createAcc(newAccount: Account) {
    newAccount.id = this._nextId++;
    this._accounts.push(newAccount);
  }

  private removeAcc(index: number) {
    this._accounts.splice(index, 1);
  }


}
