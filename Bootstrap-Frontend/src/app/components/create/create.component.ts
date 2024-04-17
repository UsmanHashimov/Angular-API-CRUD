import { Component, OnInit } from '@angular/core';
import { createUserModel } from '../../models/createUser';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  resultData!: createUserModel;

  setValue: createUserModel = {
    name: "",
    description: "",
    location: "",
    rating: 0
  }

  isSubmitted: boolean = false;

  constructor(private service: CrudService) {

  }

  create(inputData: createUserModel) {
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
