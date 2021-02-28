import React from 'react';
import { Box, Button } from '@material-ui/core';

function Item(props) {
    const isClicked = true;
    return (
        <Box className="cards" style={{ maxwidth: '18rem' }}>
            <Box className="cardContent">
                <Box>
                    <p>Item Name: {this.props.itemName}</p>
                    <p>ID: {this.props.itemId}</p>
                </Box>
                <p>Requesting Date: {this.props.requestingDate}</p>
                <p>Due Date: {this.props.dueDate}</p>
            </Box>
            {isClicked === true ? (
                <Box className="buttonAdmin">
                    <Button variant="contained" color="primary">
                        Approve
                    </Button>
                    <Button variant="contained" color="primary">
                        Deny
                    </Button>
                </Box>
            ) : null}

            <Box className="cardContent">
                <p>Request Name: {this.props.requestaName}</p>
                <p>Email ID: {this.props.emailID}</p>
                <p>Contact NO.: {this.props.contact}</p>
            </Box>
        </Box>
    );
}

export default Item;
