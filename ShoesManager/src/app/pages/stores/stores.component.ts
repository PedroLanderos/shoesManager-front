import { NgFor, AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store, StoreService } from '../../services/store.service';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-stores',
  standalone: true,
  imports: [NgFor, AsyncPipe, MatTableModule, MatCardModule, MatToolbarModule],
  templateUrl: './stores.component.html',
  styleUrl: './stores.component.css',
})
export class StoresComponent implements OnInit {
  stores: Store[] = [];
  displayedColumns: string[] = ['id', 'name', 'address']; // Columnas de la tabla

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.storeService.getAllStores().subscribe((data) => {
      this.stores = data;
    });
  }
}
