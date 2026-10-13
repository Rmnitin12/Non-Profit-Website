export interface Question {
  t: string;
  o: [string, string, string, string];
  keys: string[];
}

export interface Part {
  name: string;
  short: string;
  qs: Question[];
}

const G1 = ["caregiver", "protector", "thinker", "achiever"];
const G2 = ["seeker", "chameleon", "empath", "survivor"];

type Raw = Pick<Question, "t" | "o">;

const part1Raw: Raw[] = [
  { t: "When people describe you, they usually say you are:", o: ["caring and easy to lean on", "strong and dependable in a crisis", "observant and thoughtful", "driven and hard to stop"] },
  { t: "I feel most valuable when:", o: ["someone needs me", "I'm shielding people I love", "I have space to think things through", "I'm winning at something that matters"] },
  { t: "My biggest fear is:", o: ["being seen as selfish", "losing control of a situation", "being misunderstood", "failing in front of people"] },
  { t: "When I'm hurt, I usually:", o: ["try harder to fix things for everyone", "get quiet and guarded", "withdraw to process alone", "throw myself into work"] },
  { t: "As a child I often felt:", o: ["responsible for other people's feelings", "like I had to be the strong one", "different from everyone around me", "like I had to prove I was enough"] },
  { t: "My friends would say I'm the one who:", o: ["remembers everyone's birthday and shows up", "has your back no matter what", "sees what nobody else notices", "pushes the group to actually do something"] },
  { t: "On a hard day, what I need most is:", o: ["to be told I'm doing enough", "to feel like I'm still in control", "to be left alone with my thoughts", "to accomplish something, anything"] },
  { t: "Rest feels:", o: ["guilty, like I should be helping someone", "unsafe, like something could go wrong while I'm not watching", "necessary, but I overthink it", "like falling behind"] },
  { t: "When I make a decision, I lead with:", o: ["how it affects the people I love", "how to keep everyone safe", "logic and long-term thinking", "what gets the best result"] },
  { t: "If I'm honest, I sometimes overdo it with:", o: ["giving, until I have nothing left", "controlling, to feel safe", "analyzing, instead of feeling", "achieving, to feel worthy"] },

  { t: "Deep down, I'm searching for:", o: ["meaning and a bigger purpose", "a place I actually fit in", "people who truly understand me", "proof that I'm going to be okay"] },
  { t: "In a new group of people, I usually:", o: ["end up asking the big questions", "become whoever the room needs me to be", "pick up on the mood before anyone speaks", "quietly size up who I can trust"] },
  { t: "My biggest fear is:", o: ["wasting my life on the wrong things", "being found out as fake", "absorbing everyone's pain but my own", "being caught off guard again"] },
  { t: "When I'm hurt, I usually:", o: ["go looking for answers, books, therapy, anything", "change to fit whatever keeps the peace", "feel it for everyone else before I feel it for myself", "go into survival mode and just push through"] },
  { t: "As a child I often felt:", o: ["like I didn't belong where I was", "like I had to adjust myself to be accepted", "everything, all the time, too much", "like I had to grow up fast to keep myself safe"] },
  { t: "My friends would say I'm the one who:", o: ["is always chasing the next question", "gets along with literally everyone", "notices when something's wrong before you say a word", "can survive anything life throws"] },
  { t: "On a hard day, what I need most is:", o: ["space to figure out what it all means", "to know I'm still liked", "to step away from everyone else's emotions", "to just get through it, alone if I have to"] },
  { t: "Rest feels:", o: ["restless, like I'm missing something out there", "unfamiliar, like I don't know who I am without an audience", "rare, because I'm always tuned into someone", "like letting my guard down"] },
  { t: "When I make a decision, I lead with:", o: ["what feels true to who I'm becoming", "what will keep the relationship intact", "what I feel, even before I know why", "what keeps me safest"] },
  { t: "If I'm honest, I sometimes overdo it with:", o: ["searching, instead of settling", "shape-shifting, until I lose myself", "feeling everything, until I burn out", "bracing for impact, even when it's safe"] },
];

