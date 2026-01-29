import { Route } from "@/types";

export const adminRoutes: Route[] = [
  {
    title: "Dashboard",
    items: [
      { title: "Statistics", url: "/admin" },
    ],
  },
  {
    title: "Users",
    items: [
      { title: "Manage Users", url: "/admin/users" },
    ],
  },
  {
    title: "Bookings",
    items: [
      { title: "All Bookings", url: "/admin/bookings" },
    ],
  },
  {
    title: "Categories",
    items: [
      { title: "Manage Categories", url: "/admin/categories" },
    ],
  },
];
