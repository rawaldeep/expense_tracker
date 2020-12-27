import React, { useContext } from 'react';
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, EuroSymbol } from '@material-ui/icons';
import useStyles from './styles';

import { ExpenseTrackerContext } from '../../../context/context';
const List = () => {
    const classes = useStyles();
    const { deleteTransaction} = useContext(ExpenseTrackerContext);
    console.log(globalState);
    const transactions = [
        {   id: 1, 
            type: "Income", 
            category: "salary",
            amount: 50,
            date: "Sat Dec 26"
        },
        {   id: 2, 
            type: "Expense", 
            category: "dukan",
            amount: 100,
            date: "Sat Dec 24"
        },
        {   id: 3, 
            type: "Income", 
            category: "business",
            amount: 50,
            date: "Sat Dec 24"
        }
    ];

    return (
        <MUIList dense={false} className={classes.list}>
            {transactions.map((transaction)=>(
                <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense }>
                                <EuroSymbol />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`€${transaction.amount} - ${transaction.date}`}/>
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick="">
                                <Delete/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </MUIList>
    )
}

export default List
