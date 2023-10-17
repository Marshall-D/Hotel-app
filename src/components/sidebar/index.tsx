import React from "react";
import { Icon } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import { Logo } from "@components";
import EmailIcon from "@mui/icons-material/Email";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SettingsIcon from "@mui/icons-material/Settings";
export const Sidebar: React.FC = () => {
    return (
        <div
            className="text-center bg-white absolute top-0 bottom-0 left-0 h-[100vh] shadow px-4 py-6 w-[300px]"
            style={{ width: 300 }}
        >
            <h1 className="text-2xl font-bold mb-5">MimaBooking</h1>
            <div
                className="rounded-full border-2 border-info p-1 bg-grey-7 mx-auto"
                style={{ height: 100, width: 100 }}
            >
                <div className="rounded-full  bg-black mx-auto w-full h-full bg-hero-pattern"></div>
                <p className="text-xl mt-6 font-dmSans">Ilia Jan</p>
            </div>

            <div className="mt-6 pt-8" style={{ marginTop: 300 }}>
                <div className="flex gap-2 p-4">
                    <Icon component={HomeIcon} /> Dashboard
                </div>
                <div className="flex gap-2 p-4  ">
                    <Icon
                        component={AppsOutlinedIcon}
                        color="action"
                        className=" bg-white rounded-lg"
                    />{" "}
                    Explore City
                </div>
                <div className="flex gap-2 p-4 ">
                    <Icon
                        component={EmailIcon}
                        color="action"
                        className=" bg-white rounded-lg"
                    />{" "}
                    Ticket
                </div>
                <div className="flex gap-2 p-4 ">
                    <Icon
                        component={FavoriteIcon}
                        color="action"
                        className="bg-white rounded-lg"
                    />{" "}
                    Favorites
                </div>{" "}
                <div className="flex gap-2 p-4 ">
                    <Icon
                        component={SettingsIcon}
                        color="action"
                        className="bg-white rounded-lg"
                    />{" "}
                    Settings
                </div>
                <div className="flex gap-2 p-4" style={{ marginTop: 200 }}>
                    <Icon
                        component={ChevronRightIcon}
                        color="action"
                        className="border border-black  bg-white rounded-lg"
                    />{" "}
                    Logout
                </div>
            </div>
        </div>
    );
};
