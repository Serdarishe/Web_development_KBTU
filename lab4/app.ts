import {Component} from '@angular/core';
import {User} from './user';

@Component({
  selector: 'app-root',
  template: ` <app-user name ="Serdar" /> `,
  imports: [User],
})
export class App {}
