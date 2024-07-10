import { forwardRef } from "react";

export default forwardRef(function ResumeSection(
  { children, title, id, className },
  ref,
) {
  return (
    <section
      ref={ref}
      id={id ?? "resume-" + title.toLowerCase()}
      className={className}
      data-resume-section={title}
    >
      {title && <h4 className="title tracking-wider">{title}</h4>}
      {children}
    </section>
  );
});
