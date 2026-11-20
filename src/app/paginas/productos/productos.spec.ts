// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { Productos } from './productos';

// describe('Productos', () => {
//   let component: Productos;
//   let fixture: ComponentFixture<Productos>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [Productos],
//     }).compileComponents();

//     fixture = TestBed.createComponent(Productos);
//     component = fixture.componentInstance;
//     await fixture.whenStable();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

// paginas/productos/productos.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { ProductosComponent } from './productos';

describe('ProductosComponent', () => {
  let component: ProductosComponent;
  let fixture: ComponentFixture<ProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductosComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



