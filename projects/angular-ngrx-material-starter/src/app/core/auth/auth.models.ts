import { AppState } from '../core.module';

export interface AuthState {
  username: string;
  isAuthenticated: boolean;
}
export interface State extends AppState {
  auth: AuthState;
}
