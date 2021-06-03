import React from 'react'
import './Sidebar.css'
import HomeIcon from '@material-ui/icons/Home';
import iit from './img/iit-h.png';
import SidebarOption from './SidebarOption'
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import SearchIcon from '@material-ui/icons/Search';
import ReceiptIcon from '@material-ui/icons/Receipt';
import GroupIcon from '@material-ui/icons/Group';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import { Button } from '@material-ui/core';

const Sidebar = () =>{
    return (
        <>
        <div className="sidebar">
            {/* Icon */}
                <center>
                    <img src={iit} alt="iit-h" srcset="" id="iit-img" />
                    {/* <p> Indian Institute of Technology,Hyderabad </p> */}
            </center>


                {/* Sidebar */}
                <SidebarOption active Icon={DesktopMacIcon} text="Recent"/>
                <SidebarOption Icon={HomeIcon} text="Home"/>
                <SidebarOption Icon={SearchIcon} text="Research"/>
                <SidebarOption Icon={ReceiptIcon} text="Publication"/>
                <SidebarOption Icon={RecordVoiceOverIcon} text="Teacher"/>
                <SidebarOption Icon={GroupIcon} text="Student"/>
                <SidebarOption Icon={CardMembershipIcon} text="Awards"/>


                {/* Button -> Write comment */}
                <Button variant="outlined" className="sidebar__tweet" fullWidth="">Comment</Button>
        </div>
        </>
    )
}

export default Sidebar