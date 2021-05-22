import { FC } from 'react'
import cn from 'classnames'

interface Props {
    children: string;
    cl?: string
}

const Label: FC<Props> = ({ children, cl }) => {
    return <h3 className={cn('sw-text-h3 sw-title-gradient sw-capitalize sw-font-bold', cl)}>
        { children }
    </h3>
}

export default Label