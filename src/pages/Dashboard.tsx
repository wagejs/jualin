import HorizontalMenu from "@components/HorizontalMenu";
import { HorizontalMenuData } from "@components-types/HorizontalMenu";

function Dashboard() {
  const sidebarMenu: HorizontalMenuData[] = [
    {
      text: "Dashboard",
      route: "/dashboard",
    },
    {
      text: "Products",
      route: "/products",
    },
    {
      text: "Sales",
      route: "/sales",
    },
    {
      text: "Messages",
      route: "/messages",
    },
    {
      text: "Orders",
      route: "/orders",
    },
    {
      text: "Analytics",
      route: "/analytics",
    },
    {
      text: "Payouts",
      route: "/payouts",
    },
    {
      text: "Settings",
      route: "/settings",
    },
  ];

  return (
    <div className="">
      <div className="sidebar-menu min-h-screen bg-brand-gray max-w-64 w-full">
        <h1 className="text-3xl font-bold">Hello world!</h1>
        <div className="pt-4">
          {sidebarMenu?.length && <HorizontalMenu datas={sidebarMenu} />}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
