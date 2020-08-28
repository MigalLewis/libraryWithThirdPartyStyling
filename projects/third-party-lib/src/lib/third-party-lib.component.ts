import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-third-party-lib',
  template: `
    <p>
      third-party-lib works!
    </p>
  `,
  styles: [
  ]
})
export class ThirdPartyLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
