import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Pagination } from 'src/app/_models/Pagination';
import { UserParams } from 'src/app/_models/UserParams';
import { Member } from 'src/app/_models/member';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';
import { MembersService } from 'src/app/_services/members.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})

export class MemberListComponent implements OnInit {

  members: Member[] = []
  pagination: Pagination | undefined
  userParams: UserParams | undefined 
  // user: User | undefined 

  genderList = [
    { value: 'male', display: 'Male' },
    { value: 'female', display: 'Female' },
    { value: 'non-binary', display: 'Non-binary' },
  ]

  resetFilters() {
    this.userParams = this.memberService.resetUserParams()
    this.loadMember()
  }

  constructor(private memberService: MembersService, private accountService: AccountService) {
    this.userParams = memberService.getUserParams()
    // this.accountService.currentUser$.pipe(take(1)).subscribe({
    //   next: user => {
    //     if (user) {
    //       this.userParams = new UserParams(user)
    //       this.user = user
    //     }
    //   }
    // })
  }

  ngOnInit(): void {
    // this.members$ = this.memberService.getMembers()
    this.loadMember();
  }


  loadMember() {
    if (!this.userParams) return 
    this.memberService.getMembers(this.userParams).subscribe({
      next: response => {
        if (response.result && response.pagination) {
          this.members = response.result
          this.pagination = response.pagination
        }
      }
    })
  }

  pageChanged(event: any) {
    if (!this.userParams) return 
    if (this.userParams.pageNumber === event.page) return 
    this.userParams.pageNumber = event.page 
    this.memberService.setUserParams(this.userParams)
    this.loadMember()
  }

}