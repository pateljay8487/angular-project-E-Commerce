import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  storedIdFromLocalStorage: string | null = localStorage.getItem('userId')

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    const localId = localStorage.getItem('userId')
    if (!localId == id || localId == null) {
      this.router.navigate([''])
    }
  }

  logout() {
    localStorage.removeItem('userId')
    this.router.navigate([''])
  }
}
