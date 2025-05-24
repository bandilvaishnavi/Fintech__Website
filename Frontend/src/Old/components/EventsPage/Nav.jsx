import {Link} from "react-router"
const Back=()=>{

    return(
        <div
        className=' py-6 w-full justify-start items-center inline-flex'
        
      >
        <div className="justify-center h-10 items-center flex">
          <Link to={'/'}
            className="w-10 h-full p-[9px] bg-[#fcfcfc]/10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img src="/icons/Back.svg" alt='back'/>
          </Link>
        </div>
      </div>
    )
}

export default Back;