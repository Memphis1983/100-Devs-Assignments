Challenge : It is written in the stars

Were you ever interested in the phenomena of astrology, star signs, tarot, voodoo ? (ok not voodoo that's too spooky)...
Task:
Your job for today is to finish the starSign function by finding the astrological sign, given the birth details as a Date object.
Start and end dates for zodiac signs vary on different resources so we will use this table to get consistent results:

Aquarius ------ 21 January - 19 February
Pisces --------- 20 February - 20 March
Aries ---------- 21 March - 20 April
Taurus -------- 21 April - 21 May
Gemini -------- 22 May - 21 June
Cancer -------- 22 June - 22 July
Leo ------------- 23 July - 23 August
Virgo ----------- 24 August - 23 September
Libra ----------- 24 September - 23 October
Scorpio -------- 24 October - 22 November
Sagittarius ---- 23 November - 21 December
Capricorn ----- 22 December - 20 January

Test info: 100 random tests (dates range from January 1st 1940 until now)

Solution: 

function starSign(date) {
var m=date.getMonth();
  var d=date.getDate();
  console.log(m,d)
  if (m==0)
  {
    if (d<21) 
      return "Capricorn";
    else 
      return "Aquarius";
  }
  if (m==1)
  {
    if (d<20) 
      return "Aquarius";
    else 
      return "Pisces";
  }
  if (m==2)
  {
    if (d<21) 
      return "Pisces";
    else 
      return "Aries";
  }
  if (m==3)
  {
    if (d<21) 
      return "Aries";
    else 
      return "Taurus";
  }
  if (m==4)
  {
    if (d<22) 
      return "Taurus";
    else 
      return "Gemini";
  }
  if (m==5)
  {
    if (d<22) 
      return "Gemini";
    else 
      return "Cancer";
  }
  if (m==6)
  {
    if (d<23) 
      return "Cancer";
    else 
      return "Leo";
  }
  if (m==7)
  {
    if (d<24) 
      return "Leo";
    else 
      return "Virgo";
  }
  if (m==8)
  {
    if (d<24) 
      return "Virgo";
    else 
      return "Libra";
  }
  if (m==9)
  {
    if (d<24) 
      return "Libra";
    else 
      return "Scorpio";
  }
  if (m==10)
  {
    if (d<23) 
      return "Scorpio";
    else 
      return "Sagittarius";
  }
  if (m==11)
  {
    if (d<22) 
      return "Sagittarius";
    else 
      return "Capricorn";
  }
}
