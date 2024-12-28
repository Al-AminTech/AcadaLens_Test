"use client"
import React, { useEffect, useState } from 'react';

export function TableOfContents() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const topics = [
    'Introduction',
    'Advantages of depreciation',
    'Disadvantages of depreciation',
    'Types of depreciation',
    'Methods of calculating depreciation',
  ];

  return (
    <nav
      className={`fixed  left-64 bg-gray-50 p-4 rounded-sm shadow-sm overflow-y-auto transition-all duration-300 ${
        isScrolled ? 'top-0 h-screen' : 'h-screen'
      }`}
      style={{ width: '16rem' }}
    >
      <h3 className="font-semibold mb-4">Contents</h3>
      <ol className="space-y-2">
        {topics.map((topic, index) => (
          <li key={index} className="text-sm">
            <a
              href={`#${topic.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-blue-600 hover:underline"
            >
              {index + 1}. {topic}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
