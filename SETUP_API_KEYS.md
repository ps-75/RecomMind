# API Setup Guide

## YouTube Data API v3 Setup

To enable YouTube video recommendations, you need to set up the YouTube Data API v3:

### 1. Get YouTube API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the YouTube Data API v3:
   - Go to "APIs & Services" > "Library"
   - Search for "YouTube Data API v3"
   - Click on it and press "Enable"
4. Create credentials:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy the generated API key

### 2. Configure Environment Variables

Create a `.env` file in the root directory of your project:

```env
REACT_APP_YOUTUBE_API_KEY=your_youtube_api_key_here
```

### 3. API Quota Limits

- YouTube Data API v3 has a daily quota limit (usually 10,000 units)
- Each search request costs 100 units
- Monitor your usage in the Google Cloud Console

## Dev.to API

The Dev.to API is public and doesn't require any API key or setup.

## Testing

1. Start your development server: `npm start`
2. Complete the quiz to reach the recommendations page
3. You should see YouTube videos and Dev.to articles based on your selections

## Troubleshooting

- If you see "YouTube API key not configured", make sure your `.env` file is in the root directory
- If you see "No videos found", check your API key and quota limits
- Restart your development server after adding the `.env` file

## Security Note

Never commit your API keys to version control. The `.env` file should be in your `.gitignore`. 