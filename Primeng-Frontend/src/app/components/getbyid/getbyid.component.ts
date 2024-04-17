import { Component } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { Gym } from '../../models/gym';

@Component({
  selector: 'app-getbyid',
  templateUrl: './getbyid.component.html',
  styleUrl: './getbyid.component.css'
})
export class GetbyidComponent {
  gymId! : number;
  isSubmitted : boolean = false;
  resultData! : Gym;

  constructor(private crudservice: CrudService) {

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getbyid(id: number) {
    this.crudservice.getbyid(id).subscribe({
      next: (res) => {
        this.resultData = res
        console.log(res)
        this.isSubmitted = true;
      },
      error: (err) => {
        console.log(err)
        this.isSubmitted = false;
      }
    })
  }
}
