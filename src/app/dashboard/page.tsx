"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../lib/AuthContext';

// Import all dashboard components
import AdaptiveLearningPaths from '../../components/learning/AdaptiveLearningPaths';
import ProgressTracking from '../../components/learning/ProgressTracking';
import AchievementsRewards from '../../components/gamification/AchievementsRewards';
import Leaderboard from '../../components/gamification/Leaderboard';

// Import page components (we'll convert them to components)
import TeacherDashboardComponent from './components/TeacherDashboard';
import ParentDashboardComponent from './components/ParentDashboard';
import OfflineLanguageComponent from './components/OfflineLanguage';

type DashboardView = 
  | 'home' 
  | 'learning-paths' 
  | 'progress' 
  | 'achievements' 
  | 'leaderboard' 
  | 'teacher' 
  | 'parent' 
  | 'offline';

interface DashboardCard {
  id: DashboardView;
  title: string;
  description: string;
  icon: string;
  color: string;
  category: 'learning' | 'gamification' | 'tools';
}

const dashboardCards: DashboardCard[] = [
  {
    id: 'learning-paths',
    title: 'Adaptive Learning',
    description: 'AI-powered personalized learning paths',
    icon: '🧠',
    color: 'from-blue-500 to-cyan-500',
    category: 'learning'
  },
  {
    id: 'progress',
    title: 'Progress Tracking',
    description: 'Detailed analytics and progress reports',
    icon: '📊',
    color: 'from-green-500 to-emerald-500',
    category: 'learning'
  },
  {
    id: 'achievements',
    title: 'Achievements',
    description: 'Unlock rewards and track accomplishments',
    icon: '🏆',
    color: 'from-yellow-500 to-orange-500',
    category: 'gamification'
  },
  {
    id: 'leaderboard',
    title: 'Leaderboard',
    description: 'Compete with friends and classmates',
    icon: '🥇',
    color: 'from-purple-500 to-pink-500',
    category: 'gamification'
  },
  {
    id: 'teacher',
    title: 'Teacher Tools',
    description: 'Student monitoring and assignment management',
    icon: '👩‍🏫',
    color: 'from-indigo-500 to-blue-500',
    category: 'tools'
  },
  {
    id: 'parent',
    title: 'Parent Portal',
    description: 'Track your child\'s learning journey',
    icon: '👨‍👩‍👧‍👦',
    color: 'from-teal-500 to-cyan-500',
    category: 'tools'
  },
  {
    id: 'offline',
    title: 'Offline & Languages',
    description: 'Download content and multi-language support',
    icon: '📱',
    color: 'from-rose-500 to-pink-500',
    category: 'tools'
  }
];

const categories = {
  learning: { title: 'Learning Features', icon: '📚' },
  gamification: { title: 'Gamification', icon: '🎮' },
  tools: { title: 'Tools & Support', icon: '🛠️' }
};

export default function UnifiedDashboard() {
  const { user, signOut } = useAuth();
  const [currentView, setCurrentView] = useState<DashboardView>('home');

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'learning-paths':
        return <AdaptiveLearningPaths />;
      case 'progress':
        return <ProgressTracking />;
      case 'achievements':
        return <AchievementsRewards />;
      case 'leaderboard':
        return <Leaderboard />;
      case 'teacher':
        return <TeacherDashboardComponent />;
      case 'parent':
        return <ParentDashboardComponent />;
      case 'offline':
        return <OfflineLanguageComponent />;
      default:
        return <DashboardHome />;
    }
  };

  const DashboardHome = () => (
    <div className="space-y-8">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome back, {user?.displayName || 'Learner'}! 🎉
        </h1>
        <p className="text-white/80 text-lg">
          Your complete learning ecosystem awaits. Choose your adventure below!
        </p>
      </motion.div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        {[
          { label: 'Lessons Completed', value: '42', icon: '✅', color: 'from-green-500 to-emerald-500' },
          { label: 'Current Streak', value: '15', icon: '🔥', color: 'from-orange-500 to-red-500' },
          { label: 'Achievements', value: '28', icon: '🏆', color: 'from-yellow-500 to-orange-500' },
          { label: 'Study Hours', value: '126', icon: '⏰', color: 'from-blue-500 to-cyan-500' }
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </div>
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center text-xl`}>
                {stat.icon}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Dashboard Cards by Category */}
      {Object.entries(categories).map(([categoryKey, categoryInfo]) => (
        <div key={categoryKey} className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <span>{categoryInfo.icon}</span>
            {categoryInfo.title}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dashboardCards
              .filter(card => card.category === categoryKey)
              .map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrentView(card.id)}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10 cursor-pointer hover:bg-white/20 transition-all group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${card.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                      {card.icon}
                    </div>
                    <div className="text-white/40 group-hover:text-white/60 transition-colors">
                      →
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2">{card.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{card.description}</p>
                </motion.div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-fuchsia-900">
      {/* Navigation Bar */}
      <nav className="bg-white/10 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {currentView !== 'home' && (
                <button
                  onClick={() => setCurrentView('home')}
                  className="text-white/80 hover:text-white transition-colors flex items-center gap-2"
                >
                  ← Back to Dashboard
                </button>
              )}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">E</span>
                </div>
                <span className="text-white font-bold text-xl">EduLearn</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={user?.photoURL || '/api/placeholder/32/32'}
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-white font-medium">{user?.displayName}</span>
              </div>
              <button
                onClick={handleSignOut}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderCurrentView()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}