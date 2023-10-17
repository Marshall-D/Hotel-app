import { Icon } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import CircleIcon from "@mui/icons-material/Circle";
const Card = () => {
    return (
        <div className="bg-white shadow px-4 py-6 rounded-3xl w-full">
            <div className="flex relative">
                {/* <div className="absolute right-0 text-sm flex gap-1 items-center">
                    {" "}
                    <Icon component={StarIcon} color="warning" />{" "}
                    <span>4/5</span>{" "}
                </div> */}
                {/* <div className="image rounded-3xl" style={{ width: 120 }}>
                    <img
                        className="h-full w-full object-cover rounded-2xl "
                        src="/img/skyline.jpeg"
                    />
                </div> */}
                <div className="info relative w-full">
                    <div className="image rounded-3xl">
                        <img
                            className=" w-full object-cover rounded-2xl "
                            style={{ height: 100 }}
                            src="/img/skyline.jpeg"
                        />
                    </div>
                    <div className=" font-bold text-l mb-2 mt-3">
                        7 Season apartments
                    </div>
                    <div className="flex items-center mb-2 space-x-2">
                        <Icon
                            component={HomeIcon}
                            // height="large"
                            sx={{ fontSize: 16 }}
                            color="action"
                        />{" "}
                        <div
                            className="text-xs text-gray-300"
                            style={{ width: "75%" }}
                        >
                            Kensinton / London{" "}
                        </div>
                    </div>

                    <div className=" flex text-l text-gray">
                        $450,000{" "}
                        <span className="text-sm mb-2 text-gray-300">
                            / night{" "}
                        </span>
                        <div className="absolute right-0 text-sm flex gap-1 items-center">
                            {" "}
                            <Icon component={HomeIcon} color="action" />{" "}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const Offers: React.FC = () => {
    return (
        // add another text element to the end of best offers
        // also add 3 icons in the middle

        <div className="mt-6 w-full">
            <div className=" mx-auto flex items-center justify-between px-4 py-4">
                <div className="text-2xl mb-4">Best Offers</div>

                <div className="flex">
                    <div className=" mt-0.5">
                        {" "}
                        <Icon
                            component={CircleIcon}
                            fontSize="small"
                            color="disabled"
                        />{" "}
                    </div>
                    <div className="">
                        {" "}
                        <Icon
                            component={CircleIcon}
                            color="action"
                            fontSize="medium"
                        />{" "}
                    </div>{" "}
                    <div className="mt-0.5">
                        {" "}
                        <Icon
                            component={CircleIcon}
                            fontSize="small"
                            color="disabled"
                        />{" "}
                    </div>
                </div>

                {/* // view text */}
                <p className="">View more</p>
            </div>

            <div className="flex space-x-4 justify-between">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
};
