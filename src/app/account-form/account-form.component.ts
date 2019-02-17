import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Account } from '../account/account.model';


@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss']
})
export class AccountFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() created = new EventEmitter<Account>();

  private createAcc(titleEl: any, descEl: any, balEl: any) {


    let newAccount: Account = new Account (0, titleEl.value, descEl.value, balEl.value);
    this.created.emit(newAccount);

    titleEl.value = "";
    descEl.value = "";
    balEl.value = 0;
  }

}
