import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../store/state';
import * as Selectors from '../../store/selectors';

@Component({
  templateUrl: './index-view.component.html',
  styleUrls: ['./index-view.component.css']
})
export class IndexViewComponent implements OnInit {

  userProfile$ = this.store.select(Selectors.userProfile$);

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
  }

}
