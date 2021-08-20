/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { Section } from "../../components/Layout/Section/Section";
import { Timeline } from "../../components/Timeline/Timeline";
import { Button } from "../../components/Utils/Button/Button";
import { Header } from "../../components/Utils/Header/Header";
import { createTypedHooks } from 'easy-peasy';
import { IStore } from "../../store";

const { useStoreState, useStoreActions } = createTypedHooks<IStore>();

export function HomeView() {
    const experiences = useStoreState((state) => state.experiences);
    const loadExperiences = useStoreActions((actions) => actions.loadExperiences);

    useEffect(() => {
        loadExperiences();
    }, []);

    return (
        <Fragment>
            <Header
            image="assets/images/homepage-hero.jpg"
            hasIntro
            intro="Hello, I'm Corrie Graham and I love to build beautiful websites"/>

            <Section id="about-me" title="about me">
                <p>
                    Experienced in full-stack development, with a passion and focus on front-end development. I started my career with an amazing opportunity, after graduating from matric and have grown through all of my experiences and thanks to the help of my seniors. I'm passionate and enjoy the line of work I'm in, always looking to improve and to learn new skills. I work great in teams and I'm perfectly capable to work on my own, I take responsibilities very seriously and make honesty a priority.
                </p>
                <div className="section__cta">
                    <Link to="/portfolio">
                        <Button type="secondary" text="go to portfolio" />
                    </Link>
                    <a download href={ `${process.env.REACT_APP_FILE_URL}/Corrie_Graham-CV.pdf` } rel="noreferrer" target="_blank">
                        <Button type="secondary" text="download resume" />
                    </a>
                </div>
            </Section>

            <Section title="experience">
                <Timeline data={ experiences }/>
            </Section>
        </Fragment>
    );
};