import  { FC } from 'react'
import cn from 'classnames'

interface Props {
    children: any,
    cl?: string
}

const Container: FC<Props> = ({ children, cl }) => {
    return <div className={cn('sw-w-full sw-px-xxl')}>
        {children}
    </div>
}

export default Container;