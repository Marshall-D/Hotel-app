import React from "react";
import { Button } from "..";
import { Icon } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { VerticalLine } from "@components/verticalLine";
import PersonIcon from "@mui/icons-material/Person";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
export const Hero: React.FC = () => {
    return (
        <div>
            <div
                className="w-full rounded-3xl bg-gray-800 bg-hero-pattern-2 relative mb-0"
                style={{ height: 200 }}
            ></div>
            <div className="relative px-6 " style={{ top: -40 }}>
                <div
                    className="rounded-3xl bg-white shadow mx-auto flex items-center justify-end px-4"
                    style={{ height: 100, width: "90%" }}
                >
                    {/* put 3 divs contINING  icons to left and right of a text 
                    then add tow dividers to separte the 3 divs */}
                    <div
                        className=" mx-auto flex items-center justify-end px-4"
                        // style={{ height: 100, width: "90%" }}
                    >
                        <Icon component={LocationOnIcon} color="action" />{" "}
                        <p className="mr-8 ml-3 text-lg text-gray-300">
                            {" "}
                            Where are you going ?
                        </p>
                        <Icon
                            component={KeyboardArrowDownIcon}
                            color="action"
                        />{" "}
                    </div>
                    <VerticalLine />
                    <div className=" mx-auto flex  items-center justify-end px-4">
                        <Icon
                            component={SentimentSatisfiedAltIcon}
                            color="action"
                        />{" "}
                        <p className="mr-8 ml-3 text-lg text-gray-300">
                            {" "}
                            Check-in Drive
                        </p>
                        <Icon
                            component={KeyboardArrowDownIcon}
                            color="action"
                        />{" "}
                    </div>
                    <VerticalLine />
                    <div className=" mx-auto flex items-center justify-end px-4">
                        <Icon component={PersonIcon} color="action" />{" "}
                        <p className="mr-8 ml-3"> 3 adults</p>
                        <Icon
                            component={KeyboardArrowDownIcon}
                            color="action"
                        />{" "}
                    </div>
                    <Button>Search</Button>
                </div>
            </div>
        </div>
    );
};
