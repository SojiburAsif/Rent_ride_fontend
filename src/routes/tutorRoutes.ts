import { Route } from "@/types";

export const tutorRoutes: Route[] = [
    {
        title: "Dashboard",
        items: [
            { title: "Sessions", url: "/tutor/dashboard" },
            { title: "Availability", url: "/tutor/availability" },
            { title: "Profile", url: "/tutor/profile" },
        ],
    },
    {
        title: "Ratings & Reviews",
        items: [
            { title: "View Reviews", url: "/tutor/reviews" },
        ],
    },
];
