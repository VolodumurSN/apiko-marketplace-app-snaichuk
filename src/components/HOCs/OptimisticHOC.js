import React, { Component } from 'react';

export default (WrappedComponent) =>
  class Optimistic extends Component {
    state = {
      isActive: this.props.isActive,
    };

    handleClick = () => {
      const originStatus = this.state.isActive;
      this.setState({ isActive: !originStatus });

      let isSuccess;
      if (this.state.isActive) {
        isSuccess = this.props.deactivate(this.props.id);
      } else {
        isSuccess = this.props.activate(this.props.id);
      }

      if (!isSuccess) {
        this.setState({ isActive: originStatus });
      }
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          isActive={this.state.isActive}
          onClick={this.handleClick}
        />
      );
    }
  };
