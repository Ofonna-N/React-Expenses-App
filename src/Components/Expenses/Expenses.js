
import "../../Components/Expenses/Expenses.css";



/**
 * 
 * @param {object} props 
 * @param {ExpenseData[]} props._expenses 
 * @returns 
 */

 function Expenses(props)
 {
     return(
         <div>
             <Expense title={props._expenses[0].title} price={props._expenses[0].price} date={props._expenses[0].date} />
             <Expense title={props._expenses[1].title} price={props._expenses[1].price} date={props._expenses[1].date} />
             <Expense title={props._expenses[2].title} price={props._expenses[2].price} date={props._expenses[2].date} />
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
                <p>{props.title}</p>
            </div>
            <button>
                ${props.price}
            </button>
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
    return(
        <div className="date-info">
            <p>{new Intl.DateTimeFormat('en-US', {month:'long'}).format(props.date)}</p>
            <p>{new Intl.DateTimeFormat('en-US', {year:'numeric'}).format(props.date)}</p>
            <p>{new Intl.DateTimeFormat('en-US', {day:'numeric'}).format(props.date)}</p>
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