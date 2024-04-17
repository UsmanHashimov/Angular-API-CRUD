import { Component } from '@angular/core';
import { Gym } from '../../models/gym';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  gymId! : number;
  isDeleted! : Gym;

  constructor(private crudservice: CrudService) {

  }

  delete(){
    this.crudservice.delete(this.gymId).subscribe({
      next: (res) => {this.isDeleted=res; console.log(res)},
      error: (err) => { console.log(err) }
    })
  }
}
