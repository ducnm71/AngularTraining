import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContentStoryComponent } from './page-content-story.component';

describe('PageContentStoryComponent', () => {
  let component: PageContentStoryComponent;
  let fixture: ComponentFixture<PageContentStoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageContentStoryComponent]
    });
    fixture = TestBed.createComponent(PageContentStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
