import { CanActivateFn } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';

export const adminGuard: CanActivateFn = (route, state) => {
  const accountService = inject(AccountService)
  const toastr = inject(ToastrService)

    return accountService.currentUser$.pipe(
    map(user => {
      if (user &&
        (user.roles.includes('Administrator') ||
          user.roles.includes('Moderator'))
      ) return true
      toastr.error('Permission denied')
      return false
    })
  )
};
