var output = function(cb) {
  google_speech_api(input, function (err, out) {
    if (err) {
      cb({ error: $.create(err) });
    } else {
      cb({ out: $.create(out) });
    }
  });
};
