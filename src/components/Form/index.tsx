import * as React from 'react'
import useThemeCTX from '../../hooks/useThemeCTX'
import PasStyle from "../_PasStyle"
import { Styles } from '../_PasStyle/types'
import Field from './Field'

type Props = {
    
}

const Form = () => {

    const { theme } = useThemeCTX()

    const [genStyle, setGenStyle] = React.useState()
    const [style, setStyle] = React.useState<Styles>({})

    return(
        <PasStyle tag='FORM' mg='30px' pd='15px' bg={theme.colors.bg}>
            <Field 
                prop='background'
                icon='bg='
            />
            <PasStyle {...style} />
        </PasStyle>
    )
}

export default Form