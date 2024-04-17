import { Component } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { Creategym } from '../../models/creategym';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  gymId! : number;
  isUpdated: boolean = false;
  resultData : Creategym = {
    name: "",
    description: "",
    location: "",
    rating: 0
  }
  updatedData : Creategym = {
    name: "",
    description: "",
    location: "",
    rating: 0
  }
  message!: string;

  constructor(private service: CrudService) {}

  getbyid(id: number) {
    this.service.getbyid(id).subscribe({
      next: (res) => {
        this.resultData = res;
        console.log(res);
        this.isUpdated = true;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  setGym() {
    this.service.update(this.gymId, this.updatedData).subscribe({
      next: (res) => {
        console.log(res)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
