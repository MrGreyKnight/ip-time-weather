// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200
  res.json(
      { 
        client: req['headers'],
        timestamp: {
          date: "17/05/2021",
          time: "19:15"
        },
        weather: {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d"
        },
        base: "stations",
        main: {
          temp: 282.55,
          feels_like: 281.86,
          temp_min: 280.37,
          temp_max: 284.26,
          pressure: 1023,
          humidity: 100
        },
        visibility: 16093,
        wind: {
          speed: 1.5,
          deg: 350
        },
        clouds: {
          all: 1
        },
        dt: 1560350645,
        sys: {
          type: 1,
          id: 5122,
          message: 0.0139,
          country: "US",
          sunrise: 1560343627,
          sunset: 1560396563
        }
      }
    )
}
