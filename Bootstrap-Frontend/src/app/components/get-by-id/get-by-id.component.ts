import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-get-by-id',
  templateUrl: './get-by-id.component.html',
  styleUrl: './get-by-id.component.css'
})
export class GetByIdComponent implements OnInit{
  
  userId! : number;
  isSubmitted : boolean = false;
  resultData! : User;

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
