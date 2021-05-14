export default function() {
  return [
    {
      title: "Dashboard",
      to: "dashboard",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "Customer Support",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "customer-support",
    },
    {
      title: "Products",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/products",
    },
    {
      title: "Categories",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/cateogries",
    },
    {
      title: "Users",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/users",
    },
    {
      title: "Order Status",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/orders",
    },
    {
      title: "Appointment",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/appointments",
    },

    {
      title: "PromoCodes & Deals",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/promo-deals",
    },
    {
      title: "Settings",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/settings",
    },
   
  ];
}
