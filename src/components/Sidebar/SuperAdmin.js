import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";


// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// reactstrap components
import { Nav, NavLink as ReactstrapNavLink } from "reactstrap";
import {
    BackgroundColorContext,
    backgroundColors,
} from "contexts/BackgroundColorContext";

var ps;

function SuperAdmin(props) {
    const location = useLocation();
    const sidebarRef = React.useRef(null);
    // verifies if routeName is the one active (in browser input)
    const activeRoute = (routeName) => {
        return location.pathname === routeName ? "active" : "";
    };

    React.useEffect(() => {
        if (navigator.platform.indexOf("Win") > -1) {
            ps = new PerfectScrollbar(sidebarRef.current, {
                suppressScrollX: true,
                suppressScrollY: false,
            });
        }

        // Specify how to clean up after this effect:
        return function cleanup() {
            if (navigator.platform.indexOf("Win") > -1) {
                ps.destroy();
            }
        };
    });


    const linkOnClick = () => {
        document.documentElement.classList.remove("nav-open");
    };
    const { routes, rtlActive, logo } = props;


    let logoImg = null;
    let logoText = null;
    if (logo !== undefined) {
        if (logo.outterLink !== undefined) {
            logoImg = (
                <a
                    href={logo.outterLink}
                    className="simple-text logo-mini"
                    target="_blank"
                    onClick={props.toggleSidebar}
                >
                    <div className="logo-img">
                        <img src={logo.imgSrc} alt="react-logo" />
                    </div>
                </a>
            );
            logoText = (
                <a
                    href={logo.outterLink}
                    className="simple-text logo-normal"
                    target="_blank"
                    onClick={props.toggleSidebar}
                >
                    {logo.text}
                </a>
            );
        } else {
            logoImg = (
                <Link
                    to={logo.innerLink}
                    className="simple-text logo-mini"
                    onClick={props.toggleSidebar}
                >
                    <div className="logo-img">
                        <img src={logo.imgSrc} alt="react-logo" />
                    </div>
                </Link>
            );
            logoText = (
                <Link
                    to={logo.innerLink}
                    className="simple-text logo-normal"
                    onClick={props.toggleSidebar}
                >
                    {logo.text}
                </Link>
            );
        }
    }
    return (
        <BackgroundColorContext.Consumer>
            {({ color }) => (
                <div className="sidebar" data={color}>
                    <div className="sidebar-wrapper" ref={sidebarRef}>
                        {logoImg !== null || logoText !== null ? (
                            <div className="logo">
                                {logoImg}
                                {logoText}
                            </div>
                        ) : null}
                        <Nav>

                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography style={{ color: 'blue' }} gutterBottom variant='p'>Front office</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {routes?.slice(0, 5)?.map((prop, key) => {
                                            if (prop.redirect) return null;
                                            return (
                                                <li
                                                    className={
                                                        activeRoute(prop.path) + (prop.pro ? " active-pro" : "")
                                                    }
                                                    key={key} >
                                                    <NavLink
                                                        to={prop.layout + prop.path}
                                                        className="nav-link"
                                                        onClick={props.toggleSidebar}
                                                    >
                                                        <i className={prop.icon} />
                                                        <p>{rtlActive ? prop.rtlName : prop.name}</p>
                                                    </NavLink>
                                                </li>
                                            );
                                        })}

                                    </Typography>
                                </AccordionDetails>
                            </Accordion>



                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography style={{ color: 'blue' }} gutterBottom variant='p'>CBSE Examination</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {routes?.slice(5, 11)?.map((prop, key) => {
                                            if (prop.redirect) return null;
                                            return (
                                                <li
                                                    className={
                                                        activeRoute(prop.path) + (prop.pro ? " active-pro" : "")
                                                    }
                                                    key={key} >
                                                    <NavLink
                                                        to={prop.layout + prop.path}
                                                        className="nav-link"
                                                        onClick={props.toggleSidebar}
                                                    >
                                                        <i className={prop.icon} />
                                                        <p>{rtlActive ? prop.rtlName : prop.name}</p>
                                                    </NavLink>
                                                </li>
                                            );
                                        })}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography style={{ color: 'blue' }} gutterBottom variant='p'>Academics</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {routes?.slice(8, 14)?.map((prop, key) => {
                                            if (prop.redirect) return null;
                                            return (
                                                <li
                                                    className={
                                                        activeRoute(prop.path) + (prop.pro ? " active-pro" : "")
                                                    }
                                                    key={key} >
                                                    <NavLink
                                                        to={prop.layout + prop.path}
                                                        className="nav-link"
                                                        onClick={props.toggleSidebar}
                                                    >
                                                        <i className={prop.icon} />
                                                        <p>{rtlActive ? prop.rtlName : prop.name}</p>
                                                    </NavLink>
                                                </li>
                                            );
                                        })}

                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography style={{ color: 'blue' }} gutterBottom variant='p'>Student Information</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {routes?.slice(14, 22)?.map((prop, key) => {
                                            if (prop.redirect) return null;
                                            return (
                                                <li
                                                    className={
                                                        activeRoute(prop.path) + (prop.pro ? " active-pro" : "")
                                                    }
                                                    key={key} >
                                                    <NavLink
                                                        to={prop.layout + prop.path}
                                                        className="nav-link"
                                                        onClick={props.toggleSidebar}
                                                    >
                                                        <i className={prop.icon} />
                                                        <p>{rtlActive ? prop.rtlName : prop.name}</p>
                                                    </NavLink>
                                                </li>
                                            );
                                        })}







                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography style={{ color: 'blue' }} gutterBottom variant='p'>Human resource</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {routes?.slice(14, 35)?.map((prop, key) => {
                                            if (prop.redirect) return null;
                                            return (
                                                <li
                                                    className={
                                                        activeRoute(prop.path) + (prop.pro ? " active-pro" : "")
                                                    }
                                                    key={key} >
                                                    <NavLink
                                                        to={prop.layout + prop.path}
                                                        className="nav-link"
                                                        onClick={props.toggleSidebar}
                                                    >
                                                        <i className={prop.icon} />
                                                        <p>{rtlActive ? prop.rtlName : prop.name}</p>
                                                    </NavLink>
                                                </li>
                                            );
                                        })}







                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography style={{ color: 'blue' }} gutterBottom variant='p'>Communicate</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {routes?.slice(15, 18)?.map((prop, key) => {
                                            if (prop.redirect) return null;
                                            return (
                                                <li
                                                    className={
                                                        activeRoute(prop.path) + (prop.pro ? " active-pro" : "")
                                                    }
                                                    key={key} >
                                                    <NavLink
                                                        to={prop.layout + prop.path}
                                                        className="nav-link"
                                                        onClick={props.toggleSidebar}
                                                    >
                                                        <i className={prop.icon} />
                                                        <p>{rtlActive ? prop.rtlName : prop.name}</p>
                                                    </NavLink>
                                                </li>
                                            );
                                        })}

                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography style={{ color: 'blue' }} gutterBottom variant='p'>Certificated</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {routes?.slice(19, 25)?.map((prop, key) => {
                                            if (prop.redirect) return null;
                                            return (
                                                <li
                                                    className={
                                                        activeRoute(prop.path) + (prop.pro ? " active-pro" : "")
                                                    }
                                                    key={key} >
                                                    <NavLink
                                                        to={prop.layout + prop.path}
                                                        className="nav-link"
                                                        onClick={props.toggleSidebar}
                                                    >
                                                        <i className={prop.icon} />
                                                        <p>{rtlActive ? prop.rtlName : prop.name}</p>
                                                    </NavLink>
                                                </li>
                                            );
                                        })}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography style={{ color: 'blue' }} gutterBottom variant='p'>inCome</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {routes?.slice()?.map((prop, key) => {
                                            if (prop.redirect) return null;
                                            return (
                                                <li
                                                    className={
                                                        activeRoute(prop.path) + (prop.pro ? " active-pro" : "")
                                                    }
                                                    key={key} >
                                                    <NavLink
                                                        to={prop.layout + prop.path}
                                                        className="nav-link"
                                                        onClick={props.toggleSidebar}
                                                    >
                                                        <i className={prop.icon} />
                                                        <p>{rtlActive ? prop.rtlName : prop.name}</p>
                                                    </NavLink>
                                                </li>
                                            );
                                        })}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography style={{ color: 'blue' }} gutterBottom variant='p'>Fees collection</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {routes?.slice()?.map((prop, key) => {
                                            if (prop.redirect) return null;
                                            return (
                                                <li
                                                    className={
                                                        activeRoute(prop.path) + (prop.pro ? " active-pro" : "")
                                                    }
                                                    key={key} >
                                                    <NavLink
                                                        to={prop.layout + prop.path}
                                                        className="nav-link"
                                                        onClick={props.toggleSidebar}
                                                    >
                                                        <i className={prop.icon} />
                                                        <p>{rtlActive ? prop.rtlName : prop.name}</p>
                                                    </NavLink>
                                                </li>
                                            );
                                        })}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography style={{ color: 'blue' }} gutterBottom variant='p'>Behaviour Records</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {routes?.slice()?.map((prop, key) => {
                                            if (prop.redirect) return null;
                                            return (
                                                <li
                                                    className={
                                                        activeRoute(prop.path) + (prop.pro ? " active-pro" : "")
                                                    }
                                                    key={key} >
                                                    <NavLink
                                                        to={prop.layout + prop.path}
                                                        className="nav-link"
                                                        onClick={props.toggleSidebar}
                                                    >
                                                        <i className={prop.icon} />
                                                        <p>{rtlActive ? prop.rtlName : prop.name}</p>
                                                    </NavLink>
                                                </li>
                                            );
                                        })}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography style={{ color: 'blue' }} gutterBottom variant='p'>Attendance</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {routes?.slice()?.map((prop, key) => {
                                            if (prop.redirect) return null;
                                            return (
                                                <li
                                                    className={
                                                        activeRoute(prop.path) + (prop.pro ? " active-pro" : "")
                                                    }
                                                    key={key} >
                                                    <NavLink
                                                        to={prop.layout + prop.path}
                                                        className="nav-link"
                                                        onClick={props.toggleSidebar}
                                                    >
                                                        <i className={prop.icon} />
                                                        <p>{rtlActive ? prop.rtlName : prop.name}</p>
                                                    </NavLink>
                                                </li>
                                            );
                                        })}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>



                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography style={{ color: 'blue' }} gutterBottom variant='p'>Expenses</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {routes?.slice()?.map((prop, key) => {
                                            if (prop.redirect) return null;
                                            return (
                                                <li
                                                    className={
                                                        activeRoute(prop.path) + (prop.pro ? " active-pro" : "")
                                                    }
                                                    key={key} >
                                                    <NavLink
                                                        to={prop.layout + prop.path}
                                                        className="nav-link"
                                                        onClick={props.toggleSidebar}
                                                    >
                                                        <i className={prop.icon} />
                                                        <p>{rtlActive ? prop.rtlName : prop.name}</p>
                                                    </NavLink>
                                                </li>
                                            );
                                        })}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Nav>
                    </div>
                </div>
            )}
        </BackgroundColorContext.Consumer>
    );
}

SuperAdmin.propTypes = {
    // if true, then instead of the routes[i].name, routes[i].rtlName will be rendered
    // insde the links of this component
    rtlActive: PropTypes.bool,
    routes: PropTypes.arrayOf(PropTypes.object),
    logo: PropTypes.shape({
        // innerLink is for links that will direct the user within the app
        // it will be rendered as <Link to="...">...</Link> tag
        innerLink: PropTypes.string,
        // outterLink is for links that will direct the user outside the app
        // it will be rendered as simple <a href="...">...</a> tag
        outterLink: PropTypes.string,
        // the text of the logo
        text: PropTypes.node,
        // the image src of the logo
        imgSrc: PropTypes.string,
    }),
};

export default SuperAdmin;
