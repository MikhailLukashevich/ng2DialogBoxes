import { NgModule } from "@angular/core";
import {RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { DialogBoxComponent } from "./dialog-box/dialog-box.component";


@NgModule({
    imports: [RouterModule.forRoot([
        {
            path: "",
            redirectTo: "home",
            pathMatch: "full"
        },
        { path: "home", component: HomeComponent },
         { path: "dialog-box", component: DialogBoxComponent },
    ])],
    exports: [RouterModule] // re-export module for using directives during routing
})
export class AppRoutingModule { }