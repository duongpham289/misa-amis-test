import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupTaskComponent } from './popup-task.component';
import { ButtonModule } from '../../../base/button/button.module';
import { DxCalendarModule, DxListModule, DxPopoverModule, DxPopupModule, DxTemplateModule, DxTreeViewModule } from 'devextreme-angular';
import { DxiItemModule } from 'devextreme-angular/ui/nested';
import { TextFieldModule } from '../../../base/text-field/text-field.module';



@NgModule({
  declarations: [PopupTaskComponent],
  imports: [
    CommonModule,
    
    ButtonModule,
    TextFieldModule,
    
    DxCalendarModule,
    DxPopoverModule,
    DxPopupModule,
    DxListModule,
    
    DxTemplateModule,
    DxTreeViewModule,
    DxiItemModule
  ], 
  exports: [PopupTaskComponent]
})
export class PopupTaskModule { }
