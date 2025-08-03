import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiData } from './api-data';
import { ApiService } from '../../services/api.service';
import { of, throwError } from 'rxjs';

describe('ApiData', () => {
  let component: ApiData;
  let fixture: ComponentFixture<ApiData>;
  let apiServiceMock: jasmine.SpyObj<ApiService>;

  beforeEach(async () => {
    apiServiceMock = jasmine.createSpyObj('ApiService', ['getData']);

    await TestBed.configureTestingModule({
      imports: [ApiData],
      providers: [{ provide: ApiService, useValue: apiServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(ApiData);
    component = fixture.componentInstance;
  });

  it('should fetch data successfully', () => {
    const mockData = [{ title: 'Test item' }];
    apiServiceMock.getData.and.returnValue(of(mockData));

    fixture.detectChanges();

    expect(component.loading).toBe(false);
    expect(component.data.length).toBe(1);
    expect(component.error).toBe('');
  });

  it('should handle error', () => {
    apiServiceMock.getData.and.returnValue(throwError(() => new Error('Error')));

    fixture.detectChanges();

    expect(component.loading).toBe(false);
    expect(component.error).toBe('Failed to load data');
  });
});
