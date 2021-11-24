
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import styles from '../styles/Home.module.css'
import GetProperty from './components/GetProperty/GetProperty';
import PageTitle from './components/PageTitle/PageTitle'
import Property from './components/Property/Property'
import ShowProperty from './components/ShowProperty/ShowProperty';

export const getStaticProps =  async ()=>{
  const property = await fetch('http://localhost:5000/property')
  const result = await property.json();

  return {
    props:{
      result
    }
  }

}

export default function Home({result}) {
  const[data , setData] = useState(result)
  return (
   <>
     <div className={styles.container}>
      {PageTitle('Home')}
    </div>
   <Property data={data} setData={setData}/> 
   </>
  )
}
