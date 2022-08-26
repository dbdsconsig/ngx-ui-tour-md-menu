import { Component, OnInit } from "@angular/core";
import { TourService } from "ngx-ui-tour-md-menu";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
  constructor(private readonly tourService: TourService) {}

  ngOnInit() {
    this.tourService.initialize([
      {
        anchorId: "app-home",
        content:
          "This is a step from the eager loaded app module in the home component",
        title: "Home Component",
        route: ""
      },
      {
        anchorId: "app-home-a",
        content:
          "This is a step from the lazy loaded module-a module in the module-a component",
        title: "Module-a Component",
        route: ""
      },
      {
        anchorId: "app-home-b",
        content:
          "This is a step from the lazy loaded module-b module in the module-b component",
        title: "Module-b Component",
        route: ""
      }
    ]);

    this.tourService.start();
  }

  startTour() {
    this.tourService.initialize([
      {
        anchorId: "app-home",
        content:
          "This is a step from the eager loaded app module in the home component",
        title: "Home Component",
        route: ""
      },
      {
        anchorId: "app-home-a",
        content:
          "This is a step from the lazy loaded module-a module in the module-a component",
        title: "Module-a Component",
        route: ""
      },
      {
        anchorId: "app-home-b",
        content:
          "This is a step from the lazy loaded module-b module in the module-b component",
        title: "Module-b Component",
        route: ""
      }
    ]);

    this.tourService.start();
  }
}
