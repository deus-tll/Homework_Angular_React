import { Component } from '@angular/core';
import { VehicleEnum } from '../enums/vehicle-enum';

@Component({
  selector: 'app-biggest-vehicles',
  templateUrl: './biggest-vehicles.component.html',
  styleUrls: ['./biggest-vehicles.component.css']
})
export class BiggestVehiclesComponent {
  VehicleEnum = VehicleEnum;
  selectedVehicle: VehicleEnum = VehicleEnum.Car;

  selectVehicle = (vehicle:VehicleEnum) => {
    this.selectedVehicle = vehicle;
  }
}