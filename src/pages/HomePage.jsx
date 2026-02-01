// HomePage.jsx - النسخة الهندسية الاستراتيجية
import { motion } from 'framer-motion';
import PageContainer from '../components/layout/PageContainer';
import BookGrid from '../components/books/BookGrid';
import { featuredBooks } from '../data/mockBooks';

const HomePage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section: Engineering Excellence */}
      <section className="relative h-[80vh] flex items-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500 via-transparent to-transparent"></div>
        <PageContainer className="relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-6xl font-black text-white leading-tight mb-6">
              Engineering the <br/>
              <span className="text-indigo-500">Knowledge </span> Economy
            </h1>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              Welcome to BookHive. A platform designed by Eng. Bashar Abu Thabet, 
              merging technical precision with strategic MBA insights.
            </p>
            <div className="flex gap-4">
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20">
                Start Exploring
              </button>
              <button className="border border-slate-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-slate-800 transition-all">
                The Strategy
              </button>
            </div>
          </motion.div>
        </PageContainer>
      </section>

      {/* Featured Section with Grid */}
      <PageContainer className="py-20">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Curated for Excellence</h2>
            <p className="text-slate-500 mt-2">Hand-picked titles in Engineering, Leadership, and Tech.</p>
          </div>
        </div>
        <BookGrid books={featuredBooks} />
      </PageContainer>
    </div>
  );
};

export default HomePage;