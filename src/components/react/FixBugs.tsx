import React, { useState } from 'react';


function Counter() {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

interface Iitem{
    value: string,
    index: number
}

function HighlightSelectedItem(){
    const [isActive, setIsActive] = useState<Record<number, boolean>>({});
    const items = ['Moi', 'Jotain', 'Esim', 'Tekstiä']
    console.log(isActive)
    //...spread makes sure we dont loose other states when updating
    const handleToggle = (index: number) => {
        setIsActive((prev) => ({
            ...prev,
            [index]: !prev[index]
        }))
    }
    return(
        <div>
            {
                items.map((item, index) => (
                    <div>
                        <button 
                        style={isActive[index] ? {color: 'green'} : {color: 'red'}}
                        onClick={() => handleToggle(index)}>{item}</button>
                    </div>
                ))
            }
        </div>
    )
}

const items = ['Moi', 'Jotain', 'Esim', 'Tekstiä']

const objItems = [
    {
        id: 1,
        value: 'Moi1'
    },
    {
        id: 2,
        value: 'Moi2'
    },
    {
        id: 3,
        value: 'Moi3'
    },
    {
        id: 4,
        value: 'Moi4'
    },
]

interface Itest {
    id: number,
    value: string
}
const HighlightSelectedItem2 = () => {
    const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>({});

    console.log(selectedItems)
    const handleSelect = (itemId: string) => {
        setSelectedItems((prev) => ({
            ...prev,
            [itemId]: !prev[itemId]
        }))
    }

    return(
        <div>
            {
                objItems.map((item, index) => (
                    <div key={item.id}>
                        <button 
                        style={selectedItems[item.value] ? {color: 'green'} : {color: 'red'}}
                        onClick={() => handleSelect(item.value)}>{item.value}</button>
                    </div>
                ))
            }
        </div>
    )
}


const FixBugs = () => {
  return (
    <div style={{marginTop: 100}}>
        <HighlightSelectedItem2 />
    </div>
  )
}

export default FixBugs