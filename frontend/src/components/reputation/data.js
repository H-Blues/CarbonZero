export const companies = [
  {
    "rank": 1,
    "company": "Tesla",
    "project": "Electric Vehicles",
    "carbon": "2.3 million tons",
    "logo": "https://logo.clearbit.com/tesla.com",
    "kudos": 36,
    "sent": 31
  },
  {
    "rank": 2,
    "company": "IKEA",
    "project": "Renewable Energy Investment",
    "carbon": "1.2 million tons",
    "logo": "https://logo.clearbit.com/ikea.com",
    "kudos": 28,
    "sent": 25
  },
  {
    "rank": 3,
    "company": "Google",
    "project": "Data Centers Running on Renewable Energy",
    "carbon": "1.5 million tons",
    "logo": "https://logo.clearbit.com/google.com",
    "kudos": 42,
    "sent": 39
  },
  {
    "rank": 4,
    "company": "Patagonia",
    "project": "Sustainable Clothing",
    "carbon": "0.9 million tons",
    "logo": "https://logo.clearbit.com/patagonia.com",
    "kudos": 30,
    "sent": 27
  },
  {
    "rank": 5,
    "company": "Unilever",
    "project": "Sustainable Sourcing",
    "carbon": "0.7 million tons",
    "logo": "https://logo.clearbit.com/unilever.com",
    "kudos": 22,
    "sent": 20
  }
]

export const winner = companies.sort((a, b) => a.rank - b.rank)[0]