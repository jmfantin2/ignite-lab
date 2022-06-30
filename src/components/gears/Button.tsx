interface ButtonProps {
  variant: string;
  children?: React.ReactNode;
}

export function Button(props: ButtonProps) {
  switch (props.variant) {
    // green button
    case "primary":
      return (
        <a
          href=""
          className={
            "bg-green-500 hover:bg-green-700 transition-colors p-4 text-sm flex flex-row items-center rounded font-bold uppercase gap-2 justify-center"
          }
        >
          {props.children}
        </a>
      );
    // black/blue button
    case "secondary":
      return (
        <a
          href=""
          className={
            "border-blue-500 hover:bg-blue-500 text-blue-500 hover:text-gray-900 transition-colors border p-4 text-sm flex flex-row items-center rounded font-bold uppercase gap-2 justify-center"
          }
        >
          {props.children}
        </a>
      );
    default:
      break;
  }
  // not primary, nor secondary
  return (
    <a
      href=""
      className={
        "bg-red-500 hover:bg-red-600 transition-colors p-4 text-sm flex flex-row items-center rounded font-bold uppercase gap-2 justify-center"
      }
    >
      unknown variant
    </a>
  );
}
