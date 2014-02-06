var output = function(cb) {
  google_speech_api(input, function (err, out) {
    if (err) {
      cb({ error: err });
    } else {
      cb({ out: out });
    }
  });
};
