import { Icon } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Card = () => {
    return (
        <div className="bg-white shadow px-4 py-6 rounded-3xl w-full">
            <div className="flex  relative gap-4">
                <div className="absolute right-0 text-sm flex  gap-1 items-center">
                    {" "}
                    <Icon
                        component={StarIcon}
                        color="warning"
                        fontSize="small"
                    />{" "}
                    <span style={{ fontSize: 10 }}>4/5</span>{" "}
                </div>
                <div className="image rounded-3xl" style={{ width: 120 }}>
                    <img
                        className="h-full w-full object-cover rounded-2xl "
                        src="/img/skyline.jpeg"
                    />
                </div>
                <div className="info relative">
                    <div className="font-bold text-l mb-2">
                        Montmore, France
                    </div>
                    <div
                        className="text-xs mb-2 text-gray"
                        style={{ width: "75%" }}
                    >
                        Visiting the best areas saved by the tourists
                    </div>
                    <div className="text-xl text-gray">$450,000</div>
                </div>
            </div>
        </div>
    );
};

export const Destinations: React.FC = () => {
    return (
        // add two icons  to the end of trending
        <div className="mt-0 w-full">
            <div className="relative p-10">
                <div className="text-2xl mb-4  absolute left-0">
                    Trending destinations
                </div>
                <div className="absolute right-10 border border-black  bg-black rounded-lg">
                    {" "}
                    <Icon component={ChevronRightIcon} color="info" />{" "}
                </div>
                <div className="absolute right-20  border border-black  bg-white rounded-lg">
                    {" "}
                    <Icon component={ChevronLeftIcon} color="action" />{" "}
                </div>
            </div>
            <div className="flex gap-4 justify-between">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};
