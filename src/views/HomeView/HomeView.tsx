import React, { Fragment } from "react";
import { Section } from "../../components/Layout/Section/Section";
import { Timeline } from "../../components/Timeline/Timeline";
import { Button } from "../../components/Utils/Button/Button";
import { Header } from "../../components/Utils/Header/Header";

export function HomeView() {
    return (
        <Fragment>
            <Header
            hasIntro
            intro="Hello, I'm Corrie Graham and I love to build beautiful websites"/>

            <Section title="about me">
                <p>
                    Experienced in full-stack development, with a passion and focus on front-end development. I started my career with an amazing opportunity, after graduating from matric and have grown through all of my experiences and thanks to the help of my seniors. I'm passionate and enjoy the line of work I'm in, always looking to improve and to learn new skills. I work great in teams and I'm perfectly capable to work on my own, I take responsibilities very seriously and make honesty a priority.
                </p>
                <div className="section__cta">
                    <Button type="secondary" text="go to portfolio" />
                    <Button type="secondary" text="download resume" />
                </div>
            </Section>

            <Section title="experience">
                <Timeline />
            </Section>
        </Fragment>
    );
};