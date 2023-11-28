const xIds = [
  '1729214803179434026',
  '1729214803179434027',
  '1729214803179434028',
  '1729214803179434029',
]

const populateReviews = () => {
  const e = document.getElementById('x-cards')

  xIds.forEach((id) => {
    twttr.widgets.createTweet(id, e, {
      theme: 'dark',
      conversation: 'none',
      cards: 'hidden',
      dnt: true,
    })
  })
}
