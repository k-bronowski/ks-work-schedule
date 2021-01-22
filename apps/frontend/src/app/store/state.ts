import { User } from '@ks-work-schedule/models';


export interface State {
  accessToken: string;
  userProfile: User;
  loginUser: boolean;
  loginUserError: boolean;
}
