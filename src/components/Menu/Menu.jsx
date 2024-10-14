import { Link } from "react-router-dom";
import { useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti"; // Import arrow icons
import { FaSearch } from "react-icons/fa";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Dashboard",
        href: "/dashboard",
      },
      {
        icon: "/teacher.png",
        label: "Customer Profile",
        href: "/customers",
      },
      {
        icon: "/avatar.png",
        label: "Vendor Profile",
        href: "/vendors",
      },
      {
        icon: "/parent.png",
        label: "Services Offered",
        
        subLists: [
          {
            label: "Tour Types",
            href: "/tour-type",
          },
          {
            label: "Package List",
            href: "/package-list",
          },
          {
            label: "Services Offer Vendor",
            href: "/services-offer",
          },
          {
            label: "Customize Package",
            href: "/customize-package",
          },
        ],
      },
      // Course
      {
        icon: "/parent.png",
        label: "Courses",
        subLists: [
          {
            label: "List of Questions",
            href: "/course",
          },
          {
            label: "Customer Questions",
            href: "/customer-questions",
          },
        ],
      },
      
      {
        icon: "/subject.png",
        label: "Flight",
        href: "/book-flight",
      },
      {
        icon: "/subject.png",
        label: "Require Authentication",
        href: "/",
      },
      {
        icon: "/class.png",
        label: "Amount Information",
        subLists: [
          {
            label: "Amount Receivable",
            href: "/amount-receive",
          },
          {
            label: "Amount Payable",
            href: "/amount-payable",
          },
          {
            label: "Purchaser Voucher",
            href: "/purchaser",
          },
        ],
      },
      {
        icon: "/lesson.jpeg",
        label: "Ledger Customer",
        href: "/ledger-customer",
      },

      {
        icon: "/lesson.jpeg",
        label: "Verifications",
        href: "/verification",
      },
      {
        icon: "/subject.png",
        label: "Reports",
        href: "/",
        subLists: [
          {
            label: "Report Task",
          },
          {
            label: "Report Auditor",
          },
        ],
      },
      {
        icon: "/setting.png",
        label: "Setups",
        href: "/",
        subLists: [
          {
            label: "Branches",
            href: '/branch'
          },
          {
            label: "Auditors Task",
          },
          {
            label: "Certificate Format",
            href: '/certificate'
          },
        ],
      },
    ],
  },
];

const Menu = () => {
  const [activeSubmenu, setActiveSubmenu] = useState(null); // Track active submenu

  // Toggle the submenu
  const handleSubmenuToggle = (label) => {
    if (activeSubmenu === label) {
      setActiveSubmenu(null); // Close submenu if already open
    } else {
      setActiveSubmenu(label); // Open selected submenu
    }
  };

  return (
    <div className=" mt-4 text-xs">
      {/* SEARCH BAR */}
      <div className="logo2 md:flex items-center gap-2 rounded-[5px] text-xs ring-[1.5px] ring-gray-600 px-2 mb-2">
        <input
          type="text"
          placeholder="Search..."
          className="w-[145px] p-2 bg-transparent outline-none border-e-[1px] border-gray-600"
        />
        <span className="cursor-pointer">
        <FaSearch size={16} color="white"/>
        </span>
      </div>
      
      
      {menuItems.map((menu) => (
        <div className="flex flex-col gap-2" key={menu.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {menu.title}
          </span>
          {menu.items.map((item) => (
            <div key={item.label}>
              {/* Main Menu Item */}
              <div
                className="flex items-center justify-between lg:justify-start gap-4 text-white py-2 md:px-2 rounded-md hover:bg-lamaSkyLight cursor-pointer"
                onClick={() => handleSubmenuToggle(item.label)}
              >
                <div className="flex items-center gap-4">
                  <img src={item.icon} alt="" width={17} height={17} />
                  <Link to={item.href} className="logo text-white">
                    {item.label}
                  </Link>
                </div>
                {item.subLists && (
                  <span className="ml-auto">
                    {activeSubmenu === item.label ? (
                      <TiArrowSortedUp className="text-xl text-gray-300" />
                    ) : (
                      <TiArrowSortedDown className="text-xl text-gray-300" />
                    )}
                  </span>
                )}
              </div>

              {/* Submenu Items */}
              {item.subLists && activeSubmenu === item.label && (
                <div className="pl-8 space-y-1">
                  {item.subLists.map((subItem) => (
                    <Link
                      key={subItem.label}
                      to={subItem.href}
                      className="flex items-center text-gray-300 py-1 hover:text-white"
                    >
                      - {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}

    </div>
  );
};

export default Menu;
