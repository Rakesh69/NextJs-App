import styles from '../../styles/Jobs.module.css'
import Link from 'next/link';
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { data: data }
  }
}

const Ninjas = ({ data }) => {
  return (
    <div>
     
      {data && data.map(item => (
        <Link href={'/user/' + item.id} key={item.id}>
          <a className={styles.single}>
            <h3>{ item.name }</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}
 
export default Ninjas;