import React from 'react'

const snackbar = ({message,open,delay=3000,type}) => {
    return (
        <Snackbar open={open} autoHideDuration={delay} onClose={handleClose}>
        <Alert onClose={handleClose} severity={type}>
            {message}
        </Alert>
        </Snackbar>
    )
}

export default snackbar
