/* eslint-disable react/prop-types */
import { Stack, Button } from "@mui/material";


const AuthorizedActions = () => {
 

  return (
    <Stack direction={"row"} justifyContent={"center"} alignItems={"center"}>

    </Stack>
  );
};

const UnauthorizedActions = () => {
  return (
    <Stack direction={"row"} gap={1} paddingY={1}>
      <Stack direction={'row'} gap={1}>
      <Button variant="text">
        Log in
        </Button>
      <Button variant="contained" sx={{fontWeight:'550'}}>Sign up</Button>
      </Stack>
     
    </Stack>
  );
};

const HeaderActions = ({ children }) => {
  return (
    <Stack direction="row" gap="8px" alignItems="center">
      {children}
    </Stack>
  );
};

HeaderActions.AuthorizedActions = AuthorizedActions;
HeaderActions.UnAuthorizedActions = UnauthorizedActions;

export default HeaderActions;
