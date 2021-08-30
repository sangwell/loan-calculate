import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  validateForm!: FormGroup;
  //原价
  totalPrice: number = 243900;
  //首付比例
  firstPayPercent: string = '0.15';
  //贷款金额
  loanCount: number = 0;
  //期数
  periods: string = '60';
  //年化费率
  yearRate: string = '4.33';
  //贷款月供
  monthlySupply: number= 0;
  //总付款
  finalPay: number= 0;
  //差值
  diff: number = 0;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      totalPrice: [null, [Validators.required]],
      firstPayPercent: [null, [Validators.required]],
      loanCount: [null, [Validators.required]],
      periods: [null, [Validators.required]],
      yearRate: [null, [Validators.required]],
      monthlySupply: [null, [Validators.required]],
      // finalPay: [null, [Validators.required]],
      // diff: [null, [Validators.required]],
    });
  }

  onFirstPayChange(value: any) {
    console.log('d', value);
    if (value) {
      const v = Number(value);
      this.loanCount = this.totalPrice * (1 - v);
    }
  }

}
