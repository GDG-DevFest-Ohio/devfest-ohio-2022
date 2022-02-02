import { customElement } from '@polymer/decorators';
import { html, PolymerElement } from '@polymer/polymer';
import '../elements/footer-block';
import { updateMetadata } from '../utils/metadata';

@customElement('not-found-page')
export class NotFoundPage extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }

        .not-found-image {
          height: 400px;
          margin: 48px;
          width: calc(100% - 94px);
        }
      </style>

      <hero-block
        background-image="{$ heroSettings.notFound.background.image $}"
        background-color="{$ heroSettings.notFound.background.color $}"
        font-color="{$ heroSettings.notFound.fontColor $}"
      >
        <div class="hero-title">{$ heroSettings.notFound.title $}</div>
        <p class="hero-description">{$ heroSettings.notFound.description $}</p>
      </hero-block>

      <plastic-image
        class="not-found-image"
        srcset="../../images/not-found.svg"
        sizing="contain"
        alt="{$ heroSettings.notFound.title $}"
      ></plastic-image>

      <footer-block></footer-block>
    `;
  }

  override connectedCallback() {
    super.connectedCallback();
    updateMetadata(
      '{$ heroSettings.notFound.title $} | {$ title $}',
      '{$ heroSettings.notFound.metaDescription $}'
    );
  }
}