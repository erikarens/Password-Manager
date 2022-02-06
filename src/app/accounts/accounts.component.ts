import { Component, Input, OnInit } from '@angular/core';
import { AccountsService } from '../shared/accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
})
export class AccountsComponent implements OnInit {
  @Input() accounts: [];

  constructor(private accountsService: AccountsService) {}

  ngOnInit(): void {}

  deleteAccount(id: number) {
    this.accountsService.onDeleteAccount(id);
  }
}
