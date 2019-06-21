import React from 'react';

export default class Ad extends React.Component {
  componentDidMount () {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

render () {
    return (
        <ins className='adsbygoogle'
          style={{ display: 'block' }}
          data-ad-client='ca-pub-4643545024162976'
          data-ad-slot={this.props.slot}
          data-ad-format='auto'
          data-full-width-responsive='true' />
    );
  }
}