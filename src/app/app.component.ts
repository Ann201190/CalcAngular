import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// использовала двухсторонюю привязку ngModel
export class AppComponent {
  title = 'Калькулятор';

  objAB = { a: 0, b: 0, rezalt: 0, radio: "" }

  onClickBtn() {
    if (this.objAB.radio === "+") {
      this.objAB.rezalt = Number(this.objAB.a) + Number(this.objAB.b);
    }
    else if (this.objAB.radio === "-") {
      this.objAB.rezalt = Number(this.objAB.a) - Number(this.objAB.b);
    }
    else if (this.objAB.radio === "/") {
      this.objAB.rezalt = Number(this.objAB.a) / Number(this.objAB.b);
    }
    else if (this.objAB.radio === "*") {
      this.objAB.rezalt = Number(this.objAB.a) * Number(this.objAB.b);
    }
  }
}




