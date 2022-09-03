

import Keygen from "keygenerator/lib/keygen";
import React, { useId, useState } from "react";
import ExpensesForm from "../Form/Expenses-From";

let keyGen = require("keygenerator");




// console.log("Hellp");
function Expenses()
{
    const _expenses = 
    [
        
    ];

    //console.log(getFilteredExpenses('2022'));
    const[updatedExpenses, updateExpenses] = useState(_expenses);

    const[filteredDate, updateFilteredDate] = useState("2022");

    const getFilteredExpenses = function(year)
    {
        const filteredExpense = [];
        updatedExpenses.forEach(e => 
        {
            let expenseYear = new Intl.DateTimeFormat('en-US', {year:'numeric'}).format(e.date);
            // console.log();
            if (year == expenseYear) 
            {
                filteredExpense.push(e);
                //console.log(`show ${e.title}`);    
            }
        });

        return filteredExpense;
    }

    let expensesDisplayItems = getFilteredExpenses(filteredDate).map(expense => <ExpenseCard key={expense.id} title={expense.title} price={expense.price} date={expense.date} />);

    if (expensesDisplayItems.length <= 0) 
    {
        expensesDisplayItems = <h1 style={{color:"white", textAlign:"center"}}>No Expenses Registered</h1>    
    }

    const onAddExpense = function(expenseData)
    {
        updateExpenses([expenseData, ...updatedExpenses])
    }

    

    const onFilterExpenseChanged = function(event)
    {
        if(updatedExpenses.length <= 0)return;
        const selectedYear = event.target.value;
        
        updateFilteredDate(selectedYear);
    }

     return(
         <div>
            <ExpensesForm _onAddExpense={onAddExpense} />
            <div className="expenses-container">
                <div>
                    <ExpenseFilterInput _onchanged={onFilterExpenseChanged} />
                    <FilterDisplay/>
                </div>

                <div className="expense-cards-container">
                {expensesDisplayItems}  
                </div>
            </div>
         </div>
     );
 }


/**
 * 
 * @param {object} props 
 * @param {string} props.title 
 * @param {number} props.price 
 * @param {Date} props.date 
 * @returns 
 */
function ExpenseCard(props)
{
    // console.log(props.title);
    return(

        <div className="expense-card">
            <div>
                <ExpenseDate date={props.date}/>
                <h1>{props.title}</h1>
            </div>
            <div>
                <p className="expense-price">${props.price}</p>
            </div>
        </div>
    );
}

/**
 * 
 * @param {object} props 
 * @param {Date} date
 * @returns 
 */
function ExpenseDate(props)
{
    // console test = props.chi
    return(
        <div className="date-info">
            <p className="month">{new Intl.DateTimeFormat('en-US', {month:'long'}).format(props.date)}</p>
            <p className="year">{new Intl.DateTimeFormat('en-US', {year:'numeric'}).format(props.date)}</p>
            <p className="day">{new Intl.DateTimeFormat('en-US', {day:'numeric'}).format(props.date)}</p>
        </div>        
    );
}

function ExpenseFilterInput(props)
{

    return(
        <div className="expense-filter-input-container">
            <label form="expense-form" htmlFor="expense-filter">Filter by year</label>

            <select name="expense-filter" defaultValue="2022" onChange={props._onchanged}>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>
        </div>
    );
}

function FilterDisplay()
{
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

    let displayBars = months.map(month => <FilterMonthBar key={Keygen._()} month={month}/>);
    return(
        <div className="filter-display-container">
            {displayBars}
        </div>
    );
}

function FilterMonthBar(props)
{
    return(
        <div>
            <div className="filter-bar">
            <div className="filter-fill-bar"></div>
            </div>
            
            <p>{props.month}</p>
        </div>
    );
}



class ExpenseData
{
    /**
     * @param {string} id 
     * @param {string} title 
     * @param {number} price 
     * @param {Date} date 
     */
    constructor(id, title, price, date)
    {
        this.id = id;
        this.title = title;
        this.price = price;
        this.date = date;
    }
}


export default Expenses;

export {ExpenseData, keyGen};