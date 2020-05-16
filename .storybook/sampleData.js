export function generateSampleData() {
  const samples = []
  const url = 'https://www.y-mix.dev/'
  const imageUrl = ''
  const tagSample = [
    { text: 'Go' },
    { text: 'Apache Spark' },
    { text: 'Twitter API' },
    { text: 'ShellScript' },
    { text: 'Flask' },
    { text: 'jQuery' },
    { text: 'Bulma' },
    { text: 'nginx' },
    { text: 'Jenkins' },
    { text: 'BigQuery' },
    { text: 'Ionic' },
    { text: 'Bootstrap' },
    { text: 'iOS(Objective-C)' },
    { text: 'Android(Java)' },
    { text: 'Unity(JS, C#)' }
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