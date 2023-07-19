import {Component, forwardRef} from '@angular/core';
import {BasicDesc} from '@ac/services/basic-desc/basic-desc.service';
import {LayerService} from '@ac/services/layer-service/layer-service.service';
import {BillboardDrawerService} from '@ac/services/drawers/billboard-drawer/billboard-drawer.service';
import {ComputationCache} from '@ac/services/computation-cache/computation-cache.service';
import {CesiumProperties} from '@ac/services/cesium-properties/cesium-properties.service';

/**
 *  This is a billboard implementation.
 *  The element must be a child of ac-layer element.
 *  The properties of props are the same as the properties of Entity and BillboardGraphics:
 *  + https://cesiumjs.org/Cesium/Build/Documentation/Entity.html
 *  + https://cesiumjs.org/Cesium/Build/Documentation/BillboardGraphics.html
 *
 *  __Usage :__
 *  ```
 *    <ac-billboard-desc props="{
 *      image: track.image,
 *      position: track.position,
 *      scale: track.scale,
 *      color: track.color,
 *      name: track.name
 *    }">
 *    </ac-billboard-desc>
 *  ```
 */

@Component({
  selector: 'ac-billboard-desc',
  template: '',
  providers: [{provide: BasicDesc, useExisting: forwardRef(() => AcBillboardDescComponent)}],
})
export class AcBillboardDescComponent extends BasicDesc {

  constructor(billboardDrawer: BillboardDrawerService, layerService: LayerService,
              computationCache: ComputationCache, cesiumProperties: CesiumProperties) {
    super(billboardDrawer, layerService, computationCache, cesiumProperties);
  }
}
