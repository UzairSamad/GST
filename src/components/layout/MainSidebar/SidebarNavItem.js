import React from "react";
import PropTypes from "prop-types";
import { NavLink as RouteNavLink } from "react-router-dom";
import { NavItem, NavLink } from "shards-react";

const SidebarNavItem = ({ item, count }) => {
  console.log(item, count, "itemitemitemitem")

  let amount = 0
  count.map((res, data) => {
    if (res.orderDetails.readStatus == "false") {
      amount = amount + 1
    }
  })

  console.log(amount, "AAAAAAAAAAAAAAAa");
  return (
    <NavItem>

      <NavLink tag={RouteNavLink} to={item.to}>
        {item.htmlBefore && (
          <div
            className="d-inline-block item-icon-wrapper"
            dangerouslySetInnerHTML={{ __html: item.htmlBefore }}
          />
        )}
        {item.title &&
          <>
            <span>
              {item.title}
            </span>
            <span style={{ marginLeft: "30px" }}>
              {item.title == "Order Status" && amount !== 0 ? `${amount} new ` : null}
            </span>
          </>
        }
        {item.htmlAfter && (
          <div
            className="d-inline-block item-icon-wrapper"
            dangerouslySetInnerHTML={{ __html: item.htmlAfter }}
          />
        )}
      </NavLink>
    </NavItem>
  );
}

SidebarNavItem.propTypes = {
  /**
   * The item object.
   */
  item: PropTypes.object
};

export default SidebarNavItem;
