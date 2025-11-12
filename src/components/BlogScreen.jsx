import { Html } from "@react-three/drei";
import { useState, useEffect, useRef } from "react";

export default function BlogScreen() {
    const blogContainerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const [startY, setStartY] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        // Check if device is mobile
        setIsMobile(window.innerWidth < 768);
        
        if (blogContainerRef.current) {
            blogContainerRef.current.scrollTop = 0;
        }

        // Handle touch events for mobile scrolling
        const handleTouchStart = (e) => {
            setStartY(e.touches[0].clientY);
        };

        const handleTouchMove = (e) => {
            e.preventDefault();
            const deltaY = startY - e.touches[0].clientY;
            const container = e.currentTarget;
            container.scrollTop = scrollTop + deltaY;
            setScrollTop(container.scrollTop);
        };

        const container = blogContainerRef.current;
        if (container && isMobile) {
            container.addEventListener('touchstart', handleTouchStart);
            container.addEventListener('touchmove', handleTouchMove, { passive: false });
            
            return () => {
                container.removeEventListener('touchstart', handleTouchStart);
                container.removeEventListener('touchmove', handleTouchMove);
            };
        }
    }, [isMobile, startY, scrollTop]);

    return (
        <Html
            transform
            wrapperClass="laptop-screen"
            position={[-.1, 10.8, -10]}
            rotation-x={0}
            rotation-y={0}
            rotation-z={0}
            distanceFactor={15}
            occlude
        >
            <div 
                style={{
                    width: '735px',
                    height: '440px',
                    backgroundImage: 'url("/crazy.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    padding: '20px',
                    fontFamily: 'Arial, sans-serif',
                    overflow: 'hidden',
                    position: 'relative',
                    borderRadius: '10px'
                }}
            >
                <div 

                    ref={blogContainerRef}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        overflowY: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        padding: '20px',
                        boxSizing: 'border-box',
                        scrollbarWidth: 'thin',
                        scrollbarColor: '#ffffff80 #1a1a1a',
                        msOverflowStyle: '-ms-autohiding-scrollbar',
                        touchAction: 'pan-y',
                        transform: 'translateZ(0)',
                        height: '100%',
                        willChange: 'transform'
                    }}
                >
                    <div style={{
                        minHeight: '200%',
                        paddingBottom: '100px',
                        transform: 'translateZ(0)'
                    }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: '20px'
                        }}>
                            <h2 style={{ 
                                margin: 0, 
                                fontSize: '60px',
                            fontFamily: "'Exmouth', Arial, sans-serif",
                            color: '#ffffff',
                                textShadow: '2px 2px 4px rgba(0, 132, 255, 0.2)'
                            }}>
                                Bring Back Blogging
                            </h2>
                        </div>

                        <div style={{
                            background: 'rgba(0, 0, 0, 0.65)',
                            padding: '20px',
                            borderRadius: '12px',
                            marginBottom: '15px',
                            boxShadow: '0 4px 8px rgba(0, 132, 255, 0.1)',
                        border: '1px solid rgba(255,255,255,0.3)',
                        color: '#ffffff'
                        }}>
                            <h3 style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '30px',
                                fontFamily: "'Exmouth', Arial, sans-serif",
                                color: '#ffffff'
                            }}>
                            I'll Take a Double
                            </h3>
                            <div style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '14px', 
                                color: '#ffffff',
                                lineHeight: '1.8',
                                textAlign: 'left'
                            }}>
In 1518, a woman and her daughter began dancing in the streets of modern day France, 
part of the Holy Roman Empire. They danced until they collapsed from exhaustion, and 
they woke up to dance again. Slowly, people began joining the woman and her daughter, 
also claiming to have lost control. Pious leaders and governing officials began siccing 
musicians and bands at this hot mess of a crowd, which only made the dancing worse. 
Many of them dead from dancing through and past their injuries.<br/><br/>

Academics have a few theories. The mold grown on rye bread, ergot, has a similar effect 
as LSD. Some believe it was dark magic, and the Lord knows I don’t question other realms. 
Some thought it was simply a mass hysteria due to food shortages, wealth gap, the cycle 
we tend to face every few generations.<br/><br/>

I’m not sure if it’s the ergot or the dark magic or the wealth gap, but I feel that I 
could have been one of them. I have felt my body quelling the dance for the past few 
years. My hysteria masked by deliria, dissociation. A word thrown around by those who don’t 
know what it feels like to lose your ability to do anything beyond eat, sleep, survive, and 
barely that.<br/><br/>

Have you ever tried to talk to your friend while you’re under water? You read their waving 
lips and you hear the inflections, and your brain almost renders correctly, but not quite. 
This is the first year I have awakened from my drowning, and I am ready to dance in the 
street. My body’s attempt at self preservation has turned into something much, much more 
lonely. One ear out of water, one ear submerged, one half of my body sinking and the other 
gasping for air.<br/><br/>

From academically successful, friends family and connection, gut laughter, to delayed processing 
and a memory decapitated. My heart hurts because I once tasted the savory notes of life. I 
was capable of processing them. Awakening from my slumber opens a new door of difficulties, as 
when I was under water, the disconnection was comforting. Now I am just cold, wet, and grasping 
for warmth with an iced hand. Scraping for normalcy and connection.<br/><br/>

There is something hellish about ‘almost’ or ‘a little bit’. Every area of my life there hangs 
a feeling of almost and not quite. I’m feeling no emotions and too many at once.<br/><br/>

I love you and I don’t<br/>
I’m happy and I’m not<br/>
I’m miserable and I’m ecstatic<br/>
I’m boring and I’m electric<br/>
I’m electric and I’m not<br/>
I’m inspired and I’m apathetic<br/>
I’m sick and I’m youthful<br/>
I’m youthful and I’m not<br/>
You enthrall me and you don’t<br/>
I care and I do not<br/><br/>

I’ll take a glass of ergot and I will dance in honor of those who danced before me

                            </div>
                            <div style={{ 
                                fontSize: '12px', 
                                color: '#ffffff',
                            }}>
                                Posted on November 6, 2025 • 2 min read ✨
                            </div>
                        </div>








                        <div style={{
                            background: 'rgba(0, 0, 0, 0.65)',
                            padding: '20px',
                            borderRadius: '12px',
                            marginBottom: '15px',
                            boxShadow: '0 4px 8px rgba(0, 132, 255, 0.1)',
                            border: '1px solid rgba(255,255,255,0.3)'
                        }}>
                            <h3 style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '20px',
                                fontFamily: "'Exmouth', Arial, sans-serif",
                                color: '#ffffff'
                            }}>
                            Brain Hand Mouth
                            </h3>
                            <div style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '14px', 
                                color: '#ffffff',
                                lineHeight: '1.8',
                                fontStyle: 'italic',
                                
                            }}>
I chopped my hands off today<br/>
The only channel between my inner world and the external<br/>
Severed my hands this morning, rendered me mute.<br/>
Uncontrollable blots of red engulf the walls<br/>
Like a bad kid with their mom's Dior lip<br/><br/>

My only form of communication neutered<br/>
My lips upholding a weight they could never bare<br/>
My tongue backed up with the same blood as my hands<br/>
Uncontrolled, indecipherable, disconnected<br/>
Complete Isolation from the quilted blanket I had spent my life sewing<br/><br/>

'Solitary' is the wrong word for this feeling<br/>
My hands once kept a tight braid between me and you<br/>
And the world<br/>
My fingers limp<br/>
Turning braid into untamed waves<br/><br/>

When I severed my nerves<br/>
With my painter's edge this morning<br/>
I did it to see what my lips could come up with<br/><br/>

Throat clasped with ignorance<br/>
The singular thread connecting my lips and my mind<br/>
Hanging by a basting stitch<br/>
And a pathetic twine<br/><br/>

What If I:<br/>
1. Sew my hands back on<br/>
2. Gather some pink thread and needle<br/>
3. Stitch from my bottom lip, to my tongue, up through my nose, into my brain, back down through my top lip<br/>
4. Finish with a backstitch or two<br/><br/>

Would I reign my words?<br/><br/>

