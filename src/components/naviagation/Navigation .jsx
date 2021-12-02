import { useState } from 'react';
import { 
    Drawer,
    List, 
    IconButton,
    Menu,
    ListItem,
    MenuItem,
    ListItemIcon,
    Badge,
    ListItemText, 
    Toolbar, Stack, Box
} from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import User from '../user/User';
import classNames from 'classnames';
import styles from './Navigation.module.scss';

const listItems = ['Apartment', 'Living Room', 'Bedroom', 'Bathroom', 'Toilet', 'Patio'];

const options = [
  'Logout',
];

export default function Navigation() {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classNames(styles.container)}>
      <Drawer className={classNames(styles.drawer)}
        variant="permanent"
        anchor="left"
      >

        <Stack direction="row" spacing={2} alignItems="center">
          <div className={classNames(styles['user-container'])}>
            <User avatar="images/avatar.png" name="John Doe" headingSize='h5' />
          </div>
          
          <div className={classNames(styles['button-container'])}>
              <IconButton
              onClick={handleClick}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                >
                  {options.map((option) => (
                    <MenuItem key={option} 
                    onClick={handleClose}>
                    {option}
                    </MenuItem>
                    ))}
                  </Menu>
              </div>
          </Stack>
        <div className={classNames(styles['items-container'])}>
        <List>
          {listItems.map((item, idx) => (
            <ListItem button key={item}
              className={classNames(idx===0 ? styles.selected : "")}
            >
              <ListItemIcon>
                {idx === 0 ? <HomeOutlinedIcon /> : <BedOutlinedIcon />}
              </ListItemIcon>
              <ListItemText primary={item} />
              {idx===0 ?  <Badge color="secondary" badgeContent={5} /> : null}
            </ListItem>
          ))}
        </List>
        <List>
          {listItems.map((item, idx) => (
            <ListItem button key={item}
              className={classNames(idx===0 ? styles.selected : "")}
            >
              <ListItemIcon>
                {idx === 0 ? <HomeOutlinedIcon /> : <BedOutlinedIcon />}
              </ListItemIcon>
              <ListItemText primary={item} />
              {idx===0 ?  <Badge color="secondary" badgeContent={5} /> : null}
            </ListItem>
          ))}
        </List>
      </div>
      </Drawer>
    </div>
  );
}