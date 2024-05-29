type Props = {
  icon: React.ReactNode;
  key: number;
};

const SocialMediaIcon = ({ icon, key }: Props) => {
  return (
    <a
      key={key}
      className="group lg:hover:translate-y-1 duration-300"
      href="#"
      target="_blank"
    >
      {icon}
    </a>
  );
};

export default SocialMediaIcon;
