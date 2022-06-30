import { Browsers, CaretRight, FileArrowDown } from "phosphor-react";

interface SmartlinkProps {
  variant: "intra-org" | "extra-org"; //page within platform or not
  title: string;
  description: string;
}

export function Smartlink(props: SmartlinkProps) {
  return (
    <a
      href=""
      target="_blank"
      className="bg-gray-700 hover:bg-gray-600 transition-colors rounded overflow-hidden flex items-stretch gap-6"
    >
      {/* icon box */}
      <div className={"bg-green-700 h-full p-6 flex items-center"}>
        {props.variant === "intra-org" ? (
          <FileArrowDown size={40} />
        ) : (
          <Browsers size={40} />
        )}
      </div>
      {/* text content */}
      <div className="py-6 leading-relaxed">
        <strong className="text-2xl">{props.title}</strong>
        <p className="text-sm text-gray-200 mt-2">{props.description}</p>
      </div>
      {/* arrow button */}
      <div className="h-full p-6 flex items-center">
        <CaretRight size={24} />
      </div>
    </a>
  );
}
