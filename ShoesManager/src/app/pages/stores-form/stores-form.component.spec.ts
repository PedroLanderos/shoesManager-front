import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoresFormComponent } from './stores-form.component';

describe('StoresFormComponent', () => {
  let component: StoresFormComponent;
  let fixture: ComponentFixture<StoresFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoresFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StoresFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
