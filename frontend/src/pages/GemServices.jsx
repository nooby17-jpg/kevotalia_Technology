import usePageMeta from "../hooks/usePageMeta";
import AccountManagement from "../components/gemservices/AccountManagement";
import BidsServices from "../components/gemservices/BidsServices";
import "./../styles/gemservices.css";

export default function GemServices() {
  usePageMeta({
    title: "GeM Services | Kevotalia Technology",
    description:
      "Government e-Marketplace account management and bidding services.",
  });

  return (
    <div className="gem-page">
      <section className="page-hero section-divider">
        <h1>GeM Services</h1>
        <p>
          Professional GeM onboarding, account management, and bidding support.
        </p>
      </section>

      <AccountManagement />
      <BidsServices />
    </div>
  );
}
