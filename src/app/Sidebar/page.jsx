"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import styles from './Sidebar.module.css';

import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import AssessmentIcon from '@mui/icons-material/Assessment';
import WorkIcon from '@mui/icons-material/Work';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const SidebarComponent = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <main className='  position-absolute'>
      <div className={styles.sidebarWrapper}>
        <Sidebar
          className={styles.sidebar}
          width="200px"
          collapsed={collapsed}
          collapsedWidth="80px"
          transitionDuration={300}
        >
          <div className={styles.sidebarHeader}>
            <Menu>
              <MenuItem
                className={styles.hamburgerMenu}
                icon={<MenuRoundedIcon />}
                onClick={toggleSidebar}
              />
            </Menu>
          </div>

          <Menu>
            <Link href="/dashboard" passHref>
              <MenuItem icon={<HomeIcon />} className={styles.menuItem}>
                Dashboard
              </MenuItem>
            </Link>

            <Link href="/projects" passHref>
              <MenuItem icon={<WorkIcon />} className={styles.menuItem}>
                Projects
              </MenuItem>
            </Link>

            <MenuItem icon={<WorkIcon />} className={styles.menuItem}>
              Tasks
            </MenuItem>
          </Menu>
        </Sidebar>
      </div>
    </main>
  );
};

export default SidebarComponent;
