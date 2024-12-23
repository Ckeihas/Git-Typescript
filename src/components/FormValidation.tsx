import React, { useState } from 'react'


//Ei saa olla kuin yksi @
//@ jälkeen ei saa olla heti pistettä mutta yksi piste tarvitsee olla

const FormValidation = () => {

    const [email, setEmail] = useState<string>('');
    const [invalidEmail, setInvalidEmail] = useState({
        error: false,
        message: ''
    });

    const handleInputChange = (inputValue: string) => {
        setEmail(inputValue)

        let atMark = email?.indexOf('@')
        let lastIndexOfAtMark = email?.lastIndexOf('@')

        if(atMark !== lastIndexOfAtMark){
            setInvalidEmail({
                error: true,
                message: 'There can only be one @ mark'
            })
            return;
        } else if(inputValue[atMark + 1] === '.'){
            setInvalidEmail({
                error: true,
                message: 'Dot cannot be after @ mark'
            })
            return;
        }

        
        

    }
    return(
        <div>
            <input onChange={e => handleInputChange(e.target.value)}/>
            {
                invalidEmail.error ? <div>{invalidEmail.message}</div> : <div></div>
            }
        </div>
    )
}

export default FormValidation


// const FormValidation = () => {
//     const [validInput, setValidInput] = useState<string>();
//     const [isValid, setIsvalid] = useState<boolean>(false);

//     const handleInputChange = (input: string) => {
//         setValidInput(input)
        
//         const atIndex = input.indexOf('@')
//         if(atIndex === -1){
//             setIsvalid(false)
//             return
//         }
        
//         const dotAfterIndex = input.indexOf('.', atIndex + 1)
//         if(dotAfterIndex){
//             setIsvalid(false)
//             return
//         }
//     }
//   return (
//     <div>
//         <input placeholder='email' onChange={(e) => handleInputChange(e.target.value)}/>
//     </div>
//   )
// }

// export default FormValidation