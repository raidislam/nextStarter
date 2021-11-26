
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import styles from '../styles/Home.module.css'
import PageTitle from './components/PageTitle/PageTitle'
import Property from './components/Property/Property'


export const getStaticProps =  async ()=>{
  const property = await fetch('http://localhost:3000/api/property')
  const result = await property.json();

  return {
    props:{
      result
    }
  }

}

export default function Home({result}) {
  const[data , setData] = useState(result)
  const [search,setSearchResult] = useState(result)
  return (
   <>
     <div className={styles.container}>
      {PageTitle('Home')}
    </div>
   <Property search={search} setSearchResult={setSearchResult} data={data} setData={setData}/> 
   </>
  )
}
