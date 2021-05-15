import React from "react";

const snackbar = ({ message, open, delay = 3000, type }) => {
  const [notify, setNotify] = useState({ open: false, message: "", type: "" });

  return (
    <Snackbar
      open={notify.open}
      autoHideDuration={3000}
      onClose={() => setNotify({ open: false, message: "", type: "" })}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        variant="filled"
        onClose={() => setNotify({ open: false, message: "", type: "" })}
        severity={notify.type}
      >
        {notify.message}
      </Alert>
    </Snackbar>
  );
};

export default snackbar;
