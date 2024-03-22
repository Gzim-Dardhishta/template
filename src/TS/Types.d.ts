
export type InputTypes = {
    placeholder: string;
    value: string;
    setValue: ()  => void;
    label?: string | undefined;
    classes?: string | undefined;
    type: string;
    input: 'input' | 'textarea';
    rows?: number | undefined;
    inputStyle?: string | undefined;
}

export type ButtonType = {
    text: string;
    color: string;
    onClick: () => void;
    classes?: string | undefined;
}

export type DesignType = {
    img: string
    title: string
}