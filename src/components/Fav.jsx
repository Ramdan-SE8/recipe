const Fav = ({ favoriteItems }) => {
  if (favoriteItems.length === 0) {
    return <p>You have no favorite items yet.</p>;
  }

  return (
    <div>
      <h2>Your Favorite Recipes</h2>
      {favoriteItems.map((item) => (
        <div key={item.id}>
          <img src={item.imgSrc} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Fav;

// const Fav = () => {
//   return <>please update fav page</>;
// };

// export default Fav;
