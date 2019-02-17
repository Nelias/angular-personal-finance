import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Account } from './account.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input('accounts') _accounts: Array<Account>;

  @Input('selected') _selected: Array<boolean>;

  @Output('delete') delete = new EventEmitter<Number>();

  private _remove(index: number) {
    this.delete.emit(index);
  }

}
