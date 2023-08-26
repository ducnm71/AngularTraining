import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryNameComponent } from './story-name.component';

describe('StoryNameComponent', () => {
  let component: StoryNameComponent;
  let fixture: ComponentFixture<StoryNameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoryNameComponent]
    });
    fixture = TestBed.createComponent(StoryNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
