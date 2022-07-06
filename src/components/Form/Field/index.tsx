import * as React from 'react'
import { FaSearch } from 'react-icons/fa'
import useThemeCTX from '../../../hooks/useThemeCTX'
import PasStyle from '../../_PasStyle'

type Props = {
    icon?:React.ReactNode
    prop?:string
}

const Field = ({
    icon,
    prop
} : Props) => {

    const { theme } = useThemeCTX()

    

    return(
        <PasStyle>
            <PasStyle tag='LABEL'
                position='absolute'
                bg={theme.colors.bg}
                mg='0px 40px 0px'
                color={theme.colors.tertiary}
                transform='translateY(-10px)'
                pd='0px 3px 0px'
                b_Radius='8px'
                f_size='14px'
            >
                Props.{prop ?? 'prop'}
            </PasStyle>
            <PasStyle>
                <PasStyle tag='SPAN'
                    color={theme.colors.tertiary}
                    position='absolute'
                    f_size='20px'
                    pd='10px'
                >
                    {icon ? icon : <FaSearch /> }
                </PasStyle> 
            <PasStyle tag='INPUT' 
                onChange={(e) => {}}
                pd='15px 50px'
                w='50%'
                b_Radius='8px'
                border='solid 2px'
                bg={theme.colors.bg}
                color={theme.colors.secondary}
                b_Color={theme.colors.quintenary}
                outline_color={theme.colors.tertiary}
            />
            </PasStyle>
        </PasStyle>
    )
}

export default Field