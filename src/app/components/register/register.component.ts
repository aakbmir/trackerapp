import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { Account } from 'src/app/services/account.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  account: any;
  id: string;
  isEdit: boolean;
  isSaved: boolean = true;
  constructor(private accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService) {

  }

  ngOnInit() {
    this.account = {};
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.isEdit = true;
      this.accountService.getAccount(this.id).subscribe(res => {
        this.account = res;
        this.account.sQD_LUNCH_DT = new Date(res.sQD_LUNCH_DT).toLocaleDateString();

      });
    }
    else {
      this.isEdit = false;
    }
  }

  save(account: Account) {
    const squadDate = account.sQD_LUNCH_DT;
    const expDate = account.eXP_SQD_COMP_DT;
    console.log(squadDate + " : " + expDate);
    if ((squadDate && expDate) && (new Date(squadDate) > new Date(expDate))) {
      this.isSaved = false;
    }
    else {
      if (this.isEdit) {
        this.accountService.update(account).subscribe(response => {
          this.router.navigateByUrl('/accountsummary');
        }, error => {
          this.isSaved = false;
        })
      }
      else {
        this.accountService.save(account).subscribe(response => {
          this.router.navigateByUrl('/accountsummary');
        },
          error => {
            this.isSaved = false;

          })
      }
    }
  }

  logout() {
    this.userService.logout();
    this.router.navigateByUrl('/login');
  }
}