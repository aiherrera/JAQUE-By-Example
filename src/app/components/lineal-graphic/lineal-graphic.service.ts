import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Car } from 'src/app/interfaces/car';

@Injectable({
  providedIn: 'root'
})
export class LinealGraphicService {

  cars_url = 'https://run.mocky.io/v3/15517ca5-7e07-4ebc-bf63-5b033ec4e16a'

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Retrieves a list of cars
   */
  getListCars(): Observable<any> {
    return this.http.get(this.cars_url).pipe(
      map((result: any) => {
        return result.sales as Car[]
      })
    )
  }
}
