import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbedqryComponent } from './embedqry.component';

describe('EmbedqryComponent', () => {
  let component: EmbedqryComponent;
  let fixture: ComponentFixture<EmbedqryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmbedqryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbedqryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
