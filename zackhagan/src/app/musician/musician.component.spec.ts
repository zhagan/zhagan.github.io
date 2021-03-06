import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MusicianComponent } from './musician.component';

describe('MusicianComponent', () => {
  let component: MusicianComponent;
  let fixture: ComponentFixture<MusicianComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
