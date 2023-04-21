import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function MenuPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Company <ExpandMoreIcon/>
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>About us</MenuItem>
            <MenuItem onClick={popupState.close}>Our offerings</MenuItem>
            <MenuItem onClick={popupState.close}>How Uber works</MenuItem>
            <MenuItem onClick={popupState.close}>Global citizenship</MenuItem>
            <MenuItem onClick={popupState.close}>Newsroom</MenuItem>
            <MenuItem onClick={popupState.close}>Invester relations</MenuItem>
            <MenuItem onClick={popupState.close}>Blog</MenuItem>
            <MenuItem onClick={popupState.close}>Careers</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}


