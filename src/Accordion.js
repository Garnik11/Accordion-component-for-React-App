import React, { useState } from 'react';

const Accordion = ({ title, content}) => {
  const [isActive, setIsActive] = useState({active: false, content: ''});

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive({active: !isActive.active, content: content})}>
        <div>{title}</div>
        <div> {isActive.active ? '-' : '+'} </div>
      </div>
      {isActive.active && <div className="accordion-content">{isActive.content}</div>}
    </div>
  );
};

export default Accordion;
