import PropTypes from 'prop-types';
import './DailyChallengeCard.css';
import CountdownTimer from './CountdownTimer';

const DailyChallengeCard = ({ challengeData }) => {
  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'text-green-500';
      case 'medium':
        return 'text-yellow-500';
      case 'hard':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="flex flex-col md:flex-row items-stretch justify-between w-full max-w-7xl mx-auto p-8 space-y-6 md:space-y-0 md:space-x-8">
      <div className="w-full md:w-1/3 flex items-center justify-center">
        <CountdownTimer />
      </div>
      <div className="daily-challenge-card w-full md:w-2/3 p-8 bg-white rounded-lg shadow-lg">
        <div className="card-header flex justify-between items-center mb-4">
          <span className="date text-gray-600">{formatDate(challengeData.date)}</span>
          <span className={`difficulty px-3 py-1 rounded-full font-medium ${getDifficultyColor(challengeData.difficulty)}`}>
            {challengeData.difficulty}
          </span>
        </div>
        
        <h2 className="title text-xl font-semibold mb-4">
          <span className="question-id text-gray-500 mr-2">#{challengeData.questionFrontendId}</span>
          {challengeData.questionTitle}
        </h2>
    
        <div className="tags-container flex flex-wrap gap-2 mb-4">
          {challengeData.topicTags.map((tag, index) => (
            <span key={index} className="tag bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">{tag.name}</span>
          ))}
        </div>
    
        <div className="stats-container flex items-center gap-4 mb-6">
          <div className="stat flex items-center gap-1">
            <span className="stat-icon">👍</span>
            <span className="stat-value text-gray-700">{challengeData.likes}</span>
          </div>
          <div className="stat flex items-center gap-1">
            <span className="stat-icon">👎</span>
            <span className="stat-value text-gray-700">{challengeData.dislikes}</span>
          </div>
          {challengeData.isPaidOnly && (
            <div className="premium-badge flex items-center gap-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
              <span className="premium-icon">💎</span>
              Premium
            </div>
          )}
        </div>
    
        <a 
          href={challengeData.questionLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block w-full bg-purple-600 text-white text-center px-6 py-3 rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
        >
          Go to Problem
        </a>
      </div>
    </div>
  );
};

DailyChallengeCard.propTypes = {
  challengeData: PropTypes.shape({
    date: PropTypes.string.isRequired,
    questionLink: PropTypes.string.isRequired,
    questionId: PropTypes.string.isRequired,
    questionFrontendId: PropTypes.string.isRequired,
    questionTitle: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    isPaidOnly: PropTypes.bool.isRequired,
    topicTags: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired
      })
    ).isRequired,
    likes: PropTypes.number.isRequired,
    dislikes: PropTypes.number.isRequired
  }).isRequired
};

export default DailyChallengeCard;