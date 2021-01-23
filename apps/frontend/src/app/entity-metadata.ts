import { User } from '@ks-work-schedule/models';
import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  User: {
    selectId: (user: User) => user.username,
    sortComparer: (a: User, b: User) => a.lastName.localeCompare(b.lastName) + a.firstName.localeCompare(b.firstName)
  }
};

const pluralNames = {};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames
};
