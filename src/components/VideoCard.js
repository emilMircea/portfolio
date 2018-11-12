import React from "react";

const OnlineVersionLink = ({ onlineVersion }) => (
  <a className="is-size-6" href={onlineVersion}>
    {onlineVersion ? "View Online App" : "Online Version Not Yet Available"}
  </a>
);

const SourcecodeLink = ({ sourcecode }) => (
  <a className="is-size-6" href={sourcecode}>
    {sourcecode ? "Sourcecode on Github" : "Sourcecode Not Available"}
  </a>
);

const VideoCard = ({ videosource, onlineVersion, sourcecode }) => (
  <div className="card">
    <div className="card-content">
      <video
        src={videosource}
        controls
        style={{ display: "block", height: "auto", width: "100%" }}
      >
        Screen Recording
      </video>
      <br />
      <div className="is-flex">
        <p
          className="card-footer-item"
          style={{ borderRight: "1px solid gray" }}
        >
          <span>
            {onlineVersion ? (
              <OnlineVersionLink onlineVersion={onlineVersion} />
            ) : null}
          </span>
        </p>
        <p className="card-footer-item">
          <span>
            {sourcecode ? <SourcecodeLink sourcecode={sourcecode} /> : null}
          </span>
        </p>
      </div>
    </div>
  </div>
);

export default VideoCard;
