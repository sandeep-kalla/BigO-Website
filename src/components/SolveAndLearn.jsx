import { FaBook, FaVideo, FaClipboardList } from 'react-icons/fa';
import LearningCard from './LearningCard';

const SolveAndLearn = () => {
  const learningResources = [
    {
      title: 'DSA Sheet',
      description: 'Master your DSA skills with our carefully curated sheet of problems.',
      icon: <FaClipboardList />
    },
    {
      title: 'Lectures',
      description: 'Learn from our comprehensive video lectures on various topics.',
      icon: <FaVideo />
    },
    {
      title: 'DSA Topics',
      description: 'Deep dive into different DSA concepts with detailed explanations.',
      icon: <FaBook />
    },
    {
      title: 'Practice Sheet',
      description: 'Enhance your problem-solving skills with practice problems.',
      icon: <FaClipboardList />
    },
    {
      title: 'Study Material',
      description: 'Access high-quality study materials and resources.',
      icon: <FaBook />
    },
    {
      title: 'Video Solutions',
      description: 'Watch detailed video solutions to complex problems.',
      icon: <FaVideo />
    }
  ];

  return (
    <section className="w-full py-16">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">Solve and Learn</h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningResources.map((resource, index) => (
            <LearningCard
              key={index}
              title={resource.title}
              description={resource.description}
              icon={resource.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolveAndLearn;