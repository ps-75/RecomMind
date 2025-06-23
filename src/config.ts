// Configuration file for API keys and environment variables
export const config = {
  // YouTube Data API v3 key
  // This will be 'YOUR_YOUTUBE_API_KEY' if the .env variable is not set.
  YOUTUBE_API_KEY: process.env.REACT_APP_YOUTUBE_API_KEY || 'YOUR_YOUTUBE_API_KEY',
  
  // Dev.to API is public, no key needed
  DEV_TO_API_BASE_URL: 'https://dev.to/api',
  
  // YouTube API base URL
  YOUTUBE_API_BASE_URL: 'https://www.googleapis.com/youtube/v3',
};

// Domain to Dev.to tag mapping
export const domainToTagMap: { [key: string]: string } = {
  'Web Development': 'webdev',
  'AI/ML': 'ai',
  'Mobile Development': 'mobile',
  'Cybersecurity': 'security',
  'Data Science': 'datascience',
  'UI/UX Design': 'ux',
  'Blockchain': 'blockchain',
  'DevOps': 'devops',
  'Cloud Computing': 'cloud',
  'Game Development': 'gamedev',
  'Software Engineering': 'programming'
}; 
console.log("YOUTUBE KEY:", process.env.REACT_APP_YOUTUBE_API_KEY);
