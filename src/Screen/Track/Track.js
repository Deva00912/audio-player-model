import React, { useEffect, useRef, useState } from "react";
import sampleAudio from "../../Assets/Sample.mp3";
import {
  AudioLoading,
  BackIcon,
  CloseIcon,
  PauseIcon,
  PlayIcon,
} from "../../Assets/Icon";
import { fetchProgramsPagination } from "../../Services/Service";
import "./Track.css";
import { isValidObject } from "../../Services/Utils";

export default function Track(props) {
  const [src, setSrc] = useState(null);
  useEffect(() => {
    const fetchProgram = async () => {
      const response = await fetchProgramsPagination();

      console.log({ response: response });
      setSrc(response);
    };

    // fetchProgram();
  }, []);

  return (
    <div
      className=" padding-larger inherit-parent-height inherit-parent-width display flex flex-direction-column "
      style={{
        backgroundImage: `url(${src?.programs?.[0]?.imageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div className=" inherit-parent-width height-fit-to-content display-flex flex-justify-content-space-between">
        <BackIcon />
        <CloseIcon />
      </div>
      <div className="display-flex flex-direction-column flex-justify-content-space-between inherit-parent-height">
        <div className=" inherit-parent-width display-flex flex-direction-column padding-vertical-large font-color-white flex-align-items-center">
          <div className=" padding-vertical-default font-size-default ">
            {props?.data?.title}
          </div>

          <div className=" padding-vertical-default font-size-medium ">
            {props.data?.description}
          </div>
        </div>

        <div
          className=" inherit-parent-width 
      display-flex flex-align-items-center flex-justify-content-center"
        >
          {/* <ReactAudioPlayer
            autoPlay
            preload
            crossOrigin
            controls
            style={{
              width: "100%",
              backgroundColor: "transparent",
            }}
            src={props?.audioUrl}
            onPlay={(e) => console.log("onPlay")}
          /> */}
          {console.log(sampleAudio, "sampleAudio")}
          <AudioPlayer src={sampleAudio} duration={0} />
        </div>
      </div>

      {/* <img
        src={src?.programs?.[0]?.imageUrl}
        alt="image-check"
        style={{
          width: "100%",
          height: "60%",
        }}
      /> */}
    </div>
  );
}

const AudioPlayer = (props) => {
  const [play, setPlay] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [loading, setLoading] = useState(false);
  const audio = useRef(null);
  const isGetAudioAndPlay = useRef(false);

  const audioPlayHandler = () => {
    if (
      audio.current &&
      typeof props.src === "string" &&
      props.src.length > 0
    ) {
      if (play === false) {
        audio.current.play();
        setPlay(true);
      } else if (play === true && currentTime > 0) {
        audio.current.pause();
        setPlay(false);
      }
    } else if (typeof props.getDownloadURL === "function") {
      setLoading(true);
      isGetAudioAndPlay.current = true;
      props.getDownloadURL();
    }
  };

  //to audio play method
  useEffect(() => {
    if (
      isGetAudioAndPlay.current === true &&
      audio.current &&
      typeof props.src === "string" &&
      props.src.length > 0
    ) {
      if (play === false) {
        audio.current.play();
        setPlay(true);
      } else {
        audio.current.pause();
        setPlay(false);
      }
      audio.current.onended = () => {
        setPlay(false);
      };
    }
    audio.current.onended = () => {
      setPlay(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.src, audio.current]);

  //audio change listerner
  useEffect(() => {
    if (
      audio.current &&
      typeof props.src === "string" &&
      props.src.length > 0
    ) {
      if (isValidObject(audio.current) && audio.current.tagName === "AUDIO") {
        audio.current.addEventListener("timeupdate", function () {
          if (isValidObject(audio.current)) {
            setCurrentTime(Math.ceil(audio.current.currentTime));
          }
        });
        audio.current.addEventListener("durationchange", function () {
          if (
            isValidObject(audio.current) &&
            audio.current.tagName === "AUDIO" &&
            typeof audio.current.duration === "number" &&
            audio.current.duration !== Infinity
          ) {
            if (loading === true) {
              setLoading(false);
            }
            setDuration(Math.ceil(audio.current.duration));
          }
        });
      }
    }
    return () => {
      window.removeEventListener("timeupdate", function () {
        setCurrentTime(0);
      });

      window.removeEventListener("durationchange", function () {
        setDuration(0);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.src]);

  function convertToSeconds(timeString) {
    if (timeString) {
      const [minutes, seconds] = timeString.split(":").map(Number);
      return minutes * 60 + seconds;
    }
  }

  useEffect(() => {
    const value = (currentTime / 133) * 100;
    console.log(value, "value");
    const element = document.getElementById("seek-slider");
    element.style.background = `linear-gradient(to right, black ${value}%, rgb(110, 110, 110) ${value}%)`;
    // eslint-disable-next-line
  }, [currentTime]);

  return (
    <div className="inherit-parent-width">
      <audio
        allow="microphone"
        src={props.src || ""}
        ref={audio}
        type="audio/mpeg"
        className="display-none"
      ></audio>
      <div>
        <input
          disabled={props.loading || !props.src || props.src === ""}
          type="range"
          id="seek-slider"
          max={duration}
          className="inherit-parent-width cursor-pointer"
          value={currentTime}
          onChange={(event) => {
            const value = (event.target.value / event.target.max) * 100;
            console.log(value, "value");
            event.target.style.background = `linear-gradient(to right, black ${value}%, rgb(110, 110, 110) ${value}%)`;
            audio.current.currentTime = event.target.value;
          }}
        />
        <div className="display-flex flex-justify-content-space-between padding-top-default">
          {" "}
          <div
            className="font-color-secondary font-size-small white-space-nowWrap audio-duration-content-size font-family-gilroy-regular"
            data-cy="audio-player-duration"
          >
            {currentTime > 0
              ? `${Math.floor(currentTime / 60)}:${
                  Math.ceil(currentTime % 60) > 9
                    ? Math.ceil(currentTime % 60)
                    : "0" + Math.ceil(currentTime % 60)
                }`
              : duration > 0
              ? `${Math.floor(duration / 60)}:${
                  Math.ceil(duration % 60) > 9
                    ? Math.ceil(duration % 60)
                    : "0" + Math.ceil(duration % 60)
                }`
              : "0:00"}
          </div>
          <div
            className="font-color-secondary font-size-small white-space-nowWrap audio-duration-content-size font-family-gilroy-regular"
            data-cy="audio-player-duration"
          >
            {props.duration || "0:00"}
          </div>
        </div>
        <div className="inherit-parent-width flex-justify-content-center flex-align-items-end">
          {loading && <AudioLoading height={60} width={60} />}

          {!loading && play && (
            <div
              onClick={() => {
                audioPlayHandler();
              }}
              className="cursor-pointer"
            >
              <PauseIcon height={60} width={60} />
            </div>
          )}

          {!loading && !play && (
            <div
              onClick={() => {
                audioPlayHandler();
              }}
              className="cursor-pointer"
            >
              <PlayIcon height={60} width={60} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
