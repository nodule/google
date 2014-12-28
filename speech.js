module.exports = {
  name: "speech",
  ns: "google",
  description: "Google Speech Api",
  phrases: {
    active: "Speaking..."
  },
  ports: {
    input: {
      client: {
        type: "string",
        description: "The name of the client you are connecting with.",
        "default": "chromium"
      },
      lang: {
        type: "string",
        description: "The spoken language in the file.",
        "default": "en-US"
      },
      maxResults: {
        type: "number",
        description: "The maximum number of hypotheses returned by google",
        "default": 1
      },
      pfilter: {
        type: "number",
        description: "Filter profanity by replacing flagged words with pound symbols. Set 0 to unfilter",
        "default": 1
      },
      clipSize: {
        type: "number",
        description: "The audio duration of files sent to google (in seconds.) Larger files will be broken into pieces",
        "default": 15
      },
      maxRequests: {
        type: "number",
        description: "The maximum number of clips to send to google at a time",
        "default": 4
      },
      sampleRate: {
        type: "number",
        description: "The sample rate of the audio sent to google",
        "default": 16000
      }
    },
    output: {
      error: {
        title: "Error",
        type: "object"
      },
      out: {
        title: "Results",
        type: "object"
      }
    }
  },
  dependencies: {
    npm: {
      "google-speech-api": require('google-speech-api')
    }
  }
}