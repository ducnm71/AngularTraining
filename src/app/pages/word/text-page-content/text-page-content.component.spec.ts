import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextPageContentComponent } from './text-page-content.component';

describe('TextPageContentComponent', () => {
  let component: TextPageContentComponent;
  let fixture: ComponentFixture<TextPageContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextPageContentComponent]
    });
    fixture = TestBed.createComponent(TextPageContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
