import './ContactView.css';
import React, { Fragment } from 'react';
import { Section } from '../../components/Layout/Section/Section';
import { Input } from '../../components/Utils/Input/Input';
import { useForm } from 'react-hook-form';
import { Button } from '../../components/Utils/Button/Button';

export function ContactView() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
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

                    <Button type="primary" text="Submit" onClick={ handleSubmit(onSubmit) }/>
                </form>
            </Section>
        </Fragment>
    );
};