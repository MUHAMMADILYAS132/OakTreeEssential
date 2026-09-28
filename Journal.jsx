const stories = [
  { date: 'A slower start · 5 min read', title: 'Making room for a morning ritual', body: 'A kinder morning does not need a long checklist. Start with one small moment that is just yours.', image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=900&q=85' },
  { date: 'Ingredient notes · 4 min read', title: 'A little closer to the plants', body: 'We look to the natural world for inspiration, then take the time to choose what truly belongs in a formula.', image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=900&q=85' },
  { date: 'Everyday care · 3 min read', title: 'Less routine, more ritual', body: 'A few useful reminders for making everyday care feel grounding instead of one more thing to get through.', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=85' },
]

export default function Journal() {
  return <div className="page-width"><header className="page-heading"><p className="eyebrow">Notes for a softer everyday</p><h1>The journal</h1><p>Thoughts on good care, slowing down, and finding meaning in the little things.</p></header><div className="journal-grid">{stories.map((story) => <article className="journal-card" key={story.title}><img src={story.image} alt="" loading="lazy" /><small>{story.date}</small><h2>{story.title}</h2><p>{story.body}</p><a className="text-link" href="/journal">Read the story →</a></article>)}</div></div>
}