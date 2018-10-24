import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgTowerComponent } from './svg-tower.component';

describe('SvgTowerComponent', () => {
  let component: SvgTowerComponent;
  let fixture: ComponentFixture<SvgTowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgTowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgTowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
