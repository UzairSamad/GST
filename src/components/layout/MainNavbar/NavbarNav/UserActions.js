import React from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavItem,
  NavLink
} from "shards-react";

export default class UserActions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.toggleUserActions = this.toggleUserActions.bind(this);
  }

  toggleUserActions() {
    window.location.href = '#/login'
  }

  render() {
    return (
      <NavItem  >

        <span onClick={_=>this.toggleUserActions()} className="d-none d-md-inline-block text-nowrap px-3 pt-6" style={{ cursor: 'pointer', marginTop: '20px' }} >Welcom to GST. <span style={{ marginLeft: '15px' }}>Log out</span> </span>


      </NavItem>
    );
  }
}
