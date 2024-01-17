import {
  CdkDrag,
  CdkDragDrop,
  CdkDragHandle,
  CdkDropList,
} from "@angular/cdk/drag-drop";
import { CommonModule } from "@angular/common";
import { Component, Inject, inject } from "@angular/core";
import { FormArray, FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import {
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogRef,
} from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { Settings } from "../settings";
import { SettingsService } from "../tiles.service";

@Component({
  selector: "dialog-settings",
  standalone: true,
  imports: [
    CdkDrag,
    CdkDragHandle,
    CdkDropList,
    CommonModule,
    MatButtonModule,
    MatDividerModule,
    MatDialogClose,
    MatIconModule,
    ReactiveFormsModule,
  ],
  templateUrl: "./dialog.component.html",
  styleUrl: "./dialog.component.scss",
})
export class SettingsDialog {
  settingsForm = this.fb.group({
    display: this.settings.display,
    text: this.fb.group(this.settings.text || {}),
    tiles: this.fb.array(
      this.settings.tiles
        ? this.settings.tiles.map((tile) => this.fb.group(tile))
        : []
    ),
  });
  settingsService: SettingsService = inject(SettingsService);
  loading = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public settings: Settings,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<SettingsDialog>
  ) {}

  get tiles() {
    return this.settingsForm.get("tiles") as FormArray;
  }

  addTile() {
    this.tiles.push(
      this.fb.group({ background: ["#407cff"], text: [""], link: [""] })
    );
  }

  removeTile(index: number) {
    this.tiles.removeAt(index);
  }

  dropTile(event: CdkDragDrop<FormArray>) {
    const tempControl = this.tiles.at(event.previousIndex);
    this.tiles.setControl(
      event.previousIndex,
      this.tiles.at(event.currentIndex)
    );
    this.tiles.setControl(event.currentIndex, tempControl);
  }

  onSubmit() {
    this.loading = true;
    this.settingsService
      .postSettings(this.settingsForm.value)
      .then((data) => {
        this.dialogRef.close(data);
      })
      .catch(() => {
        this.loading = false;
      });
  }
}
