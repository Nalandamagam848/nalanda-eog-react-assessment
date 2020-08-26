import Chip from "@material-ui/core/Chip";
import { withStyles } from "@material-ui/core/styles";

const cardStyles = (theme:any) => ({
  root: {
    background: theme.palette.secondary.main
  },
  label: {
    color: theme.palette.primary.main
  }
});
export default withStyles(cardStyles)(Chip);
