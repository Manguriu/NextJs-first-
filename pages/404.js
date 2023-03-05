import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const PageError = () => {
    const router = useRouter();

    useEffect(() =>{
        setTimeout(() =>{
            router.push('/')
        },5000)
    },[])
    return ( 
        <div className="no-page">
            <h1>
                Yiiiikes....
            </h1>
            <h2> sorry theres no such page redirecting to Homepage... </h2>

            <p> Reload to <Link href="/" passHref={true} legacyBehavior><a>Homepage</a></Link></p>

        </div>
     );
}
 
export default PageError;