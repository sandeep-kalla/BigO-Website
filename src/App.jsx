import './index.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import DailyChallengeCard from './components/DailyChallengeCard';
import SolveAndLearn from './components/SolveAndLearn';
import DSARoadmap from './components/DSARoadmap';
import Footer from './components/Footer';

const App = () => {
  const [challengeData, setChallengeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log("api url is ",import.meta.env.VITE_DAILY_API);

  useEffect(() => {
    const fetchDailyChallenge = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_DAILY_API}/leetcode/daily`, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          const errorText = await response.text();
          console.error('API Error:', errorText);
          throw new Error(`Failed to fetch daily challenge: ${response.status}`);
        }
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Invalid response format: Expected JSON');
        }
        const data = await response.json();
        setChallengeData(data);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDailyChallenge();
  }, []);

  return (
    <div className="min-h-screen bg-[#1a0b2e]">
      <Navbar />
      
      <main className="container mx-auto px-4 sm:px-8 py-8 sm:py-16 flex flex-col items-center gap-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 w-full">
          <div className="max-w-2xl text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              CODE BIG!<br />
              MAKE BIG!
            </h1>
            <p className="text-gray-400 mb-8 text-sm sm:text-base">
              Lorem ipsum saux qwerty. The quick brown fox jumps over<br className="hidden sm:block" />
              the hill, zibzfuh mte, skzzemc amezlkm fewklkamzmc<br className="hidden sm:block" />
              ammzskfrkfn.
            </p>
            <button className="bg-purple-600 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg">
              Get Started
            </button>
          </div>
          <div className="relative w-full max-w-[500px] lg:w-[600px] aspect-square flex items-center justify-center lg:justify-end">
            <img src="/image.png" alt="Clock Icon" className="w-4/5 h-4/5 object-contain z-10 relative opacity-95 filter brightness-150" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/80 via-purple-500/60 to-purple-400/30 rounded-full blur-[100px]"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/40 to-purple-400/20 rounded-full blur-[80px] animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 to-transparent rounded-full blur-[120px]"></div>
          </div>
        </div>

        <div className="w-full max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text animate-pulse">TODAY&apos;S DAILY CHALLENGE</h2>
          {loading ? (
            <div className="text-white text-center">Loading daily challenge...</div>
          ) : error ? (
            <div className="text-red-500 text-center">{error}</div>
          ) : challengeData ? (
            <DailyChallengeCard challengeData={challengeData} />
          ) : null}
        </div>

        <SolveAndLearn />

        <div className="w-full max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text animate-pulse">
            What is BIG O?
          </h2>
          <div className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-900/30 to-transparent backdrop-blur-sm border border-purple-500/20 shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-2xl blur-[40px]"></div>
            <p className="relative text-gray-300 text-lg text-center leading-relaxed z-10">
              BIG O is a vibrant community of passionate problem solvers who come together to tackle challenging coding problems from LeetCode and other platforms. Here, developers of all skill levels collaborate daily, sharing their solutions, discussing different approaches, and learning from each other. Join us in this journey of continuous improvement and algorithmic mastery!
            </p>
          </div>
        </div>

        <div className="w-full max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text animate-pulse">
            DSA Learning Path
          </h2>
          <div className="relative rounded-2xl overflow-hidden">
            <DSARoadmap />
          </div>
        </div>
      </main>
          <Footer/>
    </div>
  );
};

export default App;
