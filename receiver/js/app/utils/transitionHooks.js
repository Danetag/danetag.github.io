/* eslint-disable */
import React, {Component} from 'react';

export default function transitionHooks(ChildComponent) {
  return class TransitionHooks extends Component {
    render() {
      return (
        <ChildComponent
          ref="item0"
          {...this.props}
          componentWillAppear={(f) => this.componentWillAppear = f}
          componentDidAppear={(f) => this.componentDidAppear = f}
          componentWillEnter={(f) => this.componentWillEnter = f}
          componentDidEnter={(f) => this.componentDidEnter = f}
          componentWillLeave={(f) => this.componentWillLeave = f}
          componentDidLeave={(f) => this.componentDidLeave = f}
        />
      );
    }
  };
}