const part2Raw: Raw[] = [
  { t: "When someone gets close to me, I:", o: ["worry they'll eventually leave", "want them close and push them away at the same time", "start looking for the exit", "feel calm and let it happen naturally"] },
  { t: "If someone doesn't text back quickly, I:", o: ["assume I did something wrong", "feel anxious, then annoyed at myself for caring", "barely notice, or feel relieved", "figure they're just busy"] },
  { t: "Love feels like:", o: ["something I have to earn and keep earning", "something I want but don't fully trust", "something that costs me my independence", "something safe and steady"] },
  { t: "In conflict with someone I love, I:", o: ["panic and try to fix it immediately", "say I'm fine and then shut down completely", "need space before I can even think", "can stay present and talk it through"] },
  { t: "I show love by:", o: ["over-giving, sometimes past my own limits", "giving intensely, then pulling back to protect myself", "doing things for people rather than saying how I feel", "being consistent and honest"] },
  { t: "My biggest relationship fear is:", o: ["being abandoned", "being both trapped and left at once", "losing myself in someone else", "I don't really carry one that runs the show"] },
  { t: "When a partner needs space, I:", o: ["spiral, wondering what I did", "want to give it and can't stop checking on them", "feel relieved, honestly", "respect it without reading into it"] },
  { t: "Growing up, affection in my house was:", o: ["inconsistent, so I learned to chase it", "unpredictable — warm one day, gone the next", "something you didn't really ask for", "pretty steady, so I expect that now"] },
  { t: "I know I'm falling for someone when:", o: ["I start needing constant reassurance from them", "I want them close and feel terrified at the same time", "I start planning my exit before anything's wrong", "I feel more like myself, not less"] },
  { t: "If a relationship ends, I:", o: ["blame myself and replay everything", "feel relief and grief in the same breath", "already had one foot out the door", "grieve, but I trust I'll be okay"] },
  { t: "Vulnerability feels:", o: ["necessary, even when it scares me", "like a trap I both want and fear", "dangerous, so I avoid it", "uncomfortable sometimes, but safe with the right person"] },
  { t: "I tend to choose partners who:", o: ["need a lot of reassurance from me too", "feel exciting but unpredictable", "give me plenty of independence", "are emotionally available and consistent"] },
  { t: "When I'm upset with someone, I:", o: ["can't sit with it, I need it resolved now", "swing between wanting to talk and wanting to disappear", "go quiet and handle it on my own", "bring it up calmly when I'm ready"] },
  { t: "Being alone feels:", o: ["lonely, even when I chose it", "fine at first, then suddenly unbearable", "like relief, like I can finally breathe", "peaceful, most of the time"] },
  { t: "Deep down, I believe:", o: ["I have to work hard to be loved", "love is both what I want most and what scares me most", "I'm safer depending on myself", "I am worthy of love as I am"] },
];

const part3Raw: Raw[] = [
  { t: "During stress I usually:", o: ["get angry or confrontational", "stay busy so I don't have to feel it", "shut down and go numb", "try to keep everyone around me happy"] },
  { t: "When conflict happens I:", o: ["speak up, loudly if I have to", "look for a way out of the room", "freeze and can't find the words", "agree with whoever's upset, just to end it"] },
  { t: "Under pressure, my body:", o: ["tenses up, ready to react", "feels restless, like I need to move", "goes still, almost heavy", "braces itself to smile and perform"] },
  { t: "When someone raises their voice at me, I:", o: ["raise mine right back", "want to leave immediately", "go completely blank", "apologize, even if I didn't do anything wrong"] },
  { t: "My default way of protecting myself is to:", o: ["take control of the situation", "remove myself from it", "disappear into myself", "make myself useful or agreeable"] },
  { t: "When I sense danger, even emotional danger, I:", o: ["get defensive fast", "plan my exit", "can't move or think clearly", "scan the room for how to keep the peace"] },
  { t: "After an argument, I:", o: ["replay it, still fired up", "distract myself with anything else", "feel drained and disconnected", "worry I made the other person feel bad"] },
  { t: "If I feel criticized, I:", o: ["push back immediately", "want to change the subject or leave", "go quiet and shut down", "over-apologize and try to fix it"] },
  { t: "In a crisis, I tend to:", o: ["take charge", "want to run from it", "feel paralyzed", "focus on everyone else's needs but mine"] },
  { t: "When I'm overwhelmed, my first instinct is to:", o: ["confront whatever's causing it", "escape the situation entirely", "do nothing, even when I know I should", "smooth things over so no one's upset"] },
  { t: "I know I'm triggered when I:", o: ["snap at people I care about", "suddenly need to leave or change plans", "stop responding, even to people I love", "start people-pleasing without realizing it"] },
  { t: "As a kid, when things got tense at home, I:", o: ["got loud, or got in trouble", "found somewhere else to be", "learned to disappear quietly", "learned to keep everyone calm"] },
  { t: "My go-to move in an argument is closer to:", o: ["\"let's settle this right now\"", "\"I need to go\"", "going silent, no words come", "\"I'm sorry, it's fine, really\""] },
  { t: "When someone I trust disappoints me, I:", o: ["confront them right away", "distance myself without saying why", "say nothing and hold it in", "reassure them I'm not upset, even if I am"] },
  { t: "The pattern I keep repeating under stress is:", o: ["fighting my way through it", "running from it", "freezing until it passes", "fawning my way out of it"] },
];

