import React from "react";

import {
    Cards,
    Hero,
    Container,
    Destinations,
    Footer,
    Header,
    Main,
    Sidebar,
} from "@components";
import { Offers } from "@components/offers";
import { Explore } from "@components/explore";

const Home: React.FC = () => {
    return (
        <Container>
            <Header />
            <Sidebar />
            <main
                className="px-6 py-8 h-full bg-grey-7"
                style={{ marginLeft: 300 }}
            >
                <Hero />
                <Destinations />
                <Offers />
                <Explore />
            </main>

            {/*  
            <Destinations /> */}
            {/* <Footer /> */}
        </Container>
    );
};

export default Home;
