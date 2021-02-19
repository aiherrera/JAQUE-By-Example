import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { User } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class ListUsersService {

  private users_url = 'https://run.mocky.io/v3/d5ddf1ff-a0e2-4a7e-bbcc-e832bef6a503'

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Retrieves a list of users
   */
  getListUsers(): Observable<User[]> {
    return this.http.get(this.users_url).pipe(
      map((result: any) => {
        return result.users as User[]
      })
    )
  }
}
