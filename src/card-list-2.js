import { LitElement, html, css} from 'lit';
import { InfoCard } from 'info-card-2';

class CardList2 extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--card-list-2-background-color);
    }

    
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      <main>
        
      </main>

    `;
  }
}

customElements.define('card-list-2', CardList2);