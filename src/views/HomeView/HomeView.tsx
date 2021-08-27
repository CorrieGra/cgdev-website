// /* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Section, sectionVariants } from "../../components/Layout/Section/Section";
import { Timeline } from "../../components/Timeline/Timeline";
import { Button } from "../../components/Utils/Button/Button";
import { Header } from "../../components/Utils/Header/Header";
import { createTypedHooks } from 'easy-peasy';
import { IStore } from "../../store";
import { AnimatePresence, motion } from 'framer-motion';
import { isMobile } from "react-device-detect";


const { useStoreState, useStoreActions } = createTypedHooks<IStore>();

export function HomeView() {
    const [aboutPositionFromTop, setAboutPositionFromTop] = useState(document.querySelector('#about-me')?.getBoundingClientRect().top);
    const [experiencePositionFromTop, setExperiencePositionFromTop] = useState(document.querySelector('#experience')?.getBoundingClientRect().top);
    const [yPosition, setYPosition] = useState(window.pageYOffset);
    const experiences = useStoreState((state) => state.experiences);
    const loadExperiences = useStoreActions((actions) => actions.loadExperiences);

    useEffect(() => {
        loadExperiences();
        window.addEventListener('scroll', () => setYPosition(window.pageYOffset));
    });

    useEffect(() => {
        setExperiencePositionFromTop(document.querySelector('#experience')?.getBoundingClientRect().top);
        setAboutPositionFromTop(document.querySelector('#about-me')?.getBoundingClientRect().top);
    }, [yPosition]);

    return (
        <Fragment>
            <Header
            image="assets/images/homepage-hero.jpg"
            intro="Hello, I'm Corrie Graham and I love to build beautiful websites"
            hasIntro
            />

            <AnimatePresence exitBeforeEnter>
                <Section id="about-me" title="about me">
                    {
                        !!aboutPositionFromTop && (isMobile ? aboutPositionFromTop <= 20 : aboutPositionFromTop <= 820) && (
                            <Fragment>
                                <motion.p
                                variants={ sectionVariants }>
                                    Experienced in full-stack development, with a passion and focus on front-end development. I started my career with an amazing opportunity, after graduating from matric and have grown through all of my experiences and thanks to the help of my seniors. I'm passionate and enjoy the line of work I'm in, always looking to improve and to learn new skills. I work great in teams and I'm perfectly capable to work on my own, I take responsibilities very seriously and make honesty a priority.
                                </motion.p>
                                <motion.div
                                variants={ sectionVariants }
                                className="section__cta">
                                    <Link to="/portfolio">
                                        <Button type="secondary" text="go to portfolio" />
                                    </Link>
                                    <a download href={ `${process.env.REACT_APP_FILE_URL}/Corrie_Graham-CV.pdf` } rel="noreferrer" target="_blank">
                                        <Button type="secondary" text="download resume" />
                                    </a>
                                </motion.div>
                            </Fragment>
                        )
                    }
                </Section>

            </AnimatePresence>

            <Section
            id="experience"
            title="experience"
            isVisible={ experiencePositionFromTop ? experiencePositionFromTop <= 824.5 : false }>
                <AnimatePresence>
                    {
                       !!experiencePositionFromTop && (isMobile ? experiencePositionFromTop <= 50 : experiencePositionFromTop <= 800) && (<Timeline data={ experiences }/>)
                    }
                </AnimatePresence>
            </Section>
        </Fragment>
    );
};