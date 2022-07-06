import { GetStaticProps } from 'next'
import * as React from 'react'
<<<<<<< HEAD
// import Code from '../src/components/Code'
// import Form from '../src/components/Form'
// import Gen from '../src/components/Form'
// import NavBar from '../src/components/NavBar'
// import PasStyle from '../src/components/_PasStyle'
import useThemeCTX from '../src/hooks/useThemeCTX'
=======
>>>>>>> e982597f3b9d82470cbdcf7e0a278e32fade0924
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

    return(
        <>
<<<<<<< HEAD
           {/* <PasStyle tag='HEADER'>
                <NavBar />
           </PasStyle>
            <PasStyle tag='MAIN'>
               <Form />
               
            </PasStyle>
           <PasStyle tag='FOOTER'>
               
           </PasStyle> */}
=======
           <header>
                
           </header>
            <main>
             
            </main>
           <footer>
               
           </footer>
>>>>>>> e982597f3b9d82470cbdcf7e0a278e32fade0924
        </>
    )
}

export default Home