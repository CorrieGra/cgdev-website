import './Input.css';

interface IInputParams {
    name: string;
    fieldOrArea: string;
    type?: string;
    placeholder?: string;
    onChange?: any;
    onBlur?: any;
    register?: any;
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
 * @property { any } validation is an optional parameter used when passing react-hook-form validations to register
 * @returns JSX.Element
 */
export function Input(props: IInputParams): JSX.Element {
    const TextField = () => (
        <input 
        type={ props.type === undefined ? 'text' : props.type } 
        onChange={ props.onChange !== undefined ? props.onChange : null }
        { ...props.register(props.name) }>
        </input>
    );

    const TextArea = () => (
        <textarea 
        onChange={ props.onChange !== undefined ? props.onChange : null }>
        </textarea>
    );

    return props.fieldOrArea === 'field' ? (<TextField />) : (<TextArea />);
}