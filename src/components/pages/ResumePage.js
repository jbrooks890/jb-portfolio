import Resume from "../frags/Resume";
import Page from "../layout/Page";

export default function ResumePage() {
  return (
    <Page
      title="Resume"
      untitled
      className="grid h-screen justify-center overflow-hidden p-4"
    >
      <Resume standalone />
    </Page>
  );
}
