import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  validateForm!: FormGroup;
  //原价
  totalPrice: number | undefined = 243900;
  //首付比例
  firstPayPercent: string | number | undefined = '0.15';
  //贷款金额
  loanCount: number | undefined;
  //期数
  periods: string | number | undefined = '60';
  //年化费率
  yearRate: string | number | undefined = '4.33';
  //贷款月供
  monthlySupply: number | undefined = 5000;
  //总付款
  finalPay: number | undefined = 5000;

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
      finalPay: [null, [Validators.required]],
    });
  }

}
