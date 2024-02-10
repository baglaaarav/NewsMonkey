import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = {
    "status": "ok",
    "totalResults": 32,
    "articles": [
      {
        "source": {
          "id": "abc-news",
          "name": "ABC News"
        },
        "author": "LISA MASCARO AP congressional correspondent",
        "title": "House vote to impeach Homeland Security Secretary Mayorkas fails, thwarted by Republican defections - ABC News",
        "description": "In a dramatic setback, House Republicans have failed to impeach Homeland Security Secretary Alejandro Mayorkas",
        "url": "https://abcnews.go.com/US/wireStory/house-republicans-ready-impeach-homeland-security-secretary-mayorkas-106978246",
        "urlToImage": "https://i.abcnewsfe.com/a/1b9fa186-67ae-4801-806c-a72c6426680a/wirestory_8209736501ed4fe12e4b164443d6a8a9_16x9.jpg?w=1600",
        "publishedAt": "2024-02-07T06:33:55Z",
        "content": "WASHINGTON -- In a dramatic setback, House Republicans failed Tuesday to impeach Homeland Security Secretary Alejandro Mayorkas, forced to shelve a high-profile priority for now after a few GOP lawma… [+7252 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "CBS Sports"
        },
        "author": "",
        "title": "NBA trade rumors: Bucks interested in Andrew Wiggins; Sixers targeting Buddy Hield and Bojan Bogdanovic - CBS Sports",
        "description": "Elsewhere, the Celtics are trying to make some moves around the margins",
        "url": "https://www.cbssports.com/nba/news/nba-trade-rumors-bucks-interested-in-andrew-wiggins-sixers-targeting-buddy-hield-and-bojan-bogdanovic/",
        "urlToImage": "https://sportshub.cbsistatic.com/i/r/2024/02/07/5c896bc2-24c7-480d-b701-36570ae6264d/thumbnail/1200x675/649bdbcce6e86d88e113b947916b4f83/andrew-wiggins-warriors-g.jpg",
        "publishedAt": "2024-02-07T04:26:34Z",
        "content": "The 2024 NBA trade deadline is now less than two days away, and the rumor mill is on fire. The rampant talks between teams haven't translated into many actual deals thus far, but that will almost cer… [+3172 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "KOCO Oklahoma City"
        },
        "author": "Brooke Withrow",
        "title": "'One Okie to Another': Country music legend Garth Brooks remembers fellow Oklahoma native Toby Keith - KOCO Oklahoma City",
        "description": "Country music legend Garth Brooks remembered fellow Oklahoman Toby Keith.",
        "url": "https://www.koco.com/article/oklahoma-toby-keith-garth-brooks/46666011",
        "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/getty-images-toby-keith-65c218ee95e5d.jpg?crop=1.00xw:0.788xh;0,0&resize=1200:*",
        "publishedAt": "2024-02-07T04:08:00Z",
        "content": "Country music legend Garth Brooks remembered fellow Oklahoman Toby Keith.\r\nThe Moore native died on Monday night at 62 years old after living with stomach cancer.\r\n| MORE | Oklahomans remember Toby K… [+1312 chars]"
      },
      {
        "source": {
          "id": "cnn",
          "name": "CNN"
        },
        "author": "By <a href=\"/profiles/amir-vera\">Amir Vera</a>, <a href=\"/profiles/tori-powell\">Tori B. Powell</a> and <a href=\"/profiles/elise-hammond\">Elise Hammond</a>, CNN",
        "title": "Live updates: Nevada Democratic presidential primary election - CNN",
        "description": "GOP candidate Nikki Haley will lose Nevada's Republican primary to \"none of these candidates,\" CNN projects, as President Joe Biden wins the state's Democratic presidential primary. Follow here for the latest live news updates, analysis and results.",
        "url": "https://www.cnn.com/politics/live-news/nevada-primary-election-02-06-24/index.html",
        "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/240202112716-biden-haley-trump-split-super-tease.jpg",
        "publishedAt": "2024-02-07T03:26:00Z",
        "content": "Just how does Joe Biden win reelection? National polls show him trailing Donald Trump more often than leading him a rare position for an incumbent to be in at this point in the campaign.\r\nThese natio… [+1115 chars]"
      },
      {
        "source": {
          "id": "associated-press",
          "name": "Associated Press"
        },
        "author": "JILL LAWLESS",
        "title": "King Charles III's cancer was caught early, Sunak says - The Associated Press",
        "description": "Britain's prime minister says that King Charles III’s cancer was caught early and the monarch will “crack on” with his constitutional duties. The remarks came as Prince Harry flew in from California on Tuesday for a rare visit with his father. Royal officials…",
        "url": "https://apnews.com/article/britain-king-charles-cancer-diagnosis-f787d38ddbb436186c5427e839fd055b",
        "urlToImage": "https://dims.apnews.com/dims4/default/2c40626/2147483647/strip/true/crop/3812x2144+0+200/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fe7%2F10%2F0d2279661ae6921cb4c20a2b24f1%2F406e1e85e13a4f14862d068d583b1be1",
        "publishedAt": "2024-02-07T03:17:00Z",
        "content": "LONDON (AP) King Charles IIIs cancer was caught early and the monarch will crack on with his constitutional duties, Britains prime minister said Tuesday, as Prince Harry flew in from California for a… [+4976 chars]"
      },
      {
        "source": {
          "id": "fox-news",
          "name": "Fox News"
        },
        "author": "Louis Casiano",
        "title": "NASA Jet Propulsion Laboratory in California to lay off 530 workers because of lack of funding - Fox News",
        "description": "NASA's Jet Propulsion Laboratory plans to let go 530 workers and 40 contractors because it has not secure funding for the 2024 fiscal year, officials said.",
        "url": "https://www.foxnews.com/us/nasa-jet-propulsion-laboratory-california-lay-off-five-hundred-thirty-workers-lack-funding",
        "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/02/1-JPL-with-NASA-Logo1.width-1320.jpg",
        "publishedAt": "2024-02-07T02:51:00Z",
        "content": "NASA's Jet Propulsion Laboratory (JPL) just outside Los Angeles will let go of 530 workers and 40 contractors as a cost-cutting measure amid a failure to secure federal funding for the fiscal year. \r… [+2421 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "MLB.com"
        },
        "author": "Brian McTaggart",
        "title": "Jose Altuve signs contract extension with Astros - MLB.com",
        "description": "HOUSTON -- Jose Altuve, one of the most accomplished and popular players in Astros history and a cornerstone of a pair of World Series championship teams, will likely end his career in Houston.\nThe star second baseman agreed to a five-year contract extension …",
        "url": "https://www.mlb.com/news/jose-altuve-signs-contract-extension-with-astros",
        "urlToImage": "https://img.mlbstatic.com/mlb-images/image/upload/t_2x1/t_w1536/mlb/kbmqzvhyzyarvbipe3m8.jpg",
        "publishedAt": "2024-02-07T02:47:55Z",
        "content": "HOUSTON -- Jose Altuve, one of the most accomplished and popular players in Astros history and a cornerstone of a pair of World Series championship teams, will likely end his career in Houston.\r\nThe … [+3792 chars]"
      },
      {
        "source": {
          "id": "cbs-news",
          "name": "CBS News"
        },
        "author": "Gina Martinez",
        "title": "Pod of orcas trapped by thick sea ice off northern Japan, drone footage shows - CBS News",
        "description": "Drone footage from Tuesday morning showed a pod of at least 10 killer whales surrounded by drift ice off Hokkaido, Japan.",
        "url": "https://www.cbsnews.com/news/orcas-trapped-drift-ice-hokkaido-japan-drone-footage/",
        "urlToImage": "https://assets2.cbsnewsstatic.com/hub/i/r/2024/02/07/b6c6ae89-d145-44f6-9d7c-0f18aa63f8d3/thumbnail/1200x630/df31f40f262ebc253ba1e5bea5a68d97/orcas.png?v=09f617bc45cf30bf4fa8525d3acea178",
        "publishedAt": "2024-02-07T02:33:00Z",
        "content": "A pod of at least 10 orcas are trapped by sea ice off the coast of northern Japan, drone footage from Tuesday morning shows.\r\nThe video, released by local wildlife organization Wildlife Pro, showed t… [+448 chars]"
      },
      {
        "source": {
          "id": "cnn",
          "name": "CNN"
        },
        "author": "Matt Egan",
        "title": "New York Community Bancorp’s credit rating downgraded to junk on real estate concerns - CNN",
        "description": "Embattled regional bank New York Community Bancorp suffered another blow Tuesday evening as Moody’s Investors Service downgraded its credit rating to junk status.",
        "url": "https://www.cnn.com/2024/02/06/business/moodys-downgrades-new-york-community-bancorp-junk/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/2024-01-31t180546z-1625590418-rc25t5atkrkl-rtrmadp-3-new-york-community-bancorp-stock.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2024-02-07T01:40:41Z",
        "content": "Embattled regional bank New York Community Bancorp suffered another blow Tuesday evening as Moodys Investors Service downgraded its credit rating to junk status.\r\nMoodys said the downgrade was driven… [+2300 chars]"
      },
      {
        "source": {
          "id": "ars-technica",
          "name": "Ars Technica"
        },
        "author": "Dan Goodin",
        "title": "Critical vulnerability affecting most Linux distros allows for bootkits - Ars Technica",
        "description": "Buffer overflow in bootloader shim allows attackers to run code each time devices boot up.",
        "url": "https://arstechnica.com/security/2024/02/critical-vulnerability-affecting-most-linux-distros-allows-for-bootkits/",
        "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2023/07/exploit-vulnerability-security-760x380.jpg",
        "publishedAt": "2024-02-07T01:37:36Z",
        "content": "13\r\nLinux developers are in the process of patching a high-severity vulnerability that, in certain cases, allows the installation of malware that runs at the firmware level, giving infections access … [+3210 chars]"
      },
      {
        "source": {
          "id": "associated-press",
          "name": "Associated Press"
        },
        "author": "STEPHEN GROVES, MARY CLARE JALONICK, AAMER MADHANI",
        "title": "Biden tells Congress to 'show some spine' as border deal derails - The Associated Press",
        "description": "A Senate deal on border enforcement measures and Ukraine aid has suffered swift and total collapse. Republicans withdrew support despite President Joe Biden urging Congress to “show some spine” and stand up to Donald Trump. But Senate Republican Leader Mitch …",
        "url": "https://apnews.com/article/congress-border-security-bill-ukraine-b386eae0c4947497da931870dbcb28a0",
        "urlToImage": "https://dims.apnews.com/dims4/default/363d8f1/2147483647/strip/true/crop/6000x3375+0+312/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F44%2Fac%2Fda7cd3341dc097f91a802875f8ee%2Fabd7c7bea29f44c0a90effe789dbc6a2",
        "publishedAt": "2024-02-07T01:27:00Z",
        "content": "WASHINGTON (AP) A Senate deal on border enforcement measures and Ukraine aid suffered a swift and total collapse Tuesday as Republicans withdrew support despite President Joe Biden urging Congress to… [+7284 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "BBC News"
        },
        "author": null,
        "title": "California flooding: Storm-soaked neighbourhoods brace for mudslides - BBC.com",
        "description": "The rain is forecast to linger into Tuesday night, placing millions of people under a risk of flooding.",
        "url": "https://www.bbc.com/news/world-us-canada-68206819",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/D83D/production/_132575355_gettyimages-1989095800.jpg",
        "publishedAt": "2024-02-07T01:03:54Z",
        "content": "By Brandon DrenonBBC News\r\nWatch: LA fire department rescue man from surging river\r\nThe record rain pounding California since Sunday is expected to linger and drive up the threat of mudslides and fla… [+3497 chars]"
      },
      {
        "source": {
          "id": "associated-press",
          "name": "Associated Press"
        },
        "author": "DAVID KOENIG",
        "title": "Boeing jetliner bolts missing before midflight blow out - The Associated Press",
        "description": "Investigators say bolts that helped secure a panel on the Boeing jetliner were missing before the panel blew off the plane in midflight last month. The National Transportation Safety Board issued a preliminary report Tuesday into the Jan. 5 accident. The loss…",
        "url": "https://apnews.com/article/boeing-emergency-landing-report-alaska-airlines-8543c90b68b4d932a700cf57ff8f1b8e",
        "urlToImage": "https://dims.apnews.com/dims4/default/584198a/2147483647/strip/true/crop/4096x2304+0+214/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F8f%2F7c%2Fe54cf7a26f1e814223ab70eed6ec%2F0ab97509ded34409a8394ae8e330ebe9",
        "publishedAt": "2024-02-07T00:38:00Z",
        "content": "Bolts that helped secure a panel to the frame of a Boeing 737 Max 9 were missing before the panel blew off the Alaska Airlines plane last month, according to accident investigators.\r\nThe National Tra… [+4677 chars]"
      },
      {
        "source": {
          "id": "business-insider",
          "name": "Business Insider"
        },
        "author": "Ellyn Lapointe",
        "title": "NASA Just Dropped Stunning Close-Up Pics of Volcanic Eruptions on Jupiter's Moon Io - ScienceAlert",
        "description": "NASA's Juno spacecraft flew extremely close to Jupiter's eruptive moon Io and took some stunning photos of the world's volcanic activity in action.",
        "url": "https://www.businessinsider.com/nasa-close-up-photos-show-volcanoes-erupt-on-jupiters-moon-2024-2",
        "urlToImage": "https://i.insider.com/65c2516c43bb77284ba3f7dd?width=1200&format=jpeg",
        "publishedAt": "2024-02-07T00:34:43Z",
        "content": "NASA's Juno spacecraft snapped detailed images of the most volcanically active world in our solar system on Saturday. During this close fly-by, the spacecraft spotted plumes of volcanic activity erup… [+2255 chars]"
      },
      {
        "source": {
          "id": "reuters",
          "name": "Reuters"
        },
        "author": "Reuters Canada",
        "title": "Chile's former president Sebastian Pinera dies in helicopter crash - Reuters Canada",
        "description": null,
        "url": "https://www.reuters.com/world/americas/chile-ex-president-sebastianpinera-dies-helicopter-crash-local-media-says-2024-02-06/",
        "urlToImage": null,
        "publishedAt": "2024-02-07T00:16:00Z",
        "content": null
      },
      {
        "source": {
          "id": "cnn",
          "name": "CNN"
        },
        "author": "Sandee LaMotte",
        "title": "Foods we eat are covered in plastics that may be causing a rise in premature births, study says - CNN",
        "description": "Chemicals used in clear plastic food packaging and other products may be responsible for up to 10% of premature births in the US during 2018, a new study found.",
        "url": "https://www.cnn.com/2024/02/06/health/preterm-birth-phthalates-study-wellness/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1211339824.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2024-02-07T00:11:00Z",
        "content": "Premature births are on the rise, yet experts arent sure why. Now, researchers have found synthetic chemicals called phthalates used in clear food packaging and personal care products could be a culp… [+7959 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Yahoo Entertainment"
        },
        "author": "Alex Barinka",
        "title": "Snap Reports Disappointing Revenue During Ad Slump; Shares Plunge - Yahoo Finance",
        "description": "(Bloomberg) -- Snap Inc. plunged more than 30% in late trading after posting disappointing revenue in the holiday quarter, a sign the owner of the Snapchat...",
        "url": "https://finance.yahoo.com/news/snap-reports-disappointing-revenue-during-214317242.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/Q_nrEPtDSMcOjRzLDH0NPg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MjM-/https://media.zenfs.com/en/bloomberg_technology_68/1edf3876d79ccffeac382694ab1706e0",
        "publishedAt": "2024-02-07T00:03:00Z",
        "content": "(Bloomberg) -- Snap Inc. plunged more than 30% in late trading after posting disappointing revenue in the holiday quarter, a sign the owner of the Snapchat app is still reeling from a slump in its di… [+4219 chars]"
      },
      {
        "source": {
          "id": "axios",
          "name": "Axios"
        },
        "author": "Axios",
        "title": "Sports betting and Swifties converge on the Super Bowl - Axios",
        "description": null,
        "url": "https://www.axios.com/2024/02/06/taylor-swift-super-bowl-sports-betting",
        "urlToImage": null,
        "publishedAt": "2024-02-06T23:21:12Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "BBC News"
        },
        "author": null,
        "title": "Actress Gina Carano sues Disney and Lucasfilm with Elon Musk's help - BBC.com",
        "description": "The actress was fired in 2021 for comparing being a Republican to being a Jew during the Holocaust.",
        "url": "https://www.bbc.com/news/world-us-canada-68223906",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/8E23/production/_132578363_gettyimages-1194400200.jpg",
        "publishedAt": "2024-02-06T23:17:25Z",
        "content": "Gina Carano claims she faced \"a bullying smear campaign\" over her social media posts\r\nActress Gina Carano has sued Disney and Lucasfilm after she was sacked in 2021 over a social media post in which … [+3039 chars]"
      },
      {
        "source": {
          "id": "fortune",
          "name": "Fortune"
        },
        "author": "María Soledad Davila Calero",
        "title": "Jamie Dimon wants employees back at the office. That should become even easier with JPMorgan adding 500 branches over the next 3 years - Fortune",
        "description": "The “multibillion-dollar” expansion also will include renovations at 1,700 locations.",
        "url": "https://fortune.com/2024/02/06/jamie-dimon-jpmorgan-500-new-branches-expansion/",
        "urlToImage": "https://content.fortune.com/wp-content/uploads/2024/02/jpm-expansion-plans-e1707251764673.jpg?resize=1200,600",
        "publishedAt": "2024-02-06T22:49:00Z",
        "content": "Another 1,700 also will be renovated as part of a three-year expansion plan that should please CEO Jamie Dimon, whos decried remote work and argued that business is best done in person. \r\nIn general,… [+2028 chars]"
      }
    ]
  };
  constructor() {
    super();
    console.log("hello! this is a constructor from News components");
    this.state = {
      articles: this.articles.articles,
      loading: false
    }
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey-Top headline</h2>
        {/* {console.log(this.state.articles.articles[0].author)} */}
        <div className="row container">
          {this.state.articles.map((element) => {
            return <div className="col-md-4 my-2">
              <NewsItem title={element.title} description={element.description} url={element.urlToImage} newsurl="TODO" />
            </div>

          })}


        </div>
      </div>
    )
  }
}
export default News