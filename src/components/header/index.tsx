import React from "react";
// import "./header.css";

import { Icon } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActiveOutlined";

export const Header: React.FC = () => {
    return (
        <div className="">
            <div
                className="flex justify-between py-6 px-8"
                style={{ marginLeft: 300 }}
            >
                <div className="relative">
                    <Icon
                        component={SearchIcon}
                        className="absolute"
                        style={{ left: 14, top: 16 }}
                    />
                    <input
                        className="border-2 border-grey-3 rounded-xl py-3 pl-10"
                        placeholder="Search anything..."
                        style={{ width: 350 }}
                    />
                </div>
                <div className="flex gap-10 items-center">
                    <span className="font-dmSans text-[#eee]">
                        Saturday, May 3, 2023
                    </span>
                    {/* <Icon component={NotificationsActiveIcon} /> */}
                    <button
                        type="button"
                        className="relative inline-flex items-center p-1 text-sm font-medium text-center text-white border border-black rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        <Icon
                            component={NotificationsActiveIcon}
                            fontSize="small"
                            sx={{ color: "black" }}
                        />
                        <span className="sr-only">Notifications</span>
                        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -left-7 dark:border-gray-900">
                            7
                        </div>
                    </button>
                    <div></div>
                </div>
            </div>
        </div>
    );
};
