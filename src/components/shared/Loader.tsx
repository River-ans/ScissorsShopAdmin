type LoaderProps = {
  size?: 'small' | 'medium' | 'large';
};

export const Loader: React.FC<LoaderProps> = ({ size }) => {
  return <span className={`loader ${size}`}></span>;
};
