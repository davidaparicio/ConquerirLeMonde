import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-episode5',
  templateUrl: './episode5.component.html',
  styleUrls: ['./episode5.component.scss']
})
export class Episode5Component implements OnInit {

  options = ['Aws','Vagrant'];
  chosenOption: string = 'Aws';

  constructor() { }

  ngOnInit() {
  }

}
