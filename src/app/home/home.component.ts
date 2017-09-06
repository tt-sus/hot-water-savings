import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mirror: number;
  ratio: number;
  TotalWaterUsage_d: number=3436;
//design
//shower-all initials for shortform
totalShowerUsage_d:number;
showerUsage_per_d:number=62.5;
showerUsage_per_b:number=62.5;
hcRatio_s_d:number=0.7;
tshwu_d:number;
re_d:number=55;
rhw_d:number;
nHWsu_d:number;
//faucet
fwu_d:number;
hc_f_d:number=0.7;
nHWfu_d:number;
thw_f_d:number;
hw_d:number;
//Baseline
//shower-all initials for shortform
TotalWaterUsage_b:number=4898.8;
totalShowerUsage_b:number=1628;
hcRatio_s_b:number=0.7;
tshwu_b:number;
re_b:number=55;
rhw_b:number;
nHWsu_b:number;
//faucet
fwu_b:number;
hc_f_b:number=0.7;
nHWfu_b:number;
hw_b:number;
thw_f_b:number;
savings:number;
  constructor() { }
calculate(){
  this.showerUsage_per_d=this.showerUsage_per_d/100;
  this.re_d=this.re_d/100;
  this.re_b=this.re_b/100;
  this.totalShowerUsage_d=this.TotalWaterUsage_d*this.showerUsage_per_d;
  console.log("total shower usage"+this.totalShowerUsage_b)
  this.tshwu_d=this.totalShowerUsage_d*this.hcRatio_s_d;
  this.tshwu_b=this.totalShowerUsage_b*this.hcRatio_s_b;
  console.log("total shower hot usage"+this.tshwu_b)
  this.rhw_d=this.tshwu_d*this.re_d*0.75;
  this.rhw_b=this.tshwu_b*this.re_b*0.75;
  this.nHWsu_d=this.tshwu_d-this.rhw_d;
  this.nHWsu_b=this.tshwu_b;
  console.log("net"+this.nHWsu_b)
  this.fwu_d=this.TotalWaterUsage_d-this.totalShowerUsage_d;
  this.fwu_b=this.TotalWaterUsage_b-this.totalShowerUsage_b;
  this.hc_f_b=this.hc_f_d;
  console.log( this.fwu_b)
  this.nHWfu_d=this.fwu_d*this.hc_f_d;
  this.nHWfu_b=this.fwu_b*this.hc_f_b;
  console.log("faucet" + this.nHWfu_b)
  // this.nHWsu_d=this.totalShowerUsage_d-this.rhw_d;
  // this.nHWsu_b=this.totalShowerUsage_b-this.rhw_b;
  this.hw_d=this.nHWsu_d+this.nHWfu_d;
  this.hw_b=this.nHWsu_b+this.nHWfu_b;
  console.log("HW"+this.hw_b)
  this.thw_f_d=(this.hw_d+69)*this.placement;
  this.thw_f_b=this.hw_b +69;
  console.log( this.hw_b)
  console.log( this.thw_f_b)
  this.savings=1-(this.thw_f_d/this.thw_f_b);
  this.re_d=this.re_d*100
  this.re_b=this.re_b*100;
  this.re_d=Math.round(this.re_d * 100) / 100;
  this.rhw_d=Math.round(this.rhw_d * 100) / 100;
  this.showerUsage_per_d=this.showerUsage_per_d*100
}
placement:number=1;
select(){
this.calculate()
}
placements=[
  {value:1,name:"Preheat Cold & Hot Water Tank"},
  {value:0.77,name:"Preheat Hot Water Tank Only"},
  {value:0.77,name:"Preheat Cold Water Tank Only"}
]
  ngOnInit() {
    this.calculate();
  }

}
