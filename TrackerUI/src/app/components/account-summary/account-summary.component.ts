import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { ConfirmationDialogService } from 'src/app/services/confirmationdialog.service';
import { AccountService } from 'src/app/services/account.service';
import { Account } from 'src/app/services/account.model';

@Component({
  selector: 'account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.css']
})
export class AccountSummaryComponent implements OnInit {
  data: Array<Account>;
  accountObj: Account;
  filteredaccounts: Array<Account>;

  constructor(private router: Router,
    private userService: UserService,
    private accountService: AccountService,
    private confirmationDialogService: ConfirmationDialogService) {
    this.filteredaccounts = [];
  }

  ngOnInit() {
    this.accountService.getAccounts().subscribe(res => {
      for (let i = 0; i < res.length; i++) {
        this.accountObj = new Account();
        this.accountObj.pROG_TRANX_ID = res[i].pROG_TRANX_ID;
        this.accountObj.cLIENT_NAME_ID = res[i].cLIENT_NAME_ID;
        this.accountObj.iOT_ID = res[i].iOT_ID;
        this.accountObj.mARKET_ID = res[i].mARKET_ID;
        this.accountObj.qUARTER = res[i].qUARTER;
        this.accountObj.qUARTER_YEAR = res[i].qUARTER_YEAR;
        this.accountObj.sQD_LUNCH_DT = res[i].sQD_LUNCH_DT;
        this.accountObj.eXP_SQD_COMP_DT = res[i].eXP_SQD_COMP_DT;
        this.accountObj.pOC_COMP_DT = res[i].pOC_COMP_DT;
        this.data.push(this.accountObj);
      }
    },
      error => {
        console.log(error.status);
        if (error.status === 500) {
          console.log("error 500")
        }
      })
    this.data = this.filteredaccounts;
  }

  filter(query: String) {
    this.data = (query) ? this.filteredaccounts.filter(p => p.cLIENT_NAME_ID.toLowerCase().includes(query.toLowerCase())) : this.filteredaccounts;
  }

  onSelectFile(event) {
    const file = event.target.files[0];
    console.log('file : ' + file);
    this.confirmationDialogService.confirm(file.name)
      .then((confirmed) => console.log('User confirmed:', confirmed))
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }


  logout() {
    this.userService.logout();
    this.router.navigateByUrl('/login');
  }
}