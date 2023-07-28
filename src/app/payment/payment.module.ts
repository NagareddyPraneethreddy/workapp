import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { UpipaymentComponent } from './upipayment/upipayment.component';
import { CardpaymentComponent } from './cardpayment/cardpayment.component';


@NgModule({
  declarations: [
    UpipaymentComponent,
    CardpaymentComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule
  ]
})
export class PaymentModule { }
