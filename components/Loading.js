import Image from "next/image";
import {Circle} from 'better-react-spinkit';

export default function Loading() {
  return (
    <center style={{
        display: "grid",
        placeItems:"center",
        height:"100vh"
        }}>
      <div>
        {/*  <Image style=""
          src="/src/loding.gif"
          alt="Picture of the author"
          width={800}
          height={600}
        ></Image> */}
        <Circle color="#77d7c8" size={300}/>
      </div>
    </center>
  );
}

