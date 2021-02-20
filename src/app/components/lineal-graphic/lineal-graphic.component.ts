import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { Color } from 'ng2-charts';
import { finalize } from 'rxjs/operators';
import { Car } from 'src/app/interfaces/car';
import { LinealGraphicService } from './lineal-graphic.service';

@Component({
  selector: 'app-lineal-graphic',
  templateUrl: './lineal-graphic.component.html',
  styleUrls: ['./lineal-graphic.component.scss']
})
export class LinealGraphicComponent implements OnInit {

  cars: Car[] = []
  isLoading: boolean = false

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = [];
  barChartData: ChartDataSets[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: '#fa6a00',
    },
  ];

  constructor(
    private carsService: LinealGraphicService
  ) { }

  ngOnInit(): void {
    this.onListCars()
  }

  /**
   * List all the cars
   */
  onListCars(): void {
    this.isLoading = true

    this.carsService.getListCars().pipe(finalize(() => this.isLoading = false)).subscribe(async (cars: Car[]) => {
      this.cars = [...cars]
      const groupedValues = this.groupCars(this.cars)

      this.barChartData = [groupedValues]
      this.barChartLabels = [...new Set<any>(this.getLabels(this.cars, 'car_make'))]

    })
  }

  /**
   * Utility to group labels by ${key} element
   *
   * @param array array of objects to group labels
   * @param key key to group
   */
  getLabels(array: any, key: string): any {
    return Object.values(array).reduce((acc: any, obj: any): any[] => {
      return [...acc, obj[key]]
    }, [])
  }

  /**
   * Utility for grouping by ${key} element
   *
   * @param array array of objects to be grouped
   *
   * @example [{ data: [45, 37, 60, 70, 46, 33], label: 'Cars' }]
   */
  groupCars(array: any): any {

    const values = array.reduce((acc: any, obj: any) => {
      let {quantity, car_make} = obj;
      return {...acc, [car_make]: [...(acc[car_make] || []), quantity]};
    }, {})

    return {
      label: 'Cars sold in 2020',
      data: Object.values(values).map((val: any) => {
        return val.reduce((acc: any, obj: any) => acc + obj, 0)
      })
    }
  }
}
