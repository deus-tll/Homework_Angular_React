import { Club } from "./components/Club";

export const FootballClubs = () => {
  const clubs = [
    {
      name: 'Arsenal',
      city: 'Holloway, North London',
      founded: 'October 1886',
      logo: 'https://upload.wikimedia.org/wikipedia/hif/8/82/Arsenal_FC.png',
      currentPlayers: [
        'Aaron Ramsdale',
        'David Raya',
        'Karl Hein',
        'William Saliba',
        'Ben White',
        'Gabriel',
        'Jurrien Timber',
        'Thomas Partey',
        'Martin Odegaard',
        'Oleksandr Zinchenko',
        'Eddie Nketiah'
      ],
      trophies: [
        'Kent Senior Cup – 1889–90 (1)',
        'London Charity Cup – 1889–90 (1)',
        'London Challenge Cup – 1921–22, 1923–24, 1930–31, 1933–34, 1935–36, 1953–54, 1954–55, 1957–58, 1961–62, 1962–63, 1969–70 (11)',
        'London Senior Cup – 1890–91 (1)',
        'Inter-Cities Fairs Cup – 1969–70 (1)',
        'UEFA Cup Winners’ Cup – 1993–94 (1)',
        'FA Community Shield – 1930, 1931, 1933, 1934, 1938, 1948, 1953, 1991, 1998, 1999, 2002, 2004, 2014, 2015, 2017, 2020, 2023 (17)',
        'FA Cup – 1929–30, 1935–36, 1949–50, 1970–71, 1978–79, 1992–93, 1997–98, 2001–02, 2002–03, 2004–05, 2013–14, 2014–15, 2016-17, 2019-2020 (14)',
        'First Division (until 1992) and Premier League – 1930–31, 1932–33, 1933–34, 1934–35, 1937–38, 1947–48, 1952–53, 1970–71, 1988–89, 1990–91, 1997–98, 2001–02, 2003–04 (13)',
        'League Cup – 1986–87, 1992–93 (2)',
        'Mercantile Credit Centenary Trophy –  1988–89 (1)',
        'Southern Professional Floodlit Cup – 1958-59 (1)'
      ],
      stats: {
        matches: 1198,
        wins: 651,
        losses: 255,
        goals: 2121
      } 
    },
    {
      name: 'Liverpool',
      city: 'Liverpool, England',
      founded: '3 June 1892',
      logo: 'https://upload.wikimedia.org/wikipedia/hif/b/bd/Liverpool_FC.png',
      currentPlayers: [
        'Alisson Becker',
        'Adrian',
        'Marcelo Pitaluga',
        'Joe Gomez',
        'Virgil van Dijk',
        'Ibrahima Konate',
        'Wataru Endo',
        'Thiago Alcantara',
        'Dominik Szoboszlai',
        'Luis Diaz',
        'Darwin Nunez',
      ],
      trophies: [
        'First Division/Premier League – 1900–01, 1905–06, 1921–22, 1922–23, 1946–47, 1963–64, 1965–66, 1972–73, 1975–76, 1976–77, 1978–79, 1979–80, 1981–82, 1982–83, 1983–84, 1985–86, 1987–88, 1989–90, 2019–20 (19)',
        'Second Division – 1893–94, 1895–96, 1904–05, 1961–62 (4)',
        'FA Cup – 1964–65, 1973–74, 1985–86, 1988–89, 1991–92, 2000–01, 2005–06, 2021–22 (8)',
        'Football League Cup/EFL Cup – 1980–81, 1981–82, 1982–83, 1983–84, 1994–95, 2000–01, 2002–03, 2011–12, 2021–22 (9)',
        'FA Charity Shield/FA Community Shield - 1964*, 1965*, 1966, 1974, 1976, 1977*, 1979, 1980, 1982, 1986*, 1988, 1989, 1990*, 2001, 2006, 2022 (* shared) (16)',
        'Football League Super Cup - 1985-86 (1)',
        'European Cup/UEFA Champions League - 1976–77, 1977–78, 1980–81, 1983–84, 2004–05, 2018–19 (6)',
        'UEFA Cup/UEFA Europa League - 1972–73, 1975–76, 2000–01 (3)',
        'UEFA Super Cup - 1977, 2001, 2005, 2019 (4)',
        'FIFA Club World Cup - 2019 (1)',
      ],
      stats: {
        matches: 1199,
        wins: 633,
        losses: 271,
        goals: 2114
      } 
    }
  ];

  const styles = [
    { backgroundColor:  "red", color: "white", border: "3px dashed blue" },
    { backgroundColor:  "black", color: "green", border: "3px solid purple" },
    { backgroundColor:  "purple", color: "black", border: "3px dashed white" },
    { backgroundColor:  "white", color: "black", border: "3px solid red" },
  ];

  const randomStyle = () => styles[Math.floor(Math.random() * styles.length)];

  return(
    <>
      {
        clubs.map((club, index) => (
          <Club key={index} club={club} style={randomStyle()}/>
        ))
      }
    </>
  );
};