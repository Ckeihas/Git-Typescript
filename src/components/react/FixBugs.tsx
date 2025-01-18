import React, { useMemo, useState } from 'react';


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





const HighlightSelectedItem3 = () => {
    const [selectedItem, setSelectedItem] = useState<Record<number, boolean>>({});

    console.log(selectedItem)
    const handleClick = (index: number) => {
        setSelectedItem((prev) => ({
            ...prev,
            [index]: !prev[index]
        }))
    }
    return(
        <div>
            {
                items.map((item, index) => (
                    <button 
                    style={selectedItem[index] ? { color: 'green' } : {color: 'red'}}
                    key={index} 
                    onClick={() => handleClick(index)}>{item}</button>
                ))
            }
        </div>
    )
}

const HighlightSelectedItem4 = () => {
    const [selected, setSelected] = useState<Record<string, boolean>>()
    const items = ['kaka', 'lslasl', 'alsalal', 'asklklaslk']

    const handleChange = () => {

    }
    return(
        <div style={{marginTop: 100}}>
            {
                items.map((item, index) => (
                    <button key={index} onClick={() => handleChange}>
                        {item}
                    </button>
                ))
            }
        </div>
    )
}

const PerformanceIssue = () => {
    const [count, setCount] = useState(0)
	const [currentWord,setCurrentWord] = useState(0)
	const words = ["banaani","jäätelö","loma","lumi"]
	const word = words[currentWord]
	
	const computeWordLength = (word:string) => {
		let i=0;
		while (i<1000000000) {
			i++;
		}
		return word.length;
	}
	//const wordLength = computeWordLength(word)
	const wordLength = useMemo(() => computeWordLength(word),[word])

	return (
		<>
			<h2>Compute the length of word {word}</h2>
			<h2>{word} has {wordLength} letters</h2>
			<button onClick={() => {
				const next = currentWord +1 === words.length ? 0 : currentWord +1;
				setCurrentWord(next)
			}}>Next Word</button>
		
			<h2>Increment Counter</h2>
			<h2>Current value:{count}</h2>
			<button onClick={() => setCount(count => count+1)}>Increment</button>
		</>
	)
}



const FixBugs = () => {
  return (
    <div style={{marginTop: 100}}>
        <PerformanceIssue />
    </div>
  )
}

export default FixBugs