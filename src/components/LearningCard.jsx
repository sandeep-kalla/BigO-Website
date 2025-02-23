import PropTypes from 'prop-types';

const LearningCard = ({ title, description, icon }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl p-1 transition-all duration-300 hover:scale-105">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 via-purple-500/60 to-purple-400/30 blur-sm group-hover:blur-md transition-all duration-300"></div>
      <div className="relative h-full bg-[#1a0b2e]/90 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center justify-center gap-4 min-h-[200px] cursor-pointer">
        <div className="text-4xl text-purple-400 group-hover:text-purple-300 transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white text-center group-hover:text-purple-200 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 text-sm text-center group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};

LearningCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired
};

export default LearningCard;