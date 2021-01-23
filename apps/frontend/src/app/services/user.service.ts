import { Injectable } from '@angular/core';
import { User } from '@ks-work-schedule/models';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';

@Injectable({
  providedIn: 'root'
})
export class UserService extends EntityCollectionServiceBase<User> {

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('User', serviceElementsFactory);
  }
}
