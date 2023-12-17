

interface Heading{
    center?:boolean,
    text:string
}

const Header:React.FC<Heading> =  ({center,text}) => {
  return (
    <div className={`text-slate-400 px-3 my-3 md:my-10 md:px-10 md:text-xl  ${center ? "text-center" :"text-start"}`}>{text}</div>
  )
}

export default Header