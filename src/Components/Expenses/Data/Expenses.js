

import ExpensesForm from "../Form/Expenses-From";

/**
 * 
 * @param {object} props 
 * @param {ExpenseData[]} props._expenses 
 * @param {Function} props._onAddExpense 
 * @returns 
 */

 function Expenses(props)
 {
    
     return(
         <div>
            <ExpensesForm _onAddExpense={props._onAddExpense} />
            <div className="expenses-container">
             <Expense title={props._expenses[0].title} price={props._expenses[0].price} date={props._expenses[0].date} />
             <Expense title={props._expenses[1].title} price={props._expenses[1].price} date={props._expenses[1].date} />
             <Expense title={props._expenses[2].title} price={props._expenses[2].price} date={props._expenses[2].date} />
             <Expense title={props._expenses[3].title} price={props._expenses[3].price} date={props._expenses[3].date} />
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
function Expense(props)
{

    return(

        <div className="expense-container">
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

class ExpenseData
{
    /**
     * 
     * @param {string} title 
     * @param {number} price 
     * @param {Date} date 
     */
    constructor(title, price, date)
    {
        this.title = title;
        this.price = price;
        this.date = date;
    }
}


export default Expenses;

export {ExpenseData};