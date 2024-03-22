import { FC, ReactNode } from 'react'
import { ButtonType } from '../TS/Types'

const Button: FC<ButtonType> = (props): ReactNode => {

    const {
        text,
        color,
        onClick,
        classes
    } = props

    return (
        <button className={`px-4 py-2 rounded-md hover:opacity-80 ${classes}`} style={{backgroundColor: `${color}`}}  onClick={onClick}>
            {text}
        </button>
    )
}

export default Button