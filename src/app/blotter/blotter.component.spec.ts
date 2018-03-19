import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlotterComponent } from './blotter.component';
import { IgxGridModule, IgxProgressBarModule, IgxAvatarModule, IgxBadgeModule, IgxSwitchModule } from 'igniteui-angular/main';

describe('BlotterComponent', () => {
  let component: BlotterComponent;
  let fixture: ComponentFixture<BlotterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlotterComponent ],
      imports: [ IgxGridModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlotterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
