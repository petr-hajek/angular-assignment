import { Injectable } from "@angular/core";
import { Settings } from "./settings";

@Injectable({
  providedIn: "root",
})
export class SettingsService {
  constructor() {}
  url = "http://localhost:3000/settings";

  async getSettings(): Promise<Settings> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async postSettings(settings: Partial<Settings>) {
    const response = await fetch(this.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(settings),
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  }
}
