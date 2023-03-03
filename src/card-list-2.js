import { LitElement, html, css} from 'lit';
import { InfoCard } from 'info-card-2/src/info-card.js';
import { PetCard } from 'pet-card/src/pet-card.js';


const infocard = new InfoCard();
const infocard2 = new PetCard();

class CardList2 extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      <main>
      <div style="width: 100%;overflow:auto;">
        <div style="float:left; width: 50%">
          ${infocard};
        </div>
        <div style="float:right;">
          ${infocard2}
        </div>
      </div>

        
      </main>

    `;
  }
}

customElements.define('card-list-2', CardList2);
