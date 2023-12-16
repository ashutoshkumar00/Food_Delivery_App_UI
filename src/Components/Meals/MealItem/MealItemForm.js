import styles from './MealItemForm.module.css'
import Input from '../../UI/Input'
import {useState,useRef} from 'react'

const MealItemForm = (props) => {

  const [message,setMessage] = useState(false);
  const inputAmountRef = useRef(0);
 

  const handleFormSubmission = (event) =>{
      event.preventDefault();
      const enteredAmount = inputAmountRef.current.value;
      const updatedEnteredAmount = +enteredAmount;

      if(updatedEnteredAmount<1 || updatedEnteredAmount>5 || enteredAmount.trim().length===0)
      {
        setMessage(true);
        return ;
      }

      props.onGettingAmount(updatedEnteredAmount);
  }

  

  return (
    <form className={styles.form} onSubmit={handleFormSubmission}>
      <Input lable="Amount" ref={inputAmountRef} input={{
        id:'amount_'+props.id,
        type:'number',
        min:'1',
        max:'5',
        defaultValue:'0',
        step:'1'
      }} />
      <button>+Add</button>
      {
        message && alert('Please enter valid amount between (1-5)')
      }
    </form>
  )
}

export default MealItemForm
