import {AcArcComponent, CesiumService} from 'angular-cesium';
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {instance, mock, when} from 'ts-mockito';
import {PrimitiveCollection} from 'cesium';
import {ArcDrawerService} from '../../services/drawers/arc-drawer/arc-drawer.service';
import {MapLayersService} from '../../services/map-layers/map-layers.service';
import {providerFromMock} from '../../utils/testingUtils';


describe('AcAcrComponent', () => {
  let component: AcArcComponent;
  let fixture: ComponentFixture<AcArcComponent>;

  const cesiumService = mock(CesiumService);
  const arcCollection = mock(PrimitiveCollection);

  when(cesiumService.getScene()).thenReturn({primitives: instance(arcCollection)});

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AcArcComponent],
      providers: [ArcDrawerService, MapLayersService,
        providerFromMock(CesiumService, cesiumService)]
    })
      .compileComponents();
    fixture = TestBed.createComponent(AcArcComponent);
    component = fixture.componentInstance;

  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
