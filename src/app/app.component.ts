import { Component } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { HomeComponent } from "./home/home.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [HomeComponent],
  template: `
    <main>
      <app-home class="app" />
    </main>
  `,
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconResolver((name) =>
      sanitizer.bypassSecurityTrustResourceUrl(`/assets/${name}.svg`)
    );
  }
}
