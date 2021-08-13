import './Input.css';

interface IInputParams {
    name: string;
    fieldOrArea: string;
    type?: string;
    placeholder?: string;
    onChange?: any;
    onBlur?: any;
    register?: any;
    errors?: any;
    validation?: any;
}

/**
 * @interface IInputParams
 * @property { string } name name of the element
 * @property { string } fieldOrArea is a required parameter that specifies if you want an input field or text area e.g. 'field' / 'area'
 * @property { string } type is an optional parameter specifying the input type, default = text
 * @property { string } placeholder is an optional parameter for your input placeholder
 * @property { any } onChange is an optional parameter
 * @property { any } onBlur is an optional parameter
 * @property { any } register is an optional parameter used when using react-hook-form
 * @property { any } errors is an optional parameter used when checking react-hook-form's errors
 * @property { any } validation is an optional parameter used when checking react-hook-form's input validity
 * @returns JSX.Element
 */
export function Input(props: IInputParams): JSX.Element {
    const TextField = () => (
        <input
        className={ props.errors[props.name] ? 'input__error' : null } 
        type={ props.type === undefined ? 'text' : props.type } 
        onChange={ props.onChange !== undefined ? props.onChange : null }
        { ...props.register(props.name, props.validation !== undefined ? { ...props.validation } : undefined) }>
        </input>
    );

    const TextArea = () => (
        <textarea
        className={ props.errors[props.name] ? 'input__error' : null } 
        rows={ 10 }
        onChange={ props.onChange !== undefined ? props.onChange : null }
        { ...props.register(props.name, props.validation !== undefined ? { ...props.validation } : undefined) }>
        </textarea>
    );

    return props.fieldOrArea === 'field' ? (<TextField />) : (<TextArea />);
}