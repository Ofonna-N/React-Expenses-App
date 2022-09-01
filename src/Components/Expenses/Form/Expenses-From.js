import { useState } from "react";

import {ExpenseData} from "../Data/Expenses";

const currentDate = ()=>
    {
        const _currentDate = new Date();
        const returnDate = {
            _month:new Intl.DateTimeFormat('en-US', {month:'numeric'}).format(_currentDate),
            _year:new Intl.DateTimeFormat('en-US', {year:'numeric'}).format(_currentDate),
            _day:new Intl.DateTimeFormat('en-US', {day:'numeric'}).format(_currentDate)
        };
        return (`${returnDate._year}-${(returnDate._month < 10)?'0':''}${returnDate._month}-${(returnDate._day < 10)?'0':''}${returnDate._day}`);
        // return (`${returnDate._year}`);
    }

function ExpensesForm(props)
{
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    
    //console.log(currentDate);


    /** @param {Event} event */
    const titleChangedHandler = (event) =>
    {
        setEnteredTitle(event.target.value);
        // console.log(event.target.value);
    };
    
    /** @param {Event} event */
    const amountChangedHandler = (event) =>
    {
        setEnteredAmount(event.target.value);
        // console.log(event.target.value);
    };
    
    /** @param {Event} event */
    const dateChangedHandler = (event) =>
    {
        setEnteredDate(event.target.value);
        // console.log(event.target.value);
    };
    
    /** @param {Event} event */
    const submitEventHandler = (event)=>
    {
        event.preventDefault();
        if (enteredTitle == '' || enteredTitle == undefined) 
        {
            window.alert("Please Enter Title Field");
            return;
        }

        const expenseData = new ExpenseData(enteredTitle, enteredAmount, enteredDate);
        props._onAddExpense(expenseData);
        //console.log(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }


    return(
        <div className="expense-form-container">
            <form onSubmit={submitEventHandler}>
                <div className="form-row">
                    <div className="form-input-container">
                        <label>Title</label>
                        <input type="text" value={enteredTitle} onChange={titleChangedHandler}/>
                    </div>
                    <div className="form-input-container">
                        <label>Amout</label>
                        <input type="number" value={enteredAmount} min="0.01" step="0.01" required onChange={amountChangedHandler}/>
                    </div>
                </div>
                <div className="form-input-container">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2019-01-01" max={currentDate()} required onChange={dateChangedHandler}/>
                </div>
                <div className="form-button-container">
                    <input type="submit" required className="form-button" value="Add Expense"/>
                </div>
            </form>
        </div>
    );
}

export default ExpensesForm;