But I cannot get past step 1.<br/>
I chopped my hands off this morning.<br/>
So I won't know.
                            </div>
                            <div style={{ 
                                fontSize: '12px', 
                                color: '#ffffff',
                                fontStyle: 'italic'
                            }}>
                                Posted on October 5, 2025 • 2 min read ✨
                            </div>
                        </div>



                        <div style={{
                            background: 'rgba(0, 0, 0, 0.65)',
                            padding: '20px',
                            borderRadius: '12px',
                            marginBottom: '15px',
                            boxShadow: '0 4px 8px rgba(0, 132, 255, 0.1)',
                            border: '1px solid rgba(255,255,255,0.3)'
                        }}>
                        <h3 style={{ 
                            margin: '0 0 10px 0', 
                            fontSize: '20px',
                            fontFamily: "'Exmouth', Arial, sans-serif",
                            color: '#ffffff'
                        }}>
                            A Great Performance
                            </h3>
                            <p style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '14px', 
                                color: '#ffffff',
                                lineHeight: '1.6'
                            }}>
                            I always find myself flirting with the idea of being something I am not. When I people watch, I am curious about their quirks.
                            There is always a lingering judgement of whether or not they are performing on a stage, hoping to elicit emotion from their audience. 
                            I remember being around 14 years old, asking my dad what the purpose of having friends was. He was stuck in his silence, and really didn't 
                            have much of an answer. Something that came so naturally, biologically, to others... never came to me. Every characteristic felt like a 
                            fake plea for attention. Now that I am a bit older, I can grasp nuance and I have actually experienced joy from being around my 
                            friends. It feels like socialization in general is a performance. Little pockets in the middle are where you 
                            find the truer connection, authenticity, and an actual glimpse into someone's being. I used to judge performative people, until I realized (I think)
                            they are only looking to foster connection, something I always craved but never needed. I am a little bit tooooo comfortable in my own company 
                            and solitude<br/><br/>
                            
                            I find myself caring way too little, or at least way less than others, about how I am perceived. I show up to the performance like a fat, 
                            happy audience member, ready with my theater snacks. Ready to add little value, 
                            while mentally profiting off the show. Why does nothing interest me that much? More specifically, why don't I have the urge to be interesting or to 
                            fit in? 
                            The interesting thing is, performative people are the people that enthrall me the most. I admire them, I learn from them, I enjoy their 
                            company. A part of me wants to be like them. But when it comes down to it, I enjoy listening to their summary and I don't much enjoy 
                            partaking in it myself. I watch people perform and profess, I feel slight envy that I am not that way, I think about life if I were to be 
                            that way, and then I don't feel like curating that side of myself. What does it mean when your curiosity only reaches the extent of 
                            admiration? Is performance an act to try to connect to others? I feel deeply about observing, analyzing, thinking, but I don't feel like participating. 
                            I don't have the urge to be that interesting, but I have a constant hunger to consume their performance. The weird thing is, I am not 
                            insistent on consuming information outside of the people around me. Media doesn't interest me much, but people in my vicinity do. 
                            My hands have always been the catalyst to my desires, not that performative in nature. 
                            Not as fun to talk about as literature, movies, or music. I enjoy making random art projects, painting nails, writing, coding, braiding, 
                            golfing, painting, digital art, playing sports etc. I find my joy in entertaining my senses. I feel most satisfied when cold rain ruins my makeup, 
                            I feel euphoric around vibrant sunsets and crisp air, my hair stands up when a great song comes on, I feel intense joy when dancing. But I don't 
                            particularly find anything interesting 
                            about sharing that with others. It almost feels cyclical. 
                            I admire those who perform, those performers watch other performers (actors, artists, etc), and those performers watch for my fat happy approval. <br/><br/>

                            I think that I am true to what really fascinates me, but that doesn't make me any more authentic. Maybe other's interests are just more 
                            fascinating in nature. I think it just means my hobbies are more 
                            isolated, and maybe this is how introverts are born. However, I love being around people, strumming the invisible strings that connect us. I feel 
                            that my presence is extroverted, but my portrayal is introverted. There is a constant lingering pressure, being around so many interesting people, 
                            to convert my admiration into action. I think that the most likeable people are the people who perform with ease, simply because they are authentic 
                            in their love for hobbies and learnings that are just simply more interesting to discuss than other hobbies and learnings. This is my brain at 10:37pm, 
                            one eye open, tug of war between my bed and crafting my chain jewelry!
                             </p>
                            <div style={{ 
                                fontSize: '12px', 
                                color: '#ffffff',
                                fontStyle: 'italic'
                            }}>
                                Posted on September 24, 2025 • 3 min read ✨
                            </div>
                        </div>



                        <div style={{
                            background: 'rgba(0, 0, 0, 0.65)',
                            padding: '20px',
                            borderRadius: '12px',
                            marginBottom: '15px',
                            boxShadow: '0 4px 8px rgba(0, 132, 255, 0.1)',
                            border: '1px solid rgba(255,255,255,0.3)'
                        }}>
                        <h3 style={{ 
                            margin: '0 0 10px 0', 
                            fontSize: '20px',
                            fontFamily: "'Exmouth', Arial, sans-serif",
                            color: '#ffffff'
                        }}>
                            Neighborhood Cat
                            </h3>
                            <div style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '14px', 
                                color: '#ffffff',
                                lineHeight: '1.8',
                                fontStyle: 'italic'
                            }}>
The neighborhood cat skimmed my car today.<br/>
his fluffy coat perched,<br/>
cocky eyes darting from me to his prey,<br/>
from me back to his prey.<br/><br/>

He rubbed against my door, as if to wake the part of me<br/>
I thought I'd put to rest.<br/><br/>

It's been years since I've entertained a neighborhood cat.<br/>
That one, too, slipped in and out.<br/><br/>

Back and forth in his affections<br/>
Enamored by my touch one day<br/>
Clawing me the next<br/><br/>

This new cat tolerates my affection,<br/>
but my neighbors garbage bins enchant him more.<br/><br/>

Chasing the approval of a thing<br/>
who has no need for it.<br/>
Fed by others,<br/>
nestled in the warm hood of the girl's car down the street—<br/>
he frequents homes, but rarely mine.<br/><br/>

I leave the front door cracked,<br/>
Mangle my sheets into the shape of an invitation,<br/>
Offer my curated body, smooth, warm, and affectatious<br/>
Welcoming scents billow from my kitchen<br/>
Lower chin dimpling with desperation<br/><br/>

Meanwhile, a different stray sneaks through my back door<br/>
He skims my legs in my darkest hours,<br/>
He lays mice next to my flower garden,<br/>
his hunger and need plain.<br/>
His pure intention noticeable<br/>
His ears forward with desperation<br/><br/>

And still, I entertain the shifty cat—<br/>
the one who appears,<br/>
reminds me of his presence,<br/>
and vanishes into the neighbor's garden gnomes.<br/><br/>

And I am left empty in my cupboard,<br/>
his chin propped high by his ego<br/>
assured I'll leave catnip on my porch tonight,<br/>
smug in my affections.<br/><br/>

