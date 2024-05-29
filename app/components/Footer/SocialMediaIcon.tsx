type Props = {
  icon: React.ReactNode;
  id: number;
};

const SocialMediaIcon = ({ icon, id }: Props) => {
  return (
    <a
      key={id}
      className="group lg:hover:translate-y-1 duration-300"
      href="#"
      target="_blank"
    >
      {icon}
    </a>
  );
};

export default SocialMediaIcon;
