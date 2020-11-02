import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'shadow-css',
  styleUrl: './shadow-css.css',
  shadow: true
})
export class ShadowCss {
  @Prop()
  message: string = 'World';
  render() {
    return <div class="shadow-class">{this.message}</div>;
  }
}
