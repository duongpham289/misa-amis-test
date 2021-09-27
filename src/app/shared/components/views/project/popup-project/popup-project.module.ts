import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupProjectComponent } from './popup-project.component';
import { TextFieldModule } from '../../../base/text-field/text-field.module';
import { PopupFooterModule } from '../../../base/popup/popup-footer/popup-footer.module';
import { PopupModule } from '../../../base/popup/popup.module';



@NgModule({
  declarations: [PopupProjectComponent],
  imports: [
    CommonModule,
    TextFieldModule,
    PopupFooterModule,
    PopupModule
  ],
  exports: [PopupProjectComponent]
})
export class PopupProjectModule { }
