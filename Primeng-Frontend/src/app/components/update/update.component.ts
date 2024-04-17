import { Component } from '@angular/core';
import { Creategym } from '../../models/creategym';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  gymId! : number;
  isUpdated: boolean = false;
  isShowRes: boolean = false;
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
        this.isShowRes = true
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  setGym() {
    this.service.update(this.gymId, this.updatedData).subscribe({
      next: (res) => {
        this.isUpdated = true
        console.log(res)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
