type IconProps = {
  name: string;
};

const Icon = ({ name, ...props }: IconProps) => {
  switch (name) {
    case "logo":
      return (
        <svg
          version="1.1"
          viewBox="0 0 32 32"
          width="32"
          height="32"
          {...props}
        >
          <path
            d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"
            fill="#fff"
          ></path>
        </svg>
      );
    case "history":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18 18"
          width="18"
          height="18"
          {...props}
        >
          <path d="M16.5 9c0 3.8-3 6.8-6.8 6.8-1.9 0-3.5-.8-4.8-2l1.1-1c1 1 2.2 1.6 3.7 1.6 2.9 0 5.2-2.3 5.2-5.2s-2.3-5.3-5.2-5.3-5.3 2.3-5.3 5.2h2.2l-3 3V12L.8 9H3c0-3.8 3-6.8 6.8-6.8s6.7 3 6.7 6.8zM9 6v3.8l3.2 1.9.5-.9-2.6-1.6V6H9z"></path>
        </svg>
      );
    case "settings":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18 18"
          width="18"
          height="18"
          {...props}
        >
          <path d="M14.5 9.8c0-.2.1-.5.1-.8s0-.5-.1-.8L16.1 7c.2-.2.2-.3.1-.5L14.7 4c-.1-.2-.2-.2-.5-.2l-1.9.7c-.3-.3-.8-.5-1.2-.8l-.3-2c.1-.1-.1-.2-.3-.2h-3c-.2 0-.4.2-.4.3l-.3 2c-.4.2-.8.5-1.2.7l-1.8-.7c-.2 0-.4 0-.5.2L1.7 6.6c-.1.1 0 .3.2.4l1.6 1.2c0 .2-.1.5-.1.8s0 .5.1.8L1.9 11c-.2.1-.2.3-.1.5l1.5 2.6c.1.2.2.2.4.2l1.9-.8c.4.3.9.5 1.3.7l.3 2c0 .1.1.3.4.3h3c.1 0 .4-.2.4-.3l.3-2c.5-.2.9-.5 1.3-.8l1.9.8c.2.1.4 0 .4-.2l1.5-2.6c.1-.1.1-.4-.1-.4l-1.8-1.2zM9 11.6c-1.4 0-2.6-1.2-2.6-2.6S7.6 6.4 9 6.4s2.6 1.2 2.6 2.6-1.2 2.6-2.6 2.6z"></path>
        </svg>
      );
    case "info":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18 18"
          width="18"
          height="18"
          {...props}
        >
          <path d="M9 1.5C4.9 1.5 1.5 4.9 1.5 9s3.4 7.5 7.5 7.5 7.5-3.4 7.5-7.5S13.1 1.5 9 1.5zm.8 11.3H8.2V8.2h1.5v4.6zm0-6H8.2V5.2h1.5v1.6z"></path>
        </svg>
      );
    default:
      return null;
  }
};

export default Icon;
