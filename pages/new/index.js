import Head from "next/head";
import Link from "next/link";
import styles from '../../styles/test.module.css'

export const getStaticProps = async () => {
    const res = await fetch ('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();
    
    return{
        props:{tests:data}
    }
}
const Test = ({tests}) => {
    return ( 
        <>
        <Head>
        <title>Test | Page </title>
      
      </Head>
        <div>
            <h1>Test data</h1>
            {tests.map(test =>(
                <Link href={'/new/' + test.id} key={test.id} passHref={true} legacyBehavior>
                    <a className={styles.single}><h3>{test.name}</h3></a>
                </Link>
            ))}
        </div>
        </>
        
    );
}
 
export default Test;