const part4Raw: Raw[] = [
  { t: "Secretly I struggle with:", o: ["saying no, even when I want to", "needing to control how things turn out", "avoiding feelings I don't want to face", "getting in my own way right before things go well"] },
  { t: "I sometimes:", o: ["agree with things I don't actually believe", "micromanage people or situations", "push off the hard conversation for as long as I can", "sabotage something good before it can go wrong"] },
  { t: "When things are going really well, I:", o: ["start over-giving so no one leaves", "tighten my grip, afraid it'll fall apart", "get a strange urge to disappear", "find a reason to blow it up"] },
  { t: "My biggest source of guilt is:", o: ["disappointing someone", "not being in control of the outcome", "the things I keep avoiding", "the good things I've talked myself out of"] },
  { t: "If I'm being completely honest, I:", o: ["shrink myself to keep the peace", "need things done my way to feel okay", "would rather avoid than confront", "expect things to fall apart, so I make sure they do"] },
  { t: "The comment that's hardest for me to hear is:", o: ["\"you don't have to do that for me\"", "\"you can let go of this\"", "\"you can't avoid this forever\"", "\"you deserve this\""] },
  { t: "When I set a boundary, I:", o: ["feel guilty almost immediately", "feel like I have to enforce it perfectly or not at all", "avoid setting it in the first place", "end up breaking it myself later"] },
  { t: "I keep myself busy so I don't have to:", o: ["think about my own needs", "feel out of control", "sit with what I'm actually feeling", "let myself hope things will work out"] },
  { t: "The pattern people closest to me notice most is:", o: ["I put everyone before myself", "I need to control small things that don't matter", "I disappear when things get real", "I pull away right when things get good"] },
  { t: "If I could change one thing about how I cope, it would be:", o: ["saying what I actually need", "trusting things without controlling them", "facing things instead of avoiding them", "letting good things stay good"] },
];

const withKeys = (raw: Raw[], keysFor: (i: number) => string[]): Question[] =>
  raw.map((q, i) => ({ ...q, keys: keysFor(i) }));

export const PARTS: Part[] = [
  { name: "Who Are You At Your Core", short: "Core Archetype", qs: withKeys(part1Raw, (i) => (i < 10 ? G1 : G2)) },
  { name: "Relationship & Attachment Style", short: "Attachment", qs: withKeys(part2Raw, () => ["anxious", "disorganized", "avoidant", "secure"]) },
  { name: "Your Trauma Response", short: "Trauma Response", qs: withKeys(part3Raw, () => ["fight", "flight", "freeze", "fawn"]) },
  { name: "Your Shadow Self", short: "Shadow Work", qs: withKeys(part4Raw, () => ["pleaser", "controller", "avoider", "saboteur"]) },
];

export const TOTAL_Q = PARTS.reduce((n, p) => n + p.qs.length, 0);

export interface Archetype {
  emoji: string;
  name: string;
  tagline: string;
  desc: string;
  gifts: string[];
  growth: string[];
  wound: string;
  journal: string;
  affirmation: string;
}

