type Props = {
  icon: React.ReactNode;
};

const SocialMediaIcon = ({ icon }: Props) => {
  return (
    <a className="group hover:translate-y-1 duration-300" href="#">
      {icon}
    </a>
  );
};

export default SocialMediaIcon;
