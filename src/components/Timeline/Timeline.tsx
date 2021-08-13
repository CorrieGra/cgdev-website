import './Timeline.css';
import React, { useState } from 'react';
import moment from 'moment';

export function Timeline(): JSX.Element {
    const [items] = useState([
        {
            experience_company: "Cenoex",
            experience_company_location: "Pretoria, Gauteng",
            experience_start_date: "2018-02-01",
            experience_end_date: "2021-01-31",
            experience_is_ongoing: false,
            experience_position: "Junior Software Developer",
            experience_technologies: ["html5", "css3", "javascript", "php", "c#", "sql"]
        },
        {
            experience_company: "Ornico",
            experience_company_location: "Johannesburg, Gauteng",
            experience_start_date: "2021-01-18",
            experience_end_date: null,
            experience_is_ongoing: true,
            experience_position: "Intermediate Software Developer ( React )",
            experience_technologies: ["react", "redux", "react router", "typescript", "axios", "scss", "css3"]
        }
    ]);

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

    return (
        <div className="timeline">
            {
                items.map((item, index) => (
                    <div className="timeline__item" key={ index }>
                        <div className="timeline__item--title">
                            <h3>{ item.experience_position }, { item.experience_company } , { moment(item.experience_start_date).format('MMM YYYY') } - { item.experience_is_ongoing ? 'Present' : moment(item.experience_end_date).format('MMM YYYY') }</h3>
                        </div>
                        <div className="timeline__item--duration">
                            <span>{ item.experience_is_ongoing ? calculateExperienceDuration(item.experience_start_date, new Date().toLocaleString() ) : calculateExperienceDuration(item.experience_start_date, item.experience_end_date) }</span>
                        </div>
                        <div className="timeline__item--company">
                            <span>{ item.experience_company }</span>
                        </div>
                        <div className="timeline__item--location">
                            <span>{ item.experience_company_location }</span>
                        </div>
                        <div className="timeline__item--technologies">
                            {
                                item.experience_technologies.map((technology, index) => (
                                    <span key={ index } className="timeline__item--technology">{ technology }</span>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    );
};