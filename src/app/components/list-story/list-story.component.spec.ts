import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStoryComponent } from './list-story.component';

describe('ListStoryComponent', () => {
  let component: ListStoryComponent;
  let fixture: ComponentFixture<ListStoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListStoryComponent]
    });
    fixture = TestBed.createComponent(ListStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
