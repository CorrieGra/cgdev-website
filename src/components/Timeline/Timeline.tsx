import './Timeline.css';
import React from 'react';
import moment from 'moment';
import { motion } from 'framer-motion';

export function Timeline(props: any): JSX.Element {
    const calculateExperienceDuration = (startDate: string | null, endDate: string | null): string => {
        let result: string;
        
        const start = moment(startDate);
        const end = moment(endDate);

        const years = end.diff(start, 'year');
        start.add(years, 'years');

        const months = end.diff(start, 'month');
        start.add(months, 'months');

        const days = end.diff(start, 'day');
        start.add(days, 'days');

        if (years !== 0 && months !== 0) {
            result = `${ years } years ${ months } months ${ days } days`;
        } else if (years !== 0 && months === 0) {
            result = `${ years } years ${ days } days`;
        } else {
            result = `${ months } months ${ days } days`;
        }

        return result;
    }

    const timelineVariants = {
        initial: (i: number) => ({
            opacity: 0,
            x: i % 2 === 0 ? '100%' : "-100%",
        }),
        visible: (i: number) => ({
            opacity: 1,
            x: "0",
            transition: {
                delay: .05 * i,
                duration: .75
            }
        })
    };

    return (
        <div>
                {
                    props.data.map((item: any, index: number) => (
                        <motion.div
                        custom={ index }
                        variants={ timelineVariants }
                        initial="initial"
                        animate="visible"
                        className="timeline__item" 
                        key={ index }>
                            <div className="timeline__item--title">
                                <h3>{ item.experience_position }, { item.experience_company } , { moment(item.experience_start_date).format('MMM YYYY') } - { item.experience_is_ongoing ? 'Present' : moment(item.experience_end_date).format('MMM YYYY') }</h3>
                            </div>
                            <div className="timeline__item--duration">
                                <span>{ item.experience_is_ongoing ? calculateExperienceDuration(item.experience_start_date, new Date().toISOString() ) : calculateExperienceDuration(item.experience_start_date, item.experience_end_date) }</span>
                            </div>
                            <div className="timeline__item--company">
                                <span>{ item.experience_company }</span>
                            </div>
                            <div className="timeline__item--location">
                                <span>{ item.experience_company_location }</span>
                            </div>
                            <div className="timeline__item--technologies">
                                {
                                    item.experience_technologies.map((technology: string, index: number) => (
                                        <span key={ index } className="timeline__item--technology">{ technology }</span>
                                    ))
                                }
                            </div>
                        </motion.div>
                    ))
                }
        </div>
    );
};