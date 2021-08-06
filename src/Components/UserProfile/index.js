import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
} from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { setAllProfile, setUserProfile } from "../../Redux/slices/profileSlice";
import "./index.scss";

const UserProfile = () => {
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const { profile, image } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const { user,logout } = useAuth0();
  useEffect(() => {
    if (user && image.length === 0) {
      dispatch(setUserProfile({ image: user.picture, profile: user.name }));
      dispatch(setAllProfile({ image: user.picture, profile: user.name }));
    }
  }, [dispatch, image.length, user, user.name, user.picture]);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className="UserProfile">
      <div>
        <div
          className="User"
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <div className="name">{profile}</div>
          <div className="image">
            <img src={image} alt={profile} />
          </div>
        </div>
      </div>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper className="profile_dropdown">
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={() => history.push("/manage")}>
                    Manage Profile
                  </MenuItem>
                  <MenuItem onClick={() => logout({ returnTo: window.location.origin })}>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};
export default UserProfile;
