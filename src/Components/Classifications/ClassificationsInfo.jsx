const ClassificationsInfo = () => {
  return (
    <div>
      <h3> Film Classifications </h3>

      <p>
        <hr />
        <a href="https://rating-system.fandom.com/wiki/U_(BBFC)">
          <img id="U" src="images\U.png" alt="U logo" width={100} />
        </a>
        The U stands for universal and is applied to movies suitable for most
        ages. These movies should be positive in tone and should make clear
        differences between right and wrong. There should be no dangerous
        behaviour that children can copy and, at most, there may be occasional
        very mild bad language.
      </p>

      <p>
        {" "}
        <a href="https://rating-system.fandom.com/wiki/PG_(BBFC)">
          <img id="PG" src="images\PG.png" alt="PG logo" width={100} />
        </a>
        PG stands for parental guidance and these movies can be a little more
        complicated or intense than a U rated film. PG films might include some
        heavier topics, such as racism or bullying, but not in a way that
        condones such behaviour. Any bad language is mild, and there may be mild
        innuendo and references to sex.
      </p>

      <p>
        <a href="https://rating-system.fandom.com/wiki/12_and_12A_(BBFC)">
          <img id="12" src="images\twelve.png" alt="12 logo" width={100} />
        </a>
        The 12A rating only applies to films shown in cinemas. This means a
        child under the age of 12 must be accompanied by a grown-up. The 12
        rating is used for DVDs and video-on-demand and cannot be sold or rented
        to anyone under the age of 12. Weapons and bad behaviour may be included
        in these movies but should not be shown as attractive and should not be
        glamorised. Moderate bad language, and sometimes strong language
        depending on the context, may be used. Sex scenes should be short and
        discreet.{" "}
      </p>

      <p>
        <a href="https://rating-system.fandom.com/wiki/15_(BBFC)">
          <img id="`15`" src="\images\fifteen.png" alt="15 logo" width={100} />
        </a>
        This rating reflects the fact that although teens are often aware of
        many adult topics, there is still some content that is too 'mature' and
        may be unsuitable. Behaviour such as suicide and self harm may be
        inlcuded but not in great detail. Use of illegal drugs may be shown but
        should not be promoted, and strong language is permissable. Sex scenes
        may be included but not excessively or explicitly. Strong violence is
        allowed but it cannot dwell on 'inflicting pain or injury'.
      </p>

      <p>
        <a href="https://rating-system.fandom.com/wiki/18_(BBFC)">
          <img id="18" src="images\eighteen.png" alt="18 logo" width={100} />
        </a>
        This rating signals that a movie's content may be very graphic and
        should not be watched by anyone under the age of 18. The film may
        include very strong language, explicit sex scenes and strong violence.
        The BBFC only request limitations on the content if is a risk to adults
        or society or the content is illegal in any way.
      </p>
    </div>
  );
};

export default ClassificationsInfo;
