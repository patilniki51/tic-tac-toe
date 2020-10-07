import { Component, OnInit, Input } from '@angular/core';

import {faPen, faTimes} from "@fortawesome/free-solid-svg-icons";
import {faCircle} from "@fortawesome/free-regular-svg-icons"


@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {

  @Input() iconName: string;
  
  //variable = coming from import
  faPen = faPen;
  faTimes = faTimes;
  faCircle = faCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
