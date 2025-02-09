import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store, StoreService } from '../../services/store.service';
import { NgIf } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { allowedNodeEnvironmentFlags } from 'process';

@Component({
  selector: 'app-stores-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './stores-form.component.html',
  styleUrl: './stores-form.component.css'
})
export class StoresFormComponent implements OnInit{
  storeForm: FormGroup;
  storeId : number | null = null;
  isEditing: boolean = false;


  constructor(private storeService:StoreService, private fb:FormBuilder, private route:ActivatedRoute, private router:Router) {
    
    this.storeForm = this.fb.group({name: ['', Validators.required], address: ['', Validators.required]});
  }

  ngOnInit(){
      //get the id from current url
      this.route.paramMap.subscribe(params=>
      {
        const id = params.get('id');
        if(id)
        {
          //convert const id to number
          this.storeId = +id; 
          this.isEditing = true;
          //method to load the main store data
          this.loadStoreData();
        }
      }
      );
  }

  loadStoreData()
  {
    if(this.storeId)
    {
      //call the getstorebyid service
      this.storeService.getStoreById(this.storeId).subscribe(
        {
          next:(store:Store)=>{
            this.storeForm.patchValue(store);
          },
          error: ()=>{
            alert('error al cargar los datos de la tienda');
            this.router.navigate(['/stores']);
          }
        }
      );
      
    }
  }

  saveStore()
  {
    if(this.storeForm.valid)
    {
      //get the store form value
      const storeData: Store = this.storeForm.value;

      if(this.isEditing && this.storeId)
      {
        storeData.id = this.storeId;
        this.storeService.updateStore(this.storeId, storeData).subscribe(
          {
            next:()=>{
              alert('Tienda actualizada')
              this.router.navigate(['/stores']);
            },
            error:()=>{
              alert('no se pudo hacer el update')
            }
          }
        );
      }
      else
      {
        this.storeService.createStore(storeData).subscribe(
          {
            next:(response) =>
            {
              alert('Tienda creada con exito');
              this.storeForm.reset();
            },
            error:(error)=>
            {
              alert('Error al crear la tienda');
            }
          }
        );
      }
    }
  }

}
