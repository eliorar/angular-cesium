import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {PrimitiveCollection} from 'cesium';
import {instance, mock, when} from 'ts-mockito';
import {CesiumService} from '@ac/services/cesium/cesium.service';
import {providerFromMock} from '@ac/utils/testingUtils';
import {AcEllipseComponent} from './ac-ellipse.component';
import {EllipseDrawerService} from '@ac/services/drawers/ellipse-drawer/ellipse-drawer.service';
import {MapLayersService} from '@ac/services/map-layers/map-layers.service';

describe('AcEllipseComponent', () => {
  let component: AcEllipseComponent;
  let fixture: ComponentFixture<AcEllipseComponent>;

  const cesiumService = mock(CesiumService);
  const primitiveCollection = mock(PrimitiveCollection);

  when(cesiumService.getScene()).thenReturn({primitives: instance(primitiveCollection)});

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AcEllipseComponent],
      providers: [EllipseDrawerService, MapLayersService,
        providerFromMock(CesiumService, cesiumService)]
    })
      .compileComponents();
    fixture = TestBed.createComponent(AcEllipseComponent);
    component = fixture.componentInstance;

  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
