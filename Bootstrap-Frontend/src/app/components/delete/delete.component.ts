import { Component } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  gymId! : number;
  isDeleted! : User;

  constructor(private crudservice: CrudService) {

  }

  delete(){
    this.crudservice.delete(this.gymId).subscribe({
      next: (res) => {this.isDeleted=res; console.log(res)},
      error: (err) => { console.log(err) }
    })
  }
}
