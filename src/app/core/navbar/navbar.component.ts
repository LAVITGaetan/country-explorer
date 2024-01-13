import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
changeTheme() {
  if(document.body.classList.contains('dark-theme')) {
    document.body.classList.remove('dark-theme')
  } else {

  document.body.classList.add('dark-theme')
}
}
}
