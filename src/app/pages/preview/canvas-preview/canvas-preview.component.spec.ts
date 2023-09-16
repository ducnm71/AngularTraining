import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasPreviewComponent } from './canvas-preview.component';

describe('CanvasPreviewComponent', () => {
  let component: CanvasPreviewComponent;
  let fixture: ComponentFixture<CanvasPreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanvasPreviewComponent]
    });
    fixture = TestBed.createComponent(CanvasPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
