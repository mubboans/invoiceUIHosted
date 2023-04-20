import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryPageDownloadComponent } from './history-page-download.component';

describe('HistoryPageDownloadComponent', () => {
  let component: HistoryPageDownloadComponent;
  let fixture: ComponentFixture<HistoryPageDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryPageDownloadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryPageDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
