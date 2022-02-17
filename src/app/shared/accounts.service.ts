import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccountsService {
  accounts = [
    {
      name: 'Youtube',
      loggin: 'max.mustermann@web.de',
      password: 'testpassword123',
    },
    {
      name: 'Facebook',
      loggin: 'udo.hans@gmail.de',
      password: 'passwordtest987',
    },
    {
      name: 'Twitter',
      loggin: 'karl.heinz@gmail.de',
      password: 'passwordtest987',
    },
    {
      name: 'Coinbase',
      loggin: 'udo.hans@gmail.de',
      password: 'passwordtest987',
    },
  ];

  constructor() {}

  GetAccounts() {
    return this.accounts;
  }

  onAddAccount(name: string, loggin: string, password: string) {
    this.accounts.push({ name: name, loggin: loggin, password: password });
    console.log('Neuer Account wurde hinzugefügt: ' + name);
  }

  onDeleteAccount(id: number) {
    this.accounts.splice(id, 1);
  }
}
