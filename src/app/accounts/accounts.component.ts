import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../shared/accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
})
export class AccountsComponent implements OnInit {
  accounts: { name: string; loggin: string; password: string }[];

  constructor(private accountsService: AccountsService) {}

  ngOnInit(): void {
    this.accounts = this.accountsService.GetAccounts();
  }

  deleteAccount(id: number) {
    this.accountsService.onDeleteAccount(id);
  }
}
