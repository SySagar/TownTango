import {
  Link,
  Stack,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import HeaderActions from "./HeaderActions";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@emotion/react";

export default function Header() {
  const token = localStorage.getItem("accessToken");
  const theme = useTheme();
  return (
    <Stack
      className="navbar"
      width={"100%"}
      minHeight={"80px"}
      justifyContent={"center"}
      sx={{
        background: theme.palette.background.paper,
      }}
    >
      <Stack
        className="navbar-container"
        paddingX={3}
        paddingY={1}
        direction={"row"}
        alignItems={"center"}
      >
        <Stack direction={"row"} gap={4} alignItems={"center"}>
          {/* <img
            style={{ width: 25, height: 25 }}
            src="/png/mainicon.png"
            alt=""
          /> */}
          <Typography
            component={Link}
            href="/"
            style={{
              textDecoration: "none",
            }}
            fontSize={20}
            fontWeight={700}
          >
            Town Tango
          </Typography>
          <Stack direction={"row"} alignItems={"center"}>
            <TextField
              sx={{
                minWidth: 350,
                '& .MuiOutlinedInput-root': {
                  borderRadius: '0px',
                  height: '40px',
                },
              }}
              placeholder="Search group"
              id="search-group"
              variant="outlined"
            />
            <Button
              variant="contained"
              sx={{
                background: "#F65858",
                ':hover':{
                  background: '#F65858'
                },
                margin:0,
                '&.MuiButton-root':{
                  borderRadius: '0px',
                  maxWidth: '40px',
                  height: '40px',
                },
              }}
            >
              <SearchIcon />
            </Button>
          </Stack>
        </Stack>

        <Stack flexGrow={1}></Stack>

        <Stack>
          <HeaderActions>
            {token ? (
              <HeaderActions.AuthorizedActions />
            ) : (
              <HeaderActions.UnAuthorizedActions />
            )}
          </HeaderActions>
        </Stack>
      </Stack>
    </Stack>
  );
}
