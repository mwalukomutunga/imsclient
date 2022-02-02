const Content = ({children}) => {
    return (         
      <div className="row">
      <div className="col-lg-12">
        <div className="row">
          <div className="col-lg-10 col-lg-offset-1">
            <ul className="nav nav-tabs nav-justified" role="tablist" id="toolkit">
              <li className="active"> <a href="schedule.html#day1" role="tab" data-toggle="tab"><span
                    className="text-bold text-big ">Full Schedule</span><br />
                  <span className="small">2022</span> </a> </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane fade active in" id="day1">
              {children}                
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
     );
}
 
export default Content;