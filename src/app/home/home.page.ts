import {Component} from '@angular/core';
import {SelectContactState} from '../types/enums.types';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  numberOfSelectedContacts = 6;
  maximumNumberOfSelectedContacts = 9;
  alphabetCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#'.split('');
  cArr = Array(this.numberOfSelectedContacts).fill(0);

  constructor(private router: Router) {
  }

  get selectText(): string {
    return this.canSelectAllContacts ? SelectContactState.selectAll : SelectContactState.deselectAll;
  }

  get canSelectAllContacts(): boolean {
    return this.numberOfSelectedContacts < this.maximumNumberOfSelectedContacts;
  }

  onSelect() {
    this.numberOfSelectedContacts = this.numberOfSelectedContacts < 9 ? 9 : 0;
  }

  onCreateGroup() {
    this.router.navigate(['/group-create']);
  }
}
