import { NgModule } from '@angular/core';

import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule} from 'primeng/button';
import { CardModule } from 'primeng/card';


@NgModule({
  exports: [
    MenuModule,
    MenubarModule,
    ButtonModule,
    CardModule,
  ]
})
export class PrimeNgModule { }
