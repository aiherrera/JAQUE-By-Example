import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { UserAuth } from 'src/app/interfaces/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone
  ) { }

  /**
   * Service for authenticate the user in firebase
   * @param userAuth user & password for authenticate on firebase
   */
  signIn(userAuth: UserAuth): Promise<void> {
    return this.fireAuth.signInWithEmailAndPassword(userAuth.email, userAuth.password)
      .then(res => {
        this.ngZone.run(() => {
          this.router.navigate(['dashboard'])
        })
      }).catch(err => {
        throw err
      })
  }

  /**
   * Service for logout the user
   */
  signOut(): Promise<void> {
    return this.fireAuth.signOut().then(() => {
      localStorage.removeItem('user')
      this.router.navigate(['log-in'])
    })
  }
}
