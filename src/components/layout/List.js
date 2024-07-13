import { Fragment } from "react/cjs/react.production.min";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow-stroke-icon.svg";

export default function List({ contents, listCss, entryCss, markerCss }) {
  return (
    <div
      className={`list grid items-baseline justify-start gap-2 ${
        listCss ?? ""
      }`}
    >
      {contents.map((entry, i) => (
        <Fragment key={i}>
          <ArrowIcon
            className={`h-3 self-baseline overflow-visible stroke-current stroke-2 ${
              markerCss ?? ""
            }`}
          />
          <div className={`col-start-2 ${entryCss ?? ""}`}>{entry}</div>
        </Fragment>
      ))}
    </div>
  );
}
