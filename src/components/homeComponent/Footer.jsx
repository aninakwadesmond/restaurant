import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGlobe, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="flex flex-col w-full gap-3 px-6">
      <div className="flex flex-col items-start justify-start gap-2">
        <div className="max-w-50  ">
          <img src="/logo.svg" alt="logo" className="w-full object-cover " />
        </div>
        <p className="text-black/70 font-semibold ">
          Connecting discerning palates with the world's most exceptional
          culinary experiences.
        </p>
      </div>
      <div className="flex flex-col gap-10 mt-6 mb-20">
        <FooterCompany
          actions={[
            { title: 'About', path: '' },
            { title: 'Partner with Us', path: '' },
            { title: 'Careers', path: '' },
          ]}
          title="Company"
        />
        <FooterCompany
          actions={[
            { title: 'Terms of Service', path: '' },
            { title: 'Privacy Policy ', path: '' },
            { title: 'Cookies', path: '' },
          ]}
          title="legal"
        />
        <FooterCompany
          actions={[{ title: 'support@example.com', path: '' }]}
          title="contact"
        />
        <div className="flex items-center justify-start gap-4">
          <FontAwesomeIcon icon={faGlobe} className="text-xl" />
          <FontAwesomeIcon icon={faShareNodes} className="text-xl" />
          <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
        </div>
      </div>
      <div className="w-full h-40 flex flex-col items-center justify-center gap-6">
        <p className="text-[.7rem] font-sembold text-black/60">
          &copy; 2026 QuickDine. All rights reserved
        </p>
        <div className="w-[40%] items-center justify-center gap-8 flex ">
          <Link to={''} className="text-[.8rem] font-sembold text-black/60">
            Terms
          </Link>
          <Link to={''} className="text-[.8rem] font-sembold text-black/60">
            Privacy
          </Link>
        </div>
      </div>
    </div>
  );
}

function FooterCompany({ actions, title }) {
  return (
    <div className="flex flex-col items-start gap-2">
      <h4 className="uppercase tracking-wide font-semibold">{title}</h4>
      {actions.map((link) => (
        <Link className="text-black/70 font-semibold" to={link.path}>
          {link.title}
        </Link>
      ))}
    </div>
  );
}

export default Footer;
