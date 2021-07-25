import { createStyles, makeStyles } from "@material-ui/core/styles";

export const useButtonStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "30ch",
      },
    },
    default: ({ size, color, background }) => ({
      background: background,
      color: color,
      border: "0.6 solid black",
      padding: '15px',
      borderRadius: 4,
      width: size ? size.width : "20em",
    }),
    rounded: ({ size, color, background }) => ({
      background: background,
      color: color,
      border: "0.6 solid black",
      padding: '15px',
      borderRadius: "26.5px",
      width: size ? size.width : "20em",
    }),
  })
);