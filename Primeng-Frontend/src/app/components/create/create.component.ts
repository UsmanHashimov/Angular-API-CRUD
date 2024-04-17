import { Component } from '@angular/core';
import { Creategym } from '../../models/creategym';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  resultData!: Creategym;

  setValue: Creategym = {
    name: "",
    description: "",
    location: "",
    rating: 0
  }

  isSubmitted: boolean = false;

  constructor(private service: CrudService) {

  }

  create(inputData: Creategym) {
    this.service.create(inputData).subscribe({
      next: (res) => {
        this.resultData = res
        console.log(res)
        this.isSubmitted = true;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  setGym() {
    this.create(this.setValue);
  }
}
