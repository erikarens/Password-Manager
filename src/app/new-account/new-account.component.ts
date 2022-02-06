import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountsService } from '../shared/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent implements OnInit {
  @Output() account = new EventEmitter();

  constructor(private accountsService: AccountsService) {}

  ngOnInit(): void {}

  addAccount(name: string, loggin: string, password: string) {
    this.accountsService.onAddAccount(name, loggin, password);
  }
}
