import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOnomatopiComponent } from './create-onomatopi.component';

describe('CreateOnomatopiComponent', () => {
  let component: CreateOnomatopiComponent;
  let fixture: ComponentFixture<CreateOnomatopiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOnomatopiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateOnomatopiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
