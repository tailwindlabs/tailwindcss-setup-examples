import * as React from 'react';
import './Link.css';

export class Link extends React.Component {
    render() {
        const rel = this.props.target === '_blank' && 'noopener noreferrer';
        return <a
            className="App-link"
            href={this.props.href}
            target={this.props.target}
            rel={rel}
        >
            {this.props.children}
        </a>;
    }
}
