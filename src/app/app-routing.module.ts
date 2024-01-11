import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./details/details.component";

const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Home Page' },
    { path: 'details/:id', component: DetailsComponent, title: 'Home Details' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }