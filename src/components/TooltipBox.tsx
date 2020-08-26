import React from "react";
import moment  from "moment" ;


export default (props:any) => {
    return <TooltipBox props={props} />;
  };

  let style ={ 
    paddingLeft: "5px",
    height: "auto",
    backgroundColor: "white",
    border: "2px solid #96C8DA",
    width: "170px",
    borderRadius: "10px"
  }

const TooltipBox = (props:any) => {
    if (props.props.tooltipInfo === null || props.props.tooltipInfo.length === 0){return null}
    let time = moment(parseInt(props.props.tooltipInfo.activePayload[0].payload.name)).format("lll")
    return (
      <div style={{position: "absolute", left: "65%", top: 200, color: "#9F9FA2", fontSize:"15px", opacity:".9"}}>
          {time}
          <div style={style}>
            {
              props.props.tooltipInfo.activePayload.map((a:any)=>{
                return (
                  <p key= {a.dataKey} style={{margin: "2px", fontSize: "13px"}}>{a.dataKey}: {a.value}</p>
                )
              })
            }
          </div>

      </div>
    );
  };