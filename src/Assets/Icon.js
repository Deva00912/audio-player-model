export const AddIcon = (props) => {
  return (
    <svg
      id="Layer_1"
      height={props?.height || "16px"}
      width={props?.width || "16px"}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
    >
      <path d="m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1 -10 10zm5-10a1 1 0 0 1 -1 1h-3v3a1 1 0 0 1 -2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 1 1z" />
    </svg>
  );
};

export const ConcentricCirclesIcon = (props) => {
  return (
    <svg
      height={props?.height || "16px"}
      width={props?.width || "16px"}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19.877 19.877"
      //   xml:space="preserve"
    >
      <g>
        <g>
          <path
            style={{ fill: "#030104" }}
            d="M9.938,3.403c-3.604,0-6.537,2.933-6.537,6.537s2.933,6.537,6.537,6.537s6.538-2.933,6.538-6.537
			C16.476,6.336,13.542,3.403,9.938,3.403z M9.938,14.892c-2.73,0-4.952-2.222-4.952-4.952s2.222-4.952,4.952-4.952
			c2.731,0,4.953,2.222,4.953,4.952S12.669,14.892,9.938,14.892z"
          />
          <path
            style={{ fill: "#030104" }}
            d="M9.938,0.001C4.458,0.001,0,4.459,0,9.938s4.458,9.938,9.938,9.938
			c5.481,0,9.939-4.458,9.939-9.938C19.877,4.459,15.419,0.001,9.938,0.001z M9.938,18.292c-4.606,0-8.353-3.746-8.353-8.353
			c0-4.606,3.747-8.353,8.353-8.353s8.353,3.747,8.353,8.353C18.291,14.545,14.544,18.292,9.938,18.292z"
          />
        </g>
      </g>
    </svg>
  );
};

export const DashedCircleIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      id="circle-dashed"
    >
      <rect
        width={props?.width || "16px"}
        height={props?.height || "16px"}
        fill="white"
      ></rect>
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
        d="M35.25567 103.14925a95.55835 95.55835 0 0 1 24.86208-43.0315M60.10646 195.89357a95.55822 95.55822 0 0 1-24.83534-43.04694M152.85078 220.74432a95.55827 95.55827 0 0 1-49.69741-.01544M220.74433 152.85075a95.55835 95.55835 0 0 1-24.86208 43.0315M195.89354 60.10643a95.55822 95.55822 0 0 1 24.83534 43.04694M103.14922 35.25568a95.55827 95.55827 0 0 1 49.69741.01544"
      ></path>
    </svg>
  );
};

