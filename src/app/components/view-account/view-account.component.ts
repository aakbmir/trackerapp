import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { Account } from 'src/app/services/account.model';

@Component({
  selector: 'view-account',
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.css']
})
export class ViewAccountComponent implements OnInit {

  account: Account;
  id: string;

  constructor(
    private accountService: AccountService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.accountService.getAccount(this.id).subscribe(res => {
        this.account = res;
      });
    }
  }

}
