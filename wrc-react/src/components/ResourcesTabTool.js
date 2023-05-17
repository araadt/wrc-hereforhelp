// components
import { Tab } from '@headlessui/react'

// styles
import './ResourcesTabTool.css'

function ResourcesTabTool() {
  return (
    <>
      <Tab.Group>
        <Tab.List>
          <Tab>
            <span>Sexual Harassment</span>
          </Tab>
          <Tab>
            <span>Legal Information</span>
          </Tab>
          <Tab>
            <span>Employment Rights</span>
          </Tab>
          <Tab>
            <span>File a Complaint</span>
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            {/* <div className="card">Sexual Harassment</div> */}

            {/* <div className="tab contact-card">
              <p className="org">Organization Name</p>
              <p className="org-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                suscipit vel mauris sit sapien et diam amet ultrices.
              </p>
              <hr />
              <p className="phone">1-844-435-7972</p>
              <p className="email">email@address.com</p>
              <p className="web">url.org</p>
            </div> */}

            <div className="tab contact-card">
              <p className="org">Workers’ Resource Centre</p>
              <p className="org-description">
                The WRC is an employment and human rights advocacy agency that
                provides casework support, public legal education, and support
                with workplace sexual harassment issues. We serve all of Alberta
                and our services are <em>free</em>.
              </p>
              <hr />
              <p className="phone">
                <a href="tel:1-403-264-8100">403-264-8100</a>
              </p>
              {/* <p className="email">
                <a href="mailto:info@helpwrc.org">info@helpwrc.org</a>
              </p> */}
              <p className="web">
                <a href="https://helpwrc.org">helpwrc.org</a>
              </p>
            </div>

            <div className="tab contact-card">
              <p className="org">
                Association of Alberta Sexual Assault Services
              </p>
              <p className="org-description">
                The primary work of the Association of Alberta Sexual Assault
                Services is to provide leadership, coordination and
                collaboration of sexual assault services in Alberta. The AASAS
                member agencies and services are responsible for the day-to-day
                front-line delivery of services within their local communities
                and regional areas.
              </p>
              <hr />
              <p className="phone">
                <a href="tel:1-866-403-8000">1-866-403-8000</a>
              </p>
              {/* <p className="email">
                <a href="mailto:info@helpwrc.org" />
              </p> */}
              <p className="web">
                <a href="https://aasas.ca">aasas.ca</a>
              </p>
            </div>

            <div className="tab contact-card">
              <p className="org">Moments Matter</p>
              <p className="org-description">
                Through simple, relatable stories, we’re showing Alberta leaders
                how easy it can be to strengthen and grow positive workplace
                cultures that help people feel safe and supported, help them
                grow and succeed – and help stop sexual harassment.
              </p>
              <hr />
              {/* <p className="phone">
                <a href="tel:1-866-403-8000">1-866-403-8000</a>
              </p> */}
              {/* <p className="email">
                <a href="mailto:info@helpwrc.org" />
              </p> */}
              <p className="web">
                <a href="https://momentsmatter.info">momentsmatter.info</a>
              </p>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            {/* <div className="card">Legal Information</div> */}

            <div className="tab contact-card">
              <p className="org">Centre for Public Legal Education Alberta</p>
              <p className="org-description">
                CPLEA's mission is to engage the public in promoting, accessing,
                and enhancing justice in Canada. They share legal information
                via workshops, articles, websites, FAQ sheets, etc on a variety
                of topics including Family Law, Employment Law, Human Rights
                Law, Landlord & Tenant, etc.
              </p>
              <hr />
              {/* <p className="phone">
                <a href="tel:1-403-264-8100">403-264-8100</a>
              </p> */}
              <p className="email">
                <a href="mailto:info@cplea.ca">info@cplea.ca</a>
              </p>
              <p className="web">
                <a href="https://cplea.ca/bullying-harassment/">cplea.ca</a>
              </p>
            </div>

            <div className="tab contact-card">
              <p className="org">
                AJEFA – Association des juristes d’expression francaise de
                l’Alberta
              </p>
              <p className="org-description">
                {/* The AJEFA's mission is to facilitate access to judicial services
                in French and to promote the use of French in the administration
                of justice in Alberta. AJEFA develops and coordinates public
                legal education and information programs, promotes the use of
                French within the legal system, offers legal information in
                French and informs the general public of their rights to access
                legal services in the language of their choice. */}
                The AJEFA's mission is to facilitate access to judicial services
                in French in Alberta. AJEFA operates the Alberta Legal
                Information Centre in Calgary and Edmonton that offers free
                legal information (not advice), public notary and referral
                services in French and in English.
              </p>
              <hr />
              <p className="phone">
                <a href="tel:1-780-450-2443">780-450-2443</a>
              </p>
              <p className="email">
                <a href="mailto:bureau@ajefa.ca">bureau@ajefa.ca</a>
              </p>
              <p className="web">
                <a href="https://ajefa.ca">ajefa.ca</a>
              </p>
            </div>

            <div className="tab contact-card">
              <p className="org">
                ACLRC - Alberta Civil Liberties Research Centre
              </p>
              <p className="org-description">
                Our mission is to promote respect for civil liberties and human
                rights in Alberta through research and education to contribute
                to a more just and inclusive community.
              </p>
              <hr />
              {/* <p className="phone">
                <a href="tel:1-866-403-8000">1-866-403-8000</a>
              </p> */}
              <p className="email">
                <a href="mailto:aclrc@ucalgary.ca">aclrc@ucalgary.ca</a>
              </p>
              <p className="web">
                <a href="https://aclrc.com">aclrc.com</a>
              </p>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            {/* <div className="card">Employment Rights</div> */}
            <div className="tab contact-card">
              <p className="org">Workers’ Resource Centre</p>
              <p className="org-description">
                The WRC is an employment and human rights advocacy agency that
                provides casework support, public legal education, and support
                with workplace sexual harassment issues. We serve all of Alberta
                and our services are <em>free</em>.
              </p>
              <hr />
              <p className="phone">
                <a href="tel:1-403-264-8100">403-264-8100</a>
              </p>
              {/* <p className="email">
                <a href="mailto:info@helpwrc.org">info@helpwrc.org</a>
              </p> */}
              <p className="web">
                <a href="https://helpwrc.org">helpwrc.org</a>
              </p>
            </div>

            <div className="tab contact-card">
              <p className="org">Centre for Public Legal Education Alberta</p>
              <p className="org-description">
                CPLEA mission is to engage the public in promoting, accessing,
                and enhancing justice in Canada. They share legal information
                via workshops, articles, websites, FAQ sheets, etc on a variety
                of topics including Family Law, Employment Law, Human Rights
                Law, Landlord & Tenant, etc.
              </p>
              <hr />
              {/* <p className="phone">
                <a href="tel:1-403-264-8100">403-264-8100</a>
              </p> */}
              <p className="email">
                <a href="mailto:info@cplea.ca">info@cplea.ca</a>
              </p>
              <p className="web">
                <a href="https://cplea.ca/bullying-harassment/">cplea.ca</a>
              </p>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            {/* <div className="card">Manage My Case</div> */}
            <div className="tab contact-card">
              <p className="org">Workers’ Resource Centre</p>
              <p className="org-description">
                The WRC is an employment and human rights advocacy agency that
                provides casework support, public legal education, and support
                with workplace sexual harassment issues. We serve all of Alberta
                and our services are <em>free</em>.
              </p>
              <hr />
              <p className="phone">
                <a href="tel:1-403-264-8100">403-264-8100</a>
              </p>
              {/* <p className="email">
                <a href="mailto:info@helpwrc.org">info@helpwrc.org</a>
              </p> */}
              <p className="web">
                <a href="https://helpwrc.org">helpwrc.org</a>
              </p>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>{' '}
    </>
  )
}

export default ResourcesTabTool
