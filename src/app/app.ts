import { Component } from "@angular/core";
import { products } from "../components/products/products";
import { LightBox } from "../directives/light-box";
import { BtnNight } from "../components/btn-night/btn-night";
import { Selector } from "../components/selector/selector";
import { Radio } from "../components/radio/radio";
import { TotalPrice } from "../components/total-price/total-price";
@Component({
    selector: "app-root",
    imports: [products , BtnNight , LightBox , Selector , Radio , TotalPrice],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {
}