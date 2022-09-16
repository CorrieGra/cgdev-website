import React, { Fragment } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { store } from 'react-notifications-component';

import { Section } from '@components/Layout/Section/Section';
import { Input } from '@components/Utils/Input/Input';
import { Button } from '@components/Utils/Button/Button';

import './ContactView.css';

export function ContactView() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const sendEmail = async (data: any) => {       
        await axios({
            url: `${process.env.REACT_APP_API_URL}/email`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(data)
        })
        .then(() => {
            store.addNotification({
                title: "Success!",
                message: "Your message has been sent! I'll be with you shortly.",
                type: "success",
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                  duration: 2500,
                  onScreen: true
                }
            }); 
        })
        .catch(() => {
            store.addNotification({
                title: "Oops!",
                message: "Your message could not be sent, try again later.",
                type: "danger",
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                  duration: 2250,
                  onScreen: true
                }
            }); 
        });
    }

    return (
        <Fragment>
            <Section title="get in touch">
                <p className="section__intro">I'm always eager to hear what you're working on and how I can be of any assistance. I'm hard-working and take every task seriously, I can work good on my own or in a team and I pay a lot of attention to details. Please, feel free to contact me with the form below to start our journey together !</p>
            </Section>

            <Section title="contact me">
                <form>
                    <div id="client_name" className="form__group">
                        <label htmlFor="client_name">Name</label>
                        <Input 
                        fieldOrArea="field" 
                        name="client_name" 
                        register={ register } 
                        validation={{ required: true }}
                        errors={ errors }/>
                    </div>
                    <div id="client_email" className="form__group">
                        <label htmlFor="client_email">Email</label>
                        <Input 
                        fieldOrArea="field" 
                        name="client_email" 
                        register={ register }
                        validation={{ required: true }} 
                        errors={ errors }/>
                    </div>
                    <div id="client_message" className="form__group">
                        <label htmlFor="client_message">Message</label>
                        <Input 
                        fieldOrArea="area" 
                        name="client_message" 
                        register={ register } 
                        validation={{ required: true }}
                        errors={ errors }/>
                    </div>
                    <Button type="primary" text="send message" onClick={ handleSubmit(sendEmail) }/>
                </form>
            </Section>
        </Fragment>
    );
};