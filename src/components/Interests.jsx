const Interests = () => {
  return (
    <div className="interests">
      <h2>Interests</h2>
      <div className="interests-container">
        <div className="interests-card singing">
          <h3>Singing</h3>
          <img src="https://img.icons8.com/?size=512&id=r87B9e82DtHh&format=png" />
          <p>
            I have a love of classical singing and have performed at many public
            and private events. I have also been a member of an amateur opera
            society in London where I took part in a rendition of the opera
            Romeo and Juliet. My greatest highlight has to be singing at the
            Pawscars in front of several hundred people, which is a yearly
            awards ceremony before Crufts each year, and being invited back
            several years in a row.{" "}
          </p>
        </div>
        <div className="interests-card skiiing">
          <h3>Skiing</h3>
          <img src="https://img.icons8.com/?size=512&id=920&format=png" />
          <p>
            I fell in love with skiing at a young age, and have been skiing most
            years since. I often visit my dad in Italy during the ski season and
            a few years ago, I got to spend a whole season there, skiing almost
            every weekend.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Interests;
