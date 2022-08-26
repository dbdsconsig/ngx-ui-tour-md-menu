import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  pages: Page[] = [
    {
      name: "Home",
      path: ""
    }
  ];
}

interface Page {
  name: string;
  path: string;
}
