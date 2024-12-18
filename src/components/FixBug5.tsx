import React from 'react';

function ChildComponent({text}: {text: string}) {
  return <p>{text.toUpperCase()}</p>;
}

function ParentComponent() {
    
  return (
    <div>
      <ChildComponent text='jjkkl'/>
    </div>
  );
}

export default ParentComponent;
