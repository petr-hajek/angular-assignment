import { Component, Input } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Tile } from "../settings";

@Component({
  selector: "app-tile",
  standalone: true,
  imports: [RouterModule],
  template: `
    <a
      [href]="'//' + tile.link"
      target="_blank"
      class="tile"
      [style.background-color]="tile.background"
    >
      <p class="tile__text">
        {{ tile.text }}
      </p>
    </a>
  `,
  styleUrl: "./tile.component.scss",
})
export class TileComponent {
  @Input() tile!: Tile;
}
