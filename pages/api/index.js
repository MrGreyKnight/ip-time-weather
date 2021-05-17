// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200

  let data = getOpenMapsData();

  res.json(data);
}

async function getOpenMapsData() {
  let openWeatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + req['headers']['x-vercel-ip-city'] + "&appid=" + process.env.OpenWeatherAPIKey
  const res = await fetch(openWeatherURL)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return { 
      client: req['headers'],
      timestamp: {
        date: "17/05/2021",
        time: "19:15"
      },
      weather: data["weather"],
      base: data["base"],
      main: data["main"],
      visibility: data["visibility"],
      wind: data["wind"],
      clouds: data["clouds"],
      dt: data["dt"],
      sys: data["sys"]
    };
}