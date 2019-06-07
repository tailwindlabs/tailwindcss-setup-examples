import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root'
})
export class App {
  render() {
    return (
      <div class="antialiased text-gray-900 flex items-center justify-center min-h-screen">
        Incoming message:
        <scoped-css />
        <span> </span>
        <shadow-css />
      </div>
    );
  }
}