export const ARCHETYPES: Record<string, Archetype> = {
  caregiver: { emoji: "🌻", name: "The Caregiver", tagline: "You love by giving — now learn to receive.",
    desc: "You find meaning in showing up for others, and your instinct is to notice what people need before they even ask. Somewhere along the way, giving became how you proved you were worth keeping around.",
    gifts: ["Warmth", "Generosity", "Attunement to others", "Reliability"],
    growth: ["Setting boundaries without guilt", "Receiving without deflecting", "Naming your own needs out loud", "Resting without earning it first"],
    wound: "abandonment",
    journal: "When did I first learn that love had to be earned by taking care of someone else?",
    affirmation: "I am allowed to be loved without constantly giving." },
  protector: { emoji: "🛡️", name: "The Protector", tagline: "You keep everyone safe — even at your own expense.",
    desc: "You're the one people call when things fall apart. Vigilance became your love language early on, and letting your guard down still feels like a risk.",
    gifts: ["Loyalty", "Courage", "Dependability", "Fierce, protective love"],
    growth: ["Letting others carry some of the weight", "Softening the need for control", "Trusting instead of guarding", "Letting yourself be protected too"],
    wound: "betrayal",
    journal: "Who taught me that I had to be the strong one, and what would happen if I set that down for a moment?",
    affirmation: "I don't have to earn safety by carrying everyone else's." },
  thinker: { emoji: "🦉", name: "The Thinker", tagline: "You understand the world by stepping back from it.",
    desc: "You process life through your mind first — feelings arrive later, if you let them. Understanding things deeply has always felt safer than feeling them fully.",
    gifts: ["Insight", "Objectivity", "Depth of thought", "Independent perspective"],
    growth: ["Feeling before analyzing", "Letting people in before you've figured it all out", "Speaking before it's fully solved", "Trusting your gut, not just your head"],
    wound: "rejection",
    journal: "What feeling have I been thinking about instead of actually feeling?",
    affirmation: "I can understand myself and still let myself feel." },
  achiever: { emoji: "👑", name: "The Achiever", tagline: "You prove your worth through what you accomplish.",
    desc: "Winning, finishing, succeeding — these keep the doubt quiet, even when they shouldn't have to. Somewhere along the way, rest started to feel like falling behind.",
    gifts: ["Drive", "Discipline", "Vision", "Resilience"],
    growth: ["Knowing your worth without output", "Resting without guilt", "Celebrating progress, not just wins", "Letting failure be information, not identity"],
    wound: "shame",
    journal: "Who would I be if I never had to prove anything again?",
    affirmation: "My worth was never up for debate." },
  seeker: { emoji: "🌙", name: "The Seeker", tagline: "You're chasing something bigger than what's in front of you.",
    desc: "You feel most alive when you're growing, questioning, becoming. Staying still, even when things are good, can feel like a kind of dying.",
    gifts: ["Curiosity", "Depth", "Vision", "Courage to change"],
    growth: ["Staying present in what already is", "Finishing what you start", "Letting good enough be enough", "Trusting the ground you're already standing on"],
    wound: "neglect",
    journal: "What am I really searching for out there that I haven't let myself find in here?",
    affirmation: "I don't have to keep moving to be worthy of being here." },
  chameleon: { emoji: "🎭", name: "The Chameleon", tagline: "You became who the room needed — and lost track of who you are.",
    desc: "Fitting in kept you safe for a long time. Now it can cost you your own voice, your own preferences, even your own name in the mirror.",
    gifts: ["Adaptability", "Empathy", "Social intelligence", "Range"],
    growth: ["Knowing your own preferences", "Staying yourself under pressure", "Risking someone's disapproval", "Coming home to your own voice"],
    wound: "rejection",
    journal: "Who am I when no one is watching and I have nothing left to prove?",
    affirmation: "I am allowed to take up space exactly as I am." },
  empath: { emoji: "💜", name: "The Empath", tagline: "You feel everyone's feelings, sometimes before they do.",
    desc: "Your sensitivity is a gift and a weight at once. Where does everyone else's emotional world end, and where do you begin?",
    gifts: ["Compassion", "Intuition", "Depth of feeling", "Healing presence"],
    growth: ["Building emotional boundaries", "Feeling your own feelings first", "Protecting your energy on purpose", "Letting others carry their own weight"],
    wound: "neglect",
    journal: "Whose feelings have I been carrying that were never mine to hold?",
    affirmation: "I can care deeply and still come first in my own life." },
  survivor: { emoji: "🔥", name: "The Survivor", tagline: "You learned to get through it — now learn to actually live in it.",
    desc: "You are built for hard things. The work now isn't getting stronger — it's letting life be soft sometimes, too.",
    gifts: ["Resilience", "Strength", "Resourcefulness", "Grit"],
    growth: ["Letting your guard down safely", "Asking for help before you need it", "Trusting calm when it comes", "Believing that safety can actually last"],
    wound: "injustice",
    journal: "What would it feel like to stop bracing for the next hard thing?",
    affirmation: "I already survived. I'm allowed to rest now." },
};

interface Described { emoji: string; name: string; desc: string }

