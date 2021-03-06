import useResource from "../hooks/useResource";

function Footer() {
  const { resources } = useResource();

  return (
    <div className="flex items-center justify-between p-3 mt-12 bg-green-500 text-black-100">
      <h3>{resources ? resources.length : 0} Locations World Wide</h3>
    </div>
  );
}

export default Footer;