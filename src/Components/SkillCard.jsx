import PropTypes from "prop-types";

const SkillCard = ({ imgSrc, label, desc, classes }) => {
  return (
    <div
      className={`group flex items-center gap-3 ring-2 ring-inset ring-softSky-50/10 rounded-2xl p-3 hover:bg-softSky-800 transition-colors ${classes}`}
    >
      <figure className="bg-softSky-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-softSky-900 transition-colors">
        <img src={imgSrc} width={32} height={32} alt={label} />
      </figure>
      <div>
        {label}
        <p className="text-softSky-400 text-sm">{desc}</p>
      </div>
    </div>
  );
};

SkillCard.prototype = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default SkillCard;
