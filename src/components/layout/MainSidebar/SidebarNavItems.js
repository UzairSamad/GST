import React from "react";
import { Nav } from "shards-react";

import SidebarNavItem from "./SidebarNavItem";
import { Store } from "../../../flux";
import { AppContext } from "../../../AppContext";

class SidebarNavItems extends React.Component {

  static contextType = AppContext
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }

    // const context = React.useContext(AppContext)
    // console.log(context,"ASDASDASD");
    this.state = {
      navItems: Store.getSidebarItems()
    };

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    Store.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    Store.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      ...this.state,
      navItems: Store.getSidebarItems()
    });
  }



  render() {
    // this.context.orders.map((res, index) => {
    //   console.log(res, "RESSSSSSSSSSSSSSSs");
    //   if (res.orderDetails.readStatus == "false") {
    //     alert("if")
    //     this.setState({ count: this.state.count + 1 })
    //   }
    // })
    const { navItems: items } = this.state;
    return (
      <div className="nav-wrapper">
        <Nav className="nav--no-borders flex-column">
          {items.map((item, idx) => (
            <SidebarNavItem count={this.context.orders} key={idx} item={item} />
          ))}
        </Nav>
      </div>
    )
  }
}

export default SidebarNavItems;
