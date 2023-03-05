

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();


        const paths = data.map(tests => {
            return{
                params:{id: tests.id.toString()}
            }
        })
        return{
            paths,
            fallback:false
        }
    }

export const getStaticProps =async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/'+ id);
    const data = await res.json();

    return{
        props:{tests:data}
    }
}

const Details = ({tests}) => {
    return (  
        <div>
            <h1> {tests.name}</h1>
            <p>{tests.email}</p>
            <p>{tests.website}</p>
            <p>{tests.address.city}</p>

        </div>
    );
}
 
export default Details;