export const ATTACHMENT: Record<string, Described> = {
  anxious: { emoji: "❤️", name: "Anxious Attachment", desc: "You crave closeness and stay attuned to any sign of distance. Silence can feel like proof something's wrong, even when it isn't. This style often forms when love felt inconsistent — there when you were good, harder to reach when you weren't." },
  disorganized: { emoji: "💛", name: "Disorganized Attachment", desc: "You want closeness and fear it in the same breath. This push-pull often traces back to a caregiver who was both a source of comfort and a source of unpredictability — so intimacy learned to feel like both safety and danger at once." },
  avoidant: { emoji: "💙", name: "Avoidant Attachment", desc: "Independence feels safer than depending on someone who might let you down. Closeness can start to feel like losing yourself, so distance becomes the way you protect what's yours." },
  secure: { emoji: "💚", name: "Secure Attachment", desc: "You're generally comfortable with both closeness and independence. You can ask for what you need, sit with conflict without spiraling, and trust that connection doesn't require losing yourself." },
};

export const TRAUMA: Record<string, Described> = {
  fight: { emoji: "🔥", name: "Fight", desc: "When threatened, you move toward the problem — with your voice, your presence, sometimes your temper. Confrontation feels safer than helplessness." },
  flight: { emoji: "💨", name: "Flight", desc: "When threatened, you move away — physically, mentally, or by staying endlessly busy. Motion feels safer than sitting still with what's hard." },
  freeze: { emoji: "🧊", name: "Freeze", desc: "When threatened, you go still. Words disappear, feeling goes numb, and shutting down becomes the only option that feels survivable." },
  fawn: { emoji: "🌸", name: "Fawn", desc: "When threatened, you move toward the person, not away — soothing, agreeing, appeasing. Keeping the peace became the safest available option." },
};

export const SHADOW: Record<string, Described> = {
  pleaser: { emoji: "🎭", name: "People Pleaser", desc: "You keep the peace by shrinking your own wants. Saying no feels like a risk to the relationship itself, so you say yes and quietly resent it later." },
  controller: { emoji: "🛡️", name: "Controller", desc: "Control feels like the only reliable form of safety. When things are unpredictable, you tighten your grip — on plans, on people, on outcomes that were never fully yours to hold." },
  avoider: { emoji: "🏃", name: "Avoider", desc: "Difficult feelings and conversations get pushed to tomorrow, and then the next day. Avoidance buys short-term relief and long-term weight." },
  saboteur: { emoji: "🌑", name: "Self-Saboteur", desc: "Right when things start going well, some part of you finds a way to disrupt it — because good things that could be lost feel more dangerous than things that were never there." },
};

export const WOUNDS: Record<string, { name: string; desc: string }> = {
  abandonment: { name: "Abandonment", desc: "A core fear that people leave, so love has to be maintained through constant effort." },
  rejection: { name: "Rejection", desc: "A core fear of not being enough as you are, so you edit yourself to be acceptable." },
  neglect: { name: "Neglect", desc: "A core belief that your needs are a burden, so you learned to need very little out loud." },
  betrayal: { name: "Betrayal", desc: "A core fear that trust ends in being let down, so vigilance replaced ease." },
  shame: { name: "Shame", desc: "A core belief that something about you is fundamentally wrong, so performance became the cover." },
  injustice: { name: "Injustice", desc: "A core belief that the world isn't safe or fair, so bracing for impact became a full-time job." },
};

export const HEALING_PLAN: { title: string; body: (archetype: string, shadow: string, wound: string) => string }[] = [
  { title: "Notice", body: (a, s) => `Today, just notice — without fixing — every time your ${a} instinct or your ${s} pattern shows up. No changes required yet, only awareness.` },
  { title: "Name It Out Loud", body: (_a, s) => `Say the pattern out loud once today: "I'm noticing my ${s} pattern right now." Naming it starts to loosen its grip.` },
  { title: "One Small Boundary", body: () => `Practice one small boundary today — a "no," a pause before agreeing, a need spoken instead of swallowed.` },
  { title: "Check In With Your Body", body: () => `Stress lives in the body before the mind catches up. Take five slow breaths whenever you notice tension — jaw, shoulders, stomach.` },
  { title: "Write the Unsent Letter", body: (_a, _s, w) => `Write a short, unsent letter to whoever first taught you about ${w}. You don't have to send it. You just have to say it.` },
  { title: "Ask For Support", body: () => `Ask one person for something today — help, company, a listening ear. Let receiving be practiced, not just given.` },
  { title: "Reflect & Integrate", body: (a) => `Look back on the week. What did you notice about your ${a} pattern? What's one thing you want to carry forward?` },
];