Neighborhood cat.<br/>
Running to me,<br/>
offering nothing in return,<br/>
fueling his smirk with my yearning.
                            </div>
                            <div style={{ 
                                fontSize: '12px', 
                                color: '#ffffff',
                                fontStyle: 'italic'
                            }}>
                                Posted on September, 2025 • 2 min read ✨
                            </div>
                        </div>



                        <div style={{
                            background: 'rgba(0, 0, 0, 0.65)',
                            padding: '20px',
                            borderRadius: '12px',
                            marginBottom: '15px',
                            boxShadow: '0 4px 8px rgba(0, 132, 255, 0.1)',
                            border: '1px solid rgba(255,255,255,0.3)'
                        }}>
                            <h3 style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '20px',
                                fontFamily: '\'Exmouth\', Arial, sans-serif',
                                color: '#ffffff'
                            }}>
                            Mattel Presents:
                            </h3>
                            <p style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '14px', 
                                color: '#ffffff',
                                lineHeight: '1.6'
                            }}>
                            Up until the last days of my great grandma's life, she had a cigarette in hand, freshly dyed red curls, a full beat, a freshly ironed outfit, and some male 
                            suitor circling her house, while she was carefully posed in her copper colored leather chair. A few years prior, she was infamous for guarding her perch 
                            while my great grandpa 
                            would work endless hours running his A&W bus stop, seemingly in an attempt to provide for his family and keep his wife satisfied. This bus stop in a small town in 
                            Southern Colorado not only kept that line of my family afloat, but it seemed to have been a fairly significant source of wealth. In some ways, my grandma passed her 
                            freshly dyed red curls down to me. I've always had dark, almost black, straightened hair. However, it has always been well kept. I have always prioritized looking my 
                            best and developing 
                            my own sense of style, the same way my great grandma had her own distinct look. Preserving looks has been a survival mechanism for the women in my family. My aunt 
                            wouldn't answer the door -even if she was dying a painful death- if she didn't have makeup on. My mom apologizes to me when she just wakes up and she isn't 2 hours into 
                            her makeup routine. "Don't look at me, I don't have makeup on!" to her own daughter, who couldn't care any less! And I've noticed a surge in comments lately about my 
                            'girly' nature. It's almost like I am cast aside by both men and women due to my bubblegum dress, my pin straight hair, and my gold hoop earrings that have the same 
                            circadian rhythm as me. Somewhere along the way, I started to realize it wasn't just a maternal quirk, it was a survival mechanism shaped by the world's inability 
                            to acknowledge women's autonomy. You can 
                            probably imagine what a family dynamic looks like when appearances are the number one priority. Here's a sneak peak of the whispers in the corner at Christmas:
                             "I can't believe she 
                            ate that much" or "geez, she's really getting fat!" or "why would she wear x to y event?". These are obviously very shallow, underdeveloped conversations which have been 
                            one of the main issues I have had to face myself. When you focus on bimbo-fying yourself for 24 years, you look back during year 25 and recognize that you may be socially 
                            underdeveloped since your crutch has been sturdy enough. This has been a really tough current for me to navigate. If I swim into the current and stop caring about 
                            my appearance, I feel less motivated, less confident, less inspired, and I will still receive flack. I float where the current pleases, and I receive odd 
                            comments about my girly laugh, my girly accent, my girly personality, and I also will still receive flack.
                            I have been fortunate enough to attend university, to have traveled, 
                            to have experienced feminist literature and also be surrounded by pick me's. I feel like I have lived a lot of lives in a very short amount of time, due to curiosity and 
                            also circumstance. What I want to figure out how to articulate, an obvious truth that people probably already know, but I am going to say it anyway: Women are torn down 
                            for anything and everything they do, and I am asking anyone reading this not to contribute to that problem. I have had men mock my laugh, a laugh that took me many years 
                            of therapy to feel comfortable releasing in the wild. It's not just an "I'm just messing with you" type of a mock, but almost a disgust for my giggle. I have had 
                            women comment about how girly I am, and they don't really get along with girly girls. I really am in disbelief that this is the conversation I am having in 2025, but I have 
                            felt stumped recently by the amount of comments I get. Humans aren't one dimensional things, no matter how much you try to fit a peg in a round hole. A true feminist 
                             wants women to be exactly who and what they are, whether they take up space with frills and curls, take up space with their personality, or take no 
                            space at all. As long as that woman is not harming anyone, your perception or opinion of her is irrelevant, and you should keep it to yourself. I am personally working on 
                            asserting myself more often, so definitely keep it to yourself around me. My feminine appearance 
                            comes from a long line of women who weren't afforded the opportunity of independence, and instead, relied on the currency of appearance to afford their way in life. I do not 
                            and will never feel ashamed about carrying those women with me when I capitalize on my ability to do both. I am not girly, I am not masculine, I am a mix of traits. I grew up 
                            playing a ton of sports, studied computer science, competing against men and women in golf, and playing the role of my dad's son as the only child. I also love making art, 
                            singing, getting ready to go dancing, buying and trying new makeup, and flirting without apology. Just because 
                            someone perceives 
                            you as a decorative shell doesn't mean you don't have substance inside. Some people can't understand that your experience on earth is probably nuanced, most likely 
                            formulated by 
                            something a lot deeper than the shallow pool they insisted on diving head first into. When I was very young, I was intensely bullied for my appearance. I was obsessed 
                            with Michael 
                            Jackson to the 
                            point I was Michael Jackson for halloween for 3 years straight! And I will say, I looked the entire part, because I was so unattractive as a child. Truthfully, I barely looked 
                            like a girl (I was like 8, hop off 
                            my buckets)! My mom has always been drop dead gorgeous. I was about 10 years old when my mom took my friend and I to a restaurant. An old woman who babysat my mom growing up 
                            looked at my friend, who has always been gorgeous, and told my mom that her daughter was so beautiful. I can confirm, the old woman was definitely not referring to me, and my 
                            mom definitely did not jump to correct her! Nobody corrected her. An air thick with embarrassment 
                            around my looks hung over our heads. I felt a sense of shame in that moment, holding back tears behind my fugly bobcut and my boyish face. My girliness is a response to my 
                            life experiences, and also something I lean into. Maybe my appearance has gained validation that I did not receive growing up. My looks have protected me in some ways and they 
                            have made me a target in others. I received comments when I was ugly, I received comments when I was gorgeous, I receive comments now that I'm somewhere in the middle. Please, 
                            allow me to 
                            dye my hair red and maintain my pin curls on my death bed.
                            
                             </p>
                            <div style={{ 
                                fontSize: '12px', 
                                color: '#ffffff',
                                fontStyle: 'italic'
                            }}>
                                Posted on August 14, 2025 • 4 min read ✨
                            </div>
                        </div>




                        <div style={{
                            background: 'rgba(0, 0, 0, 0.65)',
                            padding: '20px',
                            borderRadius: '12px',
                            marginBottom: '15px',
                            boxShadow: '0 4px 8px rgba(0, 132, 255, 0.1)',
                            border: '1px solid rgba(255,255,255,0.3)'
                        }}>
                            <h3 style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '20px',
                                fontFamily: '\'Exmouth\', Arial, sans-serif',
                                color: '#ffffff'
                            }}>
                            Opinion vs Fact
                            </h3>
                            <p style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '14px', 
                                color: '#ffffff',
                                lineHeight: '1.6'
                            }}>
                            When did we as a society collectively decide to give opinions the same weight as facts?
                             From a young age, I have conducted my life on an evidence-based reality. I've always given more weight to people 
                            who dedicate their lives to researching and gathering numerical data about a situation than some podcast bro on youtube who most likely profits off of chaos 
                            and click bait. When did we blur the lines between journalism and opinion based commentary? Are we going to regulate media that fear mongers and inspires 
                            hate and intense emotions, or are we going to keep allowing social media companies to profit off of gullible people? Does every single opinion need or deserve 
                            a microphone or a platform? When did we decide to platform alt-right nazis and market it as debate? (Jubilee, I'm looking at you). The white nationalist rhetoric 
                            does NOT deserve a platform. And now that we have decided we can label anything as 'debate', the word has officially lost it's meaning, 
                            great job clickbait youtubers! Why do we as a society shun scientists, professors, journalists, and peer reviewed research? Is it because it is more difficult to 
                            digest than "democrats/republicans are lizard people"? How do you solve problems in a society where truth and basic facts cannot be agreed upon? When did we ditch nuance? 
                            You feel like immigrants are harmful, okay, give me evidence that 
                            immigrants are more harmful than Americans. I don't know a single American who would not want a violent criminal to be prosecuted and deported. I don't know a 
                            single politican who hasn't pushed that 
                            exact agenda, so why are we pretending that you can't champion immigrant rights and also want criminals to be held accountable? Why, to some people, can't both 
                            be true at the same time? Why instead of the simplistic, under developed thought of "immigrants are bad" can't we acknowledge that the process for immigration is 
                            expensive, time sensitive, and that there are multiple types of immigrants? Most immigrants crossed our borders legally and overstayed their visa. Why can't 
                            we acknowledge that there are refugee immigrants, family based immigration, job shortage visa immigrants, student visa immigrants, green card holders, naturalized 
                            citizens, etc. Why can't we acknowledge that we do this same runaround every few decades? We need immigrants for xyz reason, lets bring them in. A few decades later, 
                            operation 'insert slur here', I as a politician am going to fear monger people, frame immigrants as the enemy, and use that as my platform to run on. Then, I am 
                            going to violently and inhumanely deport the people I invited to this country in order to give Americans a common enemy.Why don't we acknowledge that I probably 
                            shouldn't have opinions on things I know nothing about? If I don't know what financial burdens, legal 
                            processes, and testing looks like, then why should I even be afforded an opinion about immigration? 
                            "They should just cross legally!" says a young privileged person from the burbs, biggest struggle 
                            being their highschool breakup, also knows absolutely nothing about the immigration process, and also has no drive to search up "United States involvement" to 
                            further understand why exactly people need to leave their home country in the first place. Why do we respect opinions that are not rooted in fact, but in a gross 
                            black 
                            and white, underdeveloped, parroted phrase they 
                            heard on a podcast? You do not have an informed opinion because you heard it on a popular podcast one time. You saw a facebook post one time. You had a false sense 
                            of being informed, 
                            and due to Americans' inability to decipher a source, other's listened and parroted you too!
                            This is how a nation sinks. No, I do not respect opinions that cause cruel and unusual harm to groups of people. No, I actually don't think everyone deserves to have 
                            an opinion on everything. When I am in conversation with someone and I am not informed on a topic, then my opinion is invalid, and actually unstated. I don't speak 
                            on things I am not informed about. What I will do is listen to your point of view, go home, do my own research, and then hopefully have the opportunity to come back 
                            another day to discuss. My sources are not social media, podcasts, or word of mouth. Someone today posted on facebook about falling fertility rates and their 
                            correlation to the covid vaccine. Let's break this down: the study they were referring to, the fertility rate study, refers to the amount of women who have children. 
                            It does not at all take into account their biological ability to reproduce, and there are many reasons women don't reproduce. In my geography course, I learned that 
                            this is actually expected for a first world countries. First world countries often grant women autonomy and the ability to choose when they want to produce, have 
                            more control over their financial situation, have access to higher education and employment opportunities, etc. These freedoms have historically lead to women either 
                            waiting to have children, having less children, or having no children at all. Unfortunately, this person with their inability and refusal to conduct their own 
                            research, reads the word fertility, the words covid vaccine are plastered right next to it, and are completely unaware of the context and further meaning of the study. 
                            This post ends up receiving thousands of reposts, and an underdeveloped conspiracy is born. Too many people feel educated on something they are not.
                            Watching this unfold in real time is painful to watch. I try to speak with people, but a lot of time their internal biases are so strong, and these propaganda-ish 
                            posts are so validating to their biases, that they are simply too far gone.
                             </p>
                            <div style={{ 
                                fontSize: '12px', 
                                color: '#ffffff',
                                fontStyle: 'italic'
                            }}>
                                Posted on July 30, 2025 • 5 min read ✨
                            </div>
                        </div>




                        <div style={{
                            background: 'rgba(0, 0, 0, 0.65)',
                            padding: '20px',
                            borderRadius: '12px',
                            marginBottom: '15px',
                            boxShadow: '0 4px 8px rgba(0, 132, 255, 0.1)',
                            border: '1px solid rgba(255,255,255,0.3)'
                        }}>
                            <h3 style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '20px',
                                fontFamily: '\'Exmouth\', Arial, sans-serif',
                                color: '#ffffff'
                            }}>
                            Deja Who?
                            </h3>
                            <p style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '14px', 
                                color: '#ffffff',
                                lineHeight: '1.6'
                            }}>
                            I question if God is real. I don't think this is very controversial, maybe in my houseold I would get a side eye. As someone who values a balance 
                            of logic,
                            creativity, and spirituality, there is a constant bickering in my mind about everything. Working on fostering creativity and logic at the same 
                            time is a back and forth I've never wrestled. One thing I know is that my intuition has never lied 
                            to me, and there is something curious about our human ability to sense certain warnings or feelings. I dreamt about what my grandma wore in her coffin when 
                            I was 10. My dad had a dream I snuck out the singular night I ever snuck out. I sensed 30 seconds before I got robbed that I was about to get robbed. 
                            It sounds like a typical episode of 'not so raven' but it wasn't a visualization, it was a primal feeling of hair standing on the back of my neck and a quick "oh no" 
                            engulfing my brain. Unfortunately, 
                            I'm a roll over and freeze type of gal so my money didn't survive the situation, but I did! Miniscule coincidences eventually pile up until you have to start asking 
                            some questions. I fully believe in intuition 
                            and a higher power, hang out with a mother for one day and you know it exists. I want to explore the brief connections I find with random people that belong to 
                            no specific sex, age, race, ideals, etc. There is a feeling of instant understanding that is challenging to articulate, but I met a man at a coffee shop and 
                            felt that same feeling for the first time in about a year. We stared at each other, laughed a little bit, I got his business card, and we left it at that. 
                            I connect with a lot of people, I can get along with anyone, but to feel an instant otherworldly 
                            connection is one of those questions I hope is finally answered in a dream. I need to clarify that these connections are not romantic, it's a similar feeling 
                            to going to your childhood best friend's house and you hang out so much that you can read each other's minds. When you look at each other and laugh and no one 
                            else knows what's going on. It's like having a secret conversation that no one else knows about, and even the two involved can't articulate it. I found this 
                            connection with a man at a coffee shop, an older woman at a bar, and my friend's sister, and I really can't think of any more right now, but moments of running into 
                            these people always reawakens my spirituality. Is God just a cope, or is he an embodiment of the potential humans have but can't quite grasp? I think that sometimes 
                            I feed into a toxic culture and forget how little it means to meet KPI's and how much more it means to exist on a floating rock where dinosaurs bigger than my house 
                            probably curled up where I sleep. Moments like these remind me that not everything needs an explanation, and that not everything that feels heavy actually weighs 
                            much. Learning to sit in the discomfort of not knowing, and also giving value to the fact that there is so much we don't know, and what we do know is often given 
                            way more emotion than what it deserves. It always makes me question how much more our ancestors most likely relied on these premonitions that kept them alive, 
                            fostered these senses through tradition and chant, only to live in a society that shuns and demeans intuition. I have never felt more close to the spiritual realm 
                            than when I joined a cult church for like 3 weeks (different story for another day) and we would set timers and pray. I think I prayed for 30 minutes straight, 
                            pretty atypical for a city girl like me, but in that moment I truly felt a presence and a connection to the outside world that I don't know if I could ever 
                            replicate. There is power in fully surrendering and speaking into the universe/God/higher power, because the universe consists of so much more than we will ever 
                            comprehend. This is my way of saying try fostering that connection and get rid of microsoft teams!
                             </p>
                            <div style={{ 
                                fontSize: '12px', 
                                color: '#ffffff',
                                fontStyle: 'italic'
                            }}>
                                Posted on July 2, 2025 • 3 min read ✨
                            </div>
                        </div>




                        <div style={{
                            background: 'rgba(0, 0, 0, 0.65)',
                            padding: '20px',
                            borderRadius: '12px',
                            marginBottom: '15px',
                            boxShadow: '0 4px 8px rgba(0, 132, 255, 0.1)',
                            border: '1px solid rgba(255,255,255,0.3)'
                        }}>
                            <h3 style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '20px',
                                fontFamily: '\'Exmouth\', Arial, sans-serif',
                                color: '#ffffff'
                            }}>
                            It Takes a Village
                            </h3>
                            <p style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '14px', 
                                color: '#ffffff',
                                lineHeight: '1.6'
                            }}>
                            Let's talk generational trauma. I'm going on strong of about 10 years of therapy, thank the LORD. Silence in my household growing up was 
                            not a good thing, but neither was noise. I grew up in a household where hypervigilance was the norm, probably similar to a lot of people 
                            around me. I'm not here to talk about my family, or my upbringing, but I'm here to talk about the person it turned me into and how it stunted 
                            me in some areas and built me in others. I grew up in a "find the scariest girl in the room and punch her like this, here, let me show you" 
                            household, and it took me a little bit too long to realize the absurdity of such a mindset. Coming from generational widespread distrust bred 
                            a level of anxiety and mistrust of others that took way too long to deconstruct. The hard part about fighting your norm, your environmental 
                            upbringing, is learning that there are other ways to exist than the only reality you've ever known. Once you pinpoint the toxic behaviors, 
                            then what? Well, in my case, I swung to the opposing team. My aggression was on full display for a very long time, and at this point in time, 
                            I display a lot of overly tolerant, overly 'kind' behaviors. When people say "I don't trust them, they're too nice" I fear they're speaking 
                            about people like me. Someone who saw how mentally destructive anger was to the people around them, that they struggle to display anger, or 
                            even the slightest dissatisfaction. This has manifested in me struggling to stand up for myself. Keep in mind, instead of saying something 
                            like "Please don't do x, I don't appreciate it because x", I was taught "wrap their hair around your hand and swing as hard as you can". Did 
                            this make me resilient? In a way, yeah. Did this make me likable? Not at all! It's funny because it's contradictory. To survive, we have 
                            needed groups throughout history. 'It takes a village' is not just a cute little quote, it's survival. This is where I admit, I still struggle. 
                            Hyper-independence, scarcity mindset, over explaining, fear of anger in myself and others, guilt over boundaries, a series of behaviors that 
                            are self harming on both sides of the spectrum. I avoid intimacy due to not being 'perfect', loud emotions feel like an attack, it is all so 
                            overwhelming sometimes, especially around people who have 'power' over me. I grew up in a space where second place was not an option. I grew 
                            up in a space where the garage door opened and I already felt a sense of guilt for something I probably didn't do but would still absorb the 
                            blame. I grew up in a space where there was no such thing as a neutral emotion. Neutrality in my day to day life carries an air of shame and 
                            guilt. If it's not positive, it must be negative! Right?! How does this manifest in my relationships: It manifests as hyper-sensitivity to 
                            how the other person is feeling. Did I do something wrong? Do you still like me? It also manifests as a lack of perception, gullibility, and 
                            second guessing myself. Ohhhhh you tried to kiss my best friend and I'm insecure? That makes sense! How does it manifest in the workforce? 
                            A heavy sense of being inadequate. Not productive enough. Self-sacrificing. Scared of my own bosses, who very much care about if I am 
                            overworked, overwhelmed, or overstressed. The tricky part about healing from one extreme is that you often visit the other extreme, and I'm 
                            still wondering if it's possible to find the middle. I'm so grateful to have left the environment that kept me in the strict unspoken rules, 
                            and to be in places where it's possible to exhibit some of my own style. Setting boundaries becomes necessary once you reach an extreme.
                             </p>
                            <div style={{ 
                                fontSize: '12px', 
                                color: '#ffffff',
                                fontStyle: 'italic'
                            }}>
                                Posted on June 30, 2025 • 2 min read ✨
                            </div>
                        </div>




                        <div style={{
                            background: 'rgba(0, 0, 0, 0.65)',
                            padding: '20px',
                            borderRadius: '12px',
                            marginBottom: '15px',
                            boxShadow: '0 4px 8px rgba(0, 132, 255, 0.1)',
                            border: '1px solid rgba(255,255,255,0.3)'
                        }}>
                            <h3 style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '20px',
                                fontFamily: '\'Exmouth\', Arial, sans-serif',
                                color: '#ffffff'
                            }}>
                            The Shoe Might Still and Sorta Used to Fit
                            </h3>
                            <p style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '14px', 
                                color: '#ffffff',
                                lineHeight: '1.6'
                            }}>
                                                      This is going to be a seriously unserious blog post about a reality TV gal that seriously stirs emotions inside me. I am going to be talking about 
                            Huda from love island! Love island is one of my faves. Lets talk about it. I am going to admit, this is so bad, but I haven't even watched this season 
                            yet, and still the Huda clips I am seeing circling on social media are so impactful to me and I'm going to unpack this. I see a younger version of 
                            myself in Huda. I know the world is so upset with her, and I personally feel the second hand embarrassment of her actions, because her actions are so 
                            closely aligned with Gabby 1.0 (I'm in my Gabby 2.0 era). Huda lacks emotional regulation skills, Huda is the ultimate anxiously attached lover girl, 
                            she has a huge mouth on her. I feel like I'm watching my 21 year old Gabby 1.0 in horror every time I see a Huda clip. It actually triggers me and makes 
                            me cringe. And yet I understand her SO MUCH. Her inability to self reflect makes me love her and hate her. Her inability to read the room and to make others 
                            around her feel comfortable makes me sad for her. Her gullibility makes me yell at tiktok, a cluster of fricken pixels. I think a lot of us see true, raw, primal human flaws 
                            in Huda that we have in ourselves, and it makes this show so hard to watch. What I love about reality TV is that you put people in a regulated situation, 
                            turn up the heat, and watch them express the most extreme versions of themselves. This is sooooo embarrassing, and I definitely should keep this to myself, 
                            but reality TV has taught me so much about societal norms and how carrying yourself effects others. I grew up in an odd household, something I will probably 
                            never get into, but lets just say my growth was extremely stunted. From social skills to emotional regulation, I was a mess. Watching others get flamed for 
                            behaviors I would exhibit actually helped me understand how my interactions with others may have been either harmful, and why. Some behaviors I thought were normal, 
                            absolutely were NOT, and hearing groups collectively analyze and talk shit helped me get down to the WHY.
                            I've had the great honor and privilege (also pain and shame) of having certain people in my life express certain toxic behaviors that I had. It's been about 3 years since 
                            I've received a real brutal criticism sesh. My poor friends hear me beg for a yelp review on my personality, which is 
                            probably so annoying in itself but they give me the validation I need. I used to struggle so much with 
                            introspection that I had to BEG my friends to tell me I'm not an alien. And since no one will give me a true critique, I watch reality TV and try to align 
                            myself with everyone I see on TV. This is actually slightly embarrassing to admit lol but here we are, and why not! Huda, I'm so sorry to bring you into my 
                            mess, but just know I see you, I hear you, I wish the world wasn't so hard on you, and the harsh reality critiques really hurt me when I did receive them, and 
                            I just hope they don't hurt you the way they hurt me. I truly cannot imagine the mass hatred she is going to feel when she checks her phone for the first time. 
                            I had very close friends, at a time that I thought we were on amazing terms, every day I was thinking about how grateful I was to have them during one of the most 
                            tender times of my life, hit me with a list of 
                            things they didn't like about me. BRUTAL. I am not someone that really struggles with depression, but I was the most hated in the villa, borderline voted off the island!
                            But it truly was a gift that changed my life. My therapist doesn't really agree and thought it was harsh (some of the critiques were straight up 
                            nitpicks, you know the stage in a relationship where you just start hating the way someone breathes?) But there were definitely some pieces of gold in there! 
                            I always tell my family that I have the gift of being a mirror for others, and I also have the curse of 
                            seeing a blurry reflection of myself. How have I moved past this? I've been 1,000% honest with my therapist. I go over almost every situation that I am a little 
                            bit anxious about, was I too mean? Was I too nice? Does this come across as aggressive? And he helps me break down perception from reality, basic DBT, a skill 
                            most people learn through their childhood. I feel like I'm breaching Gabby 3.0 territory, but I still lack a little, so until I 
                            can get past some of my bugs, no new patches. Anyways, to wrap this up, don't be too hard on yourself. And if you need an ear, if you need the honest truth from my 
                            perspective in a ~hopefully~ painless way, I am here for you & my contact box is open. Huda, please message me :,(
                             </p>
                            <div style={{ 
                                fontSize: '12px', 
                                color: '#ffffff',
                                fontStyle: 'italic'
                            }}>
                                Posted on June 17, 2025 • 3 min read ✨
                            </div>
                        </div>






                        <div style={{
                            background: 'rgba(0, 0, 0, 0.65)',
                            padding: '20px',
                            borderRadius: '12px',
                            marginBottom: '15px',
                            boxShadow: '0 4px 8px rgba(0, 132, 255, 0.1)',
                            border: '1px solid rgba(255,255,255,0.3)'
                        }}>
                            <h3 style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '20px',
                                fontFamily: '\'Exmouth\', Arial, sans-serif',
                                color: '#ffffff'
                            }}>
                            Piece and Peace
                            </h3>
                            <p style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '14px', 
                                color: '#ffffff',
                                lineHeight: '1.6'
                            }}>
                            Always been a lover girl, since I was 13 sifting through Omegle, a loveless land! I loved my first kiss, my first best friend, my first, second, third boyfriends and countless besties. I would 
                            package my own puzzle pieces into a glass box and give it to anyone who would take the free gift. Some of these people gently handled the glass puzzle box, some cared for the glass right before 
                            they discarded the complex parts of the puzzle, and some scattered the puzzle pieces in the garbage and asked me to step in the glass. I have remanufactured the box into different materials with 
                            puzzle pieces of the 
                            people that I love, loved, and lost. Every person on this planet I have ever met has some 
                            intricate piece that I have never seen before. It may not have fit into my puzzle, and I tried to force it to, but misfit pieces just don't make sense to add. But I gathered the pieces 
                            people left behind, some good, some bad, many medium, and I added them to my puzzle box. S taught me to harness more empathy, J taught me how far a wholesome laugh can reign a room, L taught me how 
                            to detach when necessary, M taught me how to live in my truth, C taught me how to be a better friend, S taught me how to handle the weight of the world with grace, another S taught 
                            me how to be more curious and interesting, N taught me how to live my life every day, J taught me how to make laughter out of thin air, A taught me how to carry light-hearted energy, L taught 
                            me how to be authentic, K taught me how to truly practice self-care, G taught me how to stand up for myself, P taught me how to be a good listener, M taught me not to care about dumb Sh, 
                            E taught me how to be selfless, M taught me to light up a room, G taught me how to let go, G taught me to work hard, C taught me how to be a good family member, G taught me how to get 
                            over it, B taught me how to get excited over little things, K taught me how to chill out, J taught me how to aura farm lol, T taught me patience, C taught me that not everyone has good intentions, 
                            A taught me how feel pain from laughing so much, B taught me to walk away from a situation, K taught me true friendship, Z taught me how to light up a room, Some lady at the bar taught me 
                            how to love a stranger, I could 
                            go on forever. Half of these people are still in my life. The other half live in my memory.
                            Many taught me how to walk away when the time came, a skill I didn't acquire until the world demanded it. Every person I have ever loved, I will always love, because 
                            they all had characteristics that I loved in some form, and I carry those traits with me in my cardboard beat up puzzle box. I am the custom puzzle woven with my admiration 
                            for others, and anyone who has been immersed in my life is a part of my f'ed up little puzzle </p>
                            <div style={{ 
                                fontSize: '12px', 
                                color: '#ffffff',
                                fontStyle: 'italic'
                            }}>
                                Posted on June 5th, 2025 • 2 in read ✨
                            </div>
                        </div>





                        <div style={{
                            background: 'rgba(0, 0, 0, 0.65)',
                            padding: '20px',
                            borderRadius: '12px',
                            marginBottom: '15px',
                            boxShadow: '0 4px 8px rgba(0, 132, 255, 0.1)',
                            border: '1px solid rgba(255,255,255,0.3)'
                        }}>
                            <h3 style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '20px',
                                fontFamily: '\'Exmouth\', Arial, sans-serif',
                                color: '#ffffff'
                            }}>
                            Ego and passion
                            </h3>
                            <p style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '14px', 
                                color: '#ffffff',
                                lineHeight: '1.6'
                            }}>
                            Social media drives ego and drains passion. When I was younger, ego was the driving factor behind all of my decisions. Why is ego dangerous and how is it correlated with motivation?
                            The capitalistic cog devoured my brain from a young age. When I was 12, I bought an ipad. Unrestricted internet access at the age of 12 stunted my creativity and instead fed visions 
                            of what a "proper" life looked like. Any money I made went into clothes, accessories, meaningless plastic, all to uphold a persona that did not reflect my true desires, but my 
                            timeline manufactured opinions. Any burnout I experienced was rooted in being led by ego. How can you decipher between ego and passion? Are external forces, opinions, and pressures 
                            the force behind your actions and life style? Or are you inspired to make a difference? Are you focused on the goal, or on the actual daily actionable items? Are you driven by the grade 
                            you receive in the class, or by the learnings and how they fuel your personal growth? Unfortunately, for a long time, I was driven by the end goal, the ego. ~Unfortunately~ for me, I 
                            grew up in straight up survival mode. With the fight or flight of a caveman evading a pack of wolves and a lion, I found so much success. The constant anxiety drove me to become a 
                            grade A student, college athlete, materialistic, picture posting, 6 pack having image of perfection. I say this as someone who has lived through a crippling 'flop era' that was tied to 
                            my ego. My body had anxiet-ied so hard that I accidentally achieved my perceived goals. Once I lost everything in my flop era, I was left with a choice. I could go back to waking up into an 
                            anxiety attack every day over whether or not I would "make it", OR I could say... I'm working with a clean slate. I have nothing to lose. No image to uphold. No people to please. My 
                            country has been on the decline into fascism. The job market is... my peers know. Food prices are inflated. Housing is a nightmare. I have the privilege of having a family that backs 
                            me no matter what path I choose. I think that a lot of the ego driving my generation is a result of the fall of capitalism, and how we have to romanticize owning once borderline guaranteed assets. 
                            Starting from a point of passion, I am extremely inclined to start my own business. I have been working on making some designs. I have been learning about marketing, looking into CAD 
                            artists, manufacturing costs, and I feel like the best thing I can do is just jump in. I have made some 3d printed prototypes of my designs, and I think I can mainstream a major field 
                            if I can market it correctly. This is something that, when I was driven by ego, I would have been too scared to fail. I would have went back to school to be a lawyer, or tried to 
                            advance in the tech field. But I am still at the point that I have nothing to lose, and it is so empowering! I am Black Mirror episode Nosedive, end credits, and I cannot explain how 
                            exhilarating it feels to not give a! My life, my actions, my weekends and weeknights feel like belting "I have nothing" by Whitney Houston and the girls that get it get it! 
                            I've formed deeper relationships and attracted amazing people. I wake up with purpose fueled by this end goal without the pressure of family members, 
                            profits, etc. I will say, I do think my generation dreams of starting businesses because it seems to be the only way to break through the societal monetary hierarchy. When these businesses are 
                            driven by profit margins, by ego, I truly think higher powers will eventually intervene. My main focus, what I have always wanted deep down, is to improve lives and I'm so excited to 
                            share my ideas in the future and hopefully make a life changing pivot. The beautiful part about letting go of ego is that if I fail, I have so many ideas that I will keep trying. 
                            I'm officially retired from societal expectations, and ~10/10~ every hardship and trial has only turned me into the more elevated version of the person I have etched myself to be.
                            </p>
                            <div style={{ 
                                fontSize: '12px', 
                                color: '#ffffff',
                                fontStyle: 'italic'
                            }}>
                                Posted on May 20th, 2025 • 3 min read ✨
                            </div>
                        </div>





                        <div style={{
                            background: 'rgba(0, 0, 0, 0.65)',
                            padding: '20px',
                            borderRadius: '12px',
                            marginBottom: '15px',
                            boxShadow: '0 4px 8px rgba(0, 132, 255, 0.1)',
                            border: '1px solid rgba(255,255,255,0.3)'
                        }}>
                            <h3 style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '20px',
                                fontFamily: '\'Exmouth\', Arial, sans-serif',
                                color: '#ffffff'
                            }}>
                            Yearly Goal Check In
                            </h3>
                            <p style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '14px', 
                                color: '#ffffff',
                                lineHeight: '1.6'
                            }}>
                            I wanted to take a moment to reflect on the intentions I set for 2025 and how things are going so far. It's been a mix of progress, reflection, 
                            and ongoing work. Honestly, I'm proud of that. One of my biggest goals this year has been committing to a dopamine detox. I've written 
                            about this before, and while it's going fairly well, it's still one of the most difficult things I've taken on. I catch myself constantly 
                            craving videos while I work, music in the shower, scrolling between tasks. I know I'm not alone. I wonder how many others from 
                            my generation feel that same urge to fill the silence just to avoid being alone with our thoughts.
                            I've realized I have an addictive personality, and this detox has forced me to confront that. It's challenged the way I self-soothe and the way 
                            I seek distraction. But that challenge has been valuable.
                            Another focus of mine this year has been my ability to articulate myself, especially verbally. I grew up timid, hesitant to speak, always 
                            afraid of saying the wrong thing. That carried into adulthood. But now, I'm lucky to work for a women-owned company with leaders who push me 
                            in the best ways. They've helped me find my voice, encouraging me to share my ideas and reminding me that I do have something valuable to say. 
                            Their support has genuinely improved my self-image, and I'm slowly rebuilding confidence when I speak. It's a process, but I feel the shift happening.
                            Language has been a huge part of this personal growth journey too. I've been practicing Spanish daily, and I can finally say I feel fluent. My 
                            vocabulary might not be perfect, but I can hold conversations about almost anything, and that's a milestone I'm really proud of.
                            One of my daily goals this year has been simple: live more. And I've been doing just that. I've joined sports leagues, political groups, and started 
                            dancing salsa, bachata, norteñas, cumbia. I've launched websites, explored new hobbies, and made it a priority to have fun again. The friendships 
                            I've formed lately feel so genuine and fulfilling. For the first time in a long time, I feel truly connected.
                            Romantically, I've started attracting people who are kind, intelligent, emotionally available, and fun! Men who mirror the energy I've been working 
                            to cultivate in myself. That said, I'm still navigating my avoidant attachment style and learning to improve how I communicate. Texting and social 
                            media aren't always my strong suits, but in-person, I've felt real, grounded connections.
                            Physically, I feel more at peace in my body. My skin is glowing again, my health is stable, and I've stopped obsessing over every detail of how I 
                            look. I've let go of punishing routines and started honoring how I feel instead.
                            One of the most important shifts I've made is around boundaries. I've learned to distance myself from people who don't have my best interest at 
                            heart. This hasn't been easy. Sometimes I question myself. Am I being avoidant, or am I honoring my growth? I try to lean on my intuition and my 
                            therapist instead of looking for validation from others. It's still a learning curve, but I'm getting better at trusting myself.
                            To anyone out there working on their goals this year,I hope you're seeing traction, too. Progress isn't always linear, but every step forward counts.
                            </p>
                            <div style={{ 
                                fontSize: '12px', 
                                color: '#ffffff',
                                fontStyle: 'italic'
                            }}>
                                Posted on April 30th, 2025 • 6 min read ✨
                            </div>
                        </div>







                        <div style={{
                            background: 'rgba(0, 0, 0, 0.65)',
                            padding: '20px',
                            borderRadius: '12px',
                            marginBottom: '15px',
                            boxShadow: '0 4px 8px rgba(0, 132, 255, 0.1)',
                            border: '1px solid rgba(255,255,255,0.3)'
                        }}>
                            <h3 style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '20px',
                                fontFamily: '\'Exmouth\', Arial, sans-serif',
                                color: '#ffffff'
                            }}>
                            Break Down to Break Through
                            </h3>
                            <p style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '14px', 
                                color: '#ffffff',
                                lineHeight: '1.6'
                            }}>
                            There's power in being honest. And for a long time, I wasn't.
                            Between 2021 and 2022, my life unraveled. At the time, I looked like I had it all together. College athlete, straight-A student, abs, 
                            boyfriend, solid friend group. Underneath the surface, though, I was cracking. I was fueled by egotistical beliefs and lack of self-esteem.
                            I was in a deeply toxic relationship. By the end, I had absorbed that toxicity, too. I was cheated on, manipulated, and guilted into staying. 
                            And when I finally left, my ex put real effort into humiliating me online and finding ways to hurt me from a distance. By this point, I had turned 
                            into someone evil, unrecognizable, and terrible.Right before we split, 
                            we were robbed at gunpoint. At the same time, my family life was in chaos. One relative was in and out of psychiatric care. Another was in jail. 
                            I was trying to keep their world from falling apart. Driving their kids around, attending attorney meetings, patching up marriages. 
                            I was emotionally maxed out, but I buried it all just to survive.
                            Isolation hit hard. I lost friendships. I lost energy. I lost myself.
                            That's when my body started tapping out. I developed full-blown autoimmune symptoms. I couldn't get out of bed without feeling like 
                            I'd run a marathon. I broke out in hives. My joints were so swollen I could barely move. I was barely eating, but sure was gaining weight. I 
                            began failing my classes for the first time in my life. I wasn't depressed in the traditional sense. I was depleted. My body was screaming
                             what I refused to say out loud: I couldn't keep going like this. I physically could not get out of bed...
                            Stress broke me. Literally. And I'll never downplay its power again. It can destroy your health, your mind, and your spirit.
                            But here's the beautiful part! I rebuilt. Slowly. Painfully. And completely.
                            I learned that I had no boundaries, and I paid the price for it. I learned that being a people-pleaser doesn't make you kind, it
                             makes you easy to exploit. I had been ignoring my own needs to chase success, to meet impossible standards, to prove my worth. That 
                             life broke me open and it made room for something better.
                            Today, I'm a different person.
                            I eat for nourishment, not aesthetics. I prioritize sun, movement, and rest. I no longer attract people who prey on low self-esteem, 
                            because I'm not that person anymore. The men and friends who are attracted to me are kind and good. Even better~~ I am finally turned OFF by terrible 
                            behavior instead of leeching on to the addictive ups and downs. I've worked hard to stabilize my health and bring my body back to a baseline. A body that doesn't 
                            live in constant fight or flight.
                            I've also had to face hard truths about myself. I picked up unhealthy behaviors during that relationship. My jealousy turned outward. I let my own 
                            insecurities project onto other women. That's hard to admit, especially because I'm so passionate about women's rights. But I've learned how trauma 
                            rewires us. I've also learned how to rewire back.
                            Emotional intelligence didn't come naturally to me, but I've worked and am working on it. I used to be obsessed with money and image. Now, I'm obsessed with peace. 
                            I'm surrounded by the right people, I enjoy my work, and I find meaning in the small things.
                            This chapter of my life taught me everything I needed to learn and then some. I'm still healing. Still unlearning. But I'm proud of how far I've come.
                            If you're going through something that feels like the end of your world, I promise, it's also the beginning of a new one. 
                            </p>
                            <div style={{ 
                                fontSize: '12px', 
                                color: '#ffffff',
                                fontStyle: 'italic'
                            }}>
                                Posted on April 8th, 2025 • 6 min read ✨
                            </div>
                        </div>




                        <div style={{
                            background: 'rgba(0, 0, 0, 0.65)',
                            padding: '20px',
                            borderRadius: '12px',
                            marginBottom: '15px',
                            boxShadow: '0 4px 8px rgba(0, 132, 255, 0.1)',
                            border: '1px solid rgba(255,255,255,0.3)'
                        }}>
                            <h3 style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '20px',
                                fontFamily: '\'Exmouth\', Arial, sans-serif',
                                color: '#ffffff'
                            }}>
                            Building Community
                            </h3>
                            <p style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '14px', 
                                color: '#ffffff',
                                lineHeight: '1.6'
                            }}>
                            Hello! I'm going to talk about some actionable steps to build community. I am also opening this up to advice and if I receive anything significant, I will add it to this post.
                            If you have any comments, please leave them in my contact form. There is no better time to acquire the skill of discernment and discretion, especially when it comes to media.
                            It is so important to have a community that you can rely on. When I say rely on, I also mean a community that fosters open dialogue, proper sources (scientific, educational,
                            medical, not opinion based). A community that allows questioning and group reliance is the goal for 2025, at least for me. I joined a group that meets weekly to discuss goals
                            and actionable items toward change. Something I want to bring up is a community garden, or even purchasing a cow with some of the people from my group. The further we can stray from
                            corporation owned groceries, the more reliable our food source will be, and the quicker coorporations will be forced to apply affordable prices. For now, we are shopping locally
                            but more self reliance may also be a good idea. I am also learning how to properly organize. Another way to contribute to community is to protect everyone in the community, whether
                            or not they are someone you like or know. Allowing injustice toward one allows injustice toward all. Becoming creative in your protest, remaining peaceful and also productive, is
                            what creates change. Remind people of their rights. Learn trends and learn how to use them to your advantage, especially financial. Here is where it gets tricky: cult culture.
                            Having a diverse media diet and potentially multiple communities with different values will help deter cult culture. If you are caught in an echo chamber, it is challenging to
                            avoid radicalization and further understanding of the world. It is important to understand multiple perspectives to an argument or viewpoint in order to decipher which side is backed
                            by logic and evidence, or at least which viewpoint makes more sense as a whole. Would I listen to a tattoo artist about the economy? Probably not. Finding a variety of economists to
                            follow, variety in news sources, variety in social workers, and variety in artists is the best way to appreciate the full picture. Community wise, I found a group of women in Colorado
                            who are focused on actionable items and concise messaging and directions toward news sources. We are organized, we participate in touchy conversations, and we are focused on continuously
                            learning and digesting patterns. Some places where I recommend looking for community meetups are: facebook groups, meetup.com, eventbrite, local newspapers, tiktok and other social media,
                            discord communities, local restaurants that offer community events, government websites. Please contact me on this website if I am missing anything! Some means in which I am
                            preparing for our future world include~~ food supply, defense items, an indoor hydroponic garden, books on edible plants, buying seeds, buying a book of maps, and water filtration straws.
                            This seems dramatic, but I am a lover of history and this only feels appropriate with the uncertainty of the direction of the United States.
                            </p>
                            <div style={{ 
                                fontSize: '12px', 
                                color: '#ffffff',
                                fontStyle: 'italic'
                            }}>
                                Posted on March 20th, 2025 • 6 min read ✨
                            </div>
                        </div>




                        <div style={{
                            background: 'rgba(0, 0, 0, 0.65)',
                            padding: '20px',
                            borderRadius: '12px',
                            marginBottom: '15px',
                            boxShadow: '0 4px 8px rgba(0, 132, 255, 0.1)',
                            border: '1px solid rgba(255,255,255,0.3)'
                        }}>
                            <h3 style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '20px',
                                fontFamily: '\'Exmouth\', Arial, sans-serif',
                                color: '#ffffff'
                            }}>
                            Relationship Dynamics
                            </h3>
                            <p style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '14px', 
                                color: '#ffffff',
                                lineHeight: '1.6'
                            }}>
                            I would like to talk about relationship dynamics in the gen z community. I have been in two long term relationships, and I have had a few short term relationships. I have experienced
                            unrequited love, and I have experienced love, and I've been on the receiving end of unreciprocated love. I am going to be speaking from my own flaws and the flaws I've noticed in others. I don't want to be a broken record, but social media is the issue.
                            I'm not sure if it is the issue in friendships, but definitely in relationships. I think that our grandparents had 'access' aka came across very attractive people, maybe a handful of
                            times in their life. They were usually secluded to their local communities, and didn't have as much access to travel. How many beautiful people do we see daily on social media? Hundreds,
                            if not thousands. We have a creepy amount of access to beautiful people for the first time in history. My dating profiles within days have thousands of potential matches. This is not
                            healthy. The constant swiping and swapping dehumanizes us to the fact that every person is unique, and chemistry can be challenging to find. Once you lose someone, you will never find
                            them in someone else, and you may never find it in the same person either as people are also constantly evolving. We are so accustomed to 9 second dopamine hit videos that we have lost
                            the ability to connect with people. We are dopamine overloaded, so guaranteed mundane tasks are less appealing. I had a short addiction with video games, where they were all I would
                            think about. I would play for 14 hours a day into 4 AM. I had no interest in socializing, doing laundry, or really anything. I notice this in a lot of my peers. Not only are our dopamine
                            receptors fried, but when we spend so much time missing life and community, we become awkward and anxious. I say we, but this is what happened to me and I've seen it with a few friends
                            as well. This is the first generation to face this battle. Previous generations were thrust into social spaces becuase there was nothing else to do. Now, to achieve the true human
                            experience, we have to intentionally seek out community and carve out the outside noise. '80/20' incel culture terms are an oversimplification of relationship dynamics, but I believe
                            this term has a bit of truth to it. Men and women alike are so used to having a false sense of options, and a false sense of abundance of beautiful people, they often look for the full
                            100% connection. This is extremely unrealistic. When I was younger, I dated someone who I found very attractive and we had a good connection, but they did not respect me or my boundaries.
                            At that point in my life I valued physical attraction, fun, intensity. At this point in my life, I value someone with similar
                            morals, respect, a personal connection, and overall a feeling of safety. Obviously I still would date someone I'm attracted to, but taking a step back and allowing connections to grow
                            outside of limerance, chasing, addiction, toxicity, I have met some of the best people I have ever met. I truly feel a caring, safe love that I've never felt and I'm not sure I could have
                            achieved this without resetting my dopamine receptors, circling back to my personal values, and being open to dating people I wouldn't have dated in the past. Lets all reset our dopamine
                            receptors, evaluate what is a preference and what is a requirement, and let's start humanizing people again!
                            </p>
                            <div style={{ 
                                fontSize: '12px', 
                                color: '#ffffff',
                                fontStyle: 'italic'
                            }}>
                                Posted on March 3rd, 2025 • 6 min read ✨
                            </div>
                        </div>
                                            
                        <div style={{
                            background: 'rgba(0, 0, 0, 0.65)',
                            padding: '20px',
                            borderRadius: '12px',
                            marginBottom: '15px',
                            boxShadow: '0 4px 8px rgba(0, 132, 255, 0.1)',
                            border: '1px solid rgba(255,255,255,0.3)'
                        }}>
                            <h3 style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '20px',
                                fontFamily: '\'Exmouth\', Arial, sans-serif',
                                color: '#ffffff'
                            }}>
                                Gender Wars
                            </h3>
                            <p style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '14px', 
                                color: '#ffffff',
                                lineHeight: '1.6'
                            }}>
                            I just watched the 4 part series adolecense on netflix. I really want to talk about the radicalization of young men and young women alike. I say young, but it is older people
                            who are pioneering this behavior as well. I loved this mini series because it did not pin the blame on one singular aspect of society, but it shed light on how we collectively
                            play a role in raising our youth and shaping the future of society. Some areas in which the this series shed light in my opinion: School teachers seemed over extended and
                            desensitized to the radical behavior of their students. The father seemed to struggle with emotional regulation and the mother seemed to stuggle with asserting herself and soothing
                            her husband's outbursts. I will say, the outbursts were subtle but this was purposeful. This was meant to represent a normal family. Social media wise, the child was dabbling
                            in explicit and harmful content that is not meant to be seen by children- or even adults in my opinion. There was also an aspect of dogpiling by peers and social media on the protagonist.
                            There was a slight mention of 80/20, a famous incel sentiment that 80% of women want 20% of men. This is pushed by 'red-pillers' like Jordan Peterson, Andrew Tate, and others.
                            We are in an odd time in history because women have always been subjugated to men throughout history. This is the first time in history that women are allowed their own means to
                            survive. This creates a different relationship dynamic between men and women. Where before we needed a provider (due to our lack of rights to work, own land, own credit cards, etc),
                            now as women we require something a lot different. I can only speak for myself, but I require an equal companion. I think the biggest requirements for a relationship for me, a
                            'zillenial', are emotional intelligence, good communication, and equal respect. I truly think that men and young men were never taught these three skills because mysogny and
                            patriarchal views are so engrained in our world. I think I offer a unique perspective given my hobbies and life path. I grew up playing golf, a notoriously male dominated sport.
                            I received many low EQ comments from a lot of men, such as "You shot a 78? You mean on 9 holes?" or "You should be playing from the front tee, you're a girl", or unsolicited advice
                            from golfers that are very obviously less experienced than me in the sport. I also joined a computer science program. I had been coding a few years prior so I had a bit of background
                            knowledge. I will name a few examples out of the many: I had a classmate ask me if I had an onlyfans, aka an explicit video sharing platform. I did not know this person. I had
                            someone say "no offense, but I wouldn't trust you to help with this project" on the first day of class. Him and his group of friends ended up requiring my helo for every assignment
                            throughout that semester. I had a teacher who was very condescending and rude only to the women. I fear that these are a few examples that may demonstrate the larger picture,
                            hopefully. Being looked down upon because of my gender is something I have experienced throughout my life, and I'm not sure how to tackle that head on. How does the programming of
                            a woman being lesser than begin? I think it's important to be open to discussing the differences between men and women, but there are way too many misconceptions about what a
                            woman can and cannot do in comparison to men. Behind a lot, if not most famous inventors and pioneers throughout history, there was a woman behind them doing a majority of the
                            intellectual work. Dolores Huerta, Doctor Rosoland Franklin, Gabrielle Collette, and many more women throughout history were not given the credit for their discoveries or inventions,
                            but instead their work was stolen or taken credit by their husbands. The Matilda effect is the term you should search if you would like to learn more about the forgotten women
                            throughout history. This is where I am conflicted on how to move forward as a society. There is a growing sect of society who would like to make education less accessible to women
                            and see women as mothers only. This is very limiting, and personally makes me feel a bit claustrophobic just thinking about it. At the same time, there are many women who do want
                            to dedicate their lives to being mother and family figures, and I want society to have space for them as well. I don't think it needs to be one or the other, and I'm unsure why
                            there can't be room for both. I guess where I'm going with this is that mysogny is a very doubly edged sword. Let me add, I believe many and if not most women also hold mysognistic
                            views which does not help this situation. How do we humanize women? How do we dismantle harmful retoric that inadvertantly hurts both men and women in the long run?
                            </p>
                            <div style={{ 
                                fontSize: '12px', 
                                color: '#ffffff',
                                fontStyle: 'italic'
                            }}>
                                Posted on February 24, 2025 • 6 min read ✨
                            </div>
                        </div>


                        {/* Blog Posts */}
                        <div style={{
                            background: 'rgba(0, 0, 0, 0.65)',
                            padding: '20px',
                            borderRadius: '12px',
                            marginBottom: '15px',
                            boxShadow: '0 4px 8px rgba(0, 132, 255, 0.1)',
                            border: '1px solid rgba(255,255,255,0.3)'
                        }}>
                            <h3 style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '20px',
                                fontFamily: '\'Exmouth\', Arial, sans-serif',
                                color: '#ffffff'
                            }}>
                                Dopamine Overload
                            </h3>
                            <p style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '14px', 
                                color: '#ffffff',
                                lineHeight: '1.6'
                            }}>
                              2019, I refused to download tiktok after my cousins begged. I did not have a PC. I had a very old iphone, a laptop for programming, and a tablet for digital art. 
                              I remember downloading tiktok in 2021, a life altering decision, honestly. I felt disconnected from the world and I will say, tiktok helped me feel some normalcy 
                              and connection, even after the 'end' of covid. But reflecting on who I am now, and who I was in 2020, I have excelled in some areas and declined in others. New 
                              technology has been my wake up call that I am someone who gets addicted to dopamine hits, and it's time to take back control of my life. I need constant stimulation, 
                              work and TV show at the same time with a coconut water (my healthy binge). I have noticed how much harder it is to do mundane tasks like laundry, dishes, cleaning, 
                              general motivation and survival. Dopamine is meant for human survival to have the will to survive, but I have been over-doing it, along with the rest of the world. 
                              Why am I overstimulated around a group of people, but I'm understimulated whenever I'm alone? I fall asleep to podcasts, I am addicted to learning, addicted to 
                              the current state of our world, and fortunately a bit addicted to coding (my personal favorite addiction that I don't intend on quitting). As a software developer, 
                              I have a sense of guilt and a sense of duty to avoid making addictive software. At the same time, that is usually the end goal. I am conflicted, but I am making an 
                              intentional effort to take back control of my life and regain some will power. So far, I deleted tiktok which is unavailable to download on my phone. I still use it, 
                              but I use it a lot less because of the small added steps to access the app which has been a big help in itself. I also deleted valorant. I've been going to social 
                              meetups and meeting amazing people. I joined a kickboxing gym. I drive to work without music sometimes. I try to wake up without checking my phone.I have been reading and 
                              studying Spanish when I feel the urge to check social media. Unfortunately, I have forgotten the art of relaxation, and I am working on that. How to be 100% bored and 
                              unoccupied is a lost art. The art of processing emotions and sitting alone with your thoughts is a rarity and I intend on bringing it back. I truly think our brains 
                              are not wired to consume this much stimuli, so I am plunging forward but also into my old life- a life of discipline, energy, and healthy productivity. I will say that I love 
                              trends and inside jokes, which I will miss, but maybe I can settle for a spark notes instead!
                            </p>
                            <div style={{ 
                                fontSize: '12px', 
                                color: '#ffffff',
                                fontStyle: 'italic'
                            }}>
                                Posted on February 3rd, 2025 • 4 min read ✨
                            </div>
                        </div>
                        {/* Blog Posts */}
                        <div style={{
                            background: 'rgba(0, 0, 0, 0.65)',
                            padding: '20px',
                            borderRadius: '12px',
                            marginBottom: '15px',
                            boxShadow: '0 4px 8px rgba(0, 132, 255, 0.1)',
                            border: '1px solid rgba(255,255,255,0.3)'
                        }}>
                            <h3 style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '20px',
                                fontFamily: '\'Exmouth\', Arial, sans-serif',
                                color: '#ffffff'
                            }}>
                                Creative Calling
                            </h3>
                            <p style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '14px', 
                                color: '#ffffff',
                                lineHeight: '1.6'
                            }}>
                                Reflecting on current society and the way forward, I've come to the conclusion that building community and fostering creativity is the best way to stay afloat, stay alive, and stay content.
                                I've always been drawn to creative endeavors, but my family has always pushed me toward stem. I picked computer science because of the creative path that the field promised. In a sense, I 
                                don't regret it because of how much I have learned and been able to create. At the same time, I did intend on making a good living for myself and my family. Now, I feel like those that will 
                                thrive are those that are creative. Building community, interpersonal communication, and creativity are the new stem. This is a hard pill to swallow as STEM has been indoctrinated into 
                                almost every high school student, the ticket to the middle class. Unfortunately with Automation and technological advances, a lot of these jobs will be slashed (from my predictions and what 
                                I've seen so far). A 70 inch tv used to be the status symbol, the new status symbol is a handmade yellow couch one of a kind. I'm not sure if this is a postiive or negative for society, but 
                                I do know I am sort of excited to be a part of it. I feel like now is the time to foster my creativity through sewing, coding, and creating in general. I have a few inspirations that I've 
                                looked up to for years but I've been scared to make the jump. My biggest flaw is that I want to do everything, I want to create everything, and this gives me major time anxiety. I want to 
                                talk a little bit more about community and how community is also the new path forward. I feel like Tiktok was so powerful because it opened doors for community and discussion. This seems like 
                                a given, but please remember I am gen z. I lived some of my formative years through a global pandemic scrolling on a phone. I feel that our government is no longer and has not been for a long 
                                time feeding back into it's citizens. With that, having a group of local support will mean everything going into the future. I don't want to talk about any doomsday events quite yet, but I 
                                am very nervous for the state of the US. Having others to rely on could very well be a way to survive. Here's a less extreme example: My grandparents have lived in our home for over 30 years. 
                                They know the entire neighborhood and they all rely on each other. Gossip keeps us aware, like nextdoorneighbor.com but in real life. This is a survival mechanism, and I'm starting to 
                                understand older generations more and more. Every human on this planet is succeptible to large scale change, and the best safeguard is community. If I do start my creative endeavors, aka 
                                business, I will make sure to do it responsibly and use that platform to inspire community. I have a few ideas in mind, and I will be sure to share them with you all. Thank you for reading!
                            </p>
                            <div style={{ 
                                fontSize: '12px', 
                                color: '#ffffff',
                                fontStyle: 'italic'
                            }}>
                                Posted on January 29, 2025 • 4 min read ✨
                            </div>
                        </div>
                        {/* Blog Posts */}
                        <div style={{
                            background: 'rgba(0, 0, 0, 0.65)',
                            padding: '20px',
                            borderRadius: '12px',
                            marginBottom: '15px',
                            boxShadow: '0 4px 8px rgba(0, 132, 255, 0.1)',
                            border: '1px solid rgba(255,255,255,0.3)'
                        }}>
                            <h3 style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '20px',
                                fontFamily: '\'Exmouth\', Arial, sans-serif',
                                color: '#ffffff'
                            }}>
                                Future with Automation
                            </h3>
                            <p style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '14px', 
                                color: '#ffffff',
                                lineHeight: '1.6'
                            }}>
                                There is a lot of excitement surround automation and AI right now. Personally, I am gatekeeping the softwares I have found as a new grad and someone who would love 
                                to have a job! Being a software developer as a living is all I have ever wanted, but with the current state of tech, everything seems a little bit up in the air. It 
                                scares me and inspires me at the same time. I also feel like I'm in an American bubble that celebrates capitalism, but almost is built against innovation in my opinion.
                                When we look at China's open source deepseek, I can only think that China is having this kind of success because they fund those willing to take a risk. I feel like the United 
                                States stunts it's own growth by funding the wrong people, aka large corporations. These large corporations and established software companies accept subsidies while 
                                making little to no progress or innovation. This is just my interpretation as someone who is not completely educated on the relationship between government, subsisidies,
                                 tax credits, etc. I feel that our top company owners are comfortable - as the richest people in the world. I see Elon Musk focus on the space sector, contemplating making 
                                 a difference on Mars, while China is focused on inspiring earth. In a career aspect, I have always wanted to work for pinterest or another ethical software company while 
                                 creating my own business or at least independent applications on the side. Now, it feels like business owners are the group that will survive this age of automation. 
                                 Right now I'm reading a book, "Futureproof 9 Rules for surviving the Age of AI" by Kevin Roose. One of his realizations was eye opening to me - Roose believes that the 
                                 industrial revolution was such a large jump in technology that it was able to create jobs. While the industrial revolution rid of millions of jobs, it created even more 
                                 jobs than it destroyed. In our generation, we have not made a significant jump in technology to this level. While we have improved, we aren't opening more sectors. 
                                 Instead, we see a lot of pop up businesses automating mundane human jobs. When you think about it, if you get rid of someone's mundane work, you're leaving them with 
                                 room for more productivity. Lets look at software, with AI and various tools that ~I am gatekeeping~~, if a software developer is 800x more productive, then you need 
                                 800x less software developers. I think software developers are feeling the brunt of this, but there is an attempt to automate many fields we have relied on for the last 
                                 100+ years without creating more jobs. What future does this leave for the average American? The average person on this planet? Thank you for reading, check out the book 
                                 I mentioned above as it has a lot of great insights!
                            </p>
                            <div style={{ 
                                fontSize: '12px', 
                                color: '#ffffff',
                                fontStyle: 'italic'
                            }}>
                                Posted on January 28, 2025 • 4 min read ✨
                            </div>
                        </div>
                        {/* Blog Posts */}
                        <div style={{
                            background: 'rgba(0, 0, 0, 0.65)',
                            padding: '20px',
                            borderRadius: '12px',
                            marginBottom: '15px',
                            boxShadow: '0 4px 8px rgba(0, 132, 255, 0.1)',
                            border: '1px solid rgba(255,255,255,0.3)'
                        }}>
                            <h3 style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '20px',
                                fontFamily: '\'Exmouth\', Arial, sans-serif',
                                color: '#ffffff'
                            }}>
                                Misinformation
                            </h3>
                            <p style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '14px', 
                                color: '#ffffff',
                                lineHeight: '1.6'
                            }}>
                                I'm feeling particularly worried about journalism in this country. At the same time, I'm also worried about fabricated truths. It feels very apparent that the United States 
                                is leaning toward an oligarchial government structure. The top of this hierarchy consists of CEO's of the world's largest social media platforms, which is a 
                                new challenge we have never faced to this extent. In my previous blog post, I discussed prominent platforms spewing misinformation. There has been a stark shift 
                                over my lifetime from primary journalism coming from our television networks, and now the new media consumption is social media which can be quite dangerous.
                                It is telling to me that the week of Trump's inauguration, Mark Zuckerberg, the CEO of Facebook, is now rolling back the fact checking features of Facebook. 
                                I have grandparents. I have younger cousins. I have people my age and middle age adults in my life who I watch absorb propaganda and misinformation. As someone 
                                who is college educated and dedicated to desciphering information (by my own standard), I'm conflicted on whether information is harder to descipher from fact or
                                fiction, or if I used to be more susceptible to misinformation. I'm not sure. I will say misinformation feels more divisive than ever. The fact that the world's 
                                wealthiest individuals officially control our main media platforms brings be fear that fully transparent information won't exist. If the ceo of google has 
                                governmental power, who is to stop them from shaping search results? I feel like this is such an obvious argument and an obvious threat to our democracy, but I 
                                am going to talk about it anyway. I think that is why my generation felt so comfortable with tiktok. There is a sense of vulnerability with American owned social 
                                media apps. Something inexplainable but untrusting. I will say, now more than ever, question everything you read. Question your algorithm, question the point of 
                                every post, who it may be benefiting, and who is the source. There is power in community and that is what I will take forward with me.
                            </p>
                            <div style={{ 
                                fontSize: '12px', 
                                color: '#ffffff',
                                fontStyle: 'italic'
                            }}>
                                Posted on January 22, 2025 • 4 min read ✨
                            </div>
                        </div>
                    
                    
                        <div style={{
                            background: 'rgba(0, 0, 0, 0.65)',
                            padding: '20px',
                            borderRadius: '12px',
                            marginBottom: '15px',
                            boxShadow: '0 4px 8px rgba(0, 132, 255, 0.1)',
                            border: '1px solid rgba(255,255,255,0.3)'
                        }}>
                            <h3 style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '20px',
                                fontFamily: '\'Exmouth\', Arial, sans-serif',
                                color: '#ffffff'
                            }}>
                                Trump Inauguration
                            </h3>
                            <p style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '14px', 
                                color: '#ffffff',
                                lineHeight: '1.6'
                            }}>
                            It's an odd time to be alive in America. Some of my side passions include diving deep into history and politics. Today, the day after Trump's inauguration, I find myself overwhelmed, helpless, and fearful that history might repeat itself once again. From my perspective, this presidencial election reflects some of the darkest corners of our history and culture. What do all terrifying genocides and extremist movements have in common? Fearmongering. Demonizing a group of people inevitably raises tensions.
                            At 25, I've developed an appreciation for patterns, both historical and mathematical, and I can't help but see parallels between now and many troubling times in history. I still vividly remember the hope Obama inspired in me as an 8-year-old. He wasn't just a politician. He was a symbol of something bigger. But back then, I didn't know a single policy. Words like "Democrat" or "Republican" were abstract concepts to me. All I knew was the raw emotion he evoked.
                            Now, as an adult, I find myself less swayed by emotion and more interested in plans, policies, and solutions. Yet, I'm watching an entire wave of people overtaken by the same intensity of emotion I once felt as a child. It's unsettling. The Democratic Party, in my view, hasn't inspired the kind of hope I once felt. And many on the other side are gripped by fear. A fear stoked by misinformation and sensationalism.
                            I still remember dating someone who supported Trump in 2016. They'd parrot claims like, "Democrats are aborting babies after they're born!"—a narrative echoed by prominent media outlets. That was the first time I truly worried about the direction our country was headed. Historically, when fascist regimes rise, they thrive on a steady diet of misinformation. They create an environment where citizens question reality itself, leaving people unable to trust any source of information.
                            Today, I feel that struggle more than ever. I try to be critical of the media I consume, but finding credible information feels more and more difficult. Everything feels extreme. Distrust in government, combined with the erosion of a shared reality, makes this era feel uniquely fragile.
                            I believe several factors have shaped this moment: the pandemic, global inflation, the rise of divisive social media algorithms, redpill and blackpill content, and a culture of demonization. Many of these forces feed into each other, creating a feedback loop of division and radicalization.
                            To anyone reading this who supports Trump: I welcome discussion. One of the few certainties I hold is that there's always more to learn. My opinions here are only opinions. I'm an American citizen passionate about the future of this country, not an authority on politics or history.
                            But I can't shake the fear that the country is at a crossroads. Maybe it's the rawness of the election aftermath, but it feels like we're standing on the edge of something big. I worry for my friends who were brought to this country as children, for the middle and lower classes, for the erosion of women's rights, for the growing class divide,and for the emboldenment of extremists.
                            This election doesn't just feel dystopian—it feels dark. It feels like there are two paths ahead: either citizens will revolt once corruption invades every corner of their lives, or things will continue to deteriorate until a breaking point is reached. Based on patterns I've seen in history, the end of a great nation feels near. Of course, there's a great chance I'm completely wrong... I hope I am.
                            </p>
                            <div style={{ 
                                fontSize: '12px', 
                                color: '#ffffff',
                                fontStyle: 'italic'
                            }}>
                                Posted on January 21, 2025 • 5 min read ✨
                            </div>
                        </div>

                        {/* Making this website Blog Post */}
                        <div style={{
                            background: 'rgba(0, 0, 0, 0.65)',
                            padding: '20px',
                            borderRadius: '12px',
                            marginBottom: '15px',
                            boxShadow: '0 4px 8px rgba(0, 132, 255, 0.1)',
                            border: '1px solid rgba(255,255,255,0.3)'
                        }}>
                            <h3 style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '20px',
                                fontFamily: '\'Exmouth\', Arial, sans-serif',
                                color: '#ffffff'
                            }}>
                                Making this website
                            </h3>
                            <p style={{ 
                                margin: '0 0 10px 0', 
                                fontSize: '14px', 
                                color: '#ffffff',
                                lineHeight: '1.6'
                            }}>
                                Building this website has taught me an invaluable lesson about the importance of pre-planning. Over the past few months, I've been diving into 3D graphics and creating immersive experiences. It's been thrilling. Maybe a little too thrilling. A recurring theme in my projects is that I get so excited about an idea that I dive in headfirst without a clear plan. While this excitement fuels my creativity, it often comes at a cost: projects take twice as long to complete because I end up backtracking and reworking parts I didn't think through.
                                This has been a hard but valuable lesson to learn. I've always loved the artistic process, whether it's digital art, sewing, or working in Blender, but when it comes to programming, I lean heavily on functionality. And that's telling because functionality demands planning. The more projects I work on, and the more I study system design, the more I realize how much there is still to learn. But that's exactly what drew me to software development in the first place. The endless rabbit holes of knowledge keep me motivated, constantly moving the goalposts and giving me more control over how I bring ideas to life.
                                Ironically, those early missteps are often my greatest teachers. Still, I can't help but stress about time. I'm always hyperaware of the calendar, worried I'm wasting precious hours. Balancing technical growth with burnout, my endless stream of ideas with the reality of time management. These are challenges I'm actively working to overcome.
                                I've already taken steps to reclaim control of my time and energy. I deleted video games and set strict limits on social media use. Whenever I feel the urge to scroll, I pick up a book instead. I've also found that simply changing my environment, whether it's rearranging my workspace or taking a walk, helps me avoid burnout.
                                As much as I love learning and creating, I've come to realize the importance of balance. Losing my passion for creation would feel devastating, so I make sure to prioritize rest just as much as progress. Sleep, in particular, has been a game-changer. In college, I constantly sacrificed sleep, and while I survived, I now see how much I was limiting my potential. There's a night-and-day difference in how much I can learn and accomplish when I'm rested versus when I'm exhausted.
                                These lessons may seem obvious, even cliché, but they didn't truly click for me until I lived through them. Progress isn't just about grinding away, it's also about knowing when to pause, reflect, and recharge. Progress is about knowing when to take your time to do the boring part, planning. Accepting boredom is the best way
                                to pull out your creativity and complex solutions. Something about laying awake at night brings out the best of my work!
                            </p>
                            <div style={{ 
                                fontSize: '12px', 
                                color: '#ffffff',
                                fontStyle: 'italic'
                            }}>
                                Posted on January 1, 2025 • 3 min read ✨
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Html>
    );
} 
