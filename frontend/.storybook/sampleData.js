export function generateSampleData() {
  const samples = []
  const url = 'https://www.y-mix.dev/'
  const imageUrl = ''
  const tagSample = [
    'Go',
    'Apache Spark',
    'Twitter API',
    'ShellScript',
    'Flask',
    'jQuery',
    'Bulma',
    'nginx',
    'Jenkins',
    'BigQuery',
    'Ionic',
    'Bootstrap',
    'iOS(Objective-C)',
    'Android(Java)',
    'Unity(JS, C#)'
  ]
  for (let i = 0; i < 20; i++) {
    samples.push({
      url,
      imageUrl,
      title: 'Sample ' + String(i),
      skills: tagSample
    })
  }

  return samples
}