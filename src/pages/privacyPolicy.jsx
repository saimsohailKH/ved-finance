import Breadcrumbs from "../components/breadcrumb";
import NavBar from "../components/navbar";
import backgroud from '../assets/img/page-title-bg.jpg';
import Footer from "../components/footer";
import usePageTitle from '../hooks/usePageTitle';

function PrivacyPolicy() {
  usePageTitle('Privacy Policy')
  const links = [
    {
      title: 'Home',
      href: '/'
    },
    {
      title: 'Privacy Policy',
      href: ''
    }
  ]

  return (
    <>
      <NavBar currentPage='privacy-policy' />
      <Breadcrumbs pageTitle='Privacy Policy' links={links} image={backgroud} />

      <section id="privacy-policy" className="section">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <p className="text-muted"><small>Version 1.0  |  Effective 31 August 2026</small></p>
              <p><strong>In brief:</strong> We collect only the information reasonably needed to understand your finance needs, provide credit assistance, support applications and meet our legal obligations. We do not sell or rent your personal information. You can ask to access or correct your information, opt out of marketing, or make a privacy complaint using the contact details in this policy.</p>
              <h3>About VED Finance Group</h3>
              <p>VED Finance Group is a registered business name of The Trustee for Aneja Family Trust (ABN 44 570 871 137). VED Finance Group provides mortgage and finance broking services through Amrinder Singh, Credit Representative Number 504743, who is authorised under Australian Credit Licence 384324 held by outsource Financial Pty Ltd (ACN 131 090 705).</p>
              <p>In this policy, 'VED Finance Group', 'we', 'us' and 'our' refer to The Trustee for Aneja Family Trust trading as VED Finance Group and Amrinder Singh in his capacity as an authorised credit representative.</p>
              <p>This policy explains how we manage personal information and credit-related information when you contact us, use our website or social media, ask us to assist with finance, become a client, provide a guarantee, act as a business contact, or otherwise deal with us. Outsource Financial, lenders and other service providers may also handle your information under their own privacy policies.</p>
              <p><strong>Credit disclaimer:</strong> Your complete financial situation will need to be assessed before acceptance of any proposal or product.</p>
              <h3>The information we collect</h3>
              <p>The information we collect depends on the service you request and may include:</p>
              <ul>
                <li>identity and contact details, including your name, date of birth, residential address, email address and telephone number</li>
                <li>identification documents and verification information, such as driver's licence, passport, Medicare card or other government-issued identification</li>
                <li>family and household information, including relationship status, dependants and information about a co-borrower, guarantor or related person</li>
                <li>employment, business and professional information, including occupation, employer, length of service, ABN, business structure and trading history</li>
                <li>financial information, including income, expenses, assets, liabilities, bank statements, transaction history, tax returns, financial statements and superannuation information</li>
                <li>credit-related information, including existing credit facilities, repayment history, defaults, hardship information, credit enquiries, credit scores or reports where lawfully obtained</li>
                <li>details of the finance you seek, your objectives, preferences, intended use of funds and the security property or asset</li>
                <li>records of communications, enquiries, appointments, applications, consents, complaints and services provided</li>
                <li>technical information generated when you use our website or electronic services, such as IP address, device and browser information, cookies and interaction data</li>
                <li>information needed to meet legal and regulatory obligations, including responsible lending, best interests duty, anti-money laundering, identity verification, fraud prevention and record-keeping requirements.</li>
              </ul>
              <h3>Sensitive information</h3>
              <p>Sensitive information can include health information, racial or ethnic origin, religious beliefs, criminal history and membership of professional or trade associations. We only collect sensitive information where it is reasonably necessary for the service, you consent, or collection is otherwise permitted or required by law. For example, health information may be relevant where it affects income, insurance, hardship or a lender's assessment.</p>
              <h3>How we collect information</h3>
              <p>We usually collect information directly from you through conversations, meetings, emails, telephone calls, online enquiries, forms, secure portals, applications and supporting documents. With your consent or where permitted by law, we may also collect information from:</p>
              <ul>
                <li>a co-applicant, guarantor, family member or authorised representative</li>
                <li>your accountant, solicitor, conveyancer, employer, real estate agent, builder, financial adviser or other professional adviser</li>
                <li>referrers and business partners</li>
                <li>outsource Financial, lenders, credit providers, mortgage insurers, valuers and other participants in a finance application</li>
                <li>credit reporting bodies, identity verification providers, fraud prevention services and publicly available sources</li>
                <li>our website, social media pages, analytics tools and technology service providers.</li>
              </ul>
              <p>If you give us personal information about another person, please make sure you are authorised to do so and that the person understands how we will handle the information.</p>
              <h3>Why we collect, use and disclose information</h3>
              <p>We collect, use and disclose information to:</p>
              <ul>
                <li>understand your circumstances, objectives and finance requirements</li>
                <li>assess borrowing capacity and assist you to identify and compare finance options</li>
                <li>provide credit assistance, prepare and submit applications, and communicate with lenders and other parties involved in the application</li>
                <li>verify your identity, manage fraud and security risks, and meet legal, regulatory and licensing obligations</li>
                <li>administer our client relationship, provide ongoing reviews, respond to enquiries and complaints, and maintain required business records</li>
                <li>improve our services, systems, training and client experience</li>
                <li>send service communications and, where permitted, information about finance services that may be relevant to you</li>
                <li>exercise or defend legal rights and comply with lawful requests from regulators, courts, law enforcement bodies or government agencies.</li>
              </ul>
              <p>If you do not provide information we reasonably request, we may be unable to assess your needs, provide credit assistance, submit or support an application, or comply with our legal obligations.</p>
              <h3>Who we disclose information to</h3>
              <p>Where relevant to the services requested, and subject to law and consent requirements, we may disclose information to:</p>
              <ul>
                <li>outsource Financial Pty Ltd, as the holder of Australian Credit Licence 384324, and its related service providers</li>
                <li>banks, non-bank lenders, credit providers, lessors and other product providers</li>
                <li>mortgage insurers, title insurers, valuers, quantity surveyors, lenders mortgage insurance providers and verification services</li>
                <li>credit reporting bodies and providers of credit reports or credit eligibility information, where authorised and permitted by law</li>
                <li>lawyers, conveyancers, accountants, financial advisers, builders, real estate agents and other professional advisers where you authorise or would reasonably expect the disclosure</li>
                <li>referrers, but only to the extent authorised and reasonably necessary for the referral relationship</li>
                <li>technology, document storage, electronic signing, communications, customer relationship management, data processing and cybersecurity providers</li>
                <li>government agencies, regulators, courts, law enforcement bodies, external dispute resolution schemes and other parties where required or permitted by law</li>
                <li>a purchaser or successor if all or part of our business is sold, transferred or reorganised, subject to appropriate confidentiality and privacy protections.</li>
              </ul>
              <p>We do not sell, trade or rent personal information.</p>
              <h3>Credit-related information</h3>
              <p>Credit-related information may include identification information, consumer credit liabilities, repayment history, financial hardship information, defaults, court judgments, insolvency information, credit enquiries, publicly available credit information, credit scores and credit eligibility information. We handle this information only where authorised and for purposes connected with assessing, arranging or administering finance, meeting legal obligations, or managing complaints and disputes.</p>
              <p>Credit information may be exchanged with lenders and credit reporting bodies as part of a finance application. The relevant lender's privacy and credit reporting policy will explain which credit reporting bodies it uses, the information it exchanges and your rights to request access, correction or a credit reporting ban. Outsource Financial's policy identifies Cashdeck, Equifax and illion as services or credit reporting bodies used within its framework.</p>
              <h3>Website, cookies and social media</h3>
              <p>Our website and social media pages may collect information you provide through forms, messages, comments or booking tools. Our website may also use cookies or similar technologies to operate the site, remember preferences, understand traffic and measure the effectiveness of content or advertising. You can usually control cookies through your browser settings, although disabling them may affect site functionality.</p>
              <p>Social media platforms and third-party websites handle information under their own privacy policies. Information posted publicly on social media may be visible to others. Please do not send identity documents, bank statements or other sensitive financial information through public comments or ordinary social media messages; ask us for an appropriate secure channel.</p>
              <h3>Direct marketing and your choices</h3>
              <p>We may use your contact details to send information about our services, finance reviews, market updates or other content that may be relevant to you where permitted by law. You can opt out at any time by using the unsubscribe option in a message or contacting us. Opting out of marketing will not stop communications that are necessary to provide services, manage an application or meet legal obligations.</p>
              <h3>Overseas disclosure and storage</h3>
              <p>Some organisations that support us or outsource Financial may store or process information outside Australia. Outsource Financial's current privacy policy identifies the United States, Singapore, Serbia and the Philippines as countries in which information may be held or processed. Technology and cloud locations can change, and it may not always be practicable to identify every location in advance.</p>
              <p>Before disclosing personal information overseas, we take reasonable steps required by Australian privacy law and use service providers or arrangements designed to protect information. Overseas recipients may also be subject to the laws of their country.</p>
              <h3>How we hold, secure and retain information</h3>
              <p>Information may be held electronically in broker, aggregator, lender, cloud, email, document management and secure portal systems, and in limited cases in paper records. We take reasonable administrative, technical and physical steps appropriate to the sensitivity of the information to protect it from misuse, interference, loss and unauthorised access, modification or disclosure. These steps include limiting access to people who need the information, using reputable service providers and applying available account, device and system security controls.</p>
              <p>No method of transmission or storage is completely secure. If you believe information has been sent to the wrong person, accessed without authority or otherwise compromised, please contact us immediately.</p>
              <p>We keep information for as long as reasonably necessary to provide services and meet legal, licensing, dispute resolution, insurance and record-keeping obligations. Finance and identity records may need to be kept for at least seven years. When information is no longer required, we take reasonable steps to securely destroy or de-identify it, subject to lawful backup and archival processes.</p>
              <h3>Accessing and correcting your information</h3>
              <p>You can ask for access to personal information we hold about you or ask us to correct information that is inaccurate, out of date, incomplete, irrelevant or misleading. Please contact us using the details below and provide enough information for us to verify your identity and locate the relevant records.</p>
              <p>We will respond within a reasonable period. We do not charge for making an access or correction request, although we may charge a reasonable cost for providing access where permitted by law. If we refuse access or correction, we will explain the reasons where required and tell you how to complain.</p>
              <h3>Anonymity and pseudonyms</h3>
              <p>You may make a general enquiry without identifying yourself where this is lawful and practical. We will need to verify your identity and collect required information before we can provide credit assistance, obtain a credit report, submit an application or complete regulated compliance steps.</p>
              <h3>Privacy complaints</h3>
              <p>If you believe we have mishandled your personal or credit-related information, please contact us first and describe what happened, when it occurred and the outcome you seek. We will acknowledge the complaint, investigate it fairly and aim to provide a written response within 30 days.</p>
              <p>Email: <a href="mailto:info@vedfinancegroup.com">info@vedfinancegroup.com</a></p>
              <p>Telephone: <a href="tel:+61433892312">0433 892 312</a></p>
              <p>Website: <a href="https://www.vedfinancegroup.com" target="_blank" rel="noreferrer">www.vedfinancegroup.com</a></p>
              <p>If the matter is not resolved, you may contact outsource Financial Pty Ltd on <a href="tel:+611300781481">1300 781 481</a> or at <a href="mailto:info@outsourcefinancial.com.au">info@outsourcefinancial.com.au</a>. You may also be entitled to complain to the Australian Financial Complaints Authority (AFCA) on <a href="tel:+611800931678">1800 931 678</a> or through <a href="https://www.afca.org.au" target="_blank" rel="noreferrer">www.afca.org.au</a>. AFCA is an external dispute resolution scheme for financial services and can consider some privacy complaints.</p>
              <p>You may also contact the Office of the Australian Information Commissioner (OAIC). The OAIC generally expects you to complain to the organisation first and allow 30 days for a response. Visit <a href="https://www.oaic.gov.au" target="_blank" rel="noreferrer">www.oaic.gov.au</a> or call <a href="tel:+611300363992">1300 363 992</a> for information.</p>
              <h3>Data breaches</h3>
              <p>We take suspected data breaches seriously. We will act to contain and assess a breach, reduce possible harm and improve controls. Where the Notifiable Data Breaches scheme applies and a breach is likely to result in serious harm, the responsible entity will notify affected individuals and the OAIC as required by law.</p>
              <h3>Third-party links</h3>
              <p>Our website or communications may link to lenders, outsource Financial, credit reporting bodies, social media platforms and other third parties. Their privacy practices are governed by their own policies, and we recommend reviewing those policies before providing information.</p>
              <h3>Changes to this policy</h3>
              <p>We may update this policy when our services, systems, legal obligations or information-handling practices change. The current version will be published on our website with its effective date. We recommend checking the policy periodically.</p>
              <h3>Contact us</h3>
              <p>For privacy questions, requests or complaints, contact:</p>
              <p>Business: VED Finance Group</p>
              <p>Entity: The Trustee for Aneja Family Trust</p>
              <p>ABN: 44 570 871 137</p>
              <p>Credit representative: Amrinder Singh - Credit Representative Number 504743</p>
              <p>Email: <a href="mailto:info@vedfinancegroup.com">info@vedfinancegroup.com</a></p>
              <p>Telephone: <a href="tel:+61433892312">0433 892 312</a></p>
              <p>Website: <a href="https://www.vedfinancegroup.com" target="_blank" rel="noreferrer">www.vedfinancegroup.com</a></p>
              <h3>Related privacy information</h3>
              <p>Outsource Financial Privacy Policy: <a href="https://www.outsourcefinancial.com.au/privacy-policy" target="_blank" rel="noreferrer">outsourcefinancial.com.au/privacy-policy</a></p>
              <p>OAIC privacy guidance: <a href="https://www.oaic.gov.au/privacy" target="_blank" rel="noreferrer">oaic.gov.au/privacy</a></p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default PrivacyPolicy;
