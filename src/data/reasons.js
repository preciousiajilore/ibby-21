// Example for first 3; repeat up to 21.
// You can keep using your existing structure—these fields are optional.
const reasons = [
  {
    id: 1,
    title: "reason #1 — your laugh",
    lines: [
      "i genuinely love hearing you laugh 💖",
      "it makes everything lighter. i get less tense, more at ease.",
      "i also love making you laugh hehe. i know how ridiculous i am",
      "like even looking at our facetime videos of you lauhghing makes me laugh and always brings a smile to my face :)",
    ],
     media:{
      type : "video",
      src: "/videos/r01.mp4",
    },
    image: "/images/polaroids/r05.jpg",
    //alt: "us laughing",
    // optional: tweak the photo angle/position
    photo: { rotate: -14, x: -0.5, y: -28, scale: 1.5 },
    heart: { color: "#F472B6" } // tailwind pink-400
  },
  {
    id: 2,
    title: "reason #2 — you're kind",
    lines: [
      "you’re gentle with people and with yourself.",
      "you always think of others and put their needs before yours. whether its friends or family or even a group of students that ",
      "are being bums and not doing their part of the group project, you always try your best to be understanding and patient.",
      "i admire that so much about you and I wish i could be more like that.",
   
      "i learn from you every day."
    ],
     media:{
      type : "video",
      src: "/videos/r02.mp4",
    },
    image: "/images/polaroids/r02.JPG",
    //alt: "you being adorable",
    photo: { rotate: -30, x: -18, y: 240, scale: 1.5 },
    heart: { color: "#FB7185" } // rose-400
  },
  {
    id: 3,
    title: "reason #3 - you make me happy",
    lines: [
      "genuinely, you make me incredibly happy. I can't even put it into words but its to the extent that my heart feels full when I'm with you.",
      "it craves your presence and your attention when you're not around. Thats why sometimes I get clingy (my badddd) and just be staring at you cause",
      "im just happy being near you.",
    ],
    media:{
      type : "video",
      src: "/videos/r03.mp4",
    },
    image: "/images/polaroids/r03.jpg",
    //alt: "polaroid 3",
    photo: { rotate: -20, x: -26, y: 100, scale: 1.5 },
    heart: { color: "#A78BFA" } // violet-400
  },
  {
    id: 4,
    title: "reason #4 — you are intentional",
    lines: [
      "even before we started dating, i noticed how intentional you were with everything you did. whether its how you treat your friends and family,",
      "you spare no effort in making sure that they feel loved and appreciated and seen. you look into every little detail to make sure that everything is perfect.",
      "you always remember the small things about me and it makes me feel so special.",
      "like how you remember my favorite snacks or the little things i mention in passing and then surprise me with them later.",
      "it shows how much you care and pay attention and i love that about you so much.",
      "it shows that when you deeply care about someone, you go all out to make them feel special.",
      "and thats one of the many reasons why i love you."
    ],
    media:{
      type : "video",
      src: "/videos/r04.mp4",
    },
    image: "/images/polaroids/r04.JPG",
    //alt: "us laughing",
    // optional: tweak the photo angle/position
    photo: { rotate: 14, x: -0.5, y: 200, scale: 1.5 },
    heart: { color: "#F472B6" } // tailwind pink-400
  },
  {
    id: 5,
    title: "reason #5 — you're supportive",
    lines: [
      "i know you say that don't know how to support me but you do. you always try your best to be there for me",
      "whether its listening to me rant about my day or giving me advice when i need it or showing up to my research presentations and staring down the guy who's being rude to me.",
      "i literally don't know how i would have gotten through the past how many years even before we actually started dating without your support.",
      "you always find a way to be there for me and i appreciate that so much cause not many people would.",
      "even when you're busy with school or work, you always make time for me and check in on me.",
      "i feel less alone knowing that you're always there for me."
    ],
    media:{
      type : "video",
      src: "/videos/r05.mp4",
    },
    image: "/images/polaroids/r01.JPG",
    //alt: "us laughing",
    // optional: tweak the photo angle/position
    photo: { rotate: 0, x: 25, y: 200, scale: 1.5 },
    heart: { color: "#F472B6" } // tailwind pink-400
  },
  {
    id: 6,
    title: "reason #6 — you're creative",
    lines: [
      "i feel like you genuinely try your best to make things special and unique. whether its the way you plan our dates or the little surprises you do for me.",
      "even if its something small, you always find a way to make it special and memorable.",
      "i will never forget that valentine's day you got me the flower and teddy box with the necklace inside, yeah that made my day.",
      "or during girlfriend's day when you had that custom heart cutout with our pictures and the bible verse, like how do u even think of these things??",
      "it shows how much thought and effort you put into making me happy and i love that about you.",
    ],
     media:{
      type : "video",
      src: "/videos/r06.mp4",
    },
    image: "/images/polaroids/r06.jpg",
    //alt: "us laughing",
    // optional: tweak the photo angle/position
    photo: { rotate: -14, x: -0.5, y: 50, scale: 1.5 },
    heart: { color: "#B4D1F2" } // tailwind pink-400
  },
  {
    id: 7,
    title: "reason #7 — you're protective",
    lines: [
      "i think its one of the smallest things that i noticed about you, like if someone is mean to me or even if im just having a bad day, you always try to protect me and make me feel safe.",
      "like remember danna from wisest and how she was rude and you were like lemme see her like where she at lol",
      "you're also protective in the sense that you always try to make sure that im okay and that im not getting hurt to the point that it pisses you off when im sick and im not taking care of myself.",
      
    ],
    media:{
      type : "video",
      src: "/videos/r07.mp4",
    },
    image: "/images/polaroids/r07.jpg",
    //alt: "us laughing",
    // optional: tweak the photo angle/position
    photo: { rotate: -30, x: -30, y: 50, scale: 1.5 },
    heart: { color: "#F472B6" } // tailwind pink-400
  },{
    id: 8,
    title: "reason #8 — you make sure i eat lol, jk that im okay",
    lines: [
      "its no secret that i dont like to eat and sometimes i forget to eat when im busy with work or school.",
      "but you always make sure that im eating and taking care of myself. I remember that one time i cant remember why but i was craving shawarma and you ordered it for me even though you were in Calgary",
      "guy that shawarma hit diffrent what the heckkk, like it made me so happy",
      "like even when you get my favorite snacks or surprise me with food, it shows how much you care about me and my well-being.",
      "and when you plan our dates, you always make sure that we go to places with good food and that i eat enough.",
      "i appreciate that so much cause it shows that you care about me and want me to be healthy and happy."
    ],
    media:{
      type : "video",
      src: "/videos/r08.mp4",
    },
    image: "/images/polaroids/r08.jpg",
    //alt: "kbbqqqq day",
    // optional: tweak the photo angle/position
    photo: { rotate: -14, x: -0.5, y: -28, scale: 1.5 },
    heart: { color: "#F472B6" } // tailwind pink-400
  },
  {
    id: 9,
    title: "reason #9 — you're down to do anything with me",
    lines: [
      "i feel like i can say lets do this and youre always down to do it with me no matter what it is.",
      "like you'll start planning it with me and all and it makes me more excited to do it",
      "i think its also your way of being encouraging or supportive and its nice to know im not dragging you around and you genuinely want to be around me no matter what we are doing"
    ],
    media:{
      type : "video",
      src: "/videos/r09.mp4",
    },
    image: "/images/polaroids/r09.jpg",
   // alt: "us laughing",
    // optional: tweak the photo angle/position
    photo: { rotate: -14, x: -0.5, y: -28, scale: 1.5 },
    heart: { color: "#F472B6" } // tailwind pink-400
  },
  {
    id: 10,
    title: "reason #10 — you're patient",
    lines: [
      "yeah man cl, i don't know how you do it but you have to be the one of the most patient people (is that even proper grammar) that i know. Like guy you waited like almost 2 years for me to make up my mind and you never let me doubt for a second that you stopped liking me.",
      "and even when we got together and started dating, you were patient with me in terms of learning to give me time and space to open up and talk to you about things even though im certain it bothered you like mad",
      "if i needed time you gave me that and if i needed space you gave me that, and i don't know what expense that came at but you never used that against me. i dont know how i got so lucky with you"
    ],
    media:{
      type : "video",
      src: "/videos/r10.mp4",
      
    },
    image: "/images/polaroids/r10.jpg",
    //alt: "us laughing",
    // optional: tweak the photo angle/position
    photo: { rotate: 0, x: 20, y: 180, scale: 1.5 },
    heart: { color: "#F472B6" } // tailwind pink-400
  },
  {
    id: 11,
    title: "reason #11 — you make me feel special",
    lines: [
      "you have your ways of making me feel special, whether its remembering something about me or making sure that when i put on my jacket my hair isn't stuck in between.",
      "thats why i used this picture from my birthday cause apart from my 6th birthday i've never felt like this before on my birthday where im genuinely happy and im having a great time cause i dont have to worry about anything that day cause ibby's got it",
      "i kid you not this has to be one of my favourite memories and as someone who despises their birthday you sure made it feel like on of the most special days ever"
    ],
    media:{
      type : "video",
      src: "/videos/r11.mp4",
    },
    image: "/images/polaroids/r11.jpg",
    //alt: "us laughing",
    // optional: tweak the photo angle/position
    photo: { rotate: -14, x: -0.5, y: 180, scale: 1.5 },
    heart: { color: "#F472B6" } // tailwind pink-400
  },
  {
    id: 12,
    title: "reason #12 — you always look after me",
    lines: [
      "whether its you making sure im covered with my blanket or i have my waterbottle to drink from, you're always looking after me. If i'm sick or tired you are there. If i'm crying out of my mind you're there",
      "i feel at ease when im around you, like i dont need to be hyperfixiated on something cause you're there and as time has passed i've gotten more comfortable with letting you lead and just relaxing on my part.",
      "i think thats why its so easy for me to fall asleep when you're there physically or on the phone cause other nights i can try and stay up quite late but when you're there im less tense and my body is at ease."
    ],
    media:{
      type : "video",
      src: "/videos/r12.mp4",
    },
    image: "/images/polaroids/r12.jpg",
    //alt: "us laughing",
    // optional: tweak the photo angle/position
    photo: { rotate: -14, x: -0.5, y: 200, scale: 1.5 },
    heart: { color: "#F472B6" } // tailwind pink-400
  },
  {
    id: 13,
    title: "reason #13 — you're so funny",
    lines: [
      "i think thats one of the things that drew me to you cause i thought you were incredibly funny (don't let this get to your head o). If i needed to laugh or someone to cheer me up i would listen to you yap about something or describe something and especially when you go HHUuuuHHH",
      "like even when we aren't like on the phone just looking back at pictures and videos i just find it incredibly cute and funny and it always brings a smile to my face",
      
    ],
    media:{
      type : "video",
      src: "/videos/r13.mp4",
    },
    image: "/images/polaroids/r13.jpg",
    //alt: "us laughing",
    // optional: tweak the photo angle/position
    photo: { rotate: -14, x: -0.5, y: -28, scale: 1.5 },
    heart: { color: "#F472B6" } // tailwind pink-400
  },
  {
    id: 14,
    title: "reason #14 — you're my person",
    lines: [
      "its crazy how everything feels natural with you like as time has gone by i just feel like you have become my person (and hopefully i've become your's) to the point that i can talk to you about anything and just be myself",
      "i don't even question how i feel about you i just know and i think one of the times that i realized that it would be incredibly hard to be without you was when we weren't really talking cause we decided not to and it lasted for like what",
      "three days?? Guy the way my body was just itching me and i would want to pick up my phone and just text or call you. And the thing is i don't think that if we still ended up not talking i would get used to it cause seeing you whenever always made my heart like sink and it was like i was missing something",
      "you're truly someone who i can't do without and i will always want you in my life"
    ],
    media:{
      type : "video",
      src: "/videos/r14.mp4",
    },
    image: "/images/polaroids/r14.jpg",
    //alt: "us laughing",
    // optional: tweak the photo angle/position
    photo: { rotate: 14, x: -30, y: 200, scale: 1.8 },
    heart: { color: "#F472B6" } // tailwind pink-400
  },
  {
    id: 15,
    title: "reason #15 — you're my gist partner",
    lines: [
      "the way we used to gist especially in second year cause what was everyone on, like was there something in the air anyways we could talk and talk and talk like theres no tomorrow", 
      "like remember that night the thing happened with yk who and we spent the next day on calls with people trying to settle things for them. Or those times when we used to analyze what went down and what people could possibly have been thinking",
      "or when i would come back from work and we would analyze things together. I love our lil cho cho cho sessions and i hope it doesnt end especially with you going away soon sigh",

    ],
    media:{
      type : "video",
      src: "/videos/r15.mp4",
    },
    image: "/images/polaroids/r15.JPG",
    //alt: "us laughing",
    // optional: tweak the photo angle/position
    photo: { rotate: -14, x: -0.5, y: -28, scale: 1.7 },
    heart: { color: "#F472B6" } // tailwind pink-400
  },
  {
    id: 16,
    title: "reason #16 — guy you too fine",
    lines: [
      "when i say you're such a fine guy like chai let me get some water rq (ik cringe) but im serious you're so handsome and beautiful if you knew your potential you might acc leave me",
      "yeah sometimes i just like to stare and admire whether its when you're talking (cause in those moments all i hear while you talk is blah blah blah proper name, place name, backstory stuff) cause damn chai God took his time fr",
      "yeah i didnt want this to see superficial but i had to acknowledge it but yeah man chai...let me stop there"
    ],
    media:{
      type : "video",
      src: "/videos/r16.mp4",
    },
    image: "/images/polaroids/r16.jpg",
    //alt: "us laughing",
    // optional: tweak the photo angle/position
    photo: { rotate: -14, x: -0.5, y: 100, scale: 1.5 },
    heart: { color: "#F472B6" } // tailwind pink-400
  },
  {
    id: 17,
    title: "reason #17 — you love God",
    lines: [
      "it means the world to be with someone who seeks to elevate their faith and relationship with God. I know that if im going through something you can,and probably will without me having to ask, pray for me and with me ",
      "its something i prayed about myself and was like God please i want to be with someone who wants know you more and seek you everyday. You've been firm in your belief that God was going to give you your internship and you declared it since and look at it now. Its really amazing to see cause I'm trying to learn that too",
      "but yeah I pray that God continues to preserve our relationship, our minds and our connection. I love what we are building and i hope that God has greater plans in store for us"
    ],
    media:{
      type : "video",
      src: "/videos/r17.mp4",
    },
    image: "/images/polaroids/r17.jpg",
    //alt: "us laughing",
    // optional: tweak the photo angle/position
    photo: { rotate: -14, x: -0.5, y: -28, scale: 1.5 },
    heart: { color: "#F472B6" } // tailwind pink-400
  },
  {
    id: 18,
    title: "reason #18 — you're hardworking",
    lines: [
      "i think one of the best parts of knowing you and not just being with you is seeing your growth. The first year IB is definitely not the same as this present IB in fact he would look up to you for advice and just want to be like you",
      "especially during second year, you tried your hardest to come out with better results and you did that but also as a better person. No matter how hard it gets you still try your best and try to work through it. Your determination has brought you this far and will continue to take you even further",
      "and you might not know it but knowing that you're out there trying your best and still working even if something doesn't work out makes me want to continue to work hard and push myself",
      "and also look how you locked in and applying to a gazillion jobs, fixed your resume, networked with others, joined a club and more like come on, i'm so proud of you"
     
    ],
    media:{
      type : "video",
      src: "/videos/r18.mp4",
    },
    image: "/images/polaroids/r18.jpg",
    //alt: "us laughing",
    // optional: tweak the photo angle/position
    photo: { rotate: -14, x: -0.5, y: -28, scale: 1.5 },
    heart: { color: "#F472B6" } // tailwind pink-400
  },
  {
    id: 19,
    title: "reason #19 — you're silly",
    lines: [
      "your silliness reminds me to lighten up sometimes and not be so tense and uptight. i feel like i need that in my life cause im always so worked up but you remind me to not take everything so seriously and to just chill sometimes ",
      "i think thats why i like watching you play pro-clubs sometimes (not always tho, show your girl some loveee) cause seeing you destress with your guys and you just trolling each other or joking around reminds me to try and do the same in my life",
      
    ],
    media:{
      type : "video",
      src: "/videos/r19.mp4",
    },
    image: "/images/polaroids/r19.jpg",
    //alt: "us laughing",
    // optional: tweak the photo angle/position
    photo: { rotate: -14, x: -0.5, y: -28, scale: 1.5 },
    heart: { color: "#F472B6" } // tailwind pink-400
  },
  {
    id: 20,
    title: "reason #20 — you make me giddy",
    lines: [
      "okay so bear with me i don't know the right word to use but the best way i can explain it is like when you order something and you cant wait to get it and the excitement that comes with it yk?",
      "thats how you make me feel especially when you come over and i get to see you, yess especially in the summer when you would come from Calgary, you have no idea how happy i was like its not just happy but i was like my boyfriend is cominnggggg.",
      "like im soo exciteddd. Yeah i rarely have this child-like feeling where i'm super excited to just see someone and i absolutely cant wait, like if you saw me i would be giggling and shi anticipating your arrival"
    ],
    media:{
      type : "video",
      src: "/videos/r20.mp4",
    },
    image: "/images/polaroids/r20.jpg",
    //alt: "us laughing",
    // optional: tweak the photo angle/position
    photo: { rotate: -14, x: -0.5, y: -28, scale: 1.5 },
    heart: { color: "#F472B6" } // tailwind pink-400
  },
  {
    id: 21,
    title: "reason #21 — cause you are you",
    lines: [
      "i honestly never expected to meet anyone in uni let alone in my first year of it. I did pray to God about who ever my boyfriend was going to be and but i thought it would be a while before i met someone like you",
      "you were one of the most unexpected surprises but i wouldnt have it any other way. You see me in a way that others don't and you love me for who i am and who i'm learning to become. There is not a single day that goes by that i'm not grateful to God that our paths crossed and I got to meet you on my first day (talk about obvious signs)",
      "you are an incredible person and im blessed to get to experience your love, warmth and kindness everyday. I can't wait to see where life takes us next as long as i still have you i'm sure we'll be alright. i love you endlessly, happy 21st birthday<3"
    ],
    media :{
      type: "video",
      src: "/videos/r21.mp4",
      //poster: "/images/polaroids/r21.jpg",
      alt: "us laughing",
    },
    image: "/images/polaroids/r21.jpg",
    //alt: "us laughing",
    // optional: tweak the photo angle/position
    photo: { rotate: -14, x: -0.5, y: -28, scale: 1.5 },
    heart: { color: "#F472B6" } // tailwind pink-400
  },
  
];

export default reasons;
