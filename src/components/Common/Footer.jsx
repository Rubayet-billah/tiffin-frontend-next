import icon from "../../assets/favicon.png";

const Footer = () => {
  return (
    <footer className="footer p-10 text-base-content">
      <aside>
        <img src={icon} className="w-20 h-20" alt="" />
        <p>
          Tiffin Food Delivery
          <br /> Bringing delicious meals to your doorstep
        </p>
      </aside>
      <nav>
        <header className="footer-title">Services</header>
        <a className="link link-hover">Menu</a>
        <a className="link link-hover">Order Online</a>
        <a className="link link-hover">Delivery</a>
        <a className="link link-hover">Catering</a>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Careers</a>
        <a className="link link-hover">Press</a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
