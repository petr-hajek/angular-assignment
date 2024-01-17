/*
 *  Protractor support is deprecated in Angular.
 *  Protractor is used in this example for compatibility with Angular documentation tools.
 */
import { HttpClientModule } from "@angular/common/http";
import { importProvidersFrom } from "@angular/core";
import {
  bootstrapApplication,
  provideProtractorTestingSupport,
} from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";
import { AppComponent } from "./app/app.component";

bootstrapApplication(AppComponent, {
  providers: [
    provideProtractorTestingSupport(),
    provideAnimations(),
    importProvidersFrom(HttpClientModule),
  ],
}).catch((err) => console.error(err));
