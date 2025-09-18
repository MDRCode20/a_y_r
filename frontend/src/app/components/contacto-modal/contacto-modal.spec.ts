import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoModal } from './contacto-modal';

describe('ContactoModal', () => {
  let component: ContactoModal;
  let fixture: ComponentFixture<ContactoModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactoModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
