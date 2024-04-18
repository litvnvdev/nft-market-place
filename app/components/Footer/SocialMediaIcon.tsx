type Props = {
  icon: React.ReactNode;
};

const SocialMediaIcon = ({ icon }: Props) => {
  return (
    <a className="group lg:hover:translate-y-1 duration-300" href="#" target="_blank">
      {icon}
    </a>
  );
};

export default SocialMediaIcon;
