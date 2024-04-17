import { Component } from '@angular/core';
import { Gym } from '../../models/gym';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-getall',
  templateUrl: './getall.component.html',
  styleUrl: './getall.component.css'
})
export class GetallComponent {
  gyms!: Gym[];
  
  constructor(private CrudService: CrudService) {}
  
  ngOnInit() {
      this.CrudService.getAll().subscribe({
        next:(data)=>{
          this.gyms=data;
          console.log(data)
        },
        error: (err)=>{
          console.log(err);
        }
      }) 
      

  }
}
