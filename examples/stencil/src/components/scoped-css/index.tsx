import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'scoped-css',
  styleUrl: './scoped-css.css',
  scoped: true
})
export class ScopedCss {
  @Prop()
  greeting: string = 'Hello';
  render() {
    return <div class="scoped-class">{this.greeting}</div>;
  }
}
