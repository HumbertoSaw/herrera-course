import { NgModule } from '@angular/core';
import { MainPageComponent } from './components/main-page.component';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [MainPageComponent],
    declarations: [MainPageComponent, ListComponent, FormComponent],
    providers: [],
})
export class DbzModule { }
