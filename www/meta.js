const xIds = ['1729214803179434026']

const populateReviews = () => {
  const e = document.getElementById('x-cards')

  // Iterate through the array of URLs and create Twitter cards
  xIds.forEach((id) => {
    // Create an iframe for each Twitter status URL
    const container = document.createElement('div')
    e.appendChild(container)
    twttr.widgets.createTweet(id, container, {
      theme: 'dark',
      conversation: 'none',
    })
  })
}
