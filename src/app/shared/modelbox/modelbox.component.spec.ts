import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelboxComponent } from './modelbox.component';

describe('ModelboxComponent', () => {
  let component: ModelboxComponent;
  let fixture: ComponentFixture<ModelboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
