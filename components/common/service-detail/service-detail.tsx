import { FC } from 'react'
import Image from 'next/image'
import Paragraph from '../typo/paragraph'
import Heading from '../typo/title'
import Label from '../typo/label'
import { Container } from '../../layout'

interface Data {
    name: string,
    label: string,
    icon: string
    content: string,
    subService: string[]
}

interface Props {
    data: Data,
    cl?: string
}

const ServiceDetail: FC<Props> = ({ data, cl }) => {
    return <Container>
        <div className="sw-flex">
            <div className="sw-w-full xl:sw-w-1/2">
             
                <div className="sw-w-10/12">

                    <Image
                        src={data.icon}
                        width={200}
                        height={200}
                        alt={data.name}
                    />
                
                
                    <Label cl="sw-my-8">{data.name}</Label>
                    <Paragraph>{data.content}</Paragraph>
                </div>
                
            </div>
            <div className="sw-w-full xl:sw-w-1/2">
                <div className="sw-w-10/12 sw-flex sw-flex-wrap">
                    {data.subService.map(item => <div className="sw-w-2/5 sw-bg-modal sw-mr-2 sw-mb-2">
                            <Paragraph cl="sw-title-gradient sw-text-label sw-font-bold">
                                { item }
                            </Paragraph>
                    </div>)}
                </div>
            </div>
        </div>
    </Container>
}

export default ServiceDetail