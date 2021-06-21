const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Ninja List</h1>
      </div>
      {/*//? Linking between pages we don't have the anchor tag, use something else instead */}
      <a>Home</a>
      <a>About</a>
      <a>Ninja Listing</a>
    </nav>
  );
};

export default Navbar;
