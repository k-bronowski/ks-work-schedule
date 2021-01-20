import { User } from '@ks-work-schedule/models';


export interface State {
  authToken: string;
  userProfile: User;
}
