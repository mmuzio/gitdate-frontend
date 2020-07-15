import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GittitComponent } from './gittit.component';

describe('GittitComponent', () => {
  let component: GittitComponent;
  let fixture: ComponentFixture<GittitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GittitComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GittitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
