import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TextFieldComponent} from './text-field/text-field.component';

@NgModule({
    declarations: [TextFieldComponent],
    imports: [CommonModule],
    exports: [TextFieldComponent],
})
export class TextFieldModule {}
