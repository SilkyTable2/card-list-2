import { LitElement, html, css} from 'lit';
import { InfoCard } from 'info-card-2/src/info-card.js';
// import { PetCard } from 'pet-card/src/pet-card.js';


const infocard = new InfoCard();
const infocard2 = new InfoCard();
const infocard3 = new InfoCard();
const infocard4 = new InfoCard();
const infocard5 = new InfoCard();
// const infocard6 = new PetCard();
// const infocard7 = new PetCard();
// const infocard8 = new PetCard();
// const infocard9 = new PetCard();
// const infocard10 = new PetCard();


export class CardList2 extends LitElement {
  static properties = {
    header: { type: String }
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
          ${infocard2};
          ${infocard3};
          ${infocard4};
          ${infocard5};
        </div>
        <div style="float:right;">
          
        </div>
      </div>

        
      </main>

    `;
  }
}

customElements.define('card-list-2', CardList2);
