import { Link, useLocation } from "react-router-dom";
import { HorizontalMenuProps } from "@components-types/HorizontalMenu";

function HorizontalMenu(props: HorizontalMenuProps) {
  const { datas } = props;
  const location = useLocation();

  return (
    <div className="horizontal-menu flex flex-col">
      {datas?.length &&
        datas?.map((data, index) => (
          <Link
            key={index}
            className={`pl-4 py-2 w-full hover:text-brand-primary text-sm hover:bg-status-primary/[.5] font-semibold transition duration-200 ease-in-out relative after:content-[''] after:right-0 after:w-1 after:h-full after:absolute overflow-hidden ${
              data.route === location.pathname
                ? "text-brand-primary after:bg-brand-primary"
                : "text-content-black after:bg-transparent"
            }`}
            to={data.route}>
            {data.text}
          </Link>
        ))}
    </div>
  );
}

export default HorizontalMenu;