export const LockIcon = (props) => {
  return (
    <svg
      width={props?.width || "16px"}
      height={props?.height || "16px"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.25 16C9.25 14.4812 10.4812 13.25 12 13.25C13.5188 13.25 14.75 14.4812 14.75 16C14.75 17.5188 13.5188 18.75 12 18.75C10.4812 18.75 9.25 17.5188 9.25 16ZM12 14.75C11.3096 14.75 10.75 15.3096 10.75 16C10.75 16.6904 11.3096 17.25 12 17.25C12.6904 17.25 13.25 16.6904 13.25 16C13.25 15.3096 12.6904 14.75 12 14.75Z"
        fill="#FFFFFF"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.25 9.30277V8C5.25 4.27208 8.27208 1.25 12 1.25C15.7279 1.25 18.75 4.27208 18.75 8V9.30277C18.9768 9.31872 19.1906 9.33948 19.3918 9.36652C20.2919 9.48754 21.0497 9.74643 21.6517 10.3483C22.2536 10.9503 22.5125 11.7081 22.6335 12.6082C22.75 13.4752 22.75 14.5775 22.75 15.9451V16.0549C22.75 17.4225 22.75 18.5248 22.6335 19.3918C22.5125 20.2919 22.2536 21.0497 21.6517 21.6516C21.0497 22.2536 20.2919 22.5125 19.3918 22.6335C18.5248 22.75 17.4225 22.75 16.0549 22.75H7.94513C6.57754 22.75 5.47522 22.75 4.60825 22.6335C3.70814 22.5125 2.95027 22.2536 2.34835 21.6516C1.74643 21.0497 1.48754 20.2919 1.36652 19.3918C1.24996 18.5248 1.24998 17.4225 1.25 16.0549V15.9451C1.24998 14.5775 1.24996 13.4752 1.36652 12.6082C1.48754 11.7081 1.74643 10.9503 2.34835 10.3483C2.95027 9.74643 3.70814 9.48754 4.60825 9.36652C4.80938 9.33948 5.02317 9.31872 5.25 9.30277ZM6.75 8C6.75 5.10051 9.10051 2.75 12 2.75C14.8995 2.75 17.25 5.10051 17.25 8V9.25344C16.8765 9.24999 16.4784 9.24999 16.0549 9.25H7.94513C7.52161 9.24999 7.12353 9.24999 6.75 9.25344V8ZM4.80812 10.8531C4.07435 10.9518 3.68577 11.1322 3.40901 11.409C3.13225 11.6858 2.9518 12.0743 2.85315 12.8081C2.75159 13.5635 2.75 14.5646 2.75 16C2.75 17.4354 2.75159 18.4365 2.85315 19.1919C2.9518 19.9257 3.13225 20.3142 3.40901 20.591C3.68577 20.8678 4.07435 21.0482 4.80812 21.1469C5.56347 21.2484 6.56459 21.25 8 21.25H16C17.4354 21.25 18.4365 21.2484 19.1919 21.1469C19.9257 21.0482 20.3142 20.8678 20.591 20.591C20.8678 20.3142 21.0482 19.9257 21.1469 19.1919C21.2484 18.4365 21.25 17.4354 21.25 16C21.25 14.5646 21.2484 13.5635 21.1469 12.8081C21.0482 12.0743 20.8678 11.6858 20.591 11.409C20.3142 11.1322 19.9257 10.9518 19.1919 10.8531C18.4365 10.7516 17.4354 10.75 16 10.75H8C6.56459 10.75 5.56347 10.7516 4.80812 10.8531Z"
        fill="#FFFFFF"
      />
    </svg>
  );
};

export const CloseIcon = (props) => {
  return (
    <svg
      width={props?.width || "16px"}
      height={props?.height || "16px"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" fill="white" />
      <path
        d="M7 17L16.8995 7.10051"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 7.00001L16.8995 16.8995"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const BackIcon = (props) => {
  return (
    <svg
      width={props?.width || "16px"}
      height={props?.height || "16px"}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs></defs>

      <g data-name="arrow left" id="arrow_left">
        <path
          className="cls-1"
          style={{ fill: props?.color }}
          d="M22,29.73a1,1,0,0,1-.71-.29L9.93,18.12a3,3,0,0,1,0-4.24L21.24,2.56A1,1,0,1,1,22.66,4L11.34,15.29a1,1,0,0,0,0,1.42L22.66,28a1,1,0,0,1,0,1.42A1,1,0,0,1,22,29.73Z"
        />
      </g>
    </svg>
  );
};

export const PlayIcon = (props) => {
  return (
    <svg
      height={props?.height || "16px"}
      width={props?.width || "16px"}
      viewBox="0 0 512 512"
      fill="white"
      stroke="white"
    >
      <g
        fill="white"
        stroke="white"
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        <g>
          <path
            className="st0"
            style={{ fill: "black" }}
            d="M256,0C114.625,0,0,114.625,0,256c0,141.374,114.625,256,256,256c141.374,0,256-114.626,256-256 C512,114.625,397.374,0,256,0z M351.062,258.898l-144,85.945c-1.031,0.626-2.344,0.657-3.406,0.031 c-1.031-0.594-1.687-1.702-1.687-2.937v-85.946v-85.946c0-1.218,0.656-2.343,1.687-2.938c1.062-0.609,2.375-0.578,3.406,0.031 l144,85.962c1.031,0.586,1.641,1.718,1.641,2.89C352.703,257.187,352.094,258.297,351.062,258.898z"
          />{" "}
        </g>{" "}
      </g>
    </svg>
  );
};

export const PauseIcon = (props) => {
  return (
    <svg
      height={props?.height || "16px"}
      width={props?.width || "16px"}
      viewBox="0 0 512 512"
      fill="white"
      stroke="white"
    >
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        stroke-linejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        <path
          style={{ fill: "black" }}
          d="M256,0C114.617,0,0,114.615,0,256s114.617,256,256,256s256-114.615,256-256S397.383,0,256,0z M224,320 c0,8.836-7.164,16-16,16h-32c-8.836,0-16-7.164-16-16V192c0-8.836,7.164-16,16-16h32c8.836,0,16,7.164,16,16V320z M352,320 c0,8.836-7.164,16-16,16h-32c-8.836,0-16-7.164-16-16V192c0-8.836,7.164-16,16-16h32c8.836,0,16,7.164,16,16V320z"
        />{" "}
      </g>
    </svg>
  );
};

export const AudioLoading = (props) => {
  return (
    <svg
      data-cy="audio-loading"
      className="audio-player-loading-spinner audio-player-loading-spinner-size"
      viewBox="0 0 66 66"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className="audio-player-loading-spinner-path"
        fill="none"
        strokeWidth="6"
        strokeLinecap="round"
        cx="33"
        cy="33"
        r="30"
      ></circle>
    </svg>
  );
};

export const RewindIcon = (props) => {
  return (
    <svg
      height={props?.height || "16px"}
      width={props?.width || "16px"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      strokeWidth="3"
      stroke="currentColor"
      fill="none"
    >
      <polyline
        points="9.57 15.41 12.17 24.05 20.81 21.44"
        strokeLinecap="round"
      />
      <path
        d="M26.93,41.41V23a.09.09,0,0,0-.16-.07s-2.58,3.69-4.17,4.78"
        strokeLinecap="round"
      />
      <rect x="32.19" y="22.52" width="11.41" height="18.89" rx="5.7" />
      <path
        d="M12.14,23.94a21.91,21.91,0,1,1-.91,13.25"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const ForwardIcon = (props) => {
  return (
    <svg
      height={props?.height || "16px"}
      width={props?.width || "16px"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      strokeWidth="3"
      stroke="currentColor"
      fill="none"
    >
      <path
        d="M23.93,41.41V23a.09.09,0,0,0-.16-.07s-2.58,3.69-4.17,4.78"
        strokeLinecap="round"
      />
      <rect x="29.19" y="22.52" width="11.41" height="18.89" rx="5.7" />
      <polyline
        points="54.43 15.41 51.83 24.05 43.19 21.44"
        strokeLinecap="round"
      />
      <path
        d="M51.86,23.94a21.91,21.91,0,1,0,.91,13.25"
        strokeLinecap="round"
      />
    </svg>
  );
};
