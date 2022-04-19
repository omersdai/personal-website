const songs = [
  {
    songName: 'Lose Yourself',
    artist: 'Eminem',
    lyrics: `His palms are sweaty, knees weak, arms are heavy
    There's vomit on his sweater already, mom's spaghetti
    He's nervous, but on the surface he looks calm and ready
    To drop bombs, but he keeps on forgetting
    What he wrote down, the whole crowd goes so loud
    He opens his mouth, but the words won't come out
    He's choking, how? Everybody's joking now
    The clock's run out, time's up, over-blaow!`,
    link: 'https://genius.com/Eminem-lose-yourself-lyrics',
  },
  {
    songName: 'Yellow Brick Road',
    artist: 'Eminem',
    lyrics: `Now with this bein' the new trend, we don't fit in
    Crackas is out with Cactus Albums, blackness is in
    African symbols and medallions represent Black Power
    And we ain't know what it meant, me and my man Howard
    And Butter would go to the mall
    With 'em all over our necks like we're showin' 'em off
    Not knowin' at all we was bein' laughed at
    "You ain't even half black!
    You ain't 'posed to have that, homie, let me grab that!
    And that Flavor Flav clock, we gon' have to snatch that!"`,
    link: 'https://genius.com/Eminem-yellow-brick-road-lyrics',
  },
  {
    songName: 'Rain Man',
    artist: 'Eminem',
    lyrics: `You find me offensive
    I find you offensive-shit, this is the same verse, I just did this
    When am I gonna come to my good senses?
    Probably the day Bush comes to my defenses
    My spider sense is telling me Spider-Man is nearby
    And my plan is to get him next and open up a whoop-ass canister
    God damn it, Dre, where's the goddamn beat?`,
    link: 'https://genius.com/Eminem-rain-man-lyrics',
  },
  {
    songName: 'My 1st Single',
    artist: 'Eminem',
    lyrics: `Around and around I go
    When will I stop? I don't know
    Tryin' to pick up where The Eminem Show left off
    But I know anything's possible
    Though I'm not gonna top what I sold
    I'm at the top of my game, that shit is not gonna change
    Long as I got Dr. Dre on my team I'll get away
    With murder: I'm like O.J., he's like my Cochran today`,
    link: 'https://genius.com/Eminem-my-1st-single-lyrics',
  },
  {
    songName: 'We As Americans',
    artist: 'Eminem',
    lyrics: `We as Americans, us as a citizen
    Gotta protect ourselves, look at how shit has been
    We better check ourselves, livin' up in these streets
    Through worse and through better health, survivin' by any means
    We as Americans, us as a citizen
    We are Samaritans, what do we get us in?
    We better check ourselves, look at how shit has been
    Take a look where you live, this is America, and we are Americans`,
    link: 'https://genius.com/Eminem-we-as-americans-lyrics',
  },
  {
    songName: 'In the End',
    artist: 'Linkin Park',
    lyrics: `One thing, I don't know why
    It doesn't even matter how hard you try
    Keep that in mind, I designed this rhyme
    To remind myself how I tried so hard
    In spite of the way you were mockin' me
    Actin' like I was part of your property
    Rememberin' all the times you fought with me
    I'm surprised it got so far
    Things aren't the way they were before
    You wouldn't even recognize me anymore
    Not that you knew me back then
    But it all comes back to me in the end`,
    link: 'https://genius.com/Linkin-park-in-the-end-lyrics',
  },
  {
    songName: 'The Pursuit of Knowledge',
    artist: 'Zack Hemsey',
    lyrics: `With every book I finished another was there to serve
    For every text I read there were pages still left to turn
    I've learned from all the migrants and drifters to whom I'd listen
    Philosophers and soldiers whose knowledge I would solicit
    I know histories of nations I'll never have chance to visit
    Complexities of science and language with great precision
    But in the end I've seen nothing of what's been given
    This life that I've employed, while I love it, it has its limits
    The failing I regret, though it's painful, I must admit it
    For everything I know of this world, I never lived it`,
    link: 'https://genius.com/Zack-hemsey-the-pursuit-of-knowledge-lyrics',
  },
  {
    songName: 'Papercut',
    artist: 'Linkin Park',
    lyrics: `I know I've got a face in me
    Points out all my mistakes to me
    You've got a face on the inside, too
    And your paranoia's probably worse
    I don't know what set me off first
    But I know what I can't stand
    Everybody acts like the fact of the matter
    Is I can't add up to what you can`,
    link: 'https://genius.com/Linkin-park-papercut-lyrics',
  },
  {
    songName: 'Lost and Found',
    artist: 'Zack Hemsey',
    lyrics: `I used to hear them say of bad news, when it rains then it pours
    Fitting for a generation yearning out for more
    A story of the ancients etched in relics from before
    Faded echoes that survive this vicious cycle that we mourn
    No telling how much pain a people can ignore
    How much heartache can communities endure?
    How much of the problem is systemic and ensured?
    How much profit over people can executives procure?
    Tension on my conscience, feel it wrenching at the core
    The walls are closing in, I need an exit to explore
    When precious opportunity comes knocking at the door
    Will you dive into the waters or keep standing at the shore?`,
    link: 'https://genius.com/Zack-hemsey-lost-and-found-lyrics',
  },
  {
    songName: 'Moonlight',
    artist: 'XXXTENTACION',
    lyrics: `Feel like I'm destined
    I don't need no Smith & Wesson, no
    Boy, who you testin'?
    Fuck a Scantron, here's your lesson, oh
    Knife in intestine
    Takin' shots at all your brethren, no
    Feel like I'm damaged
    Girl I know you fucking planned this`,
    link: 'https://genius.com/Xxxtentacion-moonlight-lyrics',
  },
  {
    songName: 'Pushing Me Away',
    artist: 'Linkin Park',
    lyrics: `I've lied to you
    The same way that I always do
    This is the last smile
    That I'll fake for the sake of being with you

    Everything falls apart, even the people
    Who never frown eventually break down
    The sacrifice of hiding in a lie
    Everything has to end, you'll soon find
    We're out of time left to watch it all unwind`,
    link: 'https://genius.com/Linkin-park-pushing-me-away-lyrics',
  },
  {
    songName: 'The Runner',
    artist: 'Zack Hemsey',
    lyrics: `Out of control his compulsion to flee
    Absent of value as best he could see
    As from within so without unto thee
    Knew he'd strike out on his own eventually
    And so it would be
    Patience no virtue amid certainty
    Fortune unknown but determinedly
    On the day when he had turned twenty three`,
    link: 'https://genius.com/Zack-hemsey-the-runner-lyrics',
  },
  {
    songName: 'High Voltage',
    artist: 'Linkin Park',
    lyrics: `I've been digging into crates ever since I was living in space
    Before the rat race, before monkeys had human traits
    I mastered numerology and Big Bang theology
    Performed lobotomies with telekinetic psychology
    Invented the mic so I could start blessing it
    Chin-checking kids to make my point like an impressionist
    Many men have tried to shake us
    But I twist mic cords to double helixes and show them what I'm made of`,
    link: 'https://www.azlyrics.com/lyrics/linkinpark/highvoltage.html',
  },
  {
    songName: 'Mockingbird',
    artist: 'Eminem',
    lyrics: `And if you ask me to, Daddy's gonna buy you a mockingbird
    I'ma give you the world
    I'ma buy a diamond ring for you, I'ma sing for you
    I'll do anything for you to see you smile
    And if that mockingbird don't sing and that ring don't shine
    I'ma break that birdie's neck
    I'll go back to the jeweler who sold it to ya
    And make him eat every carat, don't fuck with Dad!`,
    link: 'https://genius.com/Eminem-mockingbird-lyrics',
  },
  {
    songName: 'Booyaka 619',
    artist: 'P.O.D, WWE',
    lyrics: `And we the Southtown generals, Diego Don originals
    Hitman for hire, made wiseguys untouchable
    Border bandits, running the streets and the canvas
    We live and direct, no reruns, that's what's happening
    Blow up the mannequin, better go ask your friends again
    Terror in their eyes when they tell you "here comes the mask again"`,
    link: 'https://genius.com/Pod-booyaka-619-rey-mysterio-lyrics',
  },
  {
    songName: 'Over and Under',
    artist: 'Egypt Central',
    lyrics: `I'm over me being under you
    I'm breaking free, I'm breaking through
    I've overcome all I'm underneath
    I can finally stand
    I can finally breathe
    I'm over me being under you
    I'm breaking free, I'm breaking through
    I've overcome all I'm underneath
    I can finally stand
    I can finally breathe`,
    link: 'https://genius.com/Egypt-central-over-and-under-lyrics',
  },
  {
    songName: 'Points of Authority',
    artist: 'Linkin Park',
    lyrics: `Forfeit the game before somebody else
    Takes you out of the frame and puts your name to shame
    Cover up your face, you can't run the race
    The pace is too fast, you just won't last`,
    link: 'https://genius.com/Linkin-park-points-of-authority-lyrics',
  },
  {
    songName: 'Evil Deeds',
    artist: 'Eminem',
    lyrics: `Evil deeds, while I plant these evil seeds
    Please release me from these demons
    I never had any of this shit planned, Mom, please believe
    I don't wanna be Satan's spawn
    Never got the chance to say I'm sorry
    Now look at all the pain I caused
    Dear Santa Claus, why are you not comin' this year again?
    What did I do that was so bad to deserve this?`,
    link: 'https://genius.com/Eminem-evil-deeds-lyrics',
  },
  {
    songName: 'My Band',
    artist: 'D12',
    lyrics: `Look at Em's little punk ass, thinking he the shit
    Yeah, I know, man, by himself, taking all the flicks
    Hey, I thought we had an interview with DJ Clue?
    No, I had an interview, not you two
    You gon' be late for soundcheck! Man, I ain't going to soundcheck
    And our mics are screwed up! And his always sound best
    You know what, man? I'ma say somethin'`,
    link: 'https://genius.com/D12-my-band-lyrics',
  },
  {
    songName: 'Best Friend',
    artist: 'Yelawolf, Eminem',
    lyrics: `Ain't never been much of the church type
    But I believe in the last days
    I walk through Hell almost every night
    But I believe it's a pathway
    Say, boy, what you doin' with your life
    With those tattoos on your face?
    Say, boy, you know that you'll pay the price
    Well, I guess I'll see when I head that way`,
    link: 'https://genius.com/Yelawolf-best-friend-lyrics',
  },
  {
    songName: 'Runaway',
    artist: 'Linkin Park',
    lyrics: `Paper bags and angry voices under a sky of dust
    Another wave of tension has more than filled me up
    All my talk of taking action, these words were never true
    
    Now I find myself in question
    They point the finger at me again
    Guilty by association
    You point the finger at me again`,
    link: 'https://genius.com/Linkin-park-runaway-lyrics',
  },
  {
    songName: 'Toss a Coin to Your Witcher',
    artist: 'Sonya Belousova, Giona Ostinelli, Joey Batey',
    lyrics: `At the edge of the world, fight the mighty horn
    That bashes and breaks you and brings you to mourn
    He thrust every elf far back on the shelf
    High up on the mountain from whence it came
    He wiped out your pest, got kicked in his chest
    He's a friend of humanity, so give him the rest
    That's my epic tale: our champion prevailed
    Defeated the villain, now pour him some ale!`,
    link: 'https://genius.com/Sonya-belousova-giona-ostinelli-and-joey-batey-toss-a-coin-to-your-witcher-lyrics',
  },
  {
    songName: 'A Place for My Head',
    artist: 'Linkin Park',
    lyrics: `I watch how the moon sits in the sky in the dark night
    Shining with the light from the sun
    The sun doesn't give light to the moon assuming
    The moon's gonna owe it one
    It makes me think of how you act to me
    You do favors, then rapidly
    Just turn around and start askin' me about
    Things that you want back from me`,
    link: 'https://genius.com/Linkin-park-a-place-for-my-head-lyrics',
  },
  {
    songName: 'Lost My Way',
    artist: 'Sickick',
    lyrics: `You can't see but I've become a monster
    Lost every day and night
    Whispers in my head I'm feeling haunted
    Flash of the streetlight
    Walking all alone watching the rain
    Fall on me like the weight of life
    They don't understand this pain of mine...`,
    link: 'https://genius.com/Sickick-lost-my-way-lyrics',
  },
  {
    songName: 'Praise the Lord',
    artist: 'A$AP Rocky',
    lyrics: `Uh, twenty bands, rain dance
    We could either rain check or we can make plans
    Pockets loaded, rocket loaded, okay, let's rock and roll this
    It's time to go, Lock, Stock, and Two Smoking Barrels
    Locked and loaded, diamonds glowing, chart-climbing on 'em
    You'd think I'm jumping out the window how I got 'em open
    Line around the corner, line 'em up the block and over
    Sometimes I even stop the smoking when it's time to focus
    My shades, Dior, my pants, velour
    Create, explore, expand, conquer`,
    link: 'https://genius.com/A-ap-rocky-praise-the-lord-da-shine-lyrics',
  },
  {
    songName: 'Ass Like That',
    artist: 'Eminem',
    lyrics: `What do you mean, freeze? Geez, I just got my seat
    I have ticket, look, I put it away, my zipper's zipped
    Please do not remove me from this movie theater, please
    I did not even get to see Mary-Kate shower scene
    I didn't mean to be obscene or make a great, big scene
    And don't treat me like I'm Pee-wee Herman, this movie's PG
    Mr. Officer, I demand to see my attorney
    I will simply plead innocent, cop a plea, and be free
    Free, yes, free, right back on the streets
    What do you mean my lawyer's with Michael, he's too busy?`,
    link: 'https://genius.com/Eminem-ass-like-that-lyrics',
  },
  {
    songName: 'Kill Me Slowly',
    artist: 'Sickick',
    lyrics: `I'm drowning in your touch, this ain't love, it's lust
    And you know I can't get enough
    You contr-tr-trol me right, through all my lonely nights
    Only when I'm in between the sheets is when I use her
    Oh, 'cause I'm addicted to your touch and I'm a user
    I'ma put that icing on your body like a jeweller
    We ain't that close, so why am I afraid to lose her?`,
    link: 'https://genius.com/Sickick-kill-me-slowly-lyrics',
  },
  {
    songName: 'Kenji',
    artist: 'Fort Minor',
    lyrics: `They gave Ken a couple of days
    To get his whole life packed in two bags
    Just two bags, he couldn't even pack his clothes
    And some folks didn't even have a suitcase
    To pack anything in
    So two trash bags, is all they gave them
    And when the kids asked mom, "Where are we going?"
    Nobody even knew what to say to them
    Ken didn't wanna lie
    He said, "The U.S. is looking for spies
    So, we have to live in a place called Manzanar
    Where a lot of Japanese people are"`,
    link: 'https://genius.com/Fort-minor-kenji-lyrics',
  },
  {
    songName: 'The Way',
    artist: 'Zack Hemsey',
    lyrics: `Some have said that I was given keys to the city of your dreams
    I'm more content to walk outside the walls and catch a breeze
    I'm more inclined to climb on by or ride internal seas
    I'm more alive to vibe inside a mansion full of trees
    I do this for a reason that they can't pretend to glean
    I lose myself infused in something more than what they've seen
    I'm not a slave to greed
    I don't embrace your make believe
    I've never been for sale, no matter what they think I need`,
    link: 'https://genius.com/Zack-hemsey-the-way-lyrics',
  },
  {
    songName: 'Mind Games',
    artist: 'Sickick',
    lyrics: `Now that I'm in there's no letting go
    And your emptiness begins
    Once I grip onto your mind and soul
    Your brightness starts to dim
    Sin after sin you won't feel no more
    And you've lost your trust again
    I know you wish you could let me know
    That you're praying for an end`,
    link: 'https://genius.com/Sickick-mind-games-lyrics',
  },
  {
    songName: 'Revelations',
    artist: 'Zack Hemsey',
    lyrics: `Climb on in the race to belong
    Hang on in the face of the harm
    Move through with the pace of a charge
    And resist the alarm to embrace all the wrong
    Is it truth or just words in a song
    Is it hope, is it fear of forgone
    Am I knight, am I lowly the pawn
    Let it known at the sound of the gong`,
    link: 'https://genius.com/Zack-hemsey-revelations-lyrics',
  },
  {
    songName: 'Intentions',
    artist: 'Justin Bieber',
    lyrics: `Already passed, you don't need no approval
    Good everywhere, don't worry 'bout no refusal
    Second to none, you got the upper hand now
    Don't need a sponsor, nope, you're the brand now
    You're my rock, my Colorado
    Got that ring, just like Toronto
    Love you now, a little more tomorrow
    This how I feel, act like you know that you are`,
    link: 'https://genius.com/Justin-bieber-intentions-lyrics',
  },
  {
    songName: `Gangsta's Paradise`,
    artist: 'Coolio',
    lyrics: `As I walk through the valley of the shadow of death
    I take a look at my life and realize there's nothin' left
    'Cause I've been blastin' and laughin' so long, that
    Even my momma thinks that my mind is gone
    But I ain't never crossed a man that didn't deserve it
    Me be treated like a punk, you know that's unheard of`,
    link: 'https://genius.com/Coolio-gangstas-paradise-lyrics',
  },
  {
    songName: 'Soothsayer',
    artist: 'Zack Hemsey',
    lyrics: `By week's end her legend was tenfold
    The news of the heavenly oracle took hold
    I stood in her audience, now at the crossroads
    As swarms had developed surrounding her small home
    Then I spoke, not of to be, but what's been
    And warned of the slippery slope that she slid
    That I see an era of violence that brims
    And implored she consider this choice that I give`,
    link: 'https://genius.com/Zack-hemsey-soothsayer-lyrics',
  },
  {
    songName: 'Forgotten',
    artist: 'Linkin Park',
    lyrics: `Movin' all around, screamin' of the ups and downs
    Pollution manifested in perpetual sound
    The wheels go round and the sunset creeps
    Behind street lamps, chain-link, and concrete
    A little piece of paper with a picture drawn
    Floats on down the street 'til the wind is gone
    And the memory now is like the picture was then
    When the paper's crumpled up, it can't be perfect again`,
    link: 'https://genius.com/Linkin-park-forgotten-lyrics',
  },
  {
    songName: 'Dreamer',
    artist: 'Sunrise Avenue',
    lyrics: `You feel it burning in your veins
    The heart of yours will never change
    Sleepless nights engaging pain
    Keep on running for the light
    Maybe we'll meet off the way
    'Cause once you're a dreamer, you're always a dreamer
    Once you're a dreamer`,
    link: 'https://genius.com/Sunrise-avenue-dreamer-lyrics',
  },
  {
    songName: 'Down Boy',
    artist: 'Yeah Yeah Yeahs',
    lyrics: `No fame, all there is
    All there was on the second lady
    Can't take a cent, take a cut
    Of that kind of ran
    I'll stand, kind of pushed
    Kind of bent on this heavy land
    I'll stand for the sake of my friend
    I will see him there`,
    link: 'https://genius.com/Yeah-yeah-yeahs-down-boy-lyrics',
  },
  {
    songName: 'Ricky Ticky Toc',
    artist: 'Eminem',
    lyrics: `50 Cent was like a fucking jackpot for me
    And Dre, it's like we hit the fucking lottery
    And the damn slot machine at the same time as each other
    Why the fuck you think we ride like we brothers?
    When we rhyme with each other, in time we discovered
    That we had more in common than we thought with each other
    Both robbed of our mothers, our fathers ain't want us
    What was wrong with us, was it our fault?
    'Cause we started thinking God doesn't love us`,
    link: 'https://genius.com/Eminem-ricky-ticky-toc-lyrics',
  },
  {
    songName: 'One Step Closer',
    artist: 'Linkin Park',
    lyrics: `I cannot take this anymore
    Saying everything I've said before
    All these words they make no sense
    I find bliss in ignorance
    Less I hear, the less you say
    You'll find that out anyway`,
    link: 'https://genius.com/Linkin-park-one-step-closer-lyrics',
  },
  {
    songName: 'Bring Home the Glory',
    artist: 'League of Legends, Sara Skinner',
    lyrics: `There's no time for redemption
    Those flags you wave, will they hold up?
    Don't cry for your vengeance
    It's right there to take, oh, if you want it
    The world is watching
    Here's your judgment, here's your reckoning
    Write your story down into history
    Pride and country, you could have everything
    So bring home the glory alive`,
    link: 'https://genius.com/League-of-legends-bring-home-the-glory-lyrics',
  },
  {
    songName: 'Road of Riches',
    artist: 'Zack Hemsey',
    lyrics: `They ride for that pot of gold
    As they're blinded by their obsession
    Racing toward a rainbow engaged in a fool's errand
    Dogged in pursuit there's no altering their perception
    Till they spin out at the bend and they wake up inside the trenches
    And this the moral them fables had failed to mention`,
    link: 'https://genius.com/Zack-hemsey-road-of-riches-lyrics',
  },
  {
    songName: 'My December',
    artist: 'Linkin Park',
    lyrics: `And I just wish that I didn't feel
    Like there was something I missed
    And I take back all the things
    That I said to you
    And I'd give it all away
    Just to have somewhere to go to
    Give it all away
    To have someone to come home to`,
    link: 'https://genius.com/Linkin-park-my-december-lyrics',
  },
  {
    songName: 'Toy Soldiers',
    artist: 'Eminem',
    lyrics: `I'm supposed to be the soldier who never blows his composure
    Even though I hold the weight of the whole world on my shoulders
    I ain't never supposed to show it
    My crew ain't supposed to know it
    Even if it means goin' toe-to-toe with a Benzino
    It don't matter, I never drag 'em in battles that I can't handle
    'Less I absolutely have to, I'm supposed to set an example`,
    link: 'https://genius.com/Eminem-like-toy-soldiers-lyrics',
  },
  {
    songName: 'Intro (Infected)',
    artist: 'Sickick',
    lyrics: `They call me the freak of the fall
    You feel like a badboy? Well I'm King Kong
    I'm the new high and you're the same bong
    I know I'm, I know I'm hot don't cry
    Talk Sick 3 in the fall
    I'm the new album, you're the same song
    They say I'm sick and it won't take a long
    Till my sickness spreads worldwide`,
    link: 'https://genius.com/Sickick-intro-infected-lyrics',
  },
  {
    songName: 'Birds',
    artist: 'Imagine Dragons',
    lyrics: `Seasons, they will change
    Life will make you grow
    Dreams will make you cry, cry, cry
    Everything is temporary
    Everything will slide
    Love will never die, die, die`,
    link: 'https://genius.com/Imagine-dragons-birds-lyrics',
  },
  {
    songName: `The Hammer's Coming Down`,
    artist: 'Nickelback',
    lyrics: `Where will you be when the sky comes down?
    And what would you do if the strength was found?
    Stay right beside me when the ground starts shaking
    The only sound you'll hear is the breath we're taking
    If there is one thing I can promise you
    We'll see the light again`,
    link: 'https://genius.com/Nickelback-the-hammers-coming-down-lyrics',
  },
  {
    songName: 'Majesty',
    artist: 'Apashe',
    lyrics: `I'm the shit, use your throne as my toilet seat
    I demand the king's ransom for royalties
    I deserve a mansion, I'm royalty
    Address me your majesty
    To form a new dynasty
    The old one was dying, see?
    I am your highness, please
    Address me your majesty`,
    link: 'https://genius.com/Apashe-majesty-lyrics',
  },
  {
    songName: 'Paul (Skit) [2004]',
    artist: 'Eminem',
    lyrics: `Hey Em, it's Paul, uh, listen, I just got a call from the label
    And you're probably not gonna be surprised but, um
    Michael Jackson is extremely upset about the Just Lose It video
    And, um, I mean he's pissed, so I-I don't know what he's gonna do
    But we gotta talk about how we're gonna handle this
    Um, oh yeah, anyway, somebody told me that, um
    They heard a rumor that you got a new gun
    Um, I know it's probably not true
    But I just need to talk to you about that`,
    link: 'https://genius.com/Eminem-paul-skit-2004-lyrics',
  },
  {
    songName: 'Em Calls Paul (Skit) [2004]',
    artist: 'Eminem',
    lyrics: `Ayo Paul, it's Em
    I got your call about the Michael Jackson thing
    And I know that he's not "thrilled" about the video
    What, does he wanna be startin' somethin'?
    Wow, well, I'll show him who's really bad
    Paul, the way you make me feel with these calls
    You should really take a look at the man in the mirror
    And tell him to beat it, because I won't stop 'til I get enough`,
    link: 'https://genius.com/Eminem-em-calls-paul-skit-2004-lyrics',
  },
  {
    songName: 'We Could Be the Same',
    artist: 'maNga',
    lyrics: `For all this time I've been loving you
    Don't even know your name
    For just one night, we could be the same
    No matter what they say
    And I feel I'm turning the page
    And I feel the world is a stage
    I don't think that drama will stop
    I don't think they'll give up the rage
    But I know the world could be great
    I can love you more than they hate
    Doesn't matter who they will blame
    We can beat them at their own game`,
    link: 'https://genius.com/Manga-we-could-be-the-same-lyrics',
  },
  {
    songName: 'Crawling',
    artist: 'Linkin Park',
    lyrics: `Discomfort endlessly has pulled itself upon me
    Distracting, reacting
    Against my will, I stand beside my own reflection
    It's haunting how I can't seem
    To find myself again, my walls are closing in
    Without a sense of confidence
    I'm convinced that there's just too much pressure to take
    I've felt this way before, so insecure`,
    link: 'https://genius.com/Linkin-park-crawling-lyrics',
  },
  {
    songName: 'Spend Some Time',
    artist: 'Eminem',
    lyrics: `You started gettin' moody on me, pretty soon we'd argue
    And the ruder you got, the more beautiful you got to me
    And who'da even knew that? Who would'a even thought possibly
    Cupid could shoot another one of them Goddamn darts at me?
    It's true that I got shot in the heart
    But when someone seems too good to be true, they usually are
    But see, when you're in it, it's too hard to see`,
    link: 'https://genius.com/Eminem-spend-some-time-lyrics',
  },
  {
    songName: 'Bad Liar',
    artist: 'Imagine Dragons',
    lyrics: `So look me in the eyes, tell me what you see
    Perfect paradise, tearin' at the seams
    I wish I could escape it, I don't wanna fake it
    Wish I could erase it, make your heart believe
    But I'm a bad liar, bad liar
    Now you know, now you know
    I'm a bad liar, bad liar
    Now you know, you're free to go`,
    link: 'https://genius.com/Imagine-dragons-bad-liar-lyrics',
  },
  {
    songName: 'No Way Out',
    artist: 'Divide Music',
    lyrics: `Could this road get any longer?
    I just want to go home
    And maybe if I was a little stronger
    He would face me, I don't know
    The truth is I don't know if I'm on track
    Because my back's against the wall
    Tryna find direction 'cause the way that I've been going
    Is out of my control`,
    link: 'https://genius.com/Divide-music-no-way-out-lyrics',
  },
  {
    songName: 'Same Song & Dance',
    artist: 'Eminem',
    lyrics: `Yeah baby, do that dance
    It's the last dance you'll ever get the chance to do
    Girl, shake that ass, you ain't never gonna break that glass
    That windshield's too strong for you
    I said, yeah baby, sing that song
    It's the last song you'll ever get the chance to sing
    You sexy little thing, show me what you got, give it your all
    Look at you bawl, why you crying to me?
    Same song and dance`,
    link: 'https://genius.com/Eminem-same-song-and-dance-lyrics',
  },
  {
    songName: 'Legends Never Die',
    artist: 'League of Legends',
    lyrics: `Legends never die when the world is callin' you
    Can you hear them screaming out your name?
    Legends never die, they become a part of you
    Every time you bleed for reaching greatness
    Relentless you survive
    They never lose hope when everything's cold
    And the fighting's near
    It's deep in their bones
    They'll run into smoke when the fire is fierce`,
    link: 'https://genius.com/League-of-legends-legends-never-die-lyrics',
  },
  {
    songName: 'The Night We Met',
    artist: 'Lord Huron',
    lyrics: `I had all and then most of you
    Some and now none of you
    Take me back to the night we met
    I don't know what I'm supposed to do
    Haunted by the ghost of you
    Oh, take me back to the night we met
    When the night was full of terrors
    And your eyes were filled with tears
    When you had not touched me yet
    Oh, take me back to the night we met`,
    link: 'https://genius.com/Lord-huron-the-night-we-met-lyrics',
  },
  {
    songName: 'With You',
    artist: 'Linkin Park',
    lyrics: `I woke up in a dream today to the cold of the static
    And put my cold feet on the floor
    Forgot all about yesterday
    Remembering I'm pretending to be where I'm not anymore
    A little taste of hypocrisy
    And I'm left in the wake of the mistake, slow to react
    Even though you're so close to me
    You're still so distant and I can't bring you back`,
    link: 'https://genius.com/Linkin-park-with-you-lyrics',
  },
  {
    songName: 'Rock N Roll',
    artist: 'Avril Lavigne',
    lyrics: `Call it a bad attitude, dude
    I ain't never gonna cover up that tattoo
    I might have a couple issues
    You say, "Me too"
    Don't care about a reputation
    Must be living in the wrong generation
    This is your invitation
    Let's get wasted`,
    link: 'https://genius.com/Avril-lavigne-rock-n-roll-lyrics',
  },
  {
    songName: 'Superman',
    artist: 'Eminem',
    lyrics: `They call me Superman
    Leap tall hoes in a single bound
    I'm single now: got no ring on this finger now
    I'd never let another chick bring me down
    In a relationship; save it, bitch!
    Babysit? You make me sick
    Superman ain't savin' shit`,
    link: 'https://genius.com/Eminem-superman-lyrics',
  },
  {
    songName: `Who Would've Thought`,
    artist: 'CryJaxx',
    lyrics: `Ayy, killing the game watch it carry the grief
    Say what I want, I got freedom of speech
    Look at me now, would you look at me now
    Couple of years back I was drowning in doubt
    Now I'm surrounded by bitches and threats
    You want my spot, I let you be a guest`,
    link: 'https://genius.com/Cryjaxx-who-wouldve-thought-lyrics',
  },
  {
    songName: 'SAD!',
    artist: 'XXXTENTACION',
    lyrics: `Who am I? Someone that's afraid to let go, uh
    You decide if you're ever gonna let me know
    Suicide if you ever try to let go, uh
    I'm sad, I know, yeah, I'm sad, I know, yeah`,
    link: 'https://genius.com/Xxxtentacion-sad-lyrics',
  },
  {
    songName: 'Cry Me a River',
    artist: 'Justin Timberlake',
    lyrics: `You know that they say some things are better left unsaid
    It wasn't like you only talked to him and you know it
    Don't act like you don't know it
    And all of these things people told me
    Keep messin' with my head
    Should've picked honesty
    Then you may not have blown it`,
    link: 'https://genius.com/Justin-timberlake-cry-me-a-river-lyrics',
  },
  {
    songName: 'When They Come for Me',
    artist: 'Linkin Park',
    lyrics: `I am not a pattern to be followed
    The pill that I'm on is a tough one to swallow
    I'm not a criminal, not a role model
    Not a born leader, I'm a tough act to follow
    I am not the fortune and the fame
    Nor the same person telling you to forfeit the game
    I came in the ring like a dog on a chain
    And I found out the underbelly's sicker than it seems`,
    link: 'https://genius.com/Linkin-park-when-they-come-for-me-lyrics',
  },
  {
    songName: 'Roses',
    artist: 'Soleima',
    lyrics: `I forgot about self-care, yeah
    Losing myself, yeah
    I knew I should do it myself
    I went undercover, yet feeling discovered
    So long before I could tell what's wrong
    I'm so broke, yeah, are you broken?
    Where were you at all those times, yeah
    Beer trade wine up, red wine
    True colors change all the time`,
    link: 'https://genius.com/Soleima-roses-lyrics',
  },
  {
    songName: 'Come to Brazil',
    artist: `Why Don't We`,
    lyrics: `The party was boring, then without warning
    Saw something foreign walk through the door
    And I can't ignore it, I need some more, yeah
    I just might come to Brazil`,
    link: 'https://genius.com/Why-dont-we-come-to-brazil-lyrics',
  },
  {
    songName: 'Phoenix',
    artist: 'League of Legends',
    lyrics: `What are you willing to lose?
    You cover your wounds, but underneath them
    A million voices in your head that whisper, "Stop, now"
    Another twist of the knife, turn of the screws
    It's all in your mind and it's fighting you
    Arm yourself, a storm is coming
    Well, kid, what you gonna do now?
    It's your reflection looking back to pull you down`,
    link: 'https://genius.com/League-of-legends-phoenix-blanke-remix-lyrics',
  },
  {
    songName: 'By Myself',
    artist: 'Linkin Park',
    lyrics: `If I turn my back, I'm defenseless
    And to go blindly seems senseless
    If I hide my pride and let it all go on
    Then they'll take from me 'til everything is gone
    If I let them go, I'll be outdone
    But if I try to catch them, I'll be outrun
    If I'm killed by the questions like a cancer
    Then I'll be buried in the silence of the answer`,
    link: 'https://genius.com/Linkin-park-by-myself-lyrics',
  },
  //   {
  //     songName: '',
  //     artist: '',
  //     lyrics: ``,
  //     link: '',
  //   },
];
