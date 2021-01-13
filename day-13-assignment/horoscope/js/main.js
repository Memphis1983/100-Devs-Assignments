
// get user to select a sign from the select option
// get zodiac description and image to match the selection
// display the result to the user
//  get the selection based info from horoscopeArray with index
//  get the image based on selection from the imageSource Array
// set the image src attribute to change the image in html
// display result on browser

const horoscopeArray = [
  "Element: Fire \nQuality: Cardinal \nColor: Red \nDay: Tuesday \nRuler: Mars\nGreatest Overall Compatibility: Libra, Leo \nLucky Numbers: 1, 8, 17 \nDate range: March 21 - April 19 \n\n\nStrengths: Courageous, determined, confident, enthusiastic, optimistic, honest, passionate\nWeaknesses: Impatient, moody, short-tempered, impulsive, aggressive\nAries likes: Comfortable clothes, taking on leadership roles, physical challenges, individual sports\nAries dislikes: Inactivity, delays, work that does not use one's talents.",
  "Element: Earth\nQuality: Fixed\nColor: Green, Pink\nDay: Friday, Monday\nRuler: Venus\nGreatest Overall Compatibility: Scorpio, Cancer\nLucky Numbers: 2, 6, 9, 12, 24\nDate range: April 20 - May 20\n\n\nStrengths: Reliable, patient, practical, devoted, responsible, stable\nWeaknesses: Stubborn, possessive, uncompromising\nTaurus likes: Gardening, cooking, music, romance, high quality clothes, working with hands\nTaurus dislikes: Sudden changes, complications, insecurity of any kind, synthetic fabrics.",
  "Element: Air\nQuality: Mutable\nColor: Light-Green, Yellow\nDay: Wednesday\nRuler: Mercury\nGreatest Overall Compatibility: Sagittarius, Aquarius\nLucky Numbers: 5, 7, 14, 23\nDate range: May 21 - June 20\n\n\nStrengths: Gentle, affectionate, curious, adaptable, ability to learn quickly and exchange ideas\nWeaknesses: Nervous, inconsistent, indecisive\nGemini likes: Music, books, magazines, chats with nearly anyone, short trips around the town\nGemini dislikes: Being alone, being confined, repetition and routine.",
  "Element: Water\nQuality: Cardinal\nColor: White\nDay: Monday, Thursday\nRuler: Moon\nGreatest Overall Compatibility: Capricorn, Taurus\nLucky Numbers: 2, 3, 15, 20\nDate range: June 21 - July 22\n\n\nStrengths: Tenacious, highly imaginative, loyal, emotional, sympathetic, persuasive\nWeaknesses: Moody, pessimistic, suspicious, manipulative, insecure\nCancer likes: Art, home-based hobbies, relaxing near or in water, helping loved ones, a good meal with friends\nCancer dislikes: Strangers, any criticism of Mom, revealing of personal life.",
  "Element: Fire\nQuality: Fixed\nColor: Gold, Yellow, Orange\nDay: Sunday\nRuler: Sun\nGreatest Overall Compatibility: Aquarius, Gemini\nLucky Numbers: 1, 3, 10, 19\nDate range: July 23 - August 22\n\n\nStrengths: Creative, passionate, generous, warm-hearted, cheerful, humorous\nWeaknesses: Arrogant, stubborn, self-centered, lazy, inflexible\nLeo likes: Theater, taking holidays, being admired, expensive things, bright colors, fun with friends\nLeo dislikes: Being ignored, facing difficult reality, not being treated like a king or queen.",
  "Element: Earth\nQuality: Mutable\nColor: Grey, Beige, Pale-Yellow\nDay: Wednesday\nRuler: Mercury\nGreatest Overall Compatibility: Pisces, Cancer\nLucky Numbers: 5, 14, 15, 23, 32\nDate range: August 23 - September 22\n\n\nStrengths: Loyal, analytical, kind, hardworking, practical\nWeaknesses: Shyness, worry, overly critical of self and others, all work and no play\nVirgo likes: Animals, healthy food, books, nature, cleanliness\nVirgo dislikes: Rudeness, asking for help, taking center stage.",
  "Element: Air\nQuality: Cardinal\nColor: Pink, Green\nDay: Friday\nRuler: Venus\nGreatest Overall Compatibility: Aries, Sagittarius\nLucky Numbers: 4, 6, 13, 15, 24\nDate range: September 23 - October 22\n\n\nStrengths: Cooperative,diplomatic, gracious, fair-minded, social\nWeaknesses: Indecisive, avoids confrontations, will carry a grudge, self-pity\nLibra likes: Harmony, gentleness, sharing with others, the outdoors\nLibra dislikes: Violence, injustice, loudmouths, conformity.",
  "Element: Water\nQuality: Fixed\nColor: Scarlet, Red, Rust\nDay: Tuesday\nRuler: Pluto, Mars\nGreatest Overall Compatibility: Taurus, Cancer\nLucky Numbers: 8, 11, 18, 22\nDate range: October 23 - November 21\n\n\nStrengths: Resourceful, brave, passionate, stubborn, a true friend\nWeaknesses: Distrusting, jealous, secretive, violent\nScorpio likes: Truth, facts, being right, longtime friends, teasing, a grand passion\nScorpio dislikes: Dishonesty, revealing secrets, passive people.",
  "Element: Fire\nQuality: Mutable\nColor: Blue\nDay: Thursday\nRuler: Jupiter\nGreatest Overall Compatibility: Gemini, Aries\nLucky Numbers: 3, 7, 9, 12, 21\nDate range: November 22 - December 21\n\n\nStrengths: Generous, idealistic, great sense of humor\nWeaknesses: Promises more than can deliver, very impatient, will say anything no matter how undiplomatic\nSagittarius likes: Freedom, travel, philosophy, being outdoors\nSagittarius dislikes: Clingy people, being constrained, off-the-wall theories, details.",
  "Element: Earth\nQuality: Cardinal\nColor: Brown, Black\nDay: Saturday\nRuler: Saturn\nGreatest Overall Compatibility: Taurus, Cancer\nLucky Numbers: 4, 8, 13, 22\nDate range: December 22 - January 19\n\n\nStrengths: Responsible, disciplined, self-control, good managers\nWeaknesses: Know-it-all, unforgiving, condescending, expecting the worst\nCapricorn likes: Family, tradition, music, understated status, quality craftsmanship\nCapricorn dislikes: Almost everything at some point.",
  "Element: Air\nQuality: Fixed\nColor: Light-Blue, Silver\nDay: Saturday\nRuler: Uranus, Saturn\nGreatest Overall Compatibility: Leo, Sagittarius\nLucky Numbers: 4, 7, 11, 22, 29\nDate range: January 20 - February 18\n\n\nStrengths: Progressive, original, independent, humanitarian\nWeaknesses: Runs from emotional expression, temperamental, uncompromising, aloof\nAquarius likes: Fun with friends, helping others, fighting for causes, intellectual conversation, a good listener\nAquarius dislikes: Limitations, broken promises, being lonely, dull or boring situations, people who disagree with them.",
  "Element: Water\nQuality: Mutable\nColor: Mauve, Lilac, Purple, Violet, Sea green\nDay: Thursday\nRuler: Neptune, Jupiter\nGreatest Overall Compatibility: Virgo, Taurus\nLucky Numbers: 3, 9, 12, 15, 18, 24\nDate range: February 19 - March 20\n\n\nStrengths: Compassionate, artistic, intuitive, gentle, wise, musical\nWeaknesses: Fearful, overly trusting, sad, desire to escape reality, can be a victim or a martyr\nPisces likes: Being alone, sleeping, music, romance, visual media, swimming, spiritual themes\nPisces dislikes: Know-it-all, being criticized, the past coming back to haunt, cruelty of any kind.",
];

