import {html, LitElement, css} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('slide-button')
class SlideButton extends LitElement {
  static override styles = css`
    #btn {
      width: 2em;
      height: 2em;
      cursor: pointer;
      border-radius: 1em;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    #btn:active:hover,
    #btn:hover:active {
      box-shadow: 0 0 4px 4px red;
    }

    ::slotted(svg) {
      width: 1em;
      height: 1em;
    }
  `;
  override render() {
    return html`
      <div id="btn" tabindex="0" role="button" aria-pressed="false">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'slide-button': SlideButton;
  }
}
