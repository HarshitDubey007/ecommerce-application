// export const getNavbarConfig = [
//     { "label": "Dashboard", "link": "/dashboard" },
//     { "label": "Category", "link": "/category" },
//     { "label": "Details", "link": "/dashboard/details" },
//     { "label": "Payment", "link": "/dashboard/payment" },
//     { "label": "Addresses", "link": "/dashboard/addresses" },
//     { "label": "Downloads", "link": "/dashboard/downloads" },
//     { "label": "Reporting", "link": "/dashboard/reporting" },
//     { "label": "Order Report", "link": "/dashboard/reporting/orderreport" },
//     { "label": "Payment Report", "link": "/dashboard/reporting/paymentreport" }
//   ]



export const getNavbarConfig = () => {
  // return [
  //   { "label": "Dashboard", "link": "/dashboard" },
  //   { "label": "Category", "link": "/category" },
  //   { "label": "Details", "link": "/dashboard/details" },
  //   { "label": "Payment", "link": "/dashboard/payment" },
  //   { "label": "Addresses", "link": "/dashboard/addresses" },
  //   { "label": "Downloads", "link": "/dashboard/downloads" },
  //   { "label": "Reporting", "link": "/dashboard/reporting" },
  //   { "label": "Order Report", "link": "/dashboard/reporting/orderreport" },
  //   { "label": "Payment Report", "link": "/dashboard/reporting/paymentreport" }
  // ];

  return {
    topNavbar: [
      { label: 'Dashboard', link: '/dashboard' },
      { label: 'Category', link: '/category' },
      // Add other top navbar items as needed
    ],
    sideNavbar: [
    { "label": "Dashboard", "link": "/dashboard" },
    { "label": "Category", "link": "/category" },
    { "label": "Details", "link": "/dashboard/details" },
    { "label": "Payment", "link": "/dashboard/payment" },
    { "label": "Addresses", "link": "/dashboard/addresses" },
    { "label": "Downloads", "link": "/dashboard/downloads" },
    { "label": "Reporting", "link": "/dashboard/reporting" },
    { "label": "Order Report", "link": "/dashboard/reporting/orderreport" },
    { "label": "Payment Report", "link": "/dashboard/reporting/paymentreport" }
      // Add other side navbar items as needed
    ],
  };
};