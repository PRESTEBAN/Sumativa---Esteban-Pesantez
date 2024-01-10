import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-newscard',
  templateUrl: './newscard.component.html',
  styleUrls: ['./newscard.component.scss'],
})
export class NewscardComponent  implements OnInit {


  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';

  constructor() { }

  ngOnInit() {}

}
