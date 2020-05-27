import { AppState } from '../core.module';

/**
 * AuthState interface
 */
export interface AuthState {

  /**
   * The current user's username
   */
  username: string;

  /**
   * True if the user is successfully authenticated
   */
  isAuthenticated: boolean;

}

/**
 * State interface, currently composed of just 
 * AuthState, but may be extended
 */
export interface State extends AppState {

  /**
   * AuthState
   */
  auth: AuthState;
  
}
