import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {WelcomeRoutingModule} from './welcome-routing.module';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {WelcomeComponent} from './welcome.component';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzInputNumberModule} from 'ng-zorro-antd/input-number';
import {NzSelectModule} from 'ng-zorro-antd/select';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NzGridModule,
    WelcomeRoutingModule,
    NzFormModule,
    NzInputModule,
    NzInputNumberModule,
    NzSelectModule
  ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule {
}
