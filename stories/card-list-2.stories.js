import { html } from 'lit';
import '../src/card-list-2.js';

export default {
  title: 'CardList2',
  component: 'card-list-2',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <card-list-2
      style="--card-list-2-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </card-list-2>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
