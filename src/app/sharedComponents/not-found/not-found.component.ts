import { Component, OnInit } from '@angular/core';
import {LoadScriptsService} from './../../load-scripts.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(private _LoadScripts:LoadScriptsService) { 
    _LoadScripts.load(['js/script']); 
  }

  ngOnInit(): void {
  }

}
