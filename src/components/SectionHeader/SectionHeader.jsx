import React from 'react';
import './SectionHeader.css'

function SectionHeader({text}) {
  return (
    <h2 className={'section-header'}>
      {text}
    </h2>
  );
}

export default SectionHeader;
