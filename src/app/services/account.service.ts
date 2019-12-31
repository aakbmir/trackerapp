import { Injectable } from '@angular/core';
import { Account } from './account.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private http: HttpClient) {
  }

  getAccounts(): Observable<any> {
    let url = "https://amtracker.eu-gb.mybluemix.net/getAllAccounts"
    return this.http.get(url);

  }

  getAccount(id: string): Observable<any> {
    let url = "https://amtracker.eu-gb.mybluemix.net/getAccount/" + id;
    console.log(url)
    return this.http.get(url);
  }

  save(account: Account) {
    const url = "https://amtracker.eu-gb.mybluemix.net/addAccount";
    return this.http.post(url, account, {
      observe: "response"
    });
  }

  update(account: Account) {
    console.log(account);
    const url = "https://amtracker.eu-gb.mybluemix.net/updateAccount/" + account.pROG_TRANX_ID;
    return this.http.put(url, account, {
      observe: "response"
    });
  }
}
