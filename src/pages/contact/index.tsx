
import PageTitle from "@/components/PageTitle";
import Contact from "../../components/Contact"; // Rename the imported component

const ContactUsPage = () => {
  const pageTitle = {
    title: 'Contact Us',
    content_1: 'For Your Future',
    content_2: ''
  }
  return (
    <>
      <div>
        <PageTitle pageTitle={pageTitle} />
      </div>
      <div className="mt-10">
        <Contact />
      </div>

    </>
  );
}

export default ContactUsPage;
