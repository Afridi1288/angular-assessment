import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isFlyoutOpen = false
  @Input() pageTitle = '';
  constructor() {}

  ngOnInit(): void {
  }

  openFlyout() {
    this.isFlyoutOpen = !this.isFlyoutOpen;
    console.log(this.isFlyoutOpen);
  }

}
