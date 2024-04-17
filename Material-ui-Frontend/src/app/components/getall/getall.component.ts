import { Component } from '@angular/core';
import { Gym } from '../../models/gym';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-getall',
  templateUrl: './getall.component.html',
  styleUrl: './getall.component.css'
})
export class GetallComponent {
  constructor(private crudService:CrudService){}
  displayedColumns: string[] = ['id', 'name', 'description', 'location', 'rating'];
  dataSource = this.crudService.getAll();
}
