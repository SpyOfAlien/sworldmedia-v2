import { FC } from 'react'
import cn from 'classnames'

interface Props {
    children: string;
    cl?: string
}

const Label: FC<Props> = ({ children, cl }) => {
    return <p className={cn('sw-text-label', cl)}>
        { children }
    </p>
}

export default Label