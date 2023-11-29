import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})


export class NavComponent {
  model: any = {}

  constructor(public accountService: AccountService) { }
  // ngOnInit(): void {
  //     this.currentUser$ = this.accountService.currentUser$
  // }

  login(): void {
    this.accountService.login(this.model).subscribe({ //subscribe = Observable
      next: response => {
        console.log(response)
      },
      error: err => console.log(err)
    })
  }
  logout() {
    this.accountService.logout()
  }
}
