import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: "",
        loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
      }
    ])
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
