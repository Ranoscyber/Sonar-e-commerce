function Footer() {
  return (
    <footer className="bg-primary py-4 text-white">
      <div className="max-w-[90%] lg:max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        <h4>Copyright &#169; Sonar Store</h4>
        <ul className="flex items-center gap-4">
          <li className="hover:underline decoration-yellow-400">
            <a href=""></a>Home
          </li>
          <li className="hover:underline decoration-yellow-400">
            <a href=""></a>Contact Us
          </li>
          <li className="hover:underline decoration-yellow-400">
            <a href=""></a>About Us
          </li>
          <li className="hover:underline decoration-yellow-400">
            <a href=""></a>Term and conditional
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
