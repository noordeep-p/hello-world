const checkAir = function(samples, threshold) {
  let dirtySamples = 0;
  let totalSamples = samples.length;
  let percentDirty = 0;

  for (let i = 0; i < samples.length; i++) {
    if (samples[i] === 'dirty') {
      dirtySamples += 1;
      percentDirty =  dirtySamples / totalSamples;
    }
    if (percentDirty > threshold) {
      return "Polluted";
    }
  }
  return 'Clean';
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
));