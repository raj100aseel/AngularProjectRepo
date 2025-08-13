import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Studenttemplatedriven } from './studenttemplatedriven';

describe('Studenttemplatedriven', () => {
  let component: Studenttemplatedriven;
  let fixture: ComponentFixture<Studenttemplatedriven>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Studenttemplatedriven]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Studenttemplatedriven);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
