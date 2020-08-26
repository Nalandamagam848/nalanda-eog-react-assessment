import CardHeader from "@material-ui/core/CardHeader";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme:any) => ({
  root: {
    background: theme.palette.primary.main
  },
  title: {
    color: "white"
  }
});
export default withStyles(styles)(CardHeader);
