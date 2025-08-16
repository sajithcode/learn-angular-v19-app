import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBinldingComponent } from './data-binlding.component';

describe('DataBinldingComponent', () => {
  let component: DataBinldingComponent;
  let fixture: ComponentFixture<DataBinldingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataBinldingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataBinldingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
