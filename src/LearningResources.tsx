import React, { useState, useEffect } from 'react';
import { Play, ExternalLink, BookOpen, Video } from 'lucide-react';
import { config, domainToTagMap } from './config';

interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  channelTitle: string;
  publishedAt: string;
}

interface DevToArticle {
  id: number;
  title: string;
  url: string;
  author: string;
  published_at: string;
  reading_time_minutes: number;
}

interface LearningResourcesProps {
  domains: string[];
  experience: string;
  technologies: string[];
}

interface CacheData {
  data: any;
  timestamp: number;
}

const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

const getCachedData = (key: string): any => {
  try {
    const cached = localStorage.getItem(key);
    if (cached) {
      const parsed: CacheData = JSON.parse(cached);
      if (Date.now() - parsed.timestamp < CACHE_DURATION) {
        return parsed.data;
      }
    }
  } catch (error) {
    console.warn('Error reading from cache:', error);
  }
  return null;
};

const setCachedData = (key: string, data: any): void => {
  try {
    const cacheData: CacheData = {
      data,
      timestamp: Date.now()
    };
    localStorage.setItem(key, JSON.stringify(cacheData));
  } catch (error) {
    console.warn('Error writing to cache:', error);
  }
};

const sanitizeForDevTo = (tech: string): string => {
  const sanitized = tech.toLowerCase();
  if (sanitized === 'c++') return 'cpp';
  if (sanitized === 'c#') return 'csharp';
  return sanitized.replace(/[^a-z0-9]/g, '');
};

const LearningResources: React.FC<LearningResourcesProps> = ({ domains, experience, technologies }) => {
  const [youtubeVideos, setYoutubeVideos] = useState<YouTubeVideo[]>([]);
  const [devToArticles, setDevToArticles] = useState<DevToArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLearningResources = async () => {
      setLoading(true);
      setError(null);

      const cacheKeySuffix = `${domains.join('_')}_${experience}_${technologies.join('_')}`;
      const youtubeCacheKey = `youtube_${cacheKeySuffix}`;
      const devToCacheKey = `devto_${cacheKeySuffix}`;

      try {
        const cachedYoutube = getCachedData(youtubeCacheKey);
        if (cachedYoutube) {
          setYoutubeVideos(cachedYoutube);
        } else {
          if (config.YOUTUBE_API_KEY && config.YOUTUBE_API_KEY !== 'YOUR_YOUTUBE_API_KEY') {
            const sanitizedTechs = technologies.map(t => t.replace(/[^\w\s]/gi, ' '));
            const videoPromises = domains.map(domain => {
              const sanitizedDomain = domain.replace(/[^\w\s]/gi, ' ');
              const searchQuery = `${sanitizedDomain} ${sanitizedTechs.join(' ')} ${experience} tutorial`;
              const url = `${config.YOUTUBE_API_BASE_URL}/search?part=snippet&q=${encodeURIComponent(searchQuery)}&type=video&maxResults=4&key=${config.YOUTUBE_API_KEY}`;
              return fetch(url).then(res => res.ok ? res.json() : Promise.resolve({ items: [] }));
            });
            const videoResults = await Promise.all(videoPromises);
            const allVideos = videoResults.flatMap(result => result.items || []);
            const uniqueVideos = Array.from(new Map(allVideos.map((video: any) => [video.id.videoId, video])).values())
              .map((item: any) => ({
                id: item.id.videoId,
                title: item.snippet.title,
                thumbnail: item.snippet.thumbnails.medium.url,
                channelTitle: item.snippet.channelTitle,
                publishedAt: item.snippet.publishedAt,
              }));

            setYoutubeVideos(uniqueVideos);
            if (uniqueVideos.length > 0) setCachedData(youtubeCacheKey, uniqueVideos);
          } else {
            setYoutubeVideos([]);
          }
        }

        const cachedArticles = getCachedData(devToCacheKey);
        if (cachedArticles) {
          setDevToArticles(cachedArticles);
        } else {
          const techTags = technologies.map(sanitizeForDevTo).filter(Boolean);
          let articles: DevToArticle[] = [];

          if (techTags.length > 0) {
            const articlePromises = techTags.map(tag =>
              fetch(`${config.DEV_TO_API_BASE_URL}/articles?tag=${tag}&top=1&per_page=2`)
                .then(res => (res.ok ? res.json() : []))
            );
            articles = (await Promise.all(articlePromises)).flat();
          }

          if (articles.length === 0) {
            const domainTags = domains.map(d => domainToTagMap[d] || d.toLowerCase().replace(/\s+/g, '')).filter(Boolean);
            if (domainTags.length > 0) {
              const fallbackPromises = domainTags.map(tag =>
                fetch(`${config.DEV_TO_API_BASE_URL}/articles?tag=${tag}&top=1&per_page=2`)
                  .then(res => (res.ok ? res.json() : []))
              );
              articles = (await Promise.all(fallbackPromises)).flat();
            }
          }
          
          const uniqueArticles = Array.from(new Map(articles.map(a => [a.id, a])).values());
          setDevToArticles(uniqueArticles);
          if (uniqueArticles.length > 0) setCachedData(devToCacheKey, uniqueArticles);
        }

      } catch (err) {
        console.error('Error fetching learning resources:', err);
        setError('Failed to load learning resources. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (domains.length > 0) {
      fetchLearningResources();
    }
  }, [domains, experience, technologies]);

  if (loading) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded mb-4"></div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error && youtubeVideos.length === 0 && devToArticles.length === 0) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
        <div className="text-center text-gray-500">
          <p className="text-lg font-semibold mb-2">No content found. Try a different level.</p>
          <p className="text-sm">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Learning Resources</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* YouTube Videos Section */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200 flex items-center">
            <Video className="mr-3 text-red-500" /> Video Resources
          </h3>
          
          {youtubeVideos.length > 0 ? (
            <div className="space-y-4">
              {youtubeVideos.map((video) => (
                <div key={video.id} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <div className="flex items-start space-x-4">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-24 h-16 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 text-sm mb-1 overflow-hidden">
                        <span className="block truncate">{video.title}</span>
                      </h4>
                      <p className="text-gray-600 text-xs mb-2">{video.channelTitle}</p>
                      <a
                        href={`https://www.youtube.com/watch?v=${video.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        <Play className="w-4 h-4 mr-1" />
                        Watch Video
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 py-8">
              <p>No videos found for this topic.</p>
              {config.YOUTUBE_API_KEY === 'YOUR_YOUTUBE_API_KEY' && (
                <p className="text-xs mt-2">YouTube API key not configured</p>
              )}
            </div>
          )}
        </div>

        {/* Dev.to Articles Section */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200 flex items-center">
            <BookOpen className="mr-3 text-blue-500" /> Read Articles
          </h3>
          
          {devToArticles.length > 0 ? (
            <div className="space-y-4">
              {devToArticles.map((article) => (
                <div key={article.id} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                  <h4 className="font-semibold text-gray-900 text-sm mb-2 overflow-hidden">
                    <span className="block truncate">{article.title}</span>
                  </h4>
                  <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
                    <span>By {article.author}</span>
                    <span>{article.reading_time_minutes} min read</span>
                  </div>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Read Article
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 py-8">
              <p>No articles found for this topic.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LearningResources; 