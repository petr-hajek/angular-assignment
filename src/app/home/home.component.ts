import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { SettingsDialog } from "../dialog/dialog.component";
import { Settings } from "../settings";
import { TileComponent } from "../tile/tile.component";
import { SettingsService } from "../tiles.service";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    CommonModule,
    TileComponent,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  template: `
    <header class="header">
      <h2 class="header__subtitle">{{ settings?.text?.subtitle }}</h2>
      <h1 class="header__title">{{ settings?.text?.title }}</h1>
    </header>
    <section [ngClass]="['results', 'results--' + settings?.display]">
      <app-tile
        class="results__item"
        *ngFor="let tile of settings?.tiles"
        [tile]="tile"
      />
    </section>
    <section class="btn-section">
      <mat-spinner *ngIf="loading" />
      <button
        mat-mini-fab
        aria-label="Open settings"
        class="button"
        (click)="openDialog()"
        *ngIf="settings"
      >
        <mat-icon svgIcon="settings" />
      </button>
    </section>
  `,
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  settings?: Settings;
  settingsService: SettingsService = inject(SettingsService);
  openDialog() {
    const modalRef = this.dialog.open(SettingsDialog, { data: this.settings });
    modalRef.afterClosed().subscribe((settings) => {
      if (settings) {
        this.settings = settings;
      }
    });
  }
  loading = false;

  constructor(public dialog: MatDialog) {
    this.loading = true;
    this.settingsService
      .getSettings()
      .then((settings) => {
        this.settings = settings;
      })
      .finally(() => {
        this.loading = false;
      });
  }
}
