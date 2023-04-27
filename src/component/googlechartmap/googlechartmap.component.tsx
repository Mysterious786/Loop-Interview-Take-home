import { Fragment } from "react"
interface Props{
    restaurant :unknown;
}

const GoogleChart: React.FC<Props> = ({restaurant})=>{
    console.log(restaurant);
    return(
        <Fragment>
          <iframe width="600" height="450" src="https://lookerstudio.google.com/embed/reporting/430242fa-4162-4950-a984-824b3b355b3c/page/dQMwC" frameBorder="0" style={{border:'0'}} allowFullScreen></iframe>
     
        </Fragment>
    )
}
export default GoogleChart;