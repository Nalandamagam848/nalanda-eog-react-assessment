import Avatar from "@material-ui/core/Avatar";
import { withStyles } from "@material-ui/core/styles";

const styles =  (theme:any) => ({
  root: {
    background: theme.palette.primary.main,
    marginRight: "1rem"
  }
});
export default withStyles(styles)(Avatar);
