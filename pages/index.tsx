import { GetStaticProps } from 'next'
import * as React from 'react'
// import Code from '../src/components/Code'
// import Form from '../src/components/Form'
// import Gen from '../src/components/Form'
// import NavBar from '../src/components/NavBar'
// import PasStyle from '../src/components/_PasStyle'
import useThemeCTX from '../src/hooks/useThemeCTX'
import { dataAnimes, dataUsers } from './api'

export const getStaticProps : GetStaticProps = async (ctx) => {
    
    try {
        //const resp = await axiosConfig(`users/{params.id}/`)
        const respAnimes = dataAnimes
        const respUsers = dataUsers
        return {
            props: {
              datas:{
                  animes:respAnimes,
                  users:respUsers
              },
            },
          }

    } catch (e) {
        console.log(e)
        return {
            props: {
              datas:{
                  animes:[{}],
                  users:[{}]
              },
            },
            notFound:true
          }
    }
}

export type Animes = {
    id?:string
    name?:string
    thumb?:string
}

export type Users = {
    id?:string
    name?:string
    email?:string
    avatar?:string
    status?:string
    animes_like?:Array<Animes>
    
}

type Props = {
    datas:{
        animes:Array<Animes>
        users:Array<Users>
    }
}

const Home = ({
    datas
} : Props) => {

    const { theme } = useThemeCTX()

    return(
        <>
           {/* <PasStyle tag='HEADER'>
                <NavBar />
           </PasStyle>
            <PasStyle tag='MAIN'>
               <Form />
               
            </PasStyle>
           <PasStyle tag='FOOTER'>
               
           </PasStyle> */}
        </>
    )
}

export default Home