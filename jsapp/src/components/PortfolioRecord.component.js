import { formattedDuration } from "./common/helper";
import { Link } from "react-router-dom";

function recordsdiv(props) {
  return (
    <li className="timeline_element project">
      {props.record.duration ? (
        <div className="timeline_element-date">
          <time className="timeline_element-date-text">
            {formattedDuration(props.record.duration)}
          </time>
        </div>
      ) : (
        ""
      )}
      <div className="timeline_element-contents">
        <div className="project-text">
          {props.record.title ? <div>Title:{props.record.title}</div> : ""}
          {props.record.tech ? <div>{props.record.tech}</div> : ""}
          {props.record.link ? (
            <Link to={props.record.link} className="navbar-brand">
              {props.record.link}
            </Link>
          ) : (
            ""
          )}
          {props.record.desc ? <div>{props.record.desc.desc}</div> : ""}
        </div>
      </div>
    </li>
  );
}

export default recordsdiv;