const imageSource = [
  "https://res.cloudinary.com/https-kieraniyer-dev-netlify-app/image/upload/v1609913732/Horoscope%20Images/Aries.png",
  "https://res.cloudinary.com/https-kieraniyer-dev-netlify-app/image/upload/v1609913732/Horoscope%20Images/Taurus.png",
  "https://res.cloudinary.com/https-kieraniyer-dev-netlify-app/image/upload/v1609913732/Horoscope%20Images/Gemini.png",
  "https://res.cloudinary.com/https-kieraniyer-dev-netlify-app/image/upload/v1609913732/Horoscope%20Images/Cancer.png",
  "https://res.cloudinary.com/https-kieraniyer-dev-netlify-app/image/upload/v1609913732/Horoscope%20Images/Leo.png",
  "https://res.cloudinary.com/https-kieraniyer-dev-netlify-app/image/upload/v1609913732/Horoscope%20Images/Virgo.png",
  "https://res.cloudinary.com/https-kieraniyer-dev-netlify-app/image/upload/v1609913732/Horoscope%20Images/Libra.png",
  "https://res.cloudinary.com/https-kieraniyer-dev-netlify-app/image/upload/v1609913732/Horoscope%20Images/Scorpio.png",
  "https://res.cloudinary.com/https-kieraniyer-dev-netlify-app/image/upload/v1609913732/Horoscope%20Images/Sagittarius.png",
  "https://res.cloudinary.com/https-kieraniyer-dev-netlify-app/image/upload/v1609913732/Horoscope%20Images/Capricorn.png",
  "https://res.cloudinary.com/https-kieraniyer-dev-netlify-app/image/upload/v1609913733/Horoscope%20Images/Aquarius.png",
  "https://res.cloudinary.com/https-kieraniyer-dev-netlify-app/image/upload/v1609913732/Horoscope%20Images/Pisces.png",
];
const zodiacSelector = document.querySelector("#horoscope").addEventListener("change", showHoroscope);
const showcase = document.querySelector("#textRow2");

let horoscopeImage = document.querySelector("#img_horoscope");
let selection = "";

function showHoroscope() {
  let message = (document.querySelector("#textRow1").innerText = `Here's your Horoscope`);
  let horoscopeSelector = document.querySelector("#horoscope").value;
     let count;
  if (horoscopeSelector === "Aries") {
      count = 0;
  } else if (horoscopeSelector == "Taurus") {
      count = 1;
  } else if (horoscopeSelector == "Gemini") {
      count = 2;
  } else if (horoscopeSelector == "Cancer") {
      count = 3;
  } else if (horoscopeSelector == "Leo") {
      count = 4;
  } else if (horoscopeSelector == "Virgo") {
      count = 5;
  } else if (horoscopeSelector == "Libra") {
      count = 6;
  } else if (horoscopeSelector == "Scorpio") {
      count = 7;
  } else if (horoscopeSelector == "Sagittarius") {
      count = 8;
  } else if (horoscopeSelector == "Capricorn") {
      count = 9;
  } else if (horoscopeSelector == "Aquarius") {
      count = 10;
  } else if (horoscopeSelector == "Pisces") {
      count = 11;
  }

    selection = horoscopeArray[count];
    horoscopeImage.setAttribute("src", imageSource[count]);

  document.querySelector("#textRow2").innerHTML = selection;
  document.querySelector("#restartBtn").style.visibility = "visible";
}
