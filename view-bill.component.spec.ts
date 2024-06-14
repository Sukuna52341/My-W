import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBillComponent } from './view-bill.component';

describe('ViewBillComponent', () => {
  let component: ViewBillComponent;
  let fixture: ComponentFixture<ViewBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewBillComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
