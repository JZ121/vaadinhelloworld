import { html, LitElement, customElement } from 'lit-element';


import '@vaadin/vaadin-button';
import '@vaadin/vaadin-text-field';

@customElement('hello-world-view')
export class HelloWorldView extends LitElement {
  createRenderRoot() {
    // Do not use a shadow root
    return this;
  }

  render() {
    return html`<vaadin-text-field id="name" label="Your name please sir"></vaadin-text-field>
      <vaadin-button id="sayHello">Say hello</vaadin-button>`;
  }
}
