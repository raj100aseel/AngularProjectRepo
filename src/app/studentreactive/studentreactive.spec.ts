import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Studentreactive } from './studentreactive';

describe('Studentreactive', () => {
  let component: Studentreactive;
  let fixture: ComponentFixture<Studentreactive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Studentreactive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Studentreactive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
