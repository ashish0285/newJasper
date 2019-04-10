import { NgModule } from '@angular/core';

import { NewJasperSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [NewJasperSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [NewJasperSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class NewJasperSharedCommonModule {}
