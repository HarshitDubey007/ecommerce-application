// // Dashboard.jsx
// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Sidebar from '../Navbar/Sidebar';
// import HomeDashboard from './HomeDashboard';
// import ManageProduct from '../ManageProduct';
// import ManageCatageory from '../ManageCatageory';

// const pages = [
//   {
//     path: '/',
//     name: 'signin',
//     component: HomeDashboard, // Assuming HomeDashboard should be rendered for '/'
//   },
//   {
//     path: 'dashboard',
//     name: 'Dashboard',
//     component: HomeDashboard,
//     children: [
//       {
//         path: 'manageproduct',
//         name: 'manageproduct',
//         component: ManageProduct,
//       },
//       {
//         path: 'managecatageory',
//         name: 'managecatageory',
//         component: ManageCatageory,
//       },
//     ],
//   },
// ];

// const Dashboard = () => {
//   return (
//     <div className="d-flex">
//       <Sidebar pages={pages} />

//       <div className="flex-grow-1 p-4">
//         <Routes>
//           {pages.map((page) => (
//             <Route
//               key={page.path}
//               path={page.path}
//               element={<page.component />}
//             />
//           ))}
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



import React, { useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import HomeDashboard from './HomeDashboard';
import ManageProduct from '../ManageProduct';
import ManageCatageory from '../ManageCatageory';

const SidebarItem = ({ item, isActive, toggleSubMenu }) => {
    const hasSubMenu = item.submenu && item.submenu.length > 0;

    return (
        <li className={`nav-item ${isActive ? 'active' : ''}`} key={item.path}>
            {hasSubMenu ? (
                <div className="list-group-item d-flex justify-content-between align-items-center bg-transparent " onClick={() => toggleSubMenu(item.path)}>
                    {/* <img src={item.icon} alt={item.name} className="me-2" /> */}
                    {item.name}
                    <i className={`bx ${isActive ? 'bx-chevron-up' : 'bx-chevron-down'} ms-auto`}></i>
                </div>
            ) : (
                <NavLink className="list-group-item d-flex justify-content-between align-items-center bg-transparent" to={item.path} activeClassName="active">
                    <img src={item.icon} alt={item.name} className="me-2" />
                    {item.name}
                </NavLink>
            )}
            {hasSubMenu && isActive && (
                <ul className="nav flex-column sub-menu ">
                    {item.submenu.map((subItem) => (
                        <li className="nav-item" key={subItem.path}>
                            <NavLink className="list-group-item d-flex justify-content-between align-items-center bg-transparent" to={subItem.path} activeClassName="active">
                                {subItem.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

export default function Dashboard() {
    const { page } = useParams();
    const [activeSubMenu, setActiveSubMenu] = useState(null);

    const pages = {
        home: <HomeDashboard />,
        manageproduct: <ManageProduct />,
        managecatageory: <ManageCatageory />,
        // addresses: <AccountAddress />,
        // payment: <AccountPayment />,
        // details: <AccountDetails />,
    };

    const menuItems = [
        {
            name: "Dashboard",
            path: "/dashboard",
            icon: "dash.png",
            submenu: [
                {
                    name: "Home",
                    path: "/dashboard/home",
                    icon: "dash.png",
                },
                {
                    name: "Manage Product",
                    path: "/dashboard/manageproduct",
                    icon: "dash.png",
                },
                {
                    name: "Manage Category",
                    path: "/dashboard/managecatageory",
                    icon: "dash.png",
                },
            ],
        },
        {
            name: "Shops",
            path: "/shop",
            icon: "shop.png",
            submenu: [
                {
                    name: "Products",
                    path: "/shop/products",
                    icon: "dash.png",
                },
            ],
        },
        {
            name: "User Setting",
            path: "/usersetting",
            icon: "user.png",
            submenu: [],
        },
    ];

    const toggleSubMenu = (path) => {
        setActiveSubMenu((prev) => (prev === path ? null : path));
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
                    <div className="position-sticky card shadow-none mb-3 mb-lg-0 border">
                        <ul className="nav flex-column card-body">
                            {menuItems.map((item) => (
                                <SidebarItem
                                    key={item.path}
                                    item={item}
                                    isActive={item.path === page || (item.submenu && activeSubMenu === item.path)}
                                    toggleSubMenu={toggleSubMenu}
                                />
                            ))}
                        </ul>
                    </div>
                </nav>

                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    {pages?.[page] ? pages[page] : <h1>No Data found</h1>}
                </main>
            </div>
        </div>
    );
}






// const appRoutes = [
//   {
//     index: true,
//     element: <HomePage />,
//     state: "home"
//   },
//   {
//     path: "/installation",
//     element: <InstallationPage />,
//     state: "installation",
//     sidebarProps: {
//       displayText: "Installation",
//       icon: <FileDownloadOutlinedIcon />
//     }
//   },
//   {
//     path: "/dashboard",
//     element: <DashboardPageLayout />,
//     state: "dashboard",
//     sidebarProps: {
//       displayText: "Dashboard",
//       icon: <DashboardOutlinedIcon />
//     },
//     child: [
//       {
//         index: true,
//         element: <DashboardIndex />,
//         state: "dashboard.index"
//       },
//       {
//         path: "/dashboard/default",
//         element: <DefaultPage />,
//         state: "dashboard.default",
//         sidebarProps: {
//           displayText: "Default"
//         },
//       },
//       {
//         path: "/dashboard/analytics",
//         element: <AnalyticsPage />,
//         state: "dashboard.analytics",
//         sidebarProps: {
//           displayText: "Analytic"
//         }
//       },
//       {
//         path: "/dashboard/saas",
//         element: <SaasPage />,
//         state: "dashboard.saas",
//         sidebarProps: {
//           displayText: "Saas"
//         }
//       }
//     ]
//   },
//   {
//     path: "/component",
//     element: <ComponentPageLayout />,
//     state: "component",
//     sidebarProps: {
//       displayText: "Components",
//       icon: <AppsOutlinedIcon />
//     },
//     child: [
//       {
//         path: "/component/alert",
//         element: <AlertPage />,
//         state: "component.alert",
//         sidebarProps: {
//           displayText: "Alert"
//         },
//       },
//       {
//         path: "/component/button",
//         element: <ButtonPage />,
//         state: "component.button",
//         sidebarProps: {
//           displayText: "Button"
//         }
//       }
//     ]
//   },
//   {
//     path: "/documentation",
//     element: "<DocumentationPage />",
//     state: "documentation",
//     sidebarProps: {
//       displayText: "Documentation",
//       icon: "<ArticleOutlinedIcon />"
//     }
//   },
//   {
//     path: "/changelog",
//     element: "<ChangelogPage />",
//     state: "changelog",
//     sidebarProps: {
//       displayText: "Changelog",
//       icon: "<FormatListBulletedOutlinedIcon />"
//     }
//   }
// ];
