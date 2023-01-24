

export const Header = (): JSX.Element => {
  return (
    <div className="headerContainer">
      <h1 className="title" onClick={() => window.scrollTo({ top: 0 })}>Tv Shows</h1>
    </div>
  );
};
