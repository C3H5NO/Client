import { Component, Input } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import { Member } from 'src/app/_models/member';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})

export class MemberCardComponent {
// [member: string]: IconProp;
  faUser = faUser
  faHeart = faHeart
  faEnvelope = faEnvelope
  
  @Input() member: Member | undefined
}
