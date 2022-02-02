import Register from './registerform';
const Event = () => {
  // const [open, setOpen] = useState(false)
    return (  
        <div className="row">
        <div className="col-xs-4 col-sm-2 text-center">
          <p className="text-big text-bold">17-21 February 2020 
</p>
        </div>
        <div className="col-xs-8 col-sm-10">
          <p className="text-big text-bold text-uppercase">Proficiency in Short Term Reinsurance</p>
          <p>Proficiency in Short Term Reinsurance Practice & Claims Management 17-21 February 2020 Dar es Salaam</p>
          <span className="label label-main">Dar es Salaam</span>
          
          <Register/>
        </div>
      </div>
    );
}

 
export default Event;