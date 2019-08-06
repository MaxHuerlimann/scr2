import { Component } from '@angular/core';

// Stateful component

@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar class="scr-toolbar">
      <div class="toolbar-items">
        <span class="branding">Seoul Community Radio</span>
        <div class="scr-nav">
          <button class="listen" mat-flat-button color="warn">
            LIVE
          </button>
        </div>
      </div>
    </mat-toolbar>
    <mat-toolbar class="control-toolbar">
      <span>controls</span>
      <mat-form-field class="search-field">
        <input type="text" matInput />
        <mat-icon matSuffix>search</mat-icon>
      </mat-form-field>
    </mat-toolbar>
  `,
  styles: [
    `
      .branding {
        font-family: 'DIN Condensed', Roboto, 'Helvetica Neue', sans-serif;
        font-size: 2.25rem;
      }
      .listen {
        padding: 0;
        border-radius: unset;
        line-height: 1.5rem;
      }
      .scr-nav {
        text-align: end;
      }
      .toolbar-items {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        align-items: center;
        background-image: url(https://gftfc5lwyu-mrg.preview.forestry.io//images/scr_logo.png);
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
      }
      .scr-toolbar {
        padding: 0.5rem 1rem;
        background-color: black;
        border-bottom: rgba(79, 79, 79, 1) solid 1px;
      }
      .action-row {
        display: flex;
        justify-content: space-between;
      }
      .search-field {
        font-size: 0.75rem;
        margin-bottom: -0.5rem;
      }
      .control-toolbar {
        display: flex;
        justify-content: space-between;
        height: 3rem;
        background-color: black;
      }
    `
  ]
})
export class HeaderComponent